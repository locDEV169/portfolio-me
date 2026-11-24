/**
 * Upload public/images → Storage bucket profile_me (object keys: images/...).
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY   (Dashboard → Settings → API — not the publishable key)
 *   NEXT_PUBLIC_SUPABASE_MEDIA_BUCKET=profile_me
 *
 * Usage: node --env-file=.env.local scripts/upload-images-to-supabase.mjs
 */
import { createClient } from "@supabase/supabase-js";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const imagesRoot = path.join(root, "public", "images");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const bucket = process.env.NEXT_PUBLIC_SUPABASE_MEDIA_BUCKET || "profile_me";

if (!url || !serviceKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env.",
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.name === ".DS_Store" || entry.name === "_inbox") continue;
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g|png|webp|gif|avif)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  if (ext === ".gif") return "image/gif";
  if (ext === ".avif") return "image/avif";
  return "image/jpeg";
}

const files = await walk(imagesRoot);
console.log(`Uploading ${files.length} files to bucket "${bucket}"…`);

let ok = 0;
let fail = 0;
for (const file of files) {
  const objectKey = path.relative(path.join(root, "public"), file).split(path.sep).join("/");
  const body = await readFile(file);
  const { error } = await supabase.storage.from(bucket).upload(objectKey, body, {
    contentType: contentType(file),
    upsert: true,
  });
  if (error) {
    fail += 1;
    console.error("FAIL", objectKey, error.message);
  } else {
    ok += 1;
    if (ok % 10 === 0) console.log(`… ${ok}/${files.length}`);
  }
}

const sample = `${url}/storage/v1/object/public/${bucket}/images/projects/food-fnb/cover.jpg`;
console.log(`Done. ok=${ok} fail=${fail}`);
console.log(`Sample public URL:\n${sample}`);
console.log(
  'Then set NEXT_PUBLIC_MEDIA_SOURCE=supabase in .env.local and restart next.',
);
