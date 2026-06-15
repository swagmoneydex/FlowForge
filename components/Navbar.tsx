"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.05]"
          : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-[60px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <Logo size={26} />
          <span className="text-sm font-semibold tracking-widest uppercase">FlowForge</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest text-[#999]">
          <a href="#services" className="hover:text-white transition-colors duration-200">
            Services
          </a>
          <a href="#cases" className="hover:text-white transition-colors duration-200">
            Work
          </a>
          <a href="#pricing" className="hover:text-white transition-colors duration-200">
            Pricing
          </a>
        </nav>
        <a
          href="#contact"
          className="text-xs font-medium uppercase tracking-widest text-black bg-white px-5 py-2.5 rounded-full hover:bg-[#ff6b2b] hover:text-white transition-colors duration-300"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
