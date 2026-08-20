export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
      <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.045em] leading-[1.02]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg leading-8 text-muted max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
