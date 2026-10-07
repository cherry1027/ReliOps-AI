"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, DatabaseZap, Factory, ShieldCheck } from "lucide-react";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link href="/" className="brand" aria-label="ReliOps AI home">
          <span className="brand-mark"><Activity size={20} /></span>
          <span><strong>ReliOps <em>AI</em></strong><small>Predictive Maintenance Engine</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/" className={pathname === "/" ? "active" : ""}><Factory size={16} /> Reliability Engine</Link>
          <Link href="/mlops" className={pathname.startsWith("/mlops") ? "active" : ""}><DatabaseZap size={16} /> MLOps Control Center</Link>
        </nav>
        <div className="prototype-chip"><ShieldCheck size={15} /> Research prototype</div>
      </header>
      {children}
    </div>
  );
}
