import { motion } from 'framer-motion';
import { topPicks } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import Rail from './Rail';

export default function TopPicks() {
  return (
    <>
      <SectionHeading kicker="Top 10 · from the resume" title="Vyshnavi's Top Picks" />
      <Rail className="gutter pb-6">
        {topPicks.map((pick, i) => (
          <motion.article
            key={pick.title}
            className="group relative flex aspect-[16/10] w-[78vw] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-xl border border-white/10 p-5 sm:w-[44vw] md:w-[32vw] lg:w-[24vw]"
            style={{
              background: `radial-gradient(120% 90% at 90% 10%, ${pick.palette.via} 0%, transparent 60%),
                linear-gradient(160deg, ${pick.palette.from} 0%, #07070a 100%)`,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
          >
            {/* huge rank number */}
            <span
              aria-hidden
              className="text-outline font-display absolute -right-2 -top-6 text-[clamp(6rem,12vw,9rem)] font-bold leading-none tracking-tighter opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
            >
              {i + 1}
            </span>

            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">{pick.label}</span>
              <h3 className="mt-1 font-display text-2xl tracking-wide text-bone group-hover:text-white sm:text-3xl">{pick.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-mist">{pick.detail}</p>
            </div>
          </motion.article>
        ))}
      </Rail>
    </>
  );
}
