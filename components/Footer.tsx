import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2.5">
          <Logo size={22} />
          <span className="text-sm font-semibold tracking-widest uppercase">FlowForge</span>
        </a>
        <nav className="flex gap-8 text-xs uppercase tracking-widest text-[#666]">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#cases" className="hover:text-white transition-colors">Work</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <span className="text-xs uppercase tracking-widest text-[#555]">
          © 2025 FlowForge
        </span>
      </div>
    </footer>
  );
}
