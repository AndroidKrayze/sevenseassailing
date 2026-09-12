import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { BookButton } from "@/components/fareharbor/BookButton";
import { FareHarborScript } from "@/components/fareharbor/FareHarborScript";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-navy">
      <div className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo invert className="h-28" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-salt/70">
            Private and small-group catamaran days from Adamas. Milos, as the
            sea intended.
          </p>
          <BookButton className="mt-8" />
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
            Chart
          </p>
          <ul className="mt-5 space-y-3 text-sm text-salt/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" className="hover:text-gold-soft">
                Book
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
            Harbour
          </p>
          <ul className="mt-5 space-y-3 text-sm text-salt/80">
            <li>{site.port}</li>
            <li>{site.meetingPoint}</li>
            <li>{site.phone}</li>
            <li>{site.whatsapp}</li>
            <li>{site.email}</li>
            <li>{site.instagram}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-gold/10 px-5 py-6 text-[0.7rem] uppercase tracking-[0.14em] text-salt/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Sample imagery — replace with Seven Seas Sailing photos</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-gold-soft">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-gold-soft">
            Terms
          </Link>
        </div>
      </div>
      <FareHarborScript />
    </footer>
  );
}
