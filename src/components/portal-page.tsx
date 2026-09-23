import { Dna, FlaskConical, Globe2, type LucideIcon } from "lucide-react";

const WORK: {
  icon: LucideIcon;
  zh: string;
  en: string;
  zhBody: string;
  enBody: string;
  accent: "red" | "blue";
}[] = [
  {
    icon: FlaskConical,
    zh: "研究",
    en: "Research",
    zhBody: "研究生物系统，包括分子与遗传层面的科学工作。",
    enBody: "Research on biological systems, including molecular and genetic science.",
    accent: "red",
  },
  {
    icon: Dna,
    zh: "开发",
    en: "Development",
    zhBody: "把研究发现整理为可以继续推进的开发工作。",
    enBody: "Organizing research findings into development work that can continue.",
    accent: "blue",
  },
  {
    icon: Globe2,
    zh: "国际协作",
    en: "International coordination",
    zhBody: "以集团为同一套标准，协调跨境的生命科学工作。",
    enBody: "Coordinating life-science work across borders under one group standard.",
    accent: "red",
  },
];

export function PortalPage() {
  return (
    <main className="relative isolate overflow-x-hidden bg-bg text-fg">
      <div className="bg-float" aria-hidden="true">
        <span className="bg-blob bg-blob-red" />
        <span className="bg-blob bg-blob-blue" />
        <span className="bg-blob bg-blob-mist" />
      </div>

      <section className="relative z-10 flex flex-col items-center px-5 pt-16 pb-10 sm:px-8 sm:pt-24 sm:pb-14">
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
          <div className="relative mb-1 flex size-44 items-center justify-center sm:mb-2 sm:size-64">
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
                className="w-32 object-contain sm:w-48"
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

          <p className="portal-enter portal-delay-2 mt-6 max-w-xl text-center text-sm leading-relaxed text-muted sm:text-base">
            从事生命科学研究、开发与国际协作。
            <span className="mt-1 block text-subtle">
              Life-science research, development, and international coordination.
            </span>
          </p>
        </div>
      </section>

      <section
        aria-labelledby="group-work-heading"
        className="relative z-10 px-5 pb-20 sm:px-8 sm:pb-28"
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="portal-enter portal-delay-2 mb-8 flex items-center justify-center gap-3 sm:mb-10">
            <span className="hero-rule hero-rule-red" />
            <h2
              id="group-work-heading"
              className="text-xs font-medium tracking-label text-subtle uppercase"
            >
              集团业务
              <span className="sr-only"> — What the group does</span>
            </h2>
            <span className="hero-rule hero-rule-blue" />
          </div>

          <p className="portal-enter portal-delay-3 max-w-3xl text-base leading-relaxed text-fg sm:text-lg">
            中国生物科技集团从事生命科学工作。研究、开发与国际协作是其中的三部分：研究生物系统，把研究发现推进为开发项目，并以同一套组织协调跨境工作。
          </p>
          <p className="portal-enter portal-delay-3 mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            China Biotech Group works in the life sciences. That work has three parts: research on
            biological systems, development that carries findings forward, and one organization
            coordinating the work across borders.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {WORK.map((item, index) => (
              <WorkCard key={item.en} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function WorkCard({
  item,
  index,
}: {
  item: (typeof WORK)[number];
  index: number;
}) {
  const Icon = item.icon;
  const delay = index === 0 ? "portal-delay-3" : index === 1 ? "portal-delay-4" : "portal-delay-4";

  return (
    <article
      className={`portal-enter ${delay} flex flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6`}
    >
      <span
        className={
          item.accent === "red"
            ? "flex size-10 items-center justify-center rounded-full bg-mark-red/15 text-mark-red"
            : "flex size-10 items-center justify-center rounded-full bg-mark-blue/20 text-mark-blue"
        }
      >
        <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-xl font-medium text-fg">{item.zh}</h3>
      <p className="mt-1 text-xs font-medium tracking-brand text-subtle uppercase">{item.en}</p>
      <p className="mt-4 text-sm leading-relaxed text-fg">{item.zhBody}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{item.enBody}</p>
    </article>
  );
}
