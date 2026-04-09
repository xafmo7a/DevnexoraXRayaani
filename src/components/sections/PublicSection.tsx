import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImagePanel from "@/components/sections/ImagePanel";
import PressArchive from "@/components/sections/PressArchive";
import SiteFooter from "@/components/SiteFooter";

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

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <div
    className="px-5 md:px-10 py-5"
    style={{ background: "hsl(0 0% 100%)", borderBottom: "1px solid hsl(0 0% 88%)" }}
  >
    <h3 className="font-display text-[clamp(16px,2.2vw,22px)] font-semibold tracking-[0.08em] uppercase text-black">
      {children}
    </h3>
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

const PublicSection = () => {
  return (
    <div>
      {/* ═══ BLACK BANNER 1 ═══ */}
      <BlackBanner title="A Trajectory of Grit and Excellence" showBack />
      <ContentBlock>
        <p>
          While my perspective was forged in the dualities of{" "}
          <strong className="text-black font-semibold">Washington, D.C. and Baghdad</strong>,
          my professional life has been defined by the pursuit of excellence across borders. My
          connection to the U.S. capital began while my mother was completing her Master's degree
          in Fine Arts at <strong className="text-black font-semibold">Howard University</strong>{" "}
          and my father was working in the city; at only six months old, I was taken back to Iraq
          by my parents, where I was raised and eventually studied{" "}
          <strong className="text-black font-semibold">
            Architectural Engineering at the University of Baghdad (1984–1989)
          </strong>
          . Graduating with top honors and gaining two years of early experience at Al-Bayati Architects, I was prepared for a career in design—but the{" "}
          <strong className="text-black font-semibold">1991 Gulf War</strong> changed everything on a cellular level, teaching me what it truly means to feel powerless.
        </p>
        <p>
          Driven by a <strong className="text-black font-semibold">hope larger than my fear</strong>,
          I left Iraq alone with no financial safety net. I first went to Germany, working at{" "}
          <strong className="text-black font-semibold">George Kinsky Architect</strong> in Frankfurt
          for $100 a month while painting and selling my artwork to sustain my journey. Upon arriving
          in the United States during an economic downturn, I faced the dismissal of my initial degree. Determined to move forward, I accepted an{" "}
          <strong className="text-black font-semibold">unpaid internship</strong>, approaching even
          the simplest tasks with seriousness and gratitude.
        </p>
        <p>
          This persistence led to a scholarship through the{" "}
          <strong className="text-black font-semibold">Aga Khan Program at MIT and Harvard</strong>.
          At the <strong className="text-black font-semibold">Massachusetts Institute of Technology (1992–1994)</strong>, I completed my{" "}
          <strong className="text-black font-semibold">
            Master of Science in Architectural Studies (SMArchS)
          </strong>
          , supporting myself as a teaching and research assistant and working in a café on the department floor. These years extended my focus beyond design into
          history, theory, and criticism—disciplines that sharpened the{" "}
          <strong className="text-black font-semibold">
            strategic approach to architectural leadership
          </strong>{" "}
          I carry today.
        </p>
        <p>
          In <strong className="text-black font-semibold">2004</strong>, I became a licensed
          architect in the State of New York and a{" "}
          <strong className="text-black font-semibold">LEED Accredited Professional</strong>.
        </p>
      </ContentBlock>

      {/* Credentials */}
      <ImagePanel
        src="/images/public/credentials.png"
        alt="Credentials & Milestones — AIA, LEED, NY Registration, MIT, University of Baghdad"
      />

      <ContentBlock>
        <p>Those years built the foundation for the public impact that followed.</p>
      </ContentBlock>

      {/* ═══ BLACK BANNER 2 ═══ */}
      <BlackBanner title="A Voice for the Profession" />
      <ContentBlock>
        <p>
          Architecture carries responsibilities beyond buildings. Through professional service, public dialogue, education, and international recognition, Raya Ani contributes to advancing the architectural profession and its role in society. Raya Ani also engages a global audience through digital platforms, where her professional work, lectures, and commentary reach a community of more than 100,000 followers across LinkedIn, Facebook, and Instagram.
        </p>
      </ContentBlock>

      {/* Sub-section: Recognition */}
      <ContentBlock>
        <p>
          Raya Ani's contributions to architecture and public life have been recognized through national and international honors reflecting leadership, professional service, and influence on the built environment. In 2016, she was selected by Cadillac and Black Tomato as one of the most influential global figures. She was elevated to{" "}
          <strong className="text-black font-semibold">Fellow of the American Institute of Architects (FAIA)</strong> in 2019, one of the highest membership honors. Her work advancing environmental responsibility and civic engagement was recognized with the{" "}
          <strong className="text-black font-semibold">Takreem Award for Environmental Development and Sustainability</strong> in 2021, and she was named to{" "}
          <strong className="text-black font-semibold">Forbes 50 Over 50: EMEA</strong> in 2022, recognizing women whose work is shaping global industries and public life.
        </p>
        <p>
          Her leadership has also been acknowledged repeatedly by the architectural press and professional organizations. She has been included in the{" "}
          <strong className="text-black font-semibold">Middle East Architect Power List</strong> across multiple years (2015, 2016, 2017, 2018, 2019, 2022, 2023, 2024, and 2025), and recognized among Influential Arab Women in Business (2021) and with the Middle East Women Leadership Award (2018). These recognitions reflect the broader impact of her work across architecture, sustainability, and professional leadership at both national and international levels.
        </p>
      </ContentBlock>

      {/* Recognition Images */}
      <ImagePanel
        src="/images/public/recognition.png"
        alt="Recognition — Power Lists, Forbes 50 Over 50, FAIA Fellowship, UNESCO Jury President"
      />

      {/* Sub-section: Professional Stewardship */}
      <RedSubTitle>Professional Stewardship of the Discipline</RedSubTitle>
      <ContentBlock>
        <p>
          The advancement of architecture also relies on professional stewardship through the evaluation of design excellence and cultural initiatives. Raya Ani has contributed to this role through service on major international juries. She served as{" "}
          <strong className="text-black font-semibold">Jury President for the UNESCO international competition</strong>{" "}
          for the reconstruction of the Al-Nouri Mosque Complex in Mosul (2020), an initiative of global cultural and architectural significance. She also served as Jury Chair for the AIA Middle East Design Awards (2019) and on the jury panel for the Middle East Architect Awards (2019), participating in the evaluation of architectural work across the region. In 2018, she launched the{" "}
          <strong className="text-black font-semibold">Zukak & Mahala Initiative</strong>, a community empowerment program focused on rebuilding Iraqi communities and supporting local leadership through architecture and civic engagement.
        </p>
      </ContentBlock>

      {/* Awards */}
      <ImagePanel
        src="/images/public/awards.png"
        alt="Awards & Honors — Takreem, IDA Gold Winner, RTF Awards, AIA Merit Awards"
      />

      {/* Sub-section: Public Dialogue */}
      <RedSubTitle>Public Dialogue and Global Forums</RedSubTitle>
      <ContentBlock>
        <p>
          Architecture evolves through dialogue across disciplines, cultures, and institutions. Raya Ani contributes to international conversations on innovation, sustainability, technology, and the social responsibilities of design through lectures, conferences, and media appearances across the United States, Europe, and the Middle East. She has been invited to speak at global forums including{" "}
          <strong className="text-black font-semibold">TEDx Baghdad (2022)</strong>, the{" "}
          <strong className="text-black font-semibold">AIA International Conference (2022)</strong>, the Global Real Estate Summit in New York (2020) and Barcelona (2022), the Smart Skyscraper Summit in Dubai (2014), Leaders in Architecture MENA (2018), the Harvard Arab Alumni Conference, and Cityscape Global in Dubai (2017).
        </p>
        <p>
          She has also delivered keynote lectures including an address at the Embassy of the Republic of Iraq in Vienna (2017). She served as curator, strategist, and speaker for the{" "}
          <strong className="text-black font-semibold">AIA Middle East International Conference "10,958 Days" (2017)</strong>, a conference exploring the future of the architectural profession over the next thirty years. She was a speaker at the Sustainability Innovation Forum (2024). In 2024 she delivered a keynote address at the Open Innovation Forum in Moscow, Russia, contributing to discussions on innovation and the future of sustainable cities. She spoke at the{" "}
          <strong className="text-black font-semibold">RIBA / AIA Middle East International Women's Day event "Inspire Inclusion" (2024)</strong>, contributing to discussions on leadership, inclusivity, and the future of the profession.
        </p>
        <p>
          Her architectural and artistic work was also showcased in a Los Angeles exhibition during Arab-American Heritage Month (2024), highlighting contributions of Arab architects to global design culture.
        </p>
      </ContentBlock>

      {/* Speaking Images */}
      <ImagePanel
        src="/images/public/speaking.png"
        alt="Speaking Engagements — TEDx Baghdad, AIA Conference, Global Real Estate Summit, and more"
      />

      {/* Sub-section: Academic */}
      <RedSubTitle>Academic Engagement and Mentorship</RedSubTitle>
      <ContentBlock>
        <p>
          Education plays an important role in shaping future generations of architects. Raya Ani has contributed to architectural education through teaching, research, and academic critique. She served as a Teaching Assistant at the{" "}
          <strong className="text-black font-semibold">Massachusetts Institute of Technology (1993–1994)</strong> within the Aga Khan Program for Islamic Architecture and later taught urban design and architecture studios at the{" "}
          <strong className="text-black font-semibold">Boston Architectural Center (1995)</strong>. She has also served as a guest critic and lecturer at institutions including Columbia University, the Catholic University of America, Fashion Institute of Technology, New York School of Interior Design, and Zayed University, contributing to design reviews, studio instruction, and professional dialogue with emerging architects. Her academic research at MIT was published in{" "}
          <em>The Papers</em>, the journal of the Aga Khan Program for Islamic Architecture, exploring the cultural reading of Iraqi domestic architecture.
        </p>
      </ContentBlock>

      {/* Academic Institutions */}
      <ImagePanel
        src="/images/public/academic.png"
        alt="Academic Experience — MIT, Columbia University, FIT, AUS, Zayed University"
      />

      {/* Sub-section: Publications */}
      <RedSubTitle>Publications and Media Coverage</RedSubTitle>
      <ContentBlock>
        <p>
          Raya Ani's work and ideas have been featured in international architectural, cultural, and mainstream media, contributing to public understanding of architecture's role in society. Her projects and research have been covered by publications including{" "}
          <strong className="text-black font-semibold">Fast Company, Inhabitat, Grist, Green Prophet, designMENA, Middle East Architect</strong>, and Construction Week, among others. Her work has also appeared in major newspapers and broadcast media, including Asharq Al-Awsat, Khaleej Times, NRC Media (Netherlands), and television networks across the Middle East.
        </p>
        <p>
          Coverage of her Liberland masterplan proposal, sustainable urban research, and regional architectural initiatives has contributed to global discussions on ecological design, emerging urban models, and the future of cities. Her work has also appeared on the covers of publications including WKND Magazine and Al-Shabaka Al-Iraqiya.
        </p>
        <p>
          Her work and perspectives on architecture and sustainability have also been discussed in broadcast interviews with outlets including BLINX, Dubai TV, NBC, Arab TV, Al Sharqiya, Sky News Arabia, and Abu Dhabi TV. She has also been invited to discuss sustainability and the built environment on international television platforms, including a 2024 live interview on BLINX and a Dubai TV interview on sustainable innovation in architecture.
        </p>
      </ContentBlock>

      {/* Media & Publications */}
      <ImagePanel
        src="/images/public/media.png"
        alt="Media Coverage — WKND, Top Architects, designMENA, Emirates Magazine, Inhabitat"
      />

      {/* TV Interviews */}
      <ImagePanel
        src="/images/public/interviews.png"
        alt="TV Interviews — Al Sharqiya, NBC, MSNBC, Arab TV, Sky News Arabia, Abu Dhabi TV"
      />

      {/* ═══ BLACK BANNER 3 ═══ */}
      <PressArchive />
      <SiteFooter />
    </div>
  );
};

export default PublicSection;
