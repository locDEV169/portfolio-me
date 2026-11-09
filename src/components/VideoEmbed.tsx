export function VideoEmbed() {
  return (
    <div className="mt-8 aspect-video w-full max-w-xl overflow-hidden rounded-2xl bg-background ring-1 ring-border">
      <iframe
        src="https://www.youtube.com/embed/ALzSOSLiAXs"
        title="Videography portfolio video"
        className="h-full w-full border-0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
