import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlackBanner = ({ title, showBack }: { title: string; showBack?: boolean }) => {
  const navigate = useNavigate();
  return (
    <div
      className="px-5 md:px-10 pt-2 pb-10 flex items-start justify-center relative min-h-[64px]"
      style={{ background: "#000000", borderBottom: "1px solid hsl(0 0% 15%)" }}
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

const RedTitle = ({ children }: { children: React.ReactNode }) => (
  <div
    className="px-5 md:px-10 py-5 text-center"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    <h2
      className="font-body text-[clamp(16px,2.5vw,24px)] font-bold"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      {children}
    </h2>
  </div>
);

const RedSubTitle = ({ children }: { children: React.ReactNode }) => (
  <div
    className="px-5 md:px-10 py-4"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    <h3
      className="font-body text-[clamp(14px,2vw,20px)] font-bold"
      style={{ color: "hsl(var(--aia-red))" }}
    >
      {children}
    </h3>
  </div>
);

const AIASection = () => {
  return (
    <div>
      {/* ═══ BLACK BANNER ═══ */}
      <BlackBanner title="The Why: The Architecture of Empowerment" showBack />

      <ContentBlock>
        <p>
          <strong className="text-black font-semibold">There is a story behind my accent—one shaped by resilience and defined by leadership.</strong>{" "}
          Most people see barriers; I have lived through them. I was born in Washington, D.C., but my perspective was forged growing up in Baghdad during the Gulf War. Living through war changes you on a cellular level. It teaches you what it means to feel powerless—and why <strong className="text-black font-semibold">invisibility</strong> is dangerous for Architects.
        </p>
        <p>
          It also teaches you that resilience is not just a design goal. Sometimes it is a survival mandate. My journey from a $100-a-month start in Germany to founding an international architectural practice across four continents was more than a career path. It was the work of reclaiming my voice. Along the way I learned that empowerment begins when we <strong className="text-black font-semibold">reclaim our own voice—and help others find theirs.</strong>
        </p>
        <p>
          Today I see our profession facing its own challenge of invisibility. Architects carry immense responsibility, yet too often we are absent from the decisions shaping the built environment. I am running for AIA National President because this moment calls for leaders who understand resilience and know how to turn challenges into progress.
        </p>
        <p>
          My commitment is to ensure that no architect feels invisible within the systems we serve, and to restore architects to the center of shaping our communities. Because when architects lose their voice, communities lose the full value of design.
        </p>
        <p>
          <strong className="text-black font-semibold">Architects at the Center of Public Service. This is my why.</strong>
        </p>
      </ContentBlock>

      {/* The Catalyst */}
      <BlackBanner title="The Catalyst: A Leadership of Scale" />

      <ContentBlock>
        <p>
          I am an <strong className="text-black font-semibold">architect-practitioner</strong> who has built an international firm from nothing and a <strong className="text-black font-semibold">Global Voice</strong>—anchored by a digital advocacy platform of over <strong className="text-black font-semibold">128,000 followers</strong>—to project our professional value to the world. My leadership is forged in <strong className="text-black font-semibold">37 years of outcompeting barriers</strong>, proving that I have the experience to navigate and elevate the systems that support us. I am ready to ensure that as our profession evolves through AI and regenerative design, no architect—and no firm—is left behind.
        </p>
        <p>
          <em>My work embodies the forms of leadership required to navigate the complexities of 2026 and beyond.</em>
        </p>
      </ContentBlock>

      {/* Leadership Dimensions as bullet points */}
      <ContentBlock>
        <ul className="list-none space-y-6 pl-4">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 mt-[5px]" style={{ background: "hsl(var(--aia-red))" }} />
            <div className="space-y-2">
              <p>
                <strong className="font-semibold italic" style={{ color: "hsl(var(--aia-red))" }}>Visionary Leadership:</strong>{" "}
                <em>Systems of the Future</em>
              </p>
              <p>
                I lead with the belief that architecture is a catalyst for evolution. The glory of our art is that it can not only survive change, it can lead it. I apply this to our profession by integrating innovation with regenerative urban models, advancing architecture as a system that links sustainability and technology. This includes designing and delivering <strong className="text-black font-semibold">New York City's first public green school (P.S. 59)</strong> and the <strong className="text-black font-semibold">Liberland master plan</strong>, a winning international competition proposing a regenerative urban model for a 7 km² territory in Europe.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 mt-[5px]" style={{ background: "hsl(var(--aia-red))" }} />
            <div className="space-y-2">
              <p>
                <strong className="font-semibold italic" style={{ color: "hsl(var(--aia-red))" }}>Institutional Leadership:</strong>{" "}
                <em>A Global AIA member for a Global Institute</em>
              </p>
              <p>
                I lead by expanding the Institute's global impact, a journey that began with the <strong className="text-black font-semibold">AIA New York Chapter in 2004</strong> and led to my <strong className="text-black font-semibold">Fellowship (FAIA)</strong> elevation by the AIANY in 2019. I made history as the <strong className="text-black font-semibold">first woman elected to the AIA Middle East Presidency (2016–2018)</strong>, a term where I established country representation in <strong className="text-black font-semibold">Jordan and Iraq</strong> and served as <strong className="text-black font-semibold">Curator of the AIA International Conference "10,958 Days."</strong> My leadership service since 2012 includes roles as <strong className="text-black font-semibold">Director of Events (2012–2016)</strong> and <strong className="text-black font-semibold">Director at Large (2019–present)</strong>, consistently representing the AIA as a <strong className="text-black font-semibold">Jury President</strong> and <strong className="text-black font-semibold">Keynote Speaker</strong> at global forums.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 mt-[5px]" style={{ background: "hsl(var(--aia-red))" }} />
            <div className="space-y-2">
              <p>
                <strong className="font-semibold italic" style={{ color: "hsl(var(--aia-red))" }}>Strategic Leadership:</strong>{" "}
                <em>Bridging Institutions and Global Networks</em>
              </p>
              <p>
                I lead by uniting institutions, governments, and professional networks to solve complex civic challenges. My leadership is grounded in <strong className="text-black font-semibold">graduate studies at MIT</strong>, where focusing on <strong className="text-black font-semibold">history, theory, and criticism</strong> strengthened the analytical thinking I apply to global advocacy. I served as a <strong className="text-black font-semibold">UNESCO advisor</strong> and <strong className="text-black font-semibold">Jury President</strong> for an international architectural competition in Iraq, ensuring the process met strict <strong className="text-black font-semibold">UNESCO–UIA international standards</strong>. Additionally, I led the advocacy, fundraising, and design of the <strong className="text-black font-semibold">Iraq Pavilion at Expo 2020 Dubai</strong>, securing a vital presence for the nation on the global stage.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 mt-[5px]" style={{ background: "hsl(var(--aia-red))" }} />
            <div className="space-y-2">
              <p>
                <strong className="font-semibold italic" style={{ color: "hsl(var(--aia-red))" }}>Civic Leadership:</strong>{" "}
                <em>Empowering Vulnerable Communities</em>
              </p>
              <p>
                I lead with a <strong className="text-black font-semibold">fierce humanity</strong>, applying architectural purpose to serve society and advocate for vulnerable populations. In New York, I was shortlisted among leading women architects to transform the <strong className="text-black font-semibold">Bayview Women's Prison in Manhattan</strong> into a hub for <strong className="text-black font-semibold">women's empowerment</strong>. My global civic commitment includes volunteer workshops to build schools and homes in <strong className="text-black font-semibold">Tanzania</strong>, and the design of the <strong className="text-black font-semibold">Safe House of Innovation</strong>, a facility specifically created to support and uplift <strong className="text-black font-semibold">homeless children and orphans</strong> in Iraq.
              </p>
            </div>
          </li>
        </ul>
      </ContentBlock>

      {/* The Architecture of My Presidency */}
      <RedTitle>The Architecture of My Presidency</RedTitle>

      <ContentBlock>
        <p>
          These dimensions of leadership—visionary, institutional, strategic, and civic—form the foundation of my <strong className="text-black font-semibold">4-Track Architectural Leadership System</strong>. This framework is built on <strong className="text-black font-semibold">continuity</strong>; it aligns with the <strong className="text-black font-semibold">AIA 2026–2030 Strategic Plan</strong>, ensuring our institutional momentum is preserved and propelled forward.
        </p>
        <p>
          I have spent this journey listening to and synthesizing the expertise of <strong className="text-black font-semibold">AIA leadership</strong> and our <strong className="text-black font-semibold">professional community</strong>. I am ready to be the <strong className="text-black font-semibold">engine that executes</strong>—reinforcing our role at the decision-making table by translating our collective blueprint into actionable progress.
        </p>
      </ContentBlock>

      {/* 4-Track System */}
      <BlackBanner title="The 4-Track Architectural Leadership System" />

      <ContentBlock>
        <p>
          This defines the structural architecture of the framework:
        </p>
        <p>
          <strong className="text-black font-semibold">4 Tracks – 4 Pillars – 4 Strategic Commitments.</strong>
        </p>
        <p>
          The four tracks—<strong className="font-semibold" style={{ color: "hsl(var(--aia-red))" }}>FOUNDATION</strong>, <strong className="font-semibold" style={{ color: "hsl(var(--aia-red))" }}>STRUCTURE</strong>, <strong className="font-semibold" style={{ color: "hsl(var(--aia-red))" }}>ENVELOPE</strong>, <strong className="font-semibold" style={{ color: "hsl(var(--aia-red))" }}>FUTURE SYSTEMS</strong>—define the operating layers of the profession.
        </p>
        <p>
          Each track is organized around a single core pillar, supported by four strategic commitments.
        </p>
        <p>
          My presidency will reinforce the profession's <strong className="text-black font-semibold">Trust</strong>, strengthen <strong className="text-black font-semibold">Practice</strong>, amplify our <strong className="text-black font-semibold">Voice</strong> in the public realm, and advance the <strong className="text-black font-semibold">Intelligence</strong> needed to lead in a changing era of practice.
        </p>
      </ContentBlock>

      {/* Track 1 */}
      <RedSubTitle>Track 1 — FOUNDATION</RedSubTitle>
      <ContentBlock>
        <p><em>The Civic and Ethical Bedrock of the Profession</em></p>
        <p className="mt-4">
          <strong className="text-black font-semibold">■ Trust</strong>
        </p>
        <p><em>The profession's credibility and public standing, upheld through its rules, standards, governance, access, and responsibility</em></p>
        <ul className="list-none space-y-3 pl-4 mt-3">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Ground</strong> the profession in clear standards, ethical conduct, and a shared understanding of its role and obligations.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Govern</strong> through transparent governance, ethical leadership, and institutional accountability.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Enable</strong> equitable access to participation, leadership, and opportunity—removing structural barriers across regions and practice scales.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Protect</strong> the profession's responsibility to the public by reinforcing health, safety, and welfare, clarifying liability, and safeguarding professional scope.</p>
          </li>
        </ul>
      </ContentBlock>

      {/* Track 2 */}
      <RedSubTitle>Track 2 — STRUCTURE</RedSubTitle>
      <ContentBlock>
        <p><em>Systems That Strengthen Practice</em></p>
        <p className="mt-4">
          <strong className="text-black font-semibold">■ Practice</strong>
        </p>
        <p><em>The strength and viability of architectural practice, supported through alignment, continuity, and coordinated systems across the Institute</em></p>
        <ul className="list-none space-y-3 pl-4 mt-3">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Connect</strong> AIA National, state, and local components into a cohesive system—ensuring continuity across leadership cycles and consistency with strategic priorities.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Coordinate</strong> communication, committees, and networks to strengthen collaboration across the Institute and reduce fragmentation in execution.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Support</strong> firms across scales—particularly small and mid-sized practices—by connecting resources, knowledge, and networks that strengthen business viability and competitive capacity.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Advance</strong> shared capability through knowledge systems, research exchange, and the integration of data, tools, and emerging technologies that support practice excellence.</p>
          </li>
        </ul>
      </ContentBlock>

      {/* Track 3 */}
      <RedSubTitle>Track 3 — ENVELOPE</RedSubTitle>
      <ContentBlock>
        <p><em>The Public Interface of the Profession</em></p>
        <p className="mt-4">
          <strong className="text-black font-semibold">■ Voice</strong>
        </p>
        <p><em>The profession's presence and influence in shaping public policy, partnerships, and civic impact</em></p>
        <ul className="list-none space-y-3 pl-4 mt-3">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Lead</strong> on public policy—engaging federal, state, and local stakeholders to shape legislative priorities and regulatory direction affecting the built environment and emerging technologies.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Represent</strong> the value of architects—advancing design excellence and communicating the profession's role in delivering housing, climate action, resilient communities, and high-performance outcomes aligned with 2030 commitments.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Partner</strong> with government stakeholders and across the AEC industry—building coordinated efforts that strengthen influence, expand capacity, support disaster response, and align the profession around shared priorities.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Advance</strong> policy and procurement frameworks that expand access to work, support small and mid-sized firms, and enable housing, climate, resilience, and regenerative outcomes in the built environment.</p>
          </li>
        </ul>
      </ContentBlock>

      {/* Track 4 */}
      <RedSubTitle>Track 4 — FUTURE SYSTEMS</RedSubTitle>
      <ContentBlock>
        <p><em>Leading in a Changing Era</em></p>
        <p className="mt-4">
          <strong className="text-black font-semibold">■ Intelligence</strong>
        </p>
        <p><em>The profession's capacity to understand, adapt to, and lead within emerging technological and systemic conditions</em></p>
        <ul className="list-none space-y-3 pl-4 mt-3">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Advance</strong> digital fluency across the profession—ensuring architects can operate effectively within data-driven and technology-enabled environments.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Integrate</strong> artificial intelligence and emerging technologies into practice—enhancing design capability, productivity, and data-informed decision-making.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Apply</strong> regenerative and high-performance knowledge systems—establishing measurable standards that translate ambition into practical outcomes.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full flex-shrink-0 mt-[6px]" style={{ background: "hsl(var(--aia-red))" }} />
            <p><strong className="text-black font-semibold">Evolve</strong> practice and delivery models through emerging technologies and systems—supporting new forms of collaboration, project delivery, and professional positioning.</p>
          </li>
        </ul>
      </ContentBlock>
    </div>
  );
};

export default AIASection;
