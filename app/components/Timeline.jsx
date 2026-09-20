import { useMemo, useState } from "react";
import { events } from "../data/events";

const filters = [
  { id: "all", label: "✦ Toutes" },
  { id: "frontend", label: "◈ Frontend" },
  { id: "backend", label: "⌘ Backend" },
  { id: "architecture", label: "◇ Architecture" },
  { id: "leadership", label: "↗ Leadership" },
  { id: "product", label: "✦ Produit" },
];

function parseYear(year) {
  return parseInt(year, 10);
}

function sortEvents(list) {
  return [...list].sort((a, b) => parseYear(a.year) - parseYear(b.year));
}

function TimelineCard({ event, index, expanded, onToggle }) {
  const isLeft = index % 2 === 0;

  return (
    <article
      className={`timeline-item relative flex items-center animate-fade-in ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="timeline-marker absolute left-1/2 z-10 -translate-x-1/2">
        <div
          className={expanded ? "hidden translate-1.5" : `timeline-dot h-3 w-3 rounded-full border-2`}
          style={{
            backgroundColor: event.color,
            borderColor: event.color,
            color: event.color,
          }}
        />
      </div>

      <div
        className={`timeline-year-column w-5/12 ${
          isLeft ? "pr-8 text-right" : "pl-8 text-left"
        }`}
      >
        <span
          className="inline-block rounded-full px-3 py-1 font-cinzel text-xs font-semibold"
          style={{
            backgroundColor: `${event.color}20`,
            color: event.color,
            border: `1px solid ${event.color}40`,
          }}
        >
          {event.year}
        </span>
      </div>

      <div className={`timeline-card-column w-5/10 ${isLeft ? "pl-8" : "pr-8"}`}>
        <button
          type="button"
          onClick={() => onToggle(event.id)}
          className="card-expand block w-full cursor-pointer rounded-xl p-4 text-left hover:-translate-y-1"
          style={{
            backgroundColor: "#2d2d44",
            borderLeft: `4px solid ${event.color}`,
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
          aria-expanded={expanded}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">{event.emoji}</div>

            <div className="flex-1">
              <h3 className="font-cinzel text-base font-semibold text-[#f5f0e6]">
                {event.title}
              </h3>

              <p className="mt-1 font-crimson text-sm text-[#a9a9a9]">
                {event.summary}
              </p>
            </div>

            <span
              className={`transform transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
              style={{ color: event.color }}
            >
              ▼
            </span>
          </div>

          <div className={`card-content ${expanded ? "expanded" : ""}`}>
            <div className="card-inner">
              <div
                className="mt-4 border-t pt-4"
                style={{ borderColor: "#404060" }}
              >
                <p className="font-crimson text-sm leading-relaxed text-[#d0d0d0]">
                  {event.details}
                </p>

                <div
                  className="mt-3 rounded-lg p-3"
                  style={{ backgroundColor: `${event.color}15` }}
                >
                  <p
                    className="font-crimson text-sm italic"
                    style={{ color: event.color }}
                  >
                    {event.funFact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </article>
  );
}

export default function Timeline() {
  const [filter, setFilter] = useState("all");
  const [expandedCards, setExpandedCards] = useState(new Set());

  const filteredEvents = useMemo(() => {
    const sorted = sortEvents(events);
    return filter === "all"
      ? sorted
      : sorted.filter((event) => event.civilization === filter);
  }, [filter]);

  function toggleCard(id) {
    setExpandedCards((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  return (
    <>
      <nav className="mb-8 px-4 animate-fade-in">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 ">
          {filters.map((item) => {
            const active = filter === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`civilization-filter rounded-full px-4 py-2 font-cinzel text-sm transition-all duration-300 hover:scale-105 ${
                  active ? "active" : ""
                }`}
                style={{
                  backgroundColor: "#2d2d44",
                  color: "#f5f0e6",
                  border: `2px solid ${active ? "#d4af37" : "transparent"}`,
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      <main className="relative px-4 pb-12">
        <div
          className="timeline-line absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full"
          style={{ "--line-color": "#d4af37", opacity: 0.4 }}
        />

        <div className="relative mx-auto max-w-4xl space-y-8">
          {filteredEvents.map((event, index) => (
            <TimelineCard
              key={event.id}
              event={event}
              index={index}
              expanded={expandedCards.has(event.id)}
              onToggle={toggleCard}
            />
          ))}
        </div>
      </main>
    </>
  );
}
