import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  invert?: boolean;
  mark?: boolean;
  priority?: boolean;
  className?: string;
};

const sizes = {
  lockup: { width: 148, height: 148 },
  mark: { width: 56, height: 56 },
};

export function Logo({
  invert = false,
  mark = false,
  priority = false,
  className = "",
}: LogoProps) {
  const src = mark
    ? invert
      ? "/brand/seven-seas-mark-salt.png"
      : "/brand/seven-seas-mark.png"
    : invert
      ? "/brand/seven-seas-logo-salt.png"
      : "/brand/seven-seas-logo.png";

  const dim = mark ? sizes.mark : sizes.lockup;

  return (
    <Link
      href="/"
      aria-label="Seven Seas Sailing — home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={src}
        alt="Seven Seas Sailing — Medusa, twin S, and bow on the water"
        width={dim.width}
        height={dim.height}
        priority={priority}
        className="h-full w-auto"
      />
    </Link>
  );
}
