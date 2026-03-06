interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {subtitle && (
        <p
          className={`text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3 ${
            dark ? "text-accent" : "text-accent-dark"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base korean-text max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-white/60" : "text-gray-cool"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
