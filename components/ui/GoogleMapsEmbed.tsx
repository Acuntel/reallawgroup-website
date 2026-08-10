const DEFAULT_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0!2d-87.94196!3d41.89784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4e3a93fe3549%3A0xaf4d2ac4f498a3c8!2sREAL%20Law%20Group%2C%20P.C.!5e0!3m2!1sen!1sus!4v1700000000000";

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
