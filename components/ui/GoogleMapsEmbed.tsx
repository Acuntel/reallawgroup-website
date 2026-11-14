import { CONTACT } from "@/lib/constants";

const DEFAULT_SRC = CONTACT.googleMapsEmbedUrl;

export default function GoogleMapsEmbed({
  src = DEFAULT_SRC,
  title = "REAL Law Group Office Location",
}: {
  src?: string;
  title?: string;
}) {
  return (
    <iframe
      src={src}
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
      className="w-full"
    />
  );
}
