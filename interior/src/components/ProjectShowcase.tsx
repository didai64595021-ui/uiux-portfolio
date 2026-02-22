"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";

const typeLabels: Record<string, string> = { apartment: "아파트", villa: "주택", office: "사무실", commercial: "상업공간" };

export default function ProjectShowcase() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects.slice(0, 4) : projects.filter((p) => p.type === filter).slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-caramel text-sm tracking-widest font-semibold mb-3">PORTFOLIO</p>
            <h2 className="heading-responsive text-charcoal font-display korean-text">시공 사례</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["all", "apartment", "villa", "office", "commercial"].map((t) => (
              <button key={t} onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all min-h-[40px] ${
                  filter === t ? "bg-charcoal text-white" : "bg-warm text-text/50 hover:bg-charcoal/5"
                }`}
              >
                {t === "all" ? "전체" : typeLabels[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {filtered.map((project, i) => (
            <div key={project.id} className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}>
              {/* Image */}
              <div className="w-full lg:w-3/5">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] group">
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium px-3 py-1.5 rounded-full">
                      {typeLabels[project.type]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/5">
                <p className="text-caramel text-xs tracking-widest font-semibold mb-2">{project.style.toUpperCase()}</p>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-charcoal mb-3 korean-text">{project.title}</h3>
                <p className="text-text/50 text-sm korean-text leading-relaxed mb-5">{project.description}</p>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-warm rounded-lg p-3 text-center">
                    <p className="text-text/30 text-[10px]">면적</p>
                    <p className="font-bold text-charcoal text-sm">{project.size}평</p>
                  </div>
                  <div className="bg-warm rounded-lg p-3 text-center">
                    <p className="text-text/30 text-[10px]">공사비</p>
                    <p className="font-bold text-caramel text-sm">{project.budget}</p>
                  </div>
                  <div className="bg-warm rounded-lg p-3 text-center">
                    <p className="text-text/30 text-[10px]">기간</p>
                    <p className="font-bold text-charcoal text-sm">{project.duration}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.rooms.map((r) => (
                    <span key={r} className="bg-warm text-text/50 text-xs px-2.5 py-1 rounded-full">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-outline">전체 시공사례 보기 →</Link>
        </div>
      </div>
    </section>
  );
}
