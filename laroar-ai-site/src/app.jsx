import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Stethoscope, GraduationCap, Users, ShieldCheck, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Brain,
    title: "AI Training for Businesses",
    description:
      "Hands-on workshops for teams to understand, use, and govern AI safely across operations, healthcare, and education.",
  },
  {
    icon: GraduationCap,
    title: "Custom Training Programs",
    description:
      "Tailored learning programs for organizations—designed around your workflows, staff roles, and real-world use cases.",
  },
  {
    icon: Users,
    title: "Workforce AI Upskilling",
    description:
      "Programs that build confidence and practical skills so teams can integrate AI into their day-to-day work.",
  },
  {
    icon: Stethoscope,
    title: "AI Strategy & Advisory",
    description:
      "Guidance for leaders on adopting AI ethically, selecting tools, and building sustainable implementation plans.",
  },
];

const highlights = [
  "Corporate experience across operations, strategy, and delivery",
  "Responsible AI adoption aligned with business goals",
  "Scalable training designed for fast-paced corporate environments",
  "Tailored AI strategies aligned to your organisation’s workflows",
];

const stats = [
  { value: "20+", label: "years of combined health and learning experience" },
  { value: "100+", label: "training sessions and strategic engagements delivered" },
  { value: "50k+", label: "learners and professionals reached through programs" },
];

const logos = ["Partner One", "Partner Two", "Partner Three", "Partner Four", "Partner Five", "Partner Six"];

function Card({ className = "", children }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function Button({ className = "", variant = "primary", children, href = "#contact" }) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`}>
      {children}
    </a>
  );
}

function Input(props) {
  return <input {...props} />;
}

function Textarea(props) {
  return <textarea {...props} />;
}

function LaroarLogo({ compact = false }) {
  return (
    <div className="logo-wrap">
      <svg
        width={compact ? "42" : "54"}
        height={compact ? "42" : "54"}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-mark"
        aria-label="Laroar AI logo"
      >
        <path d="M12 8V40C12 49.9411 20.0589 58 30 58H44V44H30C27.7909 44 26 42.2091 26 40V8H12Z" fill="#0D1B3D"/>
        <path d="M26 44H44V58H30C27.5 58 24.8 57.4 22.5 56.2C18.2 54 14.7 50.3 12.8 45.8C12.3 44.6 12 43.3 12 42H26V44Z" fill="url(#laroarGradient)"/>
        <rect x="36" y="16" width="12" height="12" rx="2" fill="#14B8A6"/>
        <defs>
          <linearGradient id="laroarGradient" x1="12" y1="50" x2="44" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6"/>
            <stop offset="1" stopColor="#6C3FF2"/>
          </linearGradient>
        </defs>
      </svg>
      {!compact && (
        <div className="logo-text">
          <div className="logo-name">
            <span className="navy">LAROAR</span>
            <span className="purple">AI</span>
          </div>
          <p>Consulting Ltd</p>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-block">
            <LaroarLogo />
            <div>
              <p className="tagline">Helping organisations adopt AI with confidence</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>

          <Button className="small-btn">Book a Consultation</Button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-copy">
              <div className="pill">
                <ShieldCheck size={16} />
                AI training & strategy for corporate, health, and education teams
              </div>

              <div>
                <h1>Helping organisations adopt AI with confidence</h1>
                <p className="hero-text">
                  We deliver AI training, strategy, and capacity-building programs that help corporate teams adopt AI responsibly—improving productivity, decision-making, and workforce performance.
                </p>
              </div>

              <div className="button-row">
                <Button className="large-btn">
                  Let's Talk <ArrowRight size={16} />
                </Button>
                <Button variant="outline" className="large-btn" href="#services">
                  Explore Services
                </Button>
              </div>

              <div className="stats-grid">
                {stats.map((stat) => (
                  <Card key={stat.label}>
                    <div className="stat-value">{stat.value}</div>
                    <p className="stat-label">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="hero-panel-wrap">
              <div className="glow glow-teal" />
              <div className="glow glow-purple" />
              <Card className="dark-panel">
                <div className="panel-header">
                  <div>
                    <p className="eyebrow on-dark">Readiness Snapshot</p>
                    <h3>Is your organization ready for AI-enabled learning?</h3>
                  </div>
                  <div className="icon-pill">
                    <Brain size={28} className="teal-icon" />
                  </div>
                </div>

                <div className="readiness-list">
                  {[
                    ["AI literacy", "Foundational"],
                    ["Workflow integration", "Developing"],
                    ["Governance & safety", "In progress"],
                    ["Learning systems", "High potential"],
                  ].map(([label, value]) => (
                    <div key={label} className="readiness-item">
                      <div className="readiness-top">
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                      <div className="bar">
                        <div className="fill" style={{ width: label === "Learning systems" ? "82%" : label === "Governance & safety" ? "54%" : label === "Workflow integration" ? "68%" : "61%" }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="panel-note">
                  Get a tailored roadmap for AI training, workforce readiness, and responsible adoption across your organization.
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <SectionHeading
              eyebrow="About"
              title="We sit at the intersection of public health, education, and responsible AI."
              description="Built for health-focused and mission-driven organizations, this studio blends strategy, training, and digital learning design to help teams grow their impact with clarity and confidence."
            />

            <div className="highlight-grid">
              {highlights.map((item) => (
                <Card key={item}>
                  <div className="highlight-row">
                    <CheckCircle2 size={20} className="teal-icon" />
                    <p>{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section section-soft">
          <div className="container">
            <SectionHeading
              eyebrow="Services"
              title="How we partner with organizations"
              description="From executive advisory to hands-on team training, every engagement is designed to help organizations adopt AI confidently and deliver better outcomes."
            />

            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Card className="service-card">
                      <div className="service-icon">
                        <Icon size={28} />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div className="learn-more">Learn more</div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="section">
          <div className="container approach-grid">
            <Card className="dark-panel">
              <p className="eyebrow on-dark">Why choose us</p>
              <h3>We speak the language of both care delivery and learning design.</h3>
              <p className="dark-copy">
                That means your strategy is grounded in real corporate environments—operations, teams, and delivery—not generic tech consulting.
              </p>
              <div className="point-list">
                {[
                  "Deep domain understanding in health and social impact",
                  "Training systems built for busy, resource-constrained teams",
                  "AI workflows designed with ethics, access, and trust in mind",
                ].map((point) => (
                  <div key={point} className="point-item">
                    <CheckCircle2 size={20} className="teal-icon" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="stack">
              <Card className="promise-card">
                <p className="promise-label">Our promise</p>
                <h3>AI systems designed for equity, inclusion, and real-world impact.</h3>
                <p>
                  We focus on empowering your people—using AI to enhance decision-making, improve efficiency, and support better outcomes without replacing human expertise.
                </p>
              </Card>

              <Card>
                <p className="muted-label">Trusted by mission-driven teams</p>
                <div className="logo-grid">
                  {logos.map((logo) => (
                    <div key={logo} className="logo-box">{logo}</div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-inner">
            <p className="cta-label">Ready to modernize your learning strategy?</p>
            <h2>Build smarter, AI-ready teams for modern organisations.</h2>
            <p className="cta-copy">
              Whether you need AI training, team upskilling, or strategic guidance, we help your organization adopt AI in a way that is practical, ethical, and sustainable.
            </p>
            <div className="button-row centered">
              <Button variant="secondary" className="large-btn">Schedule a Discovery Call</Button>
              <Button variant="ghost" className="large-btn">Download Capability Statement</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionHeading
                eyebrow="Contact"
                title="Let’s talk about your training, workforce, or AI strategy goals."
                description="Tell us what your organization is building, where your team needs support, and what outcomes you want to achieve."
              />
              <div className="contact-list">
                <div><Mail size={16} className="purple-icon" /> hello@laroar.ai</div>
                <div><Phone size={16} className="purple-icon" /> (555) 240-1188</div>
                <div><MapPin size={16} className="purple-icon" /> Dallas, Texas</div>
              </div>
            </div>

            <Card>
              <form className="contact-form">
                <div className="form-row">
                  <label>
                    <span>First name</span>
                    <Input placeholder="Jane" />
                  </label>
                  <label>
                    <span>Last name</span>
                    <Input placeholder="Doe" />
                  </label>
                </div>

                <label>
                  <span>Email</span>
                  <Input placeholder="jane@organization.org" />
                </label>

                <label>
                  <span>Organization</span>
                  <Input placeholder="Your organization" />
                </label>

                <label>
                  <span>How can we help?</span>
                  <Textarea placeholder="Tell us about your goals, audience, and timeline..." rows="6" />
                </label>

                <Button className="submit-btn">Send inquiry</Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-logo"><LaroarLogo compact /></div>
            <p className="footer-title">Laroar AI Consulting Ltd</p>
            <p>AI training and workforce strategy for corporate and mission-driven organisations.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
