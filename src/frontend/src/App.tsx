import { Button } from "@/components/ui/button";
import {
  Award,
  Building2,
  CheckCircle2,
  Circle,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  User,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#categories" },
  { label: "Evaluations", href: "#evaluations" },
  { label: "Contact", href: "#contact" },
];

const PHONE = "9808091436";
const EMAIL = "hunumanparagliding@gmail.com";
const COMPANY = "Hunuman Paragliding Company";

const SERVICES = [
  {
    emoji: "🪂",
    title: "Tandem Paragliding",
    desc: "Experience breathtaking tandem paragliding flights over Pokhara's stunning landscapes.",
  },
  {
    emoji: "🚌",
    title: "Bus & Jeep Transport",
    desc: "Reliable bus and jeep transport services for tours and transfers.",
  },
  {
    emoji: "🚲",
    title: "Bike Rental",
    desc: "Bike rentals for exploring Pokhara at your own pace.",
  },
  {
    emoji: "🗺️",
    title: "Tour Packages",
    desc: "Customized tour packages for adventure seekers and nature lovers.",
  },
];

const PARAGLIDING_COURSES = [
  { name: "APPI 1 Discover", status: "Empty" },
  { name: "APPI 2 Explore", status: "Empty" },
  { name: "APPI 3 Pilot", status: "Empty" },
  { name: "Dynamic Soaring", status: "Empty" },
  { name: "Winch", status: "Empty" },
  { name: "Thermalling", status: "Empty" },
  { name: "APPI 4 Progress", status: "Empty" },
  { name: "XC", status: "Empty" },
  { name: "SIV", status: "Empty" },
  { name: "Advanced SIV", status: "Empty" },
  { name: "APPI 5 Advanced", status: "Empty" },
  { name: "Non Commercial Tandem", status: "Empty" },
  { name: "Pro Tandem", status: "Full" },
  { name: "Assistant Instructor", status: "Empty" },
  { name: "APPI Instructor", status: "Empty" },
];

const POWER_COURSES = [{ name: "Paratrick", status: "Empty" }];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  function handleMobileNav(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="min-h-screen font-poppins"
      style={{ background: "var(--store-cream)" }}
    >
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 w-full shadow-xs border-b border-border"
        style={{ background: "var(--store-header)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-lg font-bold"
              style={{ background: "var(--store-orange)" }}
            >
              🪂
            </div>
            <div className="leading-tight">
              <div
                className="text-sm tracking-wide"
                style={{ color: "var(--store-orange)", fontWeight: 700 }}
              >
                HUNUMAN PARAGLIDING
              </div>
              <div
                className="text-[10px]"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                Company · Pokhara
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium transition-colors hover:text-primary"
                style={{ color: "oklch(var(--foreground))" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex text-white"
              style={{ background: "var(--store-orange)", border: "none" }}
              data-ocid="nav.primary_button"
            >
              <a href={`tel:${PHONE}`}>Call Us</a>
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md"
              onClick={() => setMenuOpen((p) => !p)}
              data-ocid="nav.toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border px-4 pb-4 pt-2"
            style={{ background: "var(--store-header)" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleMobileNav(link.href)}
                data-ocid="nav.link"
                className="block w-full text-left py-2 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${PHONE}`}
              data-ocid="nav.primary_button"
              className="mt-3 block w-full text-center text-sm font-semibold text-white py-2 px-4 rounded-lg"
              style={{ background: "var(--store-orange)" }}
            >
              📞 {PHONE}
            </a>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative w-full min-h-[520px] flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/tara-store-hero.dim_1400x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,30,60,0.88) 0%, rgba(10,30,60,0.55) 60%, rgba(10,30,60,0.2) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ background: "var(--store-orange)", color: "#fff" }}
            >
              Paragliding & Adventure · Pokhara
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              {COMPANY}
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
              Soar above Pokhara with Nepal's trusted paragliding company.
              Tandem flights, tours, and adventure transport — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="text-white font-semibold"
                style={{ background: "var(--store-orange)", border: "none" }}
                data-ocid="hero.primary_button"
              >
                <a href={`tel:${PHONE}`}>📞 Book Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold border-white text-white bg-white/10 hover:bg-white/20"
                data-ocid="hero.secondary_button"
              >
                <a href="#categories">Our Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="categories"
        className="py-14"
        style={{ background: "oklch(0.96 0.025 80)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ color: "oklch(var(--foreground))" }}
            >
              Our Services
            </h2>
            <p
              className="text-sm"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Adventure, transport, and tourism — all available from Hunuman
              Paragliding.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-xs hover:shadow-warm transition-shadow"
                data-ocid={`categories.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-2xl"
                  style={{ background: "oklch(0.93 0.04 60)" }}
                >
                  {svc.emoji}
                </div>
                <h3
                  className="font-semibold text-base mb-1"
                  style={{ color: "oklch(var(--foreground))" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {svc.desc}
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-white px-3 py-1.5 rounded-full"
                  style={{ background: "var(--store-orange)" }}
                  data-ocid={`service.call.${i + 1}`}
                >
                  📞 Call to Book
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBER AUTO EVALUATIONS */}
      <section
        id="evaluations"
        className="py-14"
        style={{ background: "var(--store-cream)" }}
        data-ocid="evaluations.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ color: "var(--store-orange)" }}
            >
              Member Auto Evaluations
            </h2>
            <p
              className="text-sm"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Official APPI pilot evaluation record for Hunuman Paragliding
              Company
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden"
          >
            {/* Card header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ background: "var(--store-orange)" }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-xl">
                🪂
              </div>
              <div>
                <div className="text-white font-bold text-base tracking-wide">
                  APPI Member Evaluations
                </div>
                <div className="text-white/80 text-xs">
                  Association of Paragliding Pilots and Instructors
                </div>
              </div>
            </div>

            {/* Member details */}
            <div
              className="px-6 py-4 flex flex-wrap gap-x-8 gap-y-2 border-b border-border text-sm"
              style={{ background: "oklch(0.98 0.01 80)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  License No:
                </span>
                <span
                  className="font-bold"
                  style={{ color: "var(--store-orange)" }}
                >
                  10359
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Name:
                </span>
                <span className="font-semibold">Tsering Dorjee</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  Tel:
                </span>
                <a
                  href="tel:+9779806513749"
                  className="font-semibold hover:underline"
                  style={{ color: "var(--store-orange)" }}
                  data-ocid="evaluations.link"
                >
                  +977 9806513749
                </a>
              </div>
            </div>

            {/* Paragliding courses */}
            <div className="px-6 pt-5 pb-3">
              <div
                className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                style={{ color: "var(--store-orange)" }}
              >
                <span>🪂</span> Paragliding
              </div>
              <div className="divide-y divide-border/60">
                {PARAGLIDING_COURSES.map((course, i) => (
                  <div
                    key={course.name}
                    className="flex items-center justify-between py-2.5"
                    data-ocid={`evaluations.item.${i + 1}`}
                  >
                    <span
                      className="text-sm"
                      style={{
                        color:
                          course.status === "Full"
                            ? "oklch(var(--foreground))"
                            : "oklch(var(--muted-foreground))",
                        fontWeight: course.status === "Full" ? 600 : 400,
                      }}
                    >
                      {course.name}
                    </span>
                    {course.status === "Full" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        <CheckCircle2 size={13} className="text-green-600" />
                        Full
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-400">
                        <Circle size={12} className="text-gray-300" />
                        Empty
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Power section */}
            <div className="px-6 pt-2 pb-5 border-t border-border/60 mt-1">
              <div
                className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 mt-4"
                style={{ color: "var(--store-orange)" }}
              >
                <span>⚡</span> Power
              </div>
              <div className="divide-y divide-border/60">
                {POWER_COURSES.map((course, i) => (
                  <div
                    key={course.name}
                    className="flex items-center justify-between py-2.5"
                    data-ocid={`evaluations.power.item.${i + 1}`}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      {course.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-400">
                      <Circle size={12} className="text-gray-300" />
                      Empty
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section
        id="about"
        className="py-16"
        style={{ background: "var(--store-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Company Information
            </h2>
            <p
              className="text-sm"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Come visit us or reach out — we're always here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-warm border border-border"
            >
              <iframe
                title="Prithive Chowk, Pokhara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.6!2d83.9856!3d28.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEyJzM0LjYiTiA4M8KwNTknMDguMiJF!5e0!3m2!1sen!2snp!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Company details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-xs border border-border"
            >
              <h3
                className="text-lg font-bold mb-5 pb-3 border-b border-border"
                style={{ color: "var(--store-orange)" }}
              >
                About the Company
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Building2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--store-orange)" }}
                  />
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Company Name
                    </div>
                    <div className="text-sm font-medium">{COMPANY}</div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Paragliding & Adventure
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <User
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--store-orange)" }}
                  />
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Owner
                    </div>
                    <div className="text-sm font-medium">Tsering Dorjee</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--store-orange)" }}
                  />
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      APPI License
                    </div>
                    <div className="text-sm font-medium">APPI S I V Pilot</div>
                    <div className="text-sm font-medium">License No. 10359</div>
                    <div className="text-sm font-medium">
                      Advanced S I V Pilot
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Tsering Dorjee
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--store-orange)" }}
                  />
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Address
                    </div>
                    <div className="text-sm font-medium">
                      Paljorling Camp, Prithive Chowk
                      <br />
                      Pokhara, Nepal
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--store-orange)" }}
                  />
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Phone
                    </div>
                    <a
                      href={`tel:${PHONE}`}
                      className="text-sm font-medium hover:underline block"
                      data-ocid="contact.link"
                    >
                      {PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--store-orange)" }}
                  />
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Email
                    </div>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-sm font-medium hover:underline block break-all"
                      data-ocid="contact.link"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--store-orange)" }}
                  />
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Hours
                    </div>
                    <div className="text-sm font-medium">
                      Open Daily: 7:00 AM – 9:00 PM
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Scan & Pay */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl p-7 shadow-warm border border-yellow-200"
              style={{ background: "var(--store-pay-card)" }}
              data-ocid="contact.card"
            >
              <h3
                className="text-lg font-bold mb-2 text-center"
                style={{ color: "oklch(var(--foreground))" }}
              >
                📲 Scan &amp; Pay
              </h3>
              <p
                className="text-xs text-center mb-5"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                Scan the QR code with your banking app to pay instantly.
              </p>

              {/* eSewa QR */}
              <div className="bg-white rounded-xl p-4 mb-4 flex flex-col items-center shadow-xs">
                <img
                  src="/assets/uploads/img_6445-019d3906-088f-73e6-abfb-afc405478758-1.jpeg"
                  alt="eSewa QR Code"
                  className="w-44 h-44 object-contain rounded-lg mb-2"
                />
                <div className="text-center">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#6cc04a" }}
                  >
                    eSewa
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    Tsering Dorje · 9766506189
                  </div>
                </div>
              </div>

              {/* NIC Asia QR */}
              <div className="bg-white rounded-xl p-4 mb-4 flex flex-col items-center shadow-xs">
                <img
                  src="/assets/uploads/img_6438-019d37d0-2f9e-72df-a037-0a9dde42aeb2-1.jpeg"
                  alt="NIC Asia MoBank QR Code"
                  className="w-44 h-44 object-contain rounded-lg mb-2"
                />
                <div className="text-center">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#003087" }}
                  >
                    NIC Asia MoBank
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    Mobile Banking Payment
                  </div>
                </div>
              </div>

              {/* MyPay QR */}
              <div className="bg-white rounded-xl p-4 mb-4 flex flex-col items-center shadow-xs">
                <img
                  src="/assets/uploads/img_6437-019d390d-1e81-76f8-9d6d-cbdd6618bb1a-1.jpeg"
                  alt="MyPay QR Code"
                  className="w-44 h-44 object-contain rounded-lg mb-2"
                />
                <div className="text-center">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#e6a817" }}
                  >
                    MyPay
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    Tsering Dorja · 9709422981
                  </div>
                </div>
              </div>

              {/* cityPAY QR */}
              <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-xs">
                <img
                  src="/assets/uploads/img_6446-019d390d-1ec6-764d-b06d-19c1250ca14f-2.jpeg"
                  alt="cityPAY QR Code"
                  className="w-44 h-44 object-contain rounded-lg mb-2"
                />
                <div className="text-center">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#e63946" }}
                  >
                    cityPAY
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(var(--muted-foreground))" }}
                  >
                    TSERING DORJA · +9779766506189
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section
        id="contact"
        className="py-10 text-center"
        style={{ background: "var(--store-orange)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-white mb-1">
            <Clock size={20} />
            <span className="text-lg font-semibold">
              Open Daily: 7:00 AM – 9:00 PM
            </span>
          </div>
          <p className="text-white/90 text-base">
            Paljorling Camp, Prithive Chowk, Pokhara
          </p>
          <p className="text-white/90 text-lg font-bold mt-1">
            <a
              href={`tel:${PHONE}`}
              className="hover:text-white transition-colors"
              data-ocid="contact.link"
            >
              📞 {PHONE}
            </a>
          </p>
          <p className="text-white/80 text-sm mt-1">
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-white transition-colors"
              data-ocid="contact.link"
            >
              ✉️ {EMAIL}
            </a>
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer
        style={{ background: "var(--store-footer)" }}
        className="text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: "var(--store-orange)" }}
              >
                🪂
              </div>
              <div>
                <div className="text-sm font-bold tracking-wide">
                  HUNUMAN PARAGLIDING
                </div>
                <div className="text-[10px] text-white/60">
                  Company · Pokhara
                </div>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Nepal's trusted paragliding and adventure company in the heart of
              Pokhara.
            </p>
          </div>

          <div>
            <h4
              className="text-sm font-semibold mb-3 uppercase tracking-wider"
              style={{ color: "var(--store-olive)" }}
            >
              Address
            </h4>
            <ul className="space-y-1.5 text-xs text-white/75">
              <li>Paljorling Camp, Prithive Chowk</li>
              <li>Pokhara, Nepal</li>
              <li className="mt-2">
                <a
                  href={`tel:${PHONE}`}
                  className="hover:text-white transition-colors"
                  data-ocid="footer.link"
                >
                  📞 {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors break-all"
                  data-ocid="footer.link"
                >
                  ✉️ {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold mb-3 uppercase tracking-wider"
              style={{ color: "var(--store-olive)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-white/75">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold mb-3 uppercase tracking-wider"
              style={{ color: "var(--store-olive)" }}
            >
              Social Media
            </h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                data-ocid="footer.link"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-ocid="footer.link"
              >
                <Instagram size={15} />
              </a>
            </div>
            <p className="text-xs text-white/50 mt-4">Owner: Tsering Dorjee</p>
            <p className="text-xs text-white/40 mt-1">
              🏅 APPI Advanced SIV Pilot · License No. 10359
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 text-center py-4 text-[11px] text-white/40">
          © {year}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            className="underline hover:text-white/70 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
