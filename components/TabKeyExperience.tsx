"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AmbientCanvas from "./AmbientCanvas";
import CustomCursor from "./CustomCursor";
import FloatingNavigation from "./FloatingNavigation";
import Hero from "./Hero";
import TrustFoundation from "./TrustFoundation";
import Intelligence from "./Intelligence";
import ServicesControlRoom from "./ServicesControlRoom";
import WhyTabKey from "./WhyTabKey";
import FeaturedWork from "./FeaturedWork";
import AITransformation from "./AITransformation";
import Industries from "./Industries";
import ProcessJourney from "./ProcessJourney";
import DigitalImpact from "./DigitalImpact";
import ClientExperience from "./ClientExperience";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import GrandFooter from "./GrandFooter";

gsap.registerPlugin(ScrollTrigger);

export default function TabKeyExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("experience-ready");
    if (reduced) root.classList.add("reduced-motion");

    const nav = root.querySelector<HTMLElement>(".site-nav");
    let navigationRevealed = window.scrollY > 12;
    if (navigationRevealed) nav?.classList.add("is-visible");

    const revealNavigation = () => {
      if (!navigationRevealed && window.scrollY > 8) {
        navigationRevealed = true;
        nav?.classList.add("is-visible");
      }
    };
    window.addEventListener("scroll", revealNavigation, { passive: true });
    let skipIntroHandler: (() => void) | null = null;

    const context = gsap.context(() => {
      const intro = root.querySelector<HTMLElement>(".hero-intro");
      let introTimeline: gsap.core.Timeline | null = null;

      if (!reduced && window.scrollY < 12) {
        gsap.set(".hero-char", { yPercent: 112 });
        gsap.set([".hero-kicker", ".hero-support", ".hero-actions", ".hero-index", ".scroll-cue"], { autoAlpha: 0, y: 18 });
        gsap.set(".hero-orb-field", { autoAlpha: 0, scale: 0.76 });
        gsap.set(".intro-phrase, .intro-brand", { autoAlpha: 0, y: 18 });

        introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })
          .to(".intro-phrase--one", { autoAlpha: 1, y: 0, duration: 0.8 }, 0.4)
          .to(".intro-phrase--one", { autoAlpha: 0, y: -16, duration: 0.6, ease: "power2.in" }, 1.65)
          .to(".intro-phrase--two", { autoAlpha: 1, y: 0, duration: 0.8 }, 2.05)
          .to(".intro-phrase--two", { autoAlpha: 0, y: -16, duration: 0.55, ease: "power2.in" }, 3.12)
          .to(".intro-phrase--three", { autoAlpha: 1, y: 0, duration: 0.8 }, 3.35)
          .to(".hero-orb-field", { autoAlpha: 1, scale: 1, duration: 2.2, ease: "expo.out" }, 3.72)
          .to(".intro-phrase--three", { autoAlpha: 0, y: -16, duration: 0.55, ease: "power2.in" }, 4.56)
          .to(".intro-brand", { autoAlpha: 1, y: 0, duration: 0.7 }, 4.7)
          .to(".intro-brand", { autoAlpha: 0, y: -12, duration: 0.45 }, 5.54)
          .set(intro, { display: "none" }, 5.95)
          .to(".hero-char", { yPercent: 0, duration: 0.9, stagger: 0.017, ease: "power4.out" }, 5.62)
          .to(".hero-kicker", { autoAlpha: 1, y: 0, duration: 0.65 }, 5.85)
          .to(".hero-support", { autoAlpha: 1, y: 0, duration: 0.7 }, 6.12)
          .to(".hero-actions", { autoAlpha: 1, y: 0, duration: 0.7 }, 6.22)
          .to([".hero-index", ".scroll-cue"], { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }, 6.38);

        skipIntroHandler = () => {
          if (introTimeline && introTimeline.progress() < 0.8) introTimeline.progress(1);
        };
        window.addEventListener("wheel", skipIntroHandler, { once: true, passive: true });
        window.addEventListener("touchmove", skipIntroHandler, { once: true, passive: true });
      } else {
        if (intro) intro.style.display = "none";
      }

      if (!reduced) {
        gsap.to(".hero-content", {
          yPercent: 18,
          opacity: 0.16,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-orb-field", {
          yPercent: 24,
          scale: 1.12,
          opacity: 0.12,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });

        gsap.utils.toArray<HTMLElement>(".reveal-title").forEach((element) => {
          gsap.from(element, {
            y: 70,
            autoAlpha: 0,
            duration: 1.25,
            ease: "power4.out",
            scrollTrigger: { trigger: element, start: "top 82%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>(".reveal-copy").forEach((element) => {
          gsap.from(element, {
            y: 28,
            autoAlpha: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });

        gsap.to(".intelligence-visual .digital-sphere", {
          rotation: 16,
          yPercent: -9,
          ease: "none",
          scrollTrigger: { trigger: ".intelligence", start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
        gsap.to(".process-line i", {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ".process-track", start: "top 72%", end: "bottom 70%", scrub: 1 },
        });
        gsap.from(".impact-transition p", {
          y: 45,
          autoAlpha: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: ".impact-transition", start: "top 58%", once: true },
        });

        const serviceSection = root.querySelector<HTMLElement>(".services-control");
        const copies = gsap.utils.toArray<HTMLElement>(".service-copy");
        const scenes = gsap.utils.toArray<HTMLElement>(".control-scene");
        const current = root.querySelector<HTMLElement>(".control-current");
        const progress = root.querySelector<HTMLElement>(".control-progress i");
        let activeService = 0;

        if (serviceSection) {
          ScrollTrigger.create({
            trigger: serviceSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              const next = Math.min(4, Math.floor(self.progress * 5));
              if (progress) progress.style.transform = `scaleX(${self.progress})`;
              root.querySelector<HTMLElement>(".control-sticky")?.setAttribute("data-active-scene", String(next));
              if (next === activeService) return;
              copies[activeService]?.classList.remove("is-active");
              scenes[activeService]?.classList.remove("is-active");
              activeService = next;
              copies[activeService]?.classList.add("is-active");
              scenes[activeService]?.classList.add("is-active");
              if (current) current.textContent = String(activeService + 1).padStart(2, "0");
            },
          });
        }

        gsap.from(".silence-beat p", {
          y: 54,
          autoAlpha: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: { trigger: ".silence-beat", start: "top 55%", once: true },
        });

        gsap.utils.toArray<HTMLElement>(".project-story").forEach((story) => {
          const visual = story.querySelector(".work-visual");
          const copy = story.querySelector(".project-copy");
          gsap.fromTo(visual, { yPercent: 12, scale: 0.9, opacity: 0.25 }, {
            yPercent: -7, scale: 1, opacity: 1, ease: "none",
            scrollTrigger: { trigger: story, start: "top bottom", end: "bottom top", scrub: 1 },
          });
          gsap.from(copy, {
            y: 42, autoAlpha: 0, duration: 1,
            scrollTrigger: { trigger: story, start: "top 68%", once: true },
          });
        });

        gsap.to(".portal", {
          scale: 1.22,
          rotation: 18,
          ease: "none",
          scrollTrigger: { trigger: ".final-cta", start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
        gsap.from(".final-copy > *", {
          y: 45,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".final-copy", start: "top 72%", once: true },
        });
      }

      if (reduced) {
        const copies = gsap.utils.toArray<HTMLElement>(".service-copy");
        const scenes = gsap.utils.toArray<HTMLElement>(".control-scene");
        const current = root.querySelector<HTMLElement>(".control-current");
        const progress = root.querySelector<HTMLElement>(".control-progress i");
        let activeService = 0;
        ScrollTrigger.create({
          trigger: ".services-control",
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const next = Math.min(4, Math.floor(self.progress * 5));
            if (progress) progress.style.transform = `scaleX(${self.progress})`;
            root.querySelector<HTMLElement>(".control-sticky")?.setAttribute("data-active-scene", String(next));
            if (next === activeService) return;
            copies[activeService]?.classList.remove("is-active");
            scenes[activeService]?.classList.remove("is-active");
            activeService = next;
            copies[activeService]?.classList.add("is-active");
            scenes[activeService]?.classList.add("is-active");
            if (current) current.textContent = String(activeService + 1).padStart(2, "0");
          },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-nav-tone]").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 72%",
          end: "bottom 72%",
          onEnter: () => nav?.setAttribute("data-tone", section.dataset.navTone || "dark"),
          onEnterBack: () => nav?.setAttribute("data-tone", section.dataset.navTone || "dark"),
        });
      });
    }, root);

    return () => {
      context.revert();
      window.removeEventListener("scroll", revealNavigation);
      if (skipIntroHandler) {
        window.removeEventListener("wheel", skipIntroHandler);
        window.removeEventListener("touchmove", skipIntroHandler);
      }
    };
  }, []);

  return (
    <div ref={rootRef} className="experience-root">
      <AmbientCanvas />
      <CustomCursor />
      <a className="floating-logo" href="#home" aria-label="TabKey Digital — Back to top">
        <img src="/tabkey-logo.png" alt="TabKey Digital" width="220" height="52" />
      </a>
      <FloatingNavigation />
      <main className="experience-main">
        <Hero />
        <TrustFoundation />
        <Intelligence />
        <ServicesControlRoom />
        <WhyTabKey />
        <FeaturedWork />
        <AITransformation />
        <Industries />
        <ProcessJourney />
        <DigitalImpact />
        <ClientExperience />
        <FAQ />
        <FinalCTA />
      </main>
      <GrandFooter />
    </div>
  );
}
