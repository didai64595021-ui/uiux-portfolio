interface SectionTitleProps {
  subtitle: string;
  title: string;
  titleEn?: string;
  description?: string;
  light?: boolean;
  align?: 'center' | 'left';
}

export default function SectionTitle({ subtitle, title, titleEn, description, light = false, align = 'center' }: SectionTitleProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className={`inline-block text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3 ${
        light ? 'text-rose-light' : 'text-rose-gold'
      }`}>
        {subtitle}
      </span>
      {titleEn && (
        <p className={`font-luxury text-base sm:text-lg md:text-xl italic mb-2 ${
          light ? 'text-white/60' : 'text-brown-light/60'
        }`}>
          {titleEn}
        </p>
      )}
      <h2 className={`font-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
        light ? 'text-white' : 'text-brown-deep'
      }`}>
        {title}
      </h2>
      <div className={`gold-divider mt-4 sm:mt-6 ${align === 'left' ? 'mx-0' : ''}`} />
      {description && (
        <p className={`korean-text mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed ${
          align === 'center' ? 'mx-auto' : ''
        } ${light ? 'text-white/70' : 'text-brown-light'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
