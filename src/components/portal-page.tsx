import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPANIES = [
  {
    id: "shenzhen",
    href: "https://www.shenzhenpeptide.com",
    domain: "shenzhenpeptide.com",
    logo: "/logos/shenzhen-peptide.png",
  },
  {
    id: "guangzhou",
    href: "https://www.guangzhoupeptide.com",
    domain: "guangzhoupeptide.com",
    logo: "/logos/guangzhou-peptide.png",
  },
] as const;

export function PortalPage() {
  return (
    <main className="relative isolate overflow-x-hidden bg-bg text-fg">
      <div className="bg-float" aria-hidden="true">
        <span className="bg-blob bg-blob-red" />
        <span className="bg-blob bg-blob-blue" />
        <span className="bg-blob bg-blob-mist" />
      </div>
      <section className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
          <div className="relative mb-1 flex size-44 items-center justify-center sm:mb-2 sm:size-72">
            <span className="mark-halo" aria-hidden="true" />
            <div className="mark-orbits" aria-hidden="true">
              <span className="orbit-ring orbit-solid" />
              <span className="orbit-ring orbit-dash" />
              <svg className="orbit-ellipses" viewBox="0 0 200 200" fill="none">
                <ellipse cx="100" cy="100" rx="84" ry="30" />
                <ellipse cx="100" cy="100" rx="84" ry="30" transform="rotate(70 100 100)" />
              </svg>
              <span className="orbit-track">
                <span className="orbit-dot orbit-dot-red" />
              </span>
              <span className="orbit-track orbit-track-rev">
                <span className="orbit-dot orbit-dot-blue" />
              </span>
            </div>
            <div className="portal-enter relative z-10">
              <img
                src="/logos/cbp-mark.png"
                alt=""
                width={494}
                height={490}
                className="w-32 object-contain sm:w-52"
              />
            </div>
          </div>

          <h1 className="portal-enter portal-delay-1 flex flex-col items-center text-center">
            <span className="font-display text-2xl font-medium tracking-wide text-fg sm:text-3xl">
              中国生物科技集团
            </span>
            <span className="mt-2 text-xs font-medium tracking-brand text-muted uppercase sm:text-sm">
              China Biotech Group
            </span>
          </h1>

          <div
            className="portal-enter portal-delay-2 mt-6 mb-6 flex items-center gap-3 sm:mt-10 sm:mb-10"
            aria-hidden="true"
          >
            <span className="hero-rule hero-rule-red" />
            <span className="text-xs font-medium tracking-label text-subtle uppercase">
              Internationals
            </span>
            <span className="hero-rule hero-rule-blue" />
          </div>

          <nav
            aria-label="Internationals"
            className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
          >
            {COMPANIES.map((company, index) => (
              <CompanyCard
                key={company.id}
                company={company}
                className={cn("portal-enter", index === 0 ? "portal-delay-3" : "portal-delay-4")}
              />
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}

function CompanyCard({
  company,
  className,
}: {
  company: (typeof COMPANIES)[number];
  className?: string;
}) {
  return (
    <a
      href={company.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${company.domain}`}
      className={cn(
        "company-card group relative flex flex-col overflow-hidden rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
        "transition-[box-shadow,background-color,transform,scale] duration-200 ease-out",
        "hover:bg-surface-hover hover:shadow-[var(--shadow-border-hover)]",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg",
        "sm:p-5",
        className,
      )}
    >
      <img src={company.logo} alt="" width={3500} height={1000} className="h-auto w-full" />
      <div className="mt-3 flex min-h-11 items-center justify-end gap-1.5">
        <p className="truncate text-sm leading-none text-muted">{company.domain}</p>
        <span className="flex size-8 shrink-0 items-center justify-center text-muted transition-[color,transform] duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg">
          <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
