type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div className={`mb-12 max-w-6xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}