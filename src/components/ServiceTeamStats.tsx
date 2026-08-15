"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Exact card data-rot and data-depth from original HTML
const CARD_DATA = [
  { rot: -9, depth: 14, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=faces&q=80" },
  { rot: -5, depth: 10, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=faces&q=80" },
  { rot: -2, depth: 8, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=faces&q=80" },
  { rot: 3, depth: 12, src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop&crop=faces&q=80" },
  { rot: 0, depth: 6, src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&crop=faces&q=80" },
  { rot: 4, depth: 11, src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=600&fit=crop&crop=faces&q=80" },
  { rot: 7, depth: 9, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=faces&q=80" },
  { rot: -4, depth: 13, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=faces&q=80" },
];

export default function ServiceTeamStats() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Scoped selectors — mirrors original document.querySelector / querySelectorAll
    const qs = <T extends Element>(sel: string) => root.querySelector<T>(sel);
    const qsa = <T extends Element>(sel: string) => Array.from(root.querySelectorAll<T>(sel));

    // ============================================================
    // INITIAL STATES + APPLY DATA-ROT
    // ============================================================
    gsap.set(qsa(".small-team .word > span"), { y: "105%" });
    gsap.set(qsa(".big-results .letter"), { y: 80, opacity: 0 });
    gsap.set(qs("#subline"), { opacity: 0, y: 20 });
    gsap.set(qs(".stats-inner"), { opacity: 0 });

    qsa<HTMLElement>(".card").forEach((card) => {
      const rot = parseFloat(card.dataset.rot ?? "0");
      card.dataset.restRot = String(rot);
      gsap.set(card, { y: -800, rotation: rot + 25, opacity: 0, scale: 0.7 });
    });

    // ============================================================
    // INTRO TIMELINE
    // (trigger on scroll since section is below fold on service pages)
    // ============================================================
    const intro = gsap.timeline({
      scrollTrigger: { trigger: qs(".hero"), start: "top 80%", once: true },
      defaults: { ease: "power3.out" },
    });

    intro
      .to(qsa(".small-team .word > span"), { y: "0%", duration: 0.9, stagger: 0.08, ease: "power3.out" }, 0.3)
      .to(qsa(".big-results .letter"), { y: 0, opacity: 1, duration: 0.9, stagger: 0.05, ease: "back.out(1.6)" }, 0.55)
      .to(qsa<HTMLElement>(".card"), {
        y: 0, opacity: 1, scale: 1,
        rotation: (_i: number, el: HTMLElement) => parseFloat(el.dataset.restRot ?? "0"),
        duration: 1.1,
        stagger: { each: 0.08, from: "center" },
        ease: "back.out(1.4)",
      }, 0.8)
      .to(qs("#subline"), { opacity: 1, y: 0, duration: 0.8 }, 1.6);

    // ============================================================
    // CONTINUOUS FLOAT ON CARDS
    // ============================================================
    qsa<HTMLElement>(".card").forEach((card, i) => {
      const rot = parseFloat(card.dataset.restRot ?? "0");
      gsap.to(card, {
        y: `+=${8 + (i % 3) * 5}`,
        rotation: rot + (i % 2 === 0 ? 1.5 : -1.5),
        duration: 3 + (i % 4) * 0.5,
        delay: 1.8 + i * 0.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    // ============================================================
    // MOUSE PARALLAX ON CARDS
    // ============================================================
    const hero = qs<HTMLElement>(".hero")!;
    let mx = 0, my = 0, tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => { mx = 0; my = 0; };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);

    let rafId: number;
    function parallax() {
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;
      qsa<HTMLElement>(".card").forEach((card) => {
        const d = parseFloat(card.dataset.depth ?? "8");
        card.style.translate = `${tx * d}px ${ty * d * 0.5}px`;
      });
      rafId = requestAnimationFrame(parallax);
    }
    parallax();

    // ============================================================
    // CARD HOVER 3D LIFT
    // ============================================================
    qsa<HTMLElement>(".card").forEach((card) => {
      const restRot = parseFloat(card.dataset.restRot ?? "0");

      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, { rotateX: -py * 16, rotateY: px * 16, scale: 1.12, zIndex: 20, duration: 0.4, ease: "power2.out", transformPerspective: 700, overwrite: "auto" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, zIndex: card.style.zIndex || "", duration: 0.8, ease: "elastic.out(1, 0.6)", overwrite: "auto" });
        void restRot; // keep closure
      });

      card.addEventListener("click", () => {
        gsap.fromTo(card, { scale: 1.15 }, { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.inOut" });
      });
    });

    // ============================================================
    // SCROLL: CARDS FAN OUT, "big results" SCALES UP
    // ============================================================
    const moves = [
      { x: -260, y: -40, rot: -25 },
      { x: -200, y: 20, rot: -18 },
      { x: -120, y: 80, rot: -10 },
      { x: -40, y: 120, rot: -4 },
      { x: 40, y: 120, rot: 4 },
      { x: 120, y: 80, rot: 12 },
      { x: 200, y: 20, rot: 22 },
      { x: 260, y: -40, rot: 28 },
    ];

    ScrollTrigger.create({
      trigger: qs(".hero"),
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.set(qs(".big-results"), { scale: 1 + 0.15 * p, opacity: 1 - 0.4 * p });
        gsap.set(qs(".small-team"), { y: -60 * p, opacity: 1 - p * 1.5 });
        qsa<HTMLElement>(".card").forEach((card, i) => {
          const m = moves[i];
          const rest = parseFloat(card.dataset.restRot ?? "0");
          gsap.set(card, { x: m.x * p, y: m.y * p, rotation: rest + m.rot * p });
        });
        gsap.set(qs("#subline"), { opacity: 1 - p * 2 });
      },
    });

    // ============================================================
    // STATS REVEAL + COUNTERS
    // ============================================================
    gsap.to(qs(".stats-inner"), {
      opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: qs(".stats"), start: "top 80%" },
    });
    gsap.from(qs(".stats-inner"), {
      y: 60, scale: 0.97, duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: qs(".stats"), start: "top 80%" },
    });

    ScrollTrigger.create({
      trigger: qs(".stats"),
      start: "top 75%",
      once: true,
      onEnter: () => {
        qsa<HTMLElement>(".stat-block .num").forEach((el) => {
          const target = parseFloat(el.dataset.count ?? "0");
          const span = el.querySelector("span")!;
          gsap.to({ v: 0 }, {
            v: target, duration: 2, ease: "power2.out",
            onUpdate: function () {
              span.textContent = Math.floor(this.targets()[0].v).toLocaleString();
            },
          });
        });
      },
    });

    // ============================================================
    // CTA / BUTTON CLICKS
    // ============================================================
    qsa(".arrow-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        gsap.fromTo(btn, { scale: 1 }, { scale: 0.93, duration: 0.12, yoyo: true, repeat: 1, ease: "power2.inOut" });
      });
    });

    // Big results letter hover
    const bigWrap = qs(".big-results-wrap")!;
    bigWrap.addEventListener("mouseenter", () => {
      gsap.to(qsa(".big-results .letter"), { y: -8, duration: 0.5, stagger: 0.03, ease: "back.out(1.6)" });
    });
    bigWrap.addEventListener("mouseleave", () => {
      gsap.to(qsa(".big-results .letter"), { y: 0, duration: 0.6, stagger: 0.03, ease: "elastic.out(1, 0.6)" });
    });

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
      // Kill only the ScrollTriggers created in this scope
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // ── JSX — exact HTML from original, with dark-theme class overrides via <style> ──
  return (
    <div ref={rootRef}>
      {/* Scoped CSS: same structure as original, colors adapted for dark theme */}
      <style>{`
        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 100vh;
          padding: 130px 32px 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
          background: #000;
        }
        .small-team {
          font-family: "DM Sans", "Inter Tight", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(40px, 6.4vw, 92px);
          letter-spacing: -0.035em;
          line-height: 1;
          color: #ffffff;
          text-align: center;
          margin-top: -150px;
          z-index: 4;
          position: relative;
        }
        .small-team .word {
          display: inline-block;
          overflow: hidden;
          vertical-align: top;
        }
        .small-team .word > span {
          display: inline-block;
          transform: translateY(105%);
        }

        /* ── Big results ── */
        .big-results-wrap {
          position: relative;
          width: 100%;
          margin-top: -100px;
          display: flex;
          justify-content: center;
          z-index: 1;
        }
        .big-results {
          font-family: "DM Sans", "Inter Tight", system-ui, sans-serif;
          font-style: italic;
          font-weight: 800;
          font-size: clamp(110px, 21vw, 300px);
          letter-spacing: -0.045em;
          line-height: 0.85;
          color: rgba(255, 255, 255, 0.07);
          text-align: center;
          white-space: nowrap;
          user-select: none;
          z-index: 1;
          text-shadow: 0 4px 12px rgba(255, 255, 255, 0.03);
        }
        .big-results .letter {
          display: inline-block;
          transform-origin: bottom;
        }

        /* ── Cards row ── */
        .cards-row {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 320px;
          z-index: 3;
          pointer-events: none;
        }
        .cards-row > * { pointer-events: auto; }

        .card {
          position: absolute;
          border-radius: 18px;
          overflow: hidden;
          background: linear-gradient(180deg, #1e1e1e 0%, #111 40%, #080808 100%);
          box-shadow:
            0 30px 50px -16px rgba(0,0,0,0.85),
            0 14px 26px -8px rgba(0,0,0,0.55),
            0 5px 10px -2px rgba(0,0,0,0.4),
            inset 0 2px 0 rgba(255,255,255,0.07),
            inset 0 -4px 8px rgba(0,0,0,0.7);
          cursor: pointer;
          will-change: transform;
          transition: box-shadow 0.5s cubic-bezier(0.6, 0, 0.2, 1);
        }
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(155deg, rgba(255,255,255,0.10) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.4) 100%);
          pointer-events: none;
          border-radius: inherit;
          z-index: 2;
        }
        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(1) contrast(1.05);
        }
        .card:hover {
          box-shadow:
            0 44px 70px -20px rgba(0,0,0,0.95),
            0 22px 38px -10px rgba(0,0,0,0.65),
            0 8px 14px -3px rgba(0,0,0,0.45),
            inset 0 2px 0 rgba(255,255,255,0.10),
            inset 0 -4px 8px rgba(0,0,0,0.7);
        }

        /* Card sizing/positioning — exact from original */
        .card-1 { width: 130px; height: 180px; left: 4%;  top: 30px; z-index: 1; }
        .card-2 { width: 160px; height: 220px; left: 12%; top: 50px; z-index: 2; }
        .card-3 { width: 200px; height: 270px; left: 22%; top: 20px; z-index: 4; }
        .card-4 { width: 150px; height: 200px; left: 36%; top: 70px; z-index: 3; }
        .card-5 { width: 230px; height: 310px; left: 44%; top: 0px;  z-index: 5; }
        .card-6 { width: 160px; height: 215px; left: 59%; top: 55px; z-index: 3; }
        .card-7 { width: 175px; height: 240px; left: 70%; top: 30px; z-index: 4; }
        .card-8 { width: 130px; height: 175px; left: 84%; top: 50px; z-index: 2; }

        /* ── Subline ── */
        .subline {
          margin-top: 180px;
          text-align: center;
          z-index: 4;
          position: relative;
        }
        .subline .arrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #000000;
          border: none;
          padding: 12px 20px 12px 24px;
          border-radius: 999px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 14px 24px -8px rgba(0,0,0,0.5), 0 5px 10px -2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.4);
          transition: transform 0.4s cubic-bezier(0.6, 0, 0.2, 1);
        }
        .subline .arrow-pill:hover { transform: translateY(-2px); }
        .subline .arrow-pill .ar {
          width: 26px; height: 26px; border-radius: 50%;
          background: #000;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          transition: transform 0.4s cubic-bezier(0.6, 0, 0.2, 1);
        }
        .subline .arrow-pill:hover .ar { transform: rotate(45deg); }
        .subline-text {
          margin-top: 22px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.06em;
        }

        /* ── Stats ── */
        .stats {
          padding: 80px 40px 140px;
          position: relative;
          z-index: 5;
          background: #000;
        }
        .stats-inner {
          max-width: 1280px;
          margin: 0 auto;
          background: #0c0c0c;
          border-radius: 36px;
          padding: 80px 60px;
          color: #f4f4f4;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 40px;
          align-items: end;
          box-shadow: 0 40px 80px -30px rgba(0,0,0,0.95), 0 16px 32px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -3px 8px rgba(0,0,0,0.5);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stats-inner::before {
          content: "";
          position: absolute;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 65%);
          top: -200px; right: -100px; filter: blur(40px);
        }
        .stats-inner::after {
          content: "";
          position: absolute;
          width: 350px; height: 350px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.03), transparent 65%);
          bottom: -150px; left: 20%; filter: blur(30px);
        }
        .stats h3 {
          font-family: "DM Sans", inherit;
          font-weight: 700;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          position: relative;
          z-index: 1;
          color: #ffffff;
        }
        .stats h3 em {
          font-style: italic;
          font-weight: 800;
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .stat-block { position: relative; z-index: 1; }
        .stat-block .num {
          font-family: "DM Sans", inherit;
          font-weight: 700;
          font-size: clamp(44px, 4.5vw, 68px);
          line-height: 1;
          letter-spacing: -0.04em;
          display: flex;
          align-items: baseline;
          gap: 4px;
          color: #ffffff;
        }
        .stat-block .num small {
          font-size: 0.42em;
          color: rgba(255, 255, 255, 0.35);
          font-weight: 500;
        }
        .stat-block .lbl {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: rgba(255, 255, 255, 0.3);
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* ── Responsive — exact from original ── */
        @media (max-width: 1100px) {
          .stats-inner { grid-template-columns: 1fr 1fr; padding: 50px 30px; }
        }
        @media (max-width: 750px) {
          .hero        { padding: 100px 16px 40px; }
          .small-team  { font-size: 10vw; }
          .big-results { font-size: 24vw; }
          .cards-row   { height: 220px; top: 52%; }
          .card-1 { width:  80px; height: 110px; left: 0%;  top: 20px; }
          .card-2 { width:  90px; height: 130px; left: 10%; top: 35px; }
          .card-3 { width: 110px; height: 150px; left: 22%; top: 15px; }
          .card-4 { width:  90px; height: 120px; left: 36%; top: 50px; }
          .card-5 { width: 130px; height: 180px; left: 46%; top:  0;   }
          .card-6 { width:  95px; height: 130px; left: 62%; top: 40px; }
          .card-7 { width: 100px; height: 140px; left: 74%; top: 20px; }
          .card-8 { width:  80px; height: 110px; left: 87%; top: 35px; }
          .subline     { margin-top: 120px; }
          .stats       { padding: 20px 20px 60px; }
          .stats-inner { grid-template-columns: 1fr 1fr; padding: 40px 24px; gap: 24px; }
        }
      `}</style>

      {/* ── HERO — exact HTML structure from original ── */}
      <section className="hero">
        <h1 className="small-team">
          <span className="word"><span>Small</span></span>
          &nbsp;
          <span className="word"><span>team,</span></span>
        </h1>

        <div className="big-results-wrap">
          <div className="big-results">
            <span className="letter">b</span>
            <span className="letter">i</span>
            <span className="letter">g</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
            <span className="letter">s</span>
            <span className="letter">u</span>
            <span className="letter">l</span>
            <span className="letter">t</span>
            <span className="letter">s</span>
          </div>
        </div>

        {/* Card row — each card gets data-rot and data-depth exactly as in original HTML */}
        <div className="cards-row" id="cardsRow">
          {CARD_DATA.map((card, i) => (
            <div
              key={i}
              className={`card card-${i + 1}`}
              data-rot={card.rot}
              data-depth={card.depth}
            >
              <img src={card.src} alt="" />
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS — exact HTML structure from original ── */}
      <section className="stats">
        <div className="stats-inner">
          <h3>Eight humans.<br />One <em>tight ship</em>.</h3>

          <div className="stat-block">
            <div className="num" data-count="62"><span>0</span></div>
            <div className="lbl">Projects shipped</div>
          </div>

          <div className="stat-block">
            <div className="num" data-count="14"><span>0</span><small>yrs</small></div>
            <div className="lbl">Combined craft</div>
          </div>

          <div className="stat-block">
            <div className="num" data-count="9"><span>0</span><small>.4</small></div>
            <div className="lbl">Avg NPS</div>
          </div>
        </div>
      </section>
    </div>
  );
}
