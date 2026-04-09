import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImagePanel from "@/components/sections/ImagePanel";

/* ═══ Shared layout components (same as Public/AIA pages) ═══ */

const BlackBanner = ({ title, showBack }: { title: string; showBack?: boolean }) => {
  const navigate = useNavigate();
  return (
    <div
      className="px-5 md:px-10 pt-2 pb-10 flex items-start justify-center relative min-h-[64px]"
      style={{ background: "hsl(0 0% 0%)", borderBottom: "1px solid hsl(0 0% 15%)" }}
    >
      {showBack && (
        <button
          onClick={() => navigate("/")}
          className="absolute left-5 md:left-10 top-2 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase cursor-pointer transition-colors duration-200"
          style={{ color: "hsl(0 0% 100% / 0.5)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.5)")}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      )}
      <h2
        className={`text-[clamp(16px,2.5vw,24px)] font-normal tracking-[0.12em] uppercase text-white text-center ${showBack ? "px-16 md:px-24" : ""}`}
        style={{ fontFamily: "Calibri, 'Trebuchet MS', sans-serif" }}
      >
        {title}
      </h2>
    </div>
  );
};

const ContentBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    className="px-5 md:px-10 py-8"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    <div className="text-[12px] leading-[1.9] text-black font-normal space-y-4 text-justify font-body">
      {children}
    </div>
  </div>
);

const RedSubTitle = ({ children }: { children: React.ReactNode }) => (
  <div
    className="px-5 md:px-10 py-4"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    <h3
      className="font-display text-[clamp(14px,2vw,20px)] font-semibold tracking-[0.1em] uppercase"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      {children}
    </h3>
  </div>
);

/* ═══ Data ═══ */

const practiceAreas = [
  {
    title: "Technology & Emerging Systems",
    items: [
      "AI & Digital Integration — Direct application of artificial intelligence and computational tools to inform urban density, environmental performance, and design iteration.",
      "Advanced Fabrication — Integrating parametric design with large-scale 3D printing in architectural systems.",
      "Computational Systems — Using parametric and data-driven systems to shape architectural and urban design outcomes.",
    ],
    selected: [
      "Liberland Master Plan (First Place)",
      "Creek Mosque (UAE – 3D-printed structural components)",
      "Sonic Union Bryant Park (NYC – digital fabrication integration)",
      "KSA Cultural, Sports, and Entertainment Hubs (confidential – advanced parametric systems and digital fabrication workflows)",
    ],
  },
  {
    title: "Sustainability & Environmental Thinking",
    items: [
      "Ecological Design — Moving beyond standard green building toward integrated environmental systems that respond to climate, context, and long-term performance.",
      "Strategic Resilience — Large-scale master planning focused on environmental, economic, and social sustainability across urban systems.",
    ],
    selected: [
      "Liberland Master Plan (7 km², Europe, First Place)",
      "The Canal Condition (Vietnam, 190-hectare master plan)",
      "Green Bridge of Baghdad",
      "Algae Urban Farming",
      "Bawadi Park (Dubai)",
      "Al Khor Masterplan (Qatar)",
    ],
  },
  {
    title: "Global Practice & Strategic Initiatives",
    items: [
      "Global Practice Leadership — Sustained engagement across regions through projects, partnerships, and long-term collaborations connecting North America, the Middle East, Europe, and Asia.",
      "Institutional & Civic Engagement — Contributing to global platforms through conferences, juries, and advisory roles that connect professional practice with policy, culture, and public impact.",
    ],
    selected: [
      "Iraq Pavilion (Expo 2020 Dubai)",
      "UNESCO advisory role (Mosul)",
      "AIA Middle East Presidency",
      "International conferences and juries",
    ],
  },
];


/* ═══ Component ═══ */

const ServiceSection = () => {
  return (
    <div>
      {/* ═══ BLACK BANNER — Leadership Through Practice ═══ */}
      <BlackBanner title="Leadership Through Practice" showBack />

      <ContentBlock>
        <p>
          My work operates across regions, shaped through projects, collaborations, and leadership developed over <strong>three decades of practice</strong>. With a physical presence and strategic engagement in <strong>New York, Dubai, and India</strong>, I work within a global network connecting <strong>North America, the Middle East, Europe, and Asia</strong>. This practice is defined by the <strong>cross-pollination of ideas, knowledge, and practices</strong> across contexts—linking localized cultural intelligence with advanced design, technology, and delivery. Across geographies and scales, I have led and contributed to projects that engage cities, institutions, and communities, advancing <strong>resilient and sustainable built environments</strong>.
        </p>
      </ContentBlock>

      <div className="px-5 md:px-10 py-6" style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}>
        <ImagePanel src="/images/service/spheres.png" alt="Multiple Spheres of Influence" />
      </div>

      {/* ═══ BLACK BANNER — Advancing the Profession ═══ */}
      <BlackBanner title="Advancing the Profession" />

      <ContentBlock>
        <p>
          I build platforms that advance the profession through design innovation, technology, environmental thinking, and global engagement.
        </p>
      </ContentBlock>

      <RedSubTitle>Design Innovation & Competition Work</RedSubTitle>
      <ContentBlock>
        <p><strong className="text-black font-semibold">Built Work</strong> — Cultural, institutional, and civic projects grounded in design excellence and contextual response.</p>
        <p><strong className="text-black font-semibold">Competition Work</strong> — International competitions addressing complex cultural and urban questions.</p>
        <p><strong className="text-black font-semibold">Conceptual & Proposal Work</strong> — Forward-looking architectural strategies testing new programmatic and social models.</p>
        <div className="pt-2">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(var(--aia-red))" }}>
            Selected Work:
          </span>
          <span className="text-[12px] text-black/70 ml-2">
            NYC Green School (P.S. 59) · LEED-certified residential towers in Battery Park City · Seton Hall University (NJ) · Xin Hua School of Fine Arts (China) · Iraq Pavilion (Expo 2020 Dubai) · Guggenheim Helsinki (competition) · Creek Mosque (UAE competition) · Women's Building (NYC proposal)
          </span>
        </div>
      </ContentBlock>

      <div
        className="px-5 md:px-10 py-6 space-y-4"
        style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
      >
        <img src="/images/service/s1.png" alt="Service 1" className="w-full h-auto" />
        <img src="/images/service/s2.png" alt="Service 2" className="w-full h-auto" />
      </div>

      {/* Practice Areas */}
      {practiceAreas.map((area, areaIdx) => (
        <div key={area.title}>
          <RedSubTitle>{area.title}</RedSubTitle>
          <ContentBlock>
            {area.items.map((item, i) => {
              const dashIdx = item.indexOf(" — ");
              if (dashIdx > -1) {
                return (
                  <p key={i}>
                    <strong className="text-black font-semibold">{item.substring(0, dashIdx)}</strong>
                    {" — "}{item.substring(dashIdx + 3)}
                  </p>
                );
              }
              return <p key={i}>{item}</p>;
            })}
            <div className="pt-2">
              <span
                className="text-[10px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "hsl(var(--aia-red))" }}
              >
                Selected Work:
              </span>
              <span className="text-[12px] text-black/70 ml-2">
                {area.selected.join(" · ")}
              </span>
            </div>
          </ContentBlock>
          {areaIdx === 0 && (
            <div
              className="px-5 md:px-10 py-6"
              style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
            >
              <img src="/images/service/s3.png" alt="Service 3" className="w-full h-auto" />
              <img src="/images/service/s4.png" alt="Service 4" className="w-full h-auto mt-4" />
            </div>
          )}
          {areaIdx === 1 && (
            <div
              className="px-5 md:px-10 py-6"
              style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
            >
              <img src="/images/service/s6.png" alt="Service 6" className="w-full h-auto" />
              <img src="/images/service/s5.png" alt="Service 5" className="w-full h-auto mt-4" />
            </div>
          )}
          {areaIdx === 2 && (
            <div
              className="px-5 md:px-10 py-6 space-y-4"
              style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
            >
              <img src="/images/service/s7.png" alt="Iraq Pavilion" className="w-full h-auto" />
              <img src="/images/service/s8.png" alt="Iraq Pavilion" className="w-full h-auto" />
              <img src="/images/service/s9.png" alt="Iraq Pavilion" className="w-full h-auto" />
              <img src="/images/service/s11.png" alt="Iraq Pavilion" className="w-full h-auto" />
            </div>
          )}
        </div>
      ))}

      {/* ═══ BLACK BANNER — 30 Years of Service ═══ */}
      <BlackBanner title="30 Years of Service" />

      <ContentBlock>
        <p><strong>1994–1998 — Civic, Educational, Healthcare, and Urban Architecture, Boston, MA</strong></p>
        <p>Professional formation across several practices including <strong>Elkus Manfredi Architects</strong>, <strong>Wood & Zapata</strong>, <strong>Ellenzweig Associates</strong>, and <strong>The Ritchie Organization</strong>. Work included schools, universities, healthcare facilities, hospital planning, civic buildings, and mixed-use urban development, while developing experience in design innovation and architectural detailing within boutique studio environment.</p>
      </ContentBlock>

      <ContentBlock>
        <p><strong>1999–2005 — Institutional, Cultural, and Public Architecture, New York City, NY</strong></p>
        <p>Perkins + Will — Associate / Senior Designer</p>
        <p>University buildings, cultural institutions, corporate headquarters, and international projects including major cultural facilities in China.</p>
      </ContentBlock>

      <ContentBlock>
        <p><strong>2005–2009 — Public Realm and Urban Design, New York City</strong></p>
        <p>Ehrenkrantz Eckstut & Kuhn Architects — Associate Principal / Design Director</p>
        <p>Large civic and urban projects including public schools, housing neighborhoods, transportation hubs, waterfront developments, and major urban master plans, shaping the public realm and city infrastructure.</p>
      </ContentBlock>

      <ContentBlock>
        <p><strong>2010–2012 — International Studio Architecture, Dubai</strong></p>
        <p>Design Worldwide Partnership — Head of Architecture / Design Director</p>
        <p>Leadership of a multidisciplinary studio working on universities, hospitals, housing communities, and large regional master plans across the Middle East.</p>
      </ContentBlock>

      <ContentBlock>
        <p><strong>2012–Present — RAW-NYC Architects</strong></p>
        <p>Founded <strong>RAW-NYC Architects</strong>, a woman-founded and woman-led architectural practice, established independently without partners. The firm advances architecture, urbanism, and cultural projects through hands-on design and practice leadership, with a strong commitment to mentoring and empowering <strong>the next generation of leaders in architecture</strong>.</p>
        <p>New York City, <strong>USA</strong> — Founding Office</p>
        <p>Dubai, <strong>UAE</strong> — Founding Office</p>
        <p>Kochi, <strong>India</strong> — Founding Office</p>
        <p>Office Collaborations: Belgrade, <strong>Serbia</strong> | Bucharest, <strong>Romania</strong></p>
        <p>The practice operates internationally with projects, collaborators, and research initiatives spanning North America, the Middle East, Europe, and Asia.</p>
        <p>Through RAW-NYC Architects, I have prioritized <strong>mentorship and leadership development</strong>, guiding students, recent graduates, and emerging professionals entering the field. While I have actively supported the advancement of women in architecture, management, and construction, my mentorship extends broadly across the profession.</p>
        <p>Through my practice, I have also led <strong>site construction coordination, supervision, and project management</strong>, demonstrating the role of women in construction leadership and technical execution.</p>
      </ContentBlock>

    </div>
  );
};

export default ServiceSection;
