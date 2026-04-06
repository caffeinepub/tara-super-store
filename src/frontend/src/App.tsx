import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity,
  Award,
  Calendar,
  Car,
  ChevronDown,
  CreditCard,
  Globe,
  Heart,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Plane,
  Shield,
  ShoppingBag,
  Star,
  Wallet,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Constants ──────────────────────────────────────────────────────────────

const COMPANY = "New Para World Tsering Dorjee Company";
const OWNER = "Tsering Dorjee";
const EMAIL = "mypagentnewparaworld@gmail.com";
const BANK_WALLET_EMAIL = "therapisttseringdorjee@gmail.com";
const PHONE_PRIMARY = "9808091436";
const PHONE_2 = "9766047350";
const LICENSE_NO = "10359";
const ADDRESS = "Brunch Office Company, Bandipur, Pokhara, Nepal Sub-Metro";
const YEAR = new Date().getFullYear();
const HOSTNAME = encodeURIComponent(
  typeof window !== "undefined" ? window.location.hostname : "",
);

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "License", href: "#license" },
  { label: "Payment", href: "#payment" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Wind,
    label: "Tandem Paragliding",
    desc: "Soar over Pokhara's stunning Himalayan valley with a certified APPI pilot.",
    color: "text-blue-600",
  },
  {
    icon: Plane,
    label: "UltraLight Flight Booking",
    desc: "Book ultralight aircraft experiences over the lakes and mountains of Pokhara.",
    color: "text-cyan-600",
  },
  {
    icon: Globe,
    label: "Travels & Tours",
    desc: "Professional travels and tours packages across Nepal, including Pokhara sightseeing, trekking routes, and Himalayan destinations.",
    color: "text-orange-600",
  },
  {
    icon: Car,
    label: "Pathao Booking",
    desc: "Fast, reliable Pathao ride booking for your travel needs in Pokhara.",
    color: "text-indigo-600",
  },
  {
    icon: Zap,
    label: "inDrive Booking",
    desc: "Negotiate your fare with inDrive for city rides and outstation trips.",
    color: "text-sky-600",
  },
  {
    icon: Package,
    label: "Bus / Jeep / Bike Rental",
    desc: "Group and private transport rentals for tours and trekking routes.",
    color: "text-blue-700",
  },
  {
    icon: MapPin,
    label: "Tour Packages",
    desc: "Curated tour packages covering Annapurna, Phewa Lake, and more.",
    color: "text-teal-600",
  },
  {
    icon: Activity,
    label: "Acupuncture Therapy",
    desc: "Traditional acupuncture therapy by certified therapist Tsering Dorjee.",
    color: "text-emerald-600",
  },
  {
    icon: Zap,
    label: "Dry Needling",
    desc: "Advanced dry needling for pain relief and muscle recovery.",
    color: "text-green-600",
  },
  {
    icon: Heart,
    label: "Cupping Therapy",
    desc: "Therapeutic cupping sessions for relaxation and circulation.",
    color: "text-cyan-700",
  },
  {
    icon: Activity,
    label: "Moxibustion",
    desc: "Traditional moxibustion treatment for holistic wellness.",
    color: "text-teal-700",
  },
  {
    icon: Wallet,
    label: "Digital Wallet Sales",
    desc: "Buy and top up Khalti & eSewa digital wallets — fast and secure.",
    color: "text-blue-500",
  },
  {
    icon: ShoppingBag,
    label: "Daraz Sells Agent",
    desc: "Assisted Daraz online shopping and product sourcing service.",
    color: "text-indigo-500",
  },
];

const APPI_COURSES = [
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
  { name: "Power / Paratrick", status: "Empty" },
];

// ─── Scroll helper ───────────────────────────────────────────────────────────

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Components ─────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button
          type="button"
          className="font-heading font-bold text-lg text-[var(--hp-sky)] tracking-tight leading-tight text-left"
          onClick={() => scrollTo("#home")}
          data-ocid="nav.link"
        >
          <span className="block text-xs font-body font-semibold text-[var(--hp-muted)] uppercase tracking-widest">
            APPI Certified · Travels & Tours
          </span>
          New Para World
        </button>
        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-[var(--hp-mid)] hover:text-[var(--hp-sky)] hover:bg-blue-50 transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${PHONE_PRIMARY}`} className="ml-2">
            <Button
              size="sm"
              className="bg-[var(--hp-sky)] text-white hover:bg-[var(--hp-mid)]"
              data-ocid="nav.primary_button"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" /> Call Now
            </Button>
          </a>
        </nav>
        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-[var(--hp-mid)] hover:bg-blue-50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-blue-100 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollTo(link.href);
                  }}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-[var(--hp-mid)] hover:text-[var(--hp-sky)] hover:bg-blue-50 transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${PHONE_PRIMARY}`} className="mt-2">
                <Button
                  size="sm"
                  className="w-full bg-[var(--hp-sky)] text-white"
                  data-ocid="nav.primary_button"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" /> Call {PHONE_PRIMARY}
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.06 240) 0%, oklch(0.28 0.1 235) 40%, oklch(0.38 0.14 220) 70%, oklch(0.52 0.12 195) 100%)",
      }}
    >
      {/* Animated sky particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }, (_, i) => `cloud-${i}`).map((id) => (
          <motion.div
            key={id}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${((Number(id.split("-")[1]) * 17 + 40) % 240) + 40}px`,
              height: `${((Number(id.split("-")[1]) * 13 + 20) % 80) + 20}px`,
              top: `${(Number(id.split("-")[1]) * 23) % 80}%`,
              left: `${(Number(id.split("-")[1]) * 31) % 100}%`,
              borderRadius: "50%",
            }}
            animate={{
              x: [-20, 20, -20],
              opacity: [0.05, 0.18, 0.05],
            }}
            transition={{
              duration: 6 + (Number(id.split("-")[1]) % 6),
              repeat: Number.POSITIVE_INFINITY,
              delay: Number(id.split("-")[1]) % 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-white/90 text-xs font-semibold mb-5 tracking-wider uppercase">
              <Globe className="w-3.5 h-3.5" />
              Pokhara, Nepal · APPI Certified · Travels & Tours
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
              {COMPANY}
            </h1>
            <p className="text-white/75 text-sm font-semibold mb-4 tracking-wide uppercase">
              APPI Certified · Travels &amp; Tours · Therapy Services
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-[var(--hp-gold)]/20 text-[var(--hp-gold)] border border-[var(--hp-gold)]/40 font-semibold text-xs px-3 py-1">
                <Award className="w-3 h-3 mr-1.5" /> APPI SIV Pilot License No.{" "}
                {LICENSE_NO}
              </Badge>
              <Badge className="bg-white/15 text-white border border-white/25 text-xs px-3 py-1">
                <Shield className="w-3 h-3 mr-1.5" /> Advanced SIV Pilot
              </Badge>
              <Badge className="bg-white/15 text-white border border-white/25 text-xs px-3 py-1">
                <Globe className="w-3 h-3 mr-1.5" /> Travels & Tours
              </Badge>
              <Badge className="bg-white/15 text-white border border-white/25 text-xs px-3 py-1">
                <Activity className="w-3 h-3 mr-1.5" /> Acupuncture Therapist
              </Badge>
            </div>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
              Experience the thrill of tandem paragliding, professional travel &
              tour packages, and holistic therapy services — with Nepal's
              certified APPI pilot,{" "}
              <strong className="text-white">{OWNER}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="#book">
                <Button
                  size="lg"
                  className="bg-[var(--hp-gold)] hover:bg-[var(--hp-gold-deep)] text-white font-bold text-base px-8 shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#book");
                  }}
                  data-ocid="hero.primary_button"
                >
                  <Calendar className="w-5 h-5 mr-2" /> Book Now
                </Button>
              </a>
              <a href={`tel:${PHONE_PRIMARY}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-white/10 hover:bg-white/20 text-base font-semibold"
                  data-ocid="hero.secondary_button"
                >
                  <Phone className="w-5 h-5 mr-2" /> {PHONE_PRIMARY}
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`tel:${PHONE_2}`}>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white/80 hover:text-white hover:bg-white/15 text-sm"
                  data-ocid="hero.secondary_button"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" /> {PHONE_2}
                </Button>
              </a>
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Owner photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden bg-white/10">
                  <img
                    src="/assets/uploads/img_5093-019d3860-119e-721d-8fd0-1d3350036da1-1.png"
                    alt={`${OWNER} - APPI Certified Paragliding Pilot & Travels Tours`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[var(--hp-gold)] text-white rounded-2xl px-4 py-2 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wider">
                    APPI Pilot
                  </p>
                  <p className="text-sm font-extrabold">
                    License #{LICENSE_NO}
                  </p>
                </div>
              </motion.div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Star className="w-7 h-7 text-[var(--hp-gold)]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <button
            type="button"
            onClick={() => scrollTo("#services")}
            className="flex flex-col items-center gap-1 text-white/60 hover:text-white/90 transition-colors"
            aria-label="Scroll to services"
            data-ocid="hero.secondary_button"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-blue-100 text-[var(--hp-sky)] border-0 mb-3 text-xs font-semibold px-3 py-1">
            Our Services
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground mb-3">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From thrilling tandem paragliding and Travels & Tours packages to
            holistic therapy sessions — adventure and wellness in the heart of
            Pokhara.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          data-ocid="services.list"
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card
                className={`h-full border border-border hover:border-blue-200 hover:shadow-sky transition-all group${
                  svc.label === "Travels & Tours"
                    ? " ring-1 ring-orange-200 border-orange-100"
                    : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors${
                      svc.label === "Travels & Tours"
                        ? " bg-orange-50 group-hover:bg-orange-100"
                        : " bg-blue-50 group-hover:bg-blue-100"
                    }`}
                  >
                    <svc.icon className={`w-5 h-5 ${svc.color}`} />
                  </div>
                  <CardTitle className="text-base font-heading font-bold text-foreground">
                    {svc.label}
                    {svc.label === "Travels & Tours" && (
                      <Badge className="ml-2 bg-orange-100 text-orange-600 border-0 text-[10px] font-bold px-2 py-0.5 align-middle">
                        NEW
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {svc.desc}
                  </p>
                  <a href={`tel:${PHONE_PRIMARY}`}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-blue-200 text-[var(--hp-sky)] hover:bg-blue-50 text-xs font-semibold"
                      data-ocid={`services.button.${i + 1}`}
                    >
                      <Phone className="w-3 h-3 mr-1.5" /> Contact for Service
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section
      id="credentials"
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.06 240) 0%, oklch(0.25 0.09 235) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-white/10 text-white border border-white/20 mb-3 text-xs font-semibold px-3 py-1">
            APPI Credentials
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-3">
            Pilot Credentials
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            {OWNER} — APPI SIV Pilot License No. {LICENSE_NO} · Advanced SIV
            Pilot · Acupuncture Therapist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
          data-ocid="credentials.card"
        >
          {/* Pilot info badges */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {[
              {
                icon: Award,
                label: `APPI SIV Pilot License No. ${LICENSE_NO}`,
                gold: true,
              },
              { icon: Shield, label: "Advanced SIV Pilot", gold: false },
              { icon: Star, label: "Pro Tandem Certified", gold: false },
              { icon: Activity, label: "Acupuncture Therapist", gold: false },
            ].map((badge) => (
              <div
                key={badge.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${
                  badge.gold
                    ? "bg-[var(--hp-gold)]/15 border-[var(--hp-gold)]/40 text-[var(--hp-gold)]"
                    : "bg-white/10 border-white/20 text-white"
                }`}
                data-ocid="credentials.item.1"
              >
                <badge.icon className="w-4 h-4" />
                {badge.label}
              </div>
            ))}
          </div>

          {/* APPI Evaluation table */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[var(--hp-gold)]/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-[var(--hp-gold)]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg">
                  APPI Member Auto Evaluations
                </h3>
                <p className="text-white/60 text-sm">
                  {OWNER} · License No. {LICENSE_NO}
                </p>
              </div>
            </div>
            <div
              className="grid sm:grid-cols-2 gap-2 p-4"
              data-ocid="credentials.list"
            >
              {APPI_COURSES.map((course, i) => (
                <div
                  key={course.name}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-white/5 border border-white/10"
                  data-ocid={`credentials.item.${i + 4}`}
                >
                  <span className="text-white/80 text-sm font-medium">
                    {course.name}
                  </span>
                  <Badge
                    className={
                      course.status === "Full"
                        ? "bg-[var(--hp-gold)] text-white border-0 text-xs font-bold px-2.5"
                        : "bg-white/10 text-white/60 border border-white/20 text-xs px-2.5"
                    }
                  >
                    {course.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function License() {
  return (
    <section id="license" className="py-20 bg-[var(--hp-sky-pale)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Badge className="bg-blue-100 text-[var(--hp-sky)] border-0 mb-3 text-xs font-semibold px-3 py-1">
            Certification
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground mb-3">
            License & Rating Proof
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            APPI Member Proof Rating Certificate — Tsering Dorjee, License No.{" "}
            {LICENSE_NO}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
          data-ocid="license.card"
        >
          <Card className="border border-blue-100 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/assets/uploads/img_6449-019d3b05-871f-76f8-ad07-2ec50043fe97-1.jpeg"
                alt="APPI Member Proof Rating Certificate - Tsering Dorjee"
                className="w-full object-contain"
              />
            </CardContent>
            <div className="p-5 bg-blue-50 border-t border-blue-100">
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="bg-[var(--hp-sky)] text-white border-0 font-semibold px-3 py-1.5">
                  <Award className="w-3.5 h-3.5 mr-1.5" /> License No.{" "}
                  {LICENSE_NO}
                </Badge>
                <Badge className="bg-white text-[var(--hp-sky)] border border-blue-200 font-semibold px-3 py-1.5">
                  <Shield className="w-3.5 h-3.5 mr-1.5" /> APPI 3 Pilot /
                  Advanced SIV
                </Badge>
                <Badge className="bg-white text-[var(--hp-sky)] border border-blue-200 font-semibold px-3 py-1.5">
                  <Star className="w-3.5 h-3.5 mr-1.5" /> Blue Sky Paragliding
                </Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Payment() {
  return (
    <section id="payment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-blue-100 text-[var(--hp-sky)] border-0 mb-3 text-xs font-semibold px-3 py-1">
            Scan & Pay
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground mb-3">
            Payment Options
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Scan the QR code to pay instantly using your preferred digital
            wallet.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          data-ocid="payment.list"
        >
          {/* eSewa */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            data-ocid="payment.item.1"
          >
            <Card className="border border-border hover:shadow-sky hover:border-blue-200 transition-all h-full">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                  <Wallet className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-base font-heading font-bold">
                  eSewa
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img
                  src="/assets/uploads/img_6445-019d3906-088f-73e6-abfb-afc405478758-1.jpeg"
                  alt="eSewa QR Code - New Para World Tsering Dorjee Company"
                  className="w-full max-w-[180px] rounded-xl border border-green-100 shadow"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* NIC Asia MoBank */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-ocid="payment.item.2"
          >
            <Card className="border border-border hover:shadow-sky hover:border-blue-200 transition-all h-full">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="w-5 h-5 text-[var(--hp-sky)]" />
                </div>
                <CardTitle className="text-base font-heading font-bold">
                  NIC Asia MoBank
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img
                  src="/assets/uploads/img_6438-019d37f8-acbc-74ea-a346-7a452942ecde.jpeg"
                  alt="NIC Asia MoBank QR Code - New Para World Tsering Dorjee Company"
                  className="w-full max-w-[180px] rounded-xl border border-blue-100 shadow"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Khalti */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-ocid="payment.item.3"
          >
            <Card className="border border-border hover:shadow-sky hover:border-blue-200 transition-all h-full">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
                  <Wallet className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle className="text-base font-heading font-bold">
                  Khalti
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img
                  src="/assets/uploads/img_6444-019d3856-7507-7017-a64b-d346278ef17a.jpeg"
                  alt="Khalti QR Code - New Para World Tsering Dorjee Company"
                  className="w-full max-w-[180px] rounded-xl border border-purple-100 shadow"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* cityPAY */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            data-ocid="payment.item.4"
          >
            <Card className="border border-border hover:shadow-sky hover:border-blue-200 transition-all h-full">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="w-5 h-5 text-[var(--hp-sky)]" />
                </div>
                <CardTitle className="text-base font-heading font-bold">
                  cityPAY
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img
                  src="/assets/uploads/img_6446-019d3906-0a2a-77d7-ae00-7eee4e0ebbf8-2.jpeg"
                  alt="cityPAY QR Code - New Para World Tsering Dorjee Company"
                  className="w-full max-w-[180px] rounded-xl border border-blue-100 shadow"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* MyPay */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            data-ocid="payment.item.5"
          >
            <Card className="border border-border hover:shadow-sky hover:border-blue-200 transition-all h-full">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                  <Wallet className="w-5 h-5 text-[var(--hp-sky)]" />
                </div>
                <CardTitle className="text-base font-heading font-bold">
                  MyPay
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img
                  src="/assets/uploads/img_6437-019d390d-1e81-76f8-9d6d-cbdd6618bb1a-1.jpeg"
                  alt="MyPay QR Code - New Para World Tsering Dorjee Company"
                  className="w-full max-w-[180px] rounded-xl border border-blue-100 shadow"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Bank Wallet / PayPal — placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            data-ocid="payment.item.6"
          >
            <Card className="border border-border hover:shadow-sky hover:border-blue-200 transition-all h-full">
              <CardHeader className="text-center pb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="w-5 h-5 text-[var(--hp-sky)]" />
                </div>
                <CardTitle className="text-base font-heading font-bold">
                  Bank Wallet / PayPal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full max-w-[180px] h-[150px] rounded-xl border-2 border-dashed border-blue-200 bg-blue-50 flex flex-col items-center justify-center gap-2">
                    <CreditCard className="w-8 h-8 text-blue-300" />
                    <p className="text-xs text-blue-400 font-semibold text-center px-2">
                      QR Code Coming Soon
                    </p>
                  </div>
                  <div className="text-center space-y-1.5 mt-1">
                    <a
                      href={`tel:${PHONE_PRIMARY}`}
                      className="flex items-center justify-center gap-1.5 text-sm font-semibold text-[var(--hp-sky)] hover:text-[var(--hp-mid)] transition-colors"
                      data-ocid="payment.link"
                    >
                      <Phone className="w-3.5 h-3.5" /> {PHONE_PRIMARY}
                    </a>
                    <a
                      href={`mailto:${BANK_WALLET_EMAIL}`}
                      className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-[var(--hp-sky)] transition-colors break-all"
                      data-ocid="payment.link"
                    >
                      <Mail className="w-3 h-3 flex-shrink-0" />{" "}
                      {BANK_WALLET_EMAIL}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(
        `Booking request sent! We will contact you at ${phone} soon.`,
      );
      setName("");
      setPhone("");
      setDate("");
      setService("");
      setMessage("");
    }, 1200);
  }

  return (
    <section id="book" className="py-20 bg-[var(--hp-sky-pale)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-blue-100 text-[var(--hp-sky)] border-0 mb-3 text-xs font-semibold px-3 py-1">
            Reservations
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground mb-3">
            Book a Service
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill in the form and we will confirm your booking as soon as
            possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg mx-auto"
          data-ocid="booking.card"
        >
          <Card className="border border-blue-100 shadow-card">
            <CardHeader>
              <CardTitle className="font-heading font-bold text-xl">
                Booking Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                data-ocid="booking.modal"
              >
                <div className="space-y-1.5">
                  <Label
                    htmlFor="book-name"
                    className="text-sm font-semibold text-foreground"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="book-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="border-blue-200 focus:ring-blue-300"
                    required
                    data-ocid="booking.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="book-phone"
                    className="text-sm font-semibold text-foreground"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="book-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="border-blue-200 focus:ring-blue-300"
                    required
                    data-ocid="booking.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="book-date"
                    className="text-sm font-semibold text-foreground"
                  >
                    Preferred Date
                  </Label>
                  <Input
                    id="book-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border-blue-200 focus:ring-blue-300"
                    data-ocid="booking.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="book-service"
                    className="text-sm font-semibold text-foreground"
                  >
                    Service *
                  </Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger
                      id="book-service"
                      className="border-blue-200"
                      data-ocid="booking.select"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tandem-paragliding">
                        Tandem Paragliding
                      </SelectItem>
                      <SelectItem value="ultralight-flight">
                        UltraLight Flight Booking
                      </SelectItem>
                      <SelectItem value="travels-tours">
                        Travels & Tours
                      </SelectItem>
                      <SelectItem value="pathao">Pathao Booking</SelectItem>
                      <SelectItem value="indrive">inDrive Booking</SelectItem>
                      <SelectItem value="bus-jeep-bike">
                        Bus / Jeep / Bike Rental
                      </SelectItem>
                      <SelectItem value="tour-packages">
                        Tour Packages
                      </SelectItem>
                      <SelectItem value="acupuncture">
                        Acupuncture Therapy
                      </SelectItem>
                      <SelectItem value="dry-needling">Dry Needling</SelectItem>
                      <SelectItem value="cupping">Cupping Therapy</SelectItem>
                      <SelectItem value="moxibustion">Moxibustion</SelectItem>
                      <SelectItem value="digital-wallet">
                        Digital Wallet Sales
                      </SelectItem>
                      <SelectItem value="daraz">Daraz Sells Agent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="book-message"
                    className="text-sm font-semibold text-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="book-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any special requests or questions?"
                    rows={3}
                    className="border-blue-200 focus:ring-blue-300 resize-none"
                    data-ocid="booking.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[var(--hp-sky)] hover:bg-[var(--hp-mid)] text-white font-bold text-base py-2.5"
                  data-ocid="booking.submit_button"
                >
                  {submitting ? "Sending..." : "Send Booking Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-blue-100 text-[var(--hp-sky)] border-0 mb-3 text-xs font-semibold px-3 py-1">
            Get in Touch
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Reach us by phone or email — we are happy to help you plan your
            adventure or travel.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {/* Phone numbers */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-blue-100 shadow-card h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                  <Phone className="w-5 h-5 text-[var(--hp-sky)]" />
                </div>
                <CardTitle className="font-heading font-bold text-lg">
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {[
                  { number: PHONE_PRIMARY, label: "Owner / Primary" },
                  { number: PHONE_2, label: "Alternate" },
                ].map((p, i) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number}`}
                    data-ocid={`contact.button.${i + 1}`}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start border-blue-200 text-[var(--hp-sky)] hover:bg-blue-50 font-semibold"
                    >
                      <Phone className="w-4 h-4 mr-2 text-[var(--hp-sky)]" />
                      <span className="flex-1">{p.number}</span>
                      <span className="text-xs text-muted-foreground font-normal ml-2">
                        {p.label}
                      </span>
                    </Button>
                  </a>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Email + Address */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border border-blue-100 shadow-card h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                  <Mail className="w-5 h-5 text-[var(--hp-sky)]" />
                </div>
                <CardTitle className="font-heading font-bold text-lg">
                  Email & Location
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 group"
                  data-ocid="contact.link"
                >
                  <Mail className="w-4 h-4 text-[var(--hp-sky)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-[var(--hp-sky)] group-hover:underline break-all">
                    {EMAIL}
                  </span>
                </a>
                <Separator />
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--hp-sky)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Pokhara, Nepal
                    </p>
                    <p className="text-xs text-muted-foreground">{ADDRESS}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-blue-100 shadow-card"
          data-ocid="contact.card"
        >
          <iframe
            title="New Para World Tsering Dorjee Company Location - Pokhara Nepal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.2!2d83.9856!3d28.2096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPrithvi%20Chowk%2C%20Pokhara!5e0!3m2!1sen!2snp!4v1234567890"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-12 text-white"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.05 240) 0%, oklch(0.22 0.08 235) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-extrabold text-xl mb-2">
              {COMPANY}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              APPI Certified Tandem Paragliding, Travels & Tours, and Wellness
              Services in Pokhara, Nepal.
            </p>
            <Badge className="bg-[var(--hp-gold)]/20 text-[var(--hp-gold)] border border-[var(--hp-gold)]/30 text-xs">
              APPI License No. {LICENSE_NO}
            </Badge>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 mb-3">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                  data-ocid="footer.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 mb-3">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                data-ocid="footer.link"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--hp-cyan-light)]" />{" "}
                {PHONE_PRIMARY}
              </a>
              <a
                href={`tel:${PHONE_2}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                data-ocid="footer.link"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--hp-cyan-light)]" />{" "}
                {PHONE_2}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors break-all"
                data-ocid="footer.link"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--hp-cyan-light)] flex-shrink-0" />{" "}
                {EMAIL}
              </a>
              <div className="flex items-start gap-2 text-xs text-white/50">
                <MapPin className="w-3.5 h-3.5 text-[var(--hp-cyan-light)] flex-shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {YEAR} {COMPANY} · {OWNER} · APPI SIV Pilot License No.{" "}
            {LICENSE_NO} · Advanced SIV Pilot · Pokhara, Nepal
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${HOSTNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
            data-ocid="footer.link"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Credentials />
        <License />
        <Payment />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
