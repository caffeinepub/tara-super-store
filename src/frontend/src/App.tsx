import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  CheckCircle2,
  Circle,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Shield,
  Star,
  Users,
  Wind,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PHONE = "9808091436";
const PHONE2 = "+977 9806513749";
const EMAIL = "hunumanparagliding@gmail.com";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Flights", href: "#adventures" },
  { label: "SIV Courses", href: "#adventures" },
  { label: "Tours", href: "#adventures" },
  { label: "Pilots", href: "#credentials" },
];

const ADVENTURES = [
  {
    emoji: "\u{1FA82}",
    title: "Tandem Flights",
    desc: "Soar above Pokhara's stunning Phewa Lake and Himalayan peaks with our certified APPI tandem pilot. No experience needed — pure exhilaration guaranteed.",
    price: "From NPR 8,000",
    duration: "30–45 min",
  },
  {
    emoji: "🎓",
    title: "SIV Courses",
    desc: "Safety & Incidents in Voltige — professional SIV training for paragliding pilots to master emergency maneuvers over Begnas Lake.",
    price: "Contact for pricing",
    duration: "3–5 days",
  },
  {
    emoji: "🗺️",
    title: "Tour Packages",
    desc: "Curated Pokhara sightseeing, Himalaya treks, and adventure combo packages. Bus, jeep, and bike rentals also available for independent exploration.",
    price: "Custom packages",
    duration: "Half-day to multi-day",
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

const QR_CODES = [
  {
    src: "/assets/uploads/img_6445-019d3906-088f-73e6-abfb-afc405478758-1.jpeg",
    label: "eSewa",
    color: "#6cc04a",
  },
  {
    src: "/assets/uploads/img_6438-019d37f8-acbc-74ea-a346-7a452942ecde-1.jpeg",
    label: "NIC Asia MoBank",
    color: "#003087",
  },
  {
    src: "/assets/uploads/img_6444-019d3856-7507-7017-a64b-d346278ef17a-1.jpeg",
    label: "Khalti",
    color: "#5c2d91",
  },
  {
    src: "/assets/uploads/img_6446-019d390d-1ec6-764d-b06d-19c1250ca14f-2.jpeg",
    label: "cityPAY",
    color: "#e63946",
  },
  {
    src: "/assets/uploads/img_6437-019d390d-1e81-76f8-9d6d-cbdd6618bb1a-1.jpeg",
    label: "MyPay",
    color: "#e6a817",
  },
];

function smoothScroll(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    adventure: "",
    persons: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="min-h-screen font-body"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.60 0.13 230) 0%, oklch(0.48 0.12 230) 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* STICKY NAVBAR */}
      <header
        className="sticky top-0 z-50 w-full shadow-card border-b border-white/20"
        style={{ background: "var(--pg-header)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <button
            type="button"
            onClick={() => smoothScroll("#home")}
            className="flex items-center gap-2.5 cursor-pointer"
            data-ocid="nav.link"
          >
            <span className="text-3xl">🪂</span>
            <div className="leading-tight">
              <div
                className="text-[13px] font-heading font-black uppercase tracking-widest"
                style={{ color: "var(--pg-navy)" }}
              >
                HANUMAN
              </div>
              <div
                className="text-[10px] font-heading font-bold uppercase tracking-widest"
                style={{ color: "var(--pg-sky)" }}
              >
                PARAGLIDING
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-heading font-semibold uppercase tracking-wide transition-colors hover:text-primary"
                style={{ color: "oklch(var(--foreground))" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => smoothScroll("#booking")}
              size="sm"
              className="hidden md:inline-flex text-white font-heading font-bold uppercase tracking-wide rounded-full px-5"
              style={{ background: "var(--pg-orange)", border: "none" }}
              data-ocid="nav.primary_button"
            >
              Book Now
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
              style={{ background: "var(--pg-header)" }}
            >
              <div className="px-4 pb-4 pt-2 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    data-ocid="nav.link"
                    className="block w-full text-left py-2.5 px-2 text-sm font-heading font-semibold uppercase tracking-wide rounded-md hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    smoothScroll("#booking");
                    setMenuOpen(false);
                  }}
                  data-ocid="nav.primary_button"
                  className="w-full mt-2 text-center text-sm font-heading font-bold text-white py-2.5 px-4 rounded-full uppercase tracking-wide"
                  style={{ background: "var(--pg-orange)" }}
                >
                  🪂 Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN SHEET */}
      <main className="max-w-[1100px] mx-auto my-6 bg-white rounded-3xl shadow-sheet overflow-hidden">
        {/* HERO */}
        <section
          id="home"
          className="relative w-full min-h-[560px] flex items-end"
          style={{
            backgroundImage:
              "url('/assets/generated/paragliding-hero.dim_1400x700.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,25,50,0.90) 0%, rgba(10,25,50,0.45) 45%, rgba(10,25,50,0.1) 100%)",
            }}
          />
          <div className="relative z-10 w-full px-8 sm:px-14 pb-14 pt-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="inline-block text-xs font-heading font-bold uppercase tracking-[0.3em] text-white/80 mb-4 px-4 py-1.5 rounded-full border border-white/30"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                Pokhara, Nepal
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black uppercase leading-[1.05] text-white mb-4"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
              >
                SOAR WITH THE GODS.
                <br />
                <span style={{ color: "oklch(0.75 0.16 55)" }}>
                  EXPERIENCE THE HIMALAYAS.
                </span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-8">
                Certified tandem paragliding over Phewa Lake &amp; Annapurna
                peaks with APPI licensed pilot Tsering Dorjee.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  onClick={() => smoothScroll("#booking")}
                  size="lg"
                  className="text-white font-heading font-bold uppercase tracking-wide rounded-full px-8 shadow-lg"
                  style={{ background: "var(--pg-orange)", border: "none" }}
                  data-ocid="hero.primary_button"
                >
                  BOOK YOUR TANDEM FLIGHT
                </Button>
                <Button
                  onClick={() => smoothScroll("#adventures")}
                  size="lg"
                  variant="outline"
                  className="font-heading font-bold uppercase tracking-wide rounded-full px-8 border-white/50 text-white bg-white/10 hover:bg-white/20"
                  data-ocid="hero.secondary_button"
                >
                  EXPLORE COURSES
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS STRIP */}
        <div
          className="grid grid-cols-3 divide-x divide-border"
          style={{ background: "var(--pg-navy)" }}
        >
          {[
            { icon: <Users size={20} />, value: "500+", label: "Happy Flyers" },
            {
              icon: <Star size={20} />,
              value: "APPI",
              label: "Certified Pilot",
            },
            {
              icon: <Shield size={20} />,
              value: "100%",
              label: "Safety First",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="py-5 flex flex-col items-center gap-1"
            >
              <div style={{ color: "oklch(0.75 0.16 55)" }}>{stat.icon}</div>
              <div className="text-white font-heading font-black text-xl">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs font-heading uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ADVENTURES */}
        <section
          id="adventures"
          className="py-16 px-6 sm:px-10"
          style={{ background: "white" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p
              className="text-xs font-heading font-bold uppercase tracking-[0.3em] mb-2"
              style={{ color: "var(--pg-sky)" }}
            >
              What We Offer
            </p>
            <h2
              className="text-3xl sm:text-4xl font-heading font-black uppercase"
              style={{ color: "var(--pg-navy)" }}
            >
              Explore Our Paragliding Adventures
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ADVENTURES.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="rounded-2xl overflow-hidden border border-border shadow-card flex flex-col"
                data-ocid={`adventures.item.${i + 1}`}
              >
                <div
                  className="p-6 flex flex-col flex-1"
                  style={{ background: "var(--pg-ice)" }}
                >
                  <div className="text-5xl mb-4">{adv.emoji}</div>
                  <h3
                    className="text-lg font-heading font-black uppercase mb-2"
                    style={{ color: "var(--pg-navy)" }}
                  >
                    {adv.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4 flex-1">
                    {adv.desc}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--pg-orange)" }}
                    >
                      {adv.price}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Wind size={12} />
                      {adv.duration}
                    </span>
                  </div>
                  <Button
                    onClick={() => smoothScroll("#booking")}
                    className="w-full text-white font-heading font-bold uppercase tracking-wide rounded-full"
                    style={{ background: "var(--pg-orange)", border: "none" }}
                    data-ocid={`adventures.button.${i + 1}`}
                  >
                    Book Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CREDENTIALS */}
        <section
          id="credentials"
          className="py-16 px-6 sm:px-10"
          style={{ background: "var(--pg-ice)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p
              className="text-xs font-heading font-bold uppercase tracking-[0.3em] mb-2"
              style={{ color: "var(--pg-sky)" }}
            >
              Certified &amp; Experienced
            </p>
            <h2
              className="text-3xl sm:text-4xl font-heading font-black uppercase"
              style={{ color: "var(--pg-navy)" }}
            >
              Safety &amp; Pilot Credentials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Pilot card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-card overflow-hidden"
            >
              <div className="h-2" style={{ background: "var(--pg-orange)" }} />
              <div className="p-7">
                <div className="flex gap-5 items-start mb-6">
                  <img
                    src="/assets/uploads/img_5093-019d3860-119e-721d-8fd0-1d3350036da1-1.png"
                    alt="Tsering Dorjee - APPI Pilot"
                    className="w-24 h-24 rounded-2xl object-cover border-2 shadow-card flex-shrink-0"
                    style={{ borderColor: "var(--pg-orange)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-heading font-bold uppercase tracking-widest mb-1"
                      style={{ color: "var(--pg-sky)" }}
                    >
                      Head Pilot &amp; Owner
                    </p>
                    <h3
                      className="text-2xl font-heading font-black"
                      style={{ color: "var(--pg-navy)" }}
                    >
                      Tsering Dorjee
                    </h3>
                    <p
                      className="text-sm font-semibold mt-1"
                      style={{ color: "var(--pg-orange)" }}
                    >
                      APPI SIV Pilot · Advanced SIV
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      License No. 10359
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: <Award size={15} />,
                      label: "Certification",
                      value: "APPI SIV Pilot · License No. 10359",
                    },
                    {
                      icon: <Star size={15} />,
                      label: "Rating",
                      value: "Advanced SIV Pilot · Pro Tandem",
                    },
                    {
                      icon: <Phone size={15} />,
                      label: "Contact",
                      value: PHONE2,
                    },
                    { icon: <Mail size={15} />, label: "Email", value: EMAIL },
                    {
                      icon: <MapPin size={15} />,
                      label: "Base",
                      value: "Paljorling Camp, Prithive Chowk, Pokhara",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--pg-orange)" }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-heading font-bold uppercase tracking-wide text-muted-foreground">
                          {item.label}:{" "}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--pg-navy)" }}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* APPI Evaluations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-card overflow-hidden"
            >
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: "var(--pg-navy)" }}
              >
                <div className="text-2xl">🪂</div>
                <div>
                  <div className="text-white font-heading font-black text-sm uppercase tracking-wider">
                    APPI Member Auto Evaluations
                  </div>
                  <div className="text-white/60 text-xs">
                    License No. 10359 · Tsering Dorjee · {PHONE2}
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <p
                  className="text-xs font-heading font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--pg-sky)" }}
                >
                  🪂 Paragliding
                </p>
                <div className="divide-y divide-border/50">
                  {PARAGLIDING_COURSES.map((course, i) => (
                    <div
                      key={course.name}
                      className="flex items-center justify-between py-2"
                      data-ocid={`evaluations.item.${i + 1}`}
                    >
                      <span
                        className="text-sm"
                        style={{
                          color:
                            course.status === "Full"
                              ? "oklch(var(--foreground))"
                              : "oklch(var(--muted-foreground))",
                          fontWeight: course.status === "Full" ? 700 : 400,
                        }}
                      >
                        {course.name}
                      </span>
                      {course.status === "Full" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          <CheckCircle2 size={12} /> Full
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs bg-gray-100 text-gray-400">
                          <Circle size={11} /> Empty
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p
                    className="text-xs font-heading font-bold uppercase tracking-widest mb-3"
                    style={{ color: "var(--pg-sky)" }}
                  >
                    ⚡ Power / Paratrick
                  </p>
                  <div
                    className="flex items-center justify-between py-2"
                    data-ocid="evaluations.item.16"
                  >
                    <span className="text-sm text-muted-foreground">
                      Paratrick
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs bg-gray-100 text-gray-400">
                      <Circle size={11} /> Empty
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* License certificate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 bg-white rounded-2xl shadow-card overflow-hidden"
          >
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ background: "var(--pg-orange)" }}
            >
              <Award size={20} className="text-white" />
              <div>
                <div className="text-white font-heading font-black text-sm uppercase tracking-wider">
                  APPI Member Proof Rating Certificate
                </div>
                <div className="text-white/80 text-xs">
                  Tsering Dorjee · License No. 10359
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
              <img
                src="/assets/uploads/img_6449-019d3b05-871f-76f8-ad07-2ec50043fe97-1.jpeg"
                alt="APPI Member Proof Rating Certificate"
                className="w-full sm:w-72 rounded-xl border border-border shadow-xs object-contain"
              />
              <div className="flex-1">
                <h4
                  className="text-lg font-heading font-black uppercase mb-3"
                  style={{ color: "var(--pg-navy)" }}
                >
                  Certified APPI Pilot
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Tsering Dorjee holds an official APPI membership rating as a
                  certified paragliding pilot with Advanced SIV and Pro Tandem
                  credentials — ensuring your flight is in the safest, most
                  experienced hands.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "License No.", value: "10359" },
                    { label: "Rating", value: "APPI 3 Pilot" },
                    { label: "Specialty", value: "Pro Tandem" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl p-3 text-center"
                      style={{ background: "var(--pg-ice)" }}
                    >
                      <div className="text-xs font-heading font-bold uppercase tracking-wide text-muted-foreground mb-1">
                        {item.label}
                      </div>
                      <div
                        className="text-sm font-heading font-black"
                        style={{ color: "var(--pg-orange)" }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BOOKING & CONTACT */}
        <section
          id="booking"
          className="py-16 px-6 sm:px-10"
          style={{ background: "white" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p
              className="text-xs font-heading font-bold uppercase tracking-[0.3em] mb-2"
              style={{ color: "var(--pg-sky)" }}
            >
              Ready to Fly?
            </p>
            <h2
              className="text-3xl sm:text-4xl font-heading font-black uppercase"
              style={{ color: "var(--pg-navy)" }}
            >
              Book Your Adventure &amp; Contact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-white rounded-2xl border border-border shadow-card p-6"
              data-ocid="booking.card"
            >
              <h3
                className="text-base font-heading font-black uppercase tracking-wide mb-5"
                style={{ color: "var(--pg-navy)" }}
              >
                Booking Inquiry
              </h3>
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center h-64 gap-4"
                  data-ocid="booking.success_state"
                >
                  <CheckCircle2 size={48} className="text-green-500" />
                  <p
                    className="text-center font-heading font-bold text-lg"
                    style={{ color: "var(--pg-navy)" }}
                  >
                    Thank you!
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    We will contact you at {formData.phone || "your number"} to
                    confirm your booking.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    data-ocid="booking.secondary_button"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="booking-name"
                      className="text-xs font-heading font-bold uppercase tracking-wide"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="booking-name"
                      placeholder="Ang Dorji Sherpa"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      required
                      className="mt-1"
                      data-ocid="booking.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="booking-phone"
                      className="text-xs font-heading font-bold uppercase tracking-wide"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="booking-phone"
                      type="tel"
                      placeholder="98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
                      required
                      className="mt-1"
                      data-ocid="booking.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="booking-date"
                      className="text-xs font-heading font-bold uppercase tracking-wide"
                    >
                      Preferred Date
                    </Label>
                    <Input
                      id="booking-date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, date: e.target.value }))
                      }
                      className="mt-1"
                      data-ocid="booking.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="booking-adventure"
                      className="text-xs font-heading font-bold uppercase tracking-wide"
                    >
                      Adventure Type
                    </Label>
                    <select
                      id="booking-adventure"
                      value={formData.adventure}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          adventure: e.target.value,
                        }))
                      }
                      required
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      data-ocid="booking.select"
                    >
                      <option value="">Select adventure...</option>
                      <option value="tandem">Tandem Paragliding</option>
                      <option value="siv">SIV Course</option>
                      <option value="tour">Tour Package</option>
                      <option value="transport">Transport / Rental</option>
                    </select>
                  </div>
                  <div>
                    <Label
                      htmlFor="booking-persons"
                      className="text-xs font-heading font-bold uppercase tracking-wide"
                    >
                      No. of Persons
                    </Label>
                    <Input
                      id="booking-persons"
                      type="number"
                      min="1"
                      placeholder="1"
                      value={formData.persons}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, persons: e.target.value }))
                      }
                      className="mt-1"
                      data-ocid="booking.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="booking-message"
                      className="text-xs font-heading font-bold uppercase tracking-wide"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="booking-message"
                      placeholder="Any questions or special requests..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, message: e.target.value }))
                      }
                      rows={3}
                      className="mt-1 resize-none"
                      data-ocid="booking.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white font-heading font-bold uppercase tracking-wide rounded-full"
                    style={{ background: "var(--pg-orange)", border: "none" }}
                    data-ocid="booking.submit_button"
                  >
                    <Send size={15} className="mr-2" /> Send Inquiry
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact + Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 flex flex-col gap-5"
            >
              <div className="bg-white rounded-2xl border border-border shadow-card p-6 flex-1">
                <h3
                  className="text-base font-heading font-black uppercase tracking-wide mb-5"
                  style={{ color: "var(--pg-navy)" }}
                >
                  Contact Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--pg-orange)" }}
                    >
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold uppercase tracking-wide text-muted-foreground">
                        Primary
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--pg-navy)" }}
                      >
                        <a
                          href={`tel:${PHONE}`}
                          className="hover:underline font-medium"
                          data-ocid="contact.link"
                        >
                          {PHONE}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--pg-orange)" }}
                    >
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold uppercase tracking-wide text-muted-foreground">
                        Pilot Direct
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--pg-navy)" }}
                      >
                        <a
                          href="tel:+9779806513749"
                          className="hover:underline font-medium"
                          data-ocid="contact.link"
                        >
                          {PHONE2}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--pg-orange)" }}
                    >
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold uppercase tracking-wide text-muted-foreground">
                        Email
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--pg-navy)" }}
                      >
                        <a
                          href={`mailto:${EMAIL}`}
                          className="hover:underline font-medium break-all"
                          data-ocid="contact.link"
                        >
                          {EMAIL}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--pg-orange)" }}
                    >
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold uppercase tracking-wide text-muted-foreground">
                        Address
                      </div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "var(--pg-navy)" }}
                      >
                        Paljorling Camp, Prithive Chowk, Pokhara, Nepal
                      </div>
                    </div>
                  </li>
                </ul>

                <Button
                  asChild
                  className="mt-6 w-full text-white font-heading font-bold uppercase tracking-wide rounded-full"
                  style={{ background: "var(--pg-sky)", border: "none" }}
                  data-ocid="contact.primary_button"
                >
                  <a href={`tel:${PHONE}`}>📞 Call Now</a>
                </Button>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-card">
                <iframe
                  title="Prithive Chowk, Pokhara"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.1!2d83.9860!3d28.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6c0fc5c71d43846!2sPrithvi%20Chowk%2C%20Pokhara!5e0!3m2!1sen!2snp!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* QR Payment codes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl border border-border shadow-card p-6"
              data-ocid="payment.card"
            >
              <h3
                className="text-base font-heading font-black uppercase tracking-wide mb-2"
                style={{ color: "var(--pg-navy)" }}
              >
                Scan &amp; Pay
              </h3>
              <p className="text-xs text-muted-foreground mb-5">
                Scan any QR code with your banking app to pay instantly.
              </p>
              <div className="space-y-4">
                {QR_CODES.map((qr, i) => (
                  <div
                    key={qr.label}
                    className="flex items-center gap-4 p-3 rounded-xl border border-border"
                    style={{ background: "var(--pg-ice)" }}
                    data-ocid={`payment.item.${i + 1}`}
                  >
                    <img
                      src={qr.src}
                      alt={`${qr.label} QR Code`}
                      className="w-16 h-16 rounded-lg object-contain border border-border bg-white"
                    />
                    <div>
                      <div
                        className="text-sm font-heading font-black"
                        style={{ color: qr.color }}
                      >
                        {qr.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Tsering Dorjee
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="mt-6 text-white"
        style={{ background: "var(--pg-navy)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-3xl">🪂</span>
              <div>
                <div className="text-sm font-heading font-black uppercase tracking-widest">
                  HANUMAN
                </div>
                <div
                  className="text-xs font-heading font-bold uppercase tracking-widest"
                  style={{ color: "oklch(0.75 0.16 55)" }}
                >
                  PARAGLIDING
                </div>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Nepal's trusted paragliding and adventure company in the heart of
              Pokhara.
            </p>
            <p className="text-xs text-white/40 mt-3">
              APPI Advanced SIV Pilot · License No. 10359
            </p>
          </div>

          <div>
            <h4
              className="text-xs font-heading font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.75 0.16 55)" }}
            >
              Address
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>Paljorling Camp, Prithive Chowk</li>
              <li>Pokhara, Nepal</li>
              <li className="mt-3">
                <a
                  href={`tel:${PHONE}`}
                  className="hover:text-white"
                  data-ocid="footer.link"
                >
                  📞 {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE2.replace(/\s/g, "")}`}
                  className="hover:text-white"
                  data-ocid="footer.link"
                >
                  📞 {PHONE2}
                </a>
              </li>
              <li className="break-all">
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white"
                  data-ocid="footer.link"
                >
                  ✉️ {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-heading font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.75 0.16 55)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {[
                { label: "About", href: "#credentials" },
                { label: "Flights", href: "#adventures" },
                { label: "Safety", href: "#credentials" },
                { label: "FAQ", href: "#booking" },
                { label: "Contact", href: "#booking" },
              ].map((link) => (
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
              className="text-xs font-heading font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.75 0.16 55)" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
                data-ocid="footer.link"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-ocid="footer.link"
              >
                <Instagram size={15} />
              </a>
            </div>
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
