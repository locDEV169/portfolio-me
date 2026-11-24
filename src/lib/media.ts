const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const MEDIA_BUCKET =
  process.env.NEXT_PUBLIC_SUPABASE_MEDIA_BUCKET ?? "profile_me";
// ponytail: keep local until bucket upload finishes; flip to "supabase" after script succeeds.
const MEDIA_SOURCE = process.env.NEXT_PUBLIC_MEDIA_SOURCE ?? "local";

/**
 * Map app paths like `/images/projects/...` to Supabase public object URLs.
 * Object key mirrors public/: `images/projects/...`.
 */
export function media(src: string): string {
  if (!src) return src;
  if (/^https?:\/\//i.test(src)) return src;
  if (MEDIA_SOURCE !== "supabase" || !SUPABASE_URL) return src;

  const objectPath = src.replace(/^\//, "");
  return `${SUPABASE_URL}/storage/v1/object/public/${MEDIA_BUCKET}/${objectPath}`;
}
