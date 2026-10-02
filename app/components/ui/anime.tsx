import React from "react";

const nodes = [
  { x: 18, y: 20 },
  { x: 50, y: 9 },
  { x: 82, y: 20 },
  { x: 95, y: 50 },
  { x: 82, y: 80 },
  { x: 50, y: 91 },
  { x: 18, y: 80 },
  { x: 5, y: 50 },
];

export default function NetworkAnimation() {
  return (
    <section className="network-animation relative mx-auto flex h-[260px] w-full max-w-[560px] items-center justify-center overflow-hidden sm:h-[300px] lg:h-[340px]">
      
      {/* Halo général */}
      <div className="network-halo absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-[260px] sm:w-[260px]" />

      <div className="relative h-full w-full max-w-[520px]">

        {/* =========================
            CONNEXIONS
        ========================== */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {nodes.map((node, index) => (
            <g key={index}>
              {/* Ligne normale */}
              <line
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                className="network-line"
              />

              {/* Flux lumineux */}
              <line
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                className="network-flow"
                style={{
                  animationDelay: `${index * 0.35}s`,
                }}
              />
            </g>
          ))}
        </svg>

        {/* =========================
            NŒUDS EXTÉRIEURS
        ========================== */}
        {nodes.map((node, index) => (
          <div
            key={index}
            className="absolute z-10"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="node-wrapper">
              <div className="node">
                <div className="node-dot" />
              </div>
            </div>
          </div>
        ))}

        {/* =========================
            CENTRE
        ========================== */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          
          {/* Glow */}
          <div className="central-glow absolute inset-[-45px] rounded-[35px] blur-[35px]" />

          {/* Bloc central */}
          <div className="central-card relative flex h-[110px] w-[110px] items-center justify-center rounded-[27px] sm:h-[120px] sm:w-[120px]">
            
            {/* Icon Layers */}
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              className="network-icon relative z-10"
            >
              <path
                d="M29 10L49 21L29 32L9 21L29 10Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              <path
                d="M9 29L29 40L49 29"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              <path
                d="M9 37L29 48L49 37"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>

            {/* Pulse */}
            <div className="central-pulse absolute inset-0 rounded-[27px] border" />
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        .network-animation {
          --network-line-color: rgba(255, 255, 255, 0.10);
          --network-flow-color: #5425ff;
          --network-flow-glow: rgba(84, 37, 255, 0.8);
          --network-node-border: rgba(255, 255, 255, 0.12);
          --network-node-background: radial-gradient(
            circle at center,
            rgba(76, 29, 149, 0.08),
            rgba(7, 7, 10, 0.8)
          );
          --network-node-shadow: rgba(255, 255, 255, 0.015);
          --network-dot-background: #3416b8;
          --network-dot-shadow: #4c1dff;
          --network-dot-glow: rgba(76, 29, 255, 0.8);
          --network-halo-color: rgba(109, 40, 217, 0.1);
          --network-central-glow: rgba(109, 40, 217, 0.2);
          --network-central-background: #09090d;
          --network-central-border: #5b21ff;
          --network-central-shadow: rgba(109, 40, 217, 0.35);
          --network-icon-color: #8b5cf6;
          --network-pulse-border: rgba(139, 92, 246, 0.5);
        }

        html[data-theme="light"] .network-animation {
          --network-line-color: rgba(32, 35, 43, 0.16);
          --network-flow-color: #9b7410;
          --network-flow-glow: rgba(155, 116, 16, 0.65);
          --network-node-border: rgba(32, 35, 43, 0.16);
          --network-node-background: radial-gradient(
            circle at center,
            rgba(155, 116, 16, 0.12),
            rgba(255, 253, 247, 0.92)
          );
          --network-node-shadow: rgba(32, 35, 43, 0.06);
          --network-dot-background: #87620c;
          --network-dot-shadow: #9b7410;
          --network-dot-glow: rgba(155, 116, 16, 0.7);
          --network-halo-color: rgba(155, 116, 16, 0.1);
          --network-central-glow: rgba(155, 116, 16, 0.18);
          --network-central-background: #fffdf7;
          --network-central-border: #9b7410;
          --network-central-shadow: rgba(155, 116, 16, 0.24);
          --network-icon-color: #87620c;
          --network-pulse-border: rgba(155, 116, 16, 0.45);
        }

        .network-animation .network-halo {
          background-color: var(--network-halo-color);
        }

        .network-animation .central-glow {
          background-color: var(--network-central-glow);
        }

        .network-animation .network-line {
          stroke: var(--network-line-color);
          stroke-width: 0.35;
        }

        .network-animation .network-flow {
          stroke: var(--network-flow-color);
          stroke-width: 0.55;
          stroke-linecap: round;

          stroke-dasharray: 4 100;
          stroke-dashoffset: 100;

          filter:
            drop-shadow(0 0 2px var(--network-flow-color))
            drop-shadow(0 0 5px var(--network-flow-glow));

          animation: flow 2.8s linear infinite;
        }

        @keyframes flow {
          0% {
            stroke-dashoffset: 105;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        .network-animation .node-wrapper {
          position: relative;
        }

        .network-animation .node {
          width: 60px;
          height: 60px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid var(--network-node-border);
          border-radius: 17px;

          background: var(--network-node-background);

          box-shadow:
            inset 0 0 20px var(--network-node-shadow);

          animation: nodeFloat 4s ease-in-out infinite;
        }

        .network-animation .node-dot {
          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: var(--network-dot-background);

          box-shadow:
            0 0 5px var(--network-dot-shadow),
            0 0 12px var(--network-dot-glow),
            0 0 25px var(--network-dot-glow);

          animation: dotPulse 2.2s ease-in-out infinite;
        }

        @keyframes nodeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(0.75);
            opacity: 0.55;
          }

          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        .network-animation .central-card {
          border: 1px solid var(--network-central-border);
          background: var(--network-central-background);
          box-shadow: 0 0 35px var(--network-central-shadow);
        }

        .network-animation .network-icon {
          color: var(--network-icon-color);
        }

        .network-animation .central-pulse {
          border-color: var(--network-pulse-border);
          animation: centralPulse 2.5s ease-in-out infinite;
        }

        @keyframes centralPulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1);
          }

          50% {
            opacity: 0.7;
            transform: scale(1.035);
          }
        }

        @media (max-width: 640px) {
          .network-animation .node {
            width: 42px;
            height: 42px;
            border-radius: 13px;
          }

          .network-animation .node-dot {
            width: 7px;
            height: 7px;
          }

          .network-animation .central-card {
            width: 90px;
            height: 90px;
            border-radius: 21px;
          }

          .network-animation .central-card svg {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </section>
  );
}