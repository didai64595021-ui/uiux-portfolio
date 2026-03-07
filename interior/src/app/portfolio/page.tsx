"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";

const typeLabels: Record<string, string> = { apartment: "아파트", villa: "주택", office: "사무실", commercial: "상업공간" };

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className="pt-20 min-h-[100svh]">
      <div className="bg-charcoal py-14 sm:py-20">
        <div className="container-custom text-center">
          <p className="text-caramel text-sm tracking-widest font-semibold mb-3">PORTFOLIO</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white korean-text">전체 시공사례</h1>
          <p className="text-white/40 mt-4 korean-text">총 <span className="text-caramel font-bold">{projects.length}</span>건의 시공 실적</p>
        </div>
      </div>

      <div className="container-custom py-10">
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {["all", "apartment", "villa", "office", "commercial"].map((t) => (
            <button key={t} onClick={() => setFilter(t)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all min-h-[44px] ${
                filter === t ? "bg-charcoal text-white" : "bg-white text-text/50 hover:bg-charcoal/5"
              }`}
            >{t === "all" ? "전체" : typeLabels[t]}</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium px-2.5 py-1 rounded-full">{typeLabels[project.type]}</span>
                  <span className="bg-caramel/90 text-white text-xs font-medium px-2.5 py-1 rounded-full">{project.style}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-charcoal mb-2 korean-text">{project.title}</h3>
                <p className="text-text/40 text-sm korean-text mb-3">{project.description}</p>
                <div className="flex items-center gap-4 text-xs text-text/40">
                  <span>{project.size}평</span>
                  <span>{project.budget}</span>
                  <span>{project.duration}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.rooms.map((r) => (
                    <span key={r} className="bg-warm text-text/40 text-[10px] px-2 py-0.5 rounded">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
