import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Navigation,
  Phone,
  QrCode,
  Send,
  Shield,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PHONE_PRIMARY = "9808091436";
const PHONE_SECONDARY = "";
const PHONE_PILOT = PHONE_PRIMARY;
const COMPANY_NAME = "Hunuman Paragliding Company";
const OWNER_NAME = "Tsering Dorjee";
const EMAIL = "hunumanparagliding@gmail.com";
const LICENSE_NO = "10359";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "License", href: "#license" },
  { label: "Payment", href: "#payment" },
  { label: "Book", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Wind,
    title: "Tandem Paragliding",
    badge: "Most Popular",
    description:
      "Experience the thrill of paragliding with our APPI certified Advanced SIV pilot. Safe, exhilarating tandem flights over the stunning Pokhara valley.",
    color: "sky",
  },
  {
    icon: Zap,
    title: "UltraLight Flight",
    badge: "Book Now",
    description:
      "Experience the freedom of ultralight aviation over the stunning Pokhara valley. Book your UltraLight flight with our experienced APPI certified pilot Tsering Dorjee.",
    color: "amber",
  },
  {
    icon: Navigation,
    title: "Pathao Booking",
    badge: "New",
    description:
      "Book Pathao rides and delivery services through Hunuman Paragliding Company. Fast, reliable, and convenient Pathao booking assistance for your travel needs in Pokhara.",
    color: "green",
  },
  {
    icon: Shield,
    title: "SIV Training",
    badge: "Professional",
    description:
      "Advanced SIV (Simulation d'Incidents en Vol) training sessions with APPI License No. 10359 certified pilot. Enhance your safety and flying skills.",
    color: "teal",
  },
  {
    icon: Award,
    title: "Tour Packages",
    badge: "All Inclusive",
    description:
      "Complete adventure tour packages including paragliding, sightseeing, and transportation. Customized itineraries for individuals and groups.",
    color: "sky",
  },
  {
    icon: CheckCircle,
    title: "Transport Services",
    badge: "Available",
    description:
      "Bus, Jeep, and Bike rental services for travel around Pokhara and beyond. Reliable transport for your adventure activities and city tours.",
    color: "teal",
  },
];

const evaluations = [
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    date: "",
    serviceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getServiceColor = (color: string) => {
    switch (color) {
      case "sky":
        return {
          icon: "bg-sky-100 text-sky-600",
          badge: "bg-sky-100 text-sky-700",
          btn: "bg-sky-500 hover:bg-sky-400 text-white",
        };
      case "teal":
        return {
          icon: "bg-teal-100 text-teal-600",
          badge: "bg-teal-100 text-teal-700",
          btn: "bg-teal-600 hover:bg-teal-500 text-white",
        };
      case "amber":
        return {
          icon: "bg-amber-100 text-amber-600",
          badge: "bg-amber-100 text-amber-700",
          btn: "bg-amber-500 hover:bg-amber-400 text-white",
        };
      case "green":
        return {
          icon: "bg-green-100 text-green-600",
          badge: "bg-green-100 text-green-700",
          btn: "bg-green-600 hover:bg-green-500 text-white",
        };
      default:
        return {
          icon: "bg-sky-100 text-sky-600",
          badge: "bg-sky-100 text-sky-700",
          btn: "bg-sky-500 hover:bg-sky-400 text-white",
        };
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAVBAR */}
      <header
        className="sticky top-0 z-50 bg-[oklch(0.14_0.03_220)] border-b border-white/10 shadow-lg"
        data-ocid="nav.panel"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              className="flex items-center gap-2"
              data-ocid="nav.link"
            >
              <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-base text-white leading-tight">
                Hunuman Paragliding
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-white/70 hover:text-sky-400 transition-colors rounded-md hover:bg-white/5"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${PHONE_PRIMARY}`}>
                <Button
                  size="sm"
                  className="ml-2 bg-sky-500 hover:bg-sky-400 text-white"
                  data-ocid="nav.primary_button"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  Call Now
                </Button>
              </a>
            </nav>
            <button
              className="md:hidden p-2 rounded-md text-white/70 hover:text-sky-400 hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              type="button"
              data-ocid="nav.toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 bg-[oklch(0.14_0.03_220)] overflow-hidden"
              data-ocid="nav.dropdown_menu"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2.5 text-sm font-medium text-white/70 hover:text-sky-400 hover:bg-white/5 rounded-md transition-colors"
                    onClick={() => setMenuOpen(false)}
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                ))}
                <a href={`tel:${PHONE_PRIMARY}`} className="mt-1">
                  <Button
                    className="w-full bg-sky-500 hover:bg-sky-400 text-white"
                    data-ocid="nav.primary_button"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.14_0.06_220)] via-[oklch(0.18_0.05_240)] to-[oklch(0.12_0.03_200)] py-28 sm:py-36"
          data-ocid="home.section"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff opacity=0.03%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-500 opacity-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-400 opacity-10 -translate-x-1/3 translate-y-1/3" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <Badge className="mb-4 bg-sky-500 text-white border-0 px-3 py-1 text-xs font-medium tracking-wide uppercase">
                APPI Certified · Pro Tandem Pilot
              </Badge>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {COMPANY_NAME}
              </h1>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-3">
                Soar above Pokhara with Nepal's APPI certified Advanced SIV
                pilot. Safe, thrilling, and unforgettable paragliding
                experiences.
              </p>
              <p className="text-base text-white/60 mb-8">
                Pilot:{" "}
                <span className="text-sky-400 font-semibold">{OWNER_NAME}</span>{" "}
                &nbsp;|&nbsp; APPI License No.{" "}
                <span className="text-sky-400 font-semibold">{LICENSE_NO}</span>{" "}
                &nbsp;|&nbsp; Advanced SIV Pilot
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${PHONE_PRIMARY}`}>
                  <Button
                    size="lg"
                    className="bg-sky-500 hover:bg-sky-400 text-white shadow-lg w-full sm:w-auto"
                    data-ocid="hero.primary_button"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {PHONE_PRIMARY}
                  </Button>
                </a>
                {PHONE_SECONDARY && (
                  <a href={`tel:${PHONE_SECONDARY}`}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-sky-400/50 text-sky-300 hover:bg-sky-500/10 hover:text-white w-full sm:w-auto"
                      data-ocid="hero.secondary_button"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {PHONE_SECONDARY}
                    </Button>
                  </a>
                )}
                <a href="#booking">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Book Flight <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="py-20 bg-background"
          data-ocid="services.section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Professional paragliding, Pathao booking, and adventure services
                in Pokhara, Nepal.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => {
                const colors = getServiceColor(svc.color);
                return (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    data-ocid={`services.item.${i + 1}`}
                  >
                    <Card className="h-full flex flex-col border-border shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${colors.icon}`}
                        >
                          <svc.icon className="w-6 h-6" />
                        </div>
                        <Badge
                          variant="secondary"
                          className={`self-start text-xs mb-1 ${colors.badge}`}
                        >
                          {svc.badge}
                        </Badge>
                        <CardTitle className="font-heading text-lg">
                          {svc.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                          {svc.description}
                        </p>
                        <a href={`tel:${PHONE_PRIMARY}`}>
                          <Button
                            size="sm"
                            className={`w-full ${colors.btn}`}
                            data-ocid={`services.button.${i + 1}`}
                          >
                            <Phone className="w-3.5 h-3.5 mr-1.5" />
                            Call to Book
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PILOT CREDENTIALS */}
        <section
          id="credentials"
          className="py-20 bg-[oklch(0.13_0.04_220)]"
          data-ocid="credentials.section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <Badge className="mb-4 bg-sky-500 text-white border-0 text-xs uppercase tracking-wide">
                Certified Pilot
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
                APPI Member Auto Evaluations
              </h2>
              <p className="text-white/60 text-base">
                License No. {LICENSE_NO} &nbsp;|&nbsp; {OWNER_NAME}{" "}
                &nbsp;|&nbsp; Tel: {PHONE_PILOT}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Profile card */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-white/10 bg-white/5 text-white overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/assets/uploads/img_5093-019d3860-119e-721d-8fd0-1d3350036da1-1.png"
                      alt="Tsering Dorjee - APPI Pilot"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.04_220)] to-transparent" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-xl font-bold text-white">
                      {OWNER_NAME}
                    </h3>
                    <p className="text-sky-400 text-sm font-medium mt-0.5">
                      APPI Advanced SIV Pilot
                    </p>
                    <Separator className="bg-white/10 my-3" />
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2 text-white/70">
                        <Award className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>APPI SIV License No. {LICENSE_NO}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>
                          Pro Tandem:{" "}
                          <span className="text-sky-400 font-semibold">
                            Full
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                        <a
                          href={`tel:${PHONE_PILOT}`}
                          className="hover:text-sky-400 transition-colors"
                        >
                          {PHONE_PILOT}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Evaluation grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <Card className="border-white/10 bg-white/5 text-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white font-heading">
                      APPI Evaluation Card
                    </CardTitle>
                    <p className="text-white/50 text-sm">
                      First Name: Tsering &nbsp;|&nbsp; Last Name: Dorjee
                      &nbsp;|&nbsp; License No: {LICENSE_NO}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {evaluations.map((ev) => (
                        <div
                          key={ev.name}
                          className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                            ev.status === "Full"
                              ? "bg-sky-500/20 border border-sky-500/40"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <span className="text-sm text-white/80">
                            {ev.name}
                          </span>
                          <Badge
                            className={`text-xs border-0 ${
                              ev.status === "Full"
                                ? "bg-sky-500 text-white"
                                : "bg-white/10 text-white/50"
                            }`}
                          >
                            {ev.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LICENSE */}
        <section
          id="license"
          className="py-20 bg-background"
          data-ocid="license.section"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-sky-500 text-white border-0 text-xs uppercase tracking-wide">
                Verified
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
                License & Rating Proof
              </h2>
              <p className="text-muted-foreground">
                APPI Member Proof Rating Certificate — {OWNER_NAME}, License No.{" "}
                {LICENSE_NO}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-sky-600 to-sky-800 p-5 flex items-center gap-3">
                  <Award className="w-6 h-6 text-white" />
                  <div>
                    <p className="text-white font-semibold">
                      APPI Member Proof Rating
                    </p>
                    <p className="text-white/70 text-sm">
                      License No. {LICENSE_NO} · APPI 3 Pilot / Advanced SIV ·
                      Blue Sky Paragliding
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <img
                    src="/assets/uploads/img_6449-019d3b05-871f-76f8-ad07-2ec50043fe97-1.jpeg"
                    alt="APPI Member Proof Rating Certificate — Tsering Dorjee License 10359"
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* PAYMENT */}
        <section
          id="payment"
          className="py-20 bg-[oklch(0.97_0.01_220)]"
          data-ocid="payment.section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Scan &amp; Pay
              </h2>
              <p className="text-muted-foreground text-lg">
                Pay securely via MyPay or cityPAY bank wallet
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                data-ocid="payment.card.mypay"
              >
                <Card className="border-border shadow-lg overflow-hidden h-full">
                  <div className="bg-gradient-to-br from-sky-600 to-sky-800 p-5 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5">
                      <QrCode className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">
                        MyPay
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                      <img
                        src="/assets/uploads/img_6437-019d390d-1e81-76f8-9d6d-cbdd6618bb1a-1.jpeg"
                        alt="MyPay QR Code — Hunuman Paragliding"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Scan to pay via MyPay
                    </p>
                    <p className="text-center text-xs text-muted-foreground mt-1">
                      {COMPANY_NAME}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                data-ocid="payment.card.citypay"
              >
                <Card className="border-border shadow-lg overflow-hidden h-full">
                  <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-5 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5">
                      <QrCode className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">
                        cityPAY / Bank Wallet
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                      <img
                        src="/assets/uploads/img_6446-019d390d-1ec6-764d-b06d-19c1250ca14f-2.jpeg"
                        alt="cityPAY Bank Wallet QR — Hunuman Paragliding"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Scan with your banking app
                    </p>
                    <p className="text-center text-xs text-muted-foreground mt-1">
                      {COMPANY_NAME}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BOOKING FORM */}
        <section
          id="booking"
          className="py-20 bg-background"
          data-ocid="booking.section"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <Badge className="mb-4 bg-sky-500 text-white border-0 text-xs uppercase tracking-wide">
                Book Now
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Book a Service
              </h2>
              <p className="text-muted-foreground">
                Fill in the form below and we'll confirm your booking.
              </p>
            </motion.div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  className="border-sky-200 bg-sky-50 text-center p-10"
                  data-ocid="booking.success_state"
                >
                  <CheckCircle className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-sky-700 mb-2">
                    Booking Request Sent!
                  </h3>
                  <p className="text-sky-600 text-sm mb-4">
                    We'll contact you shortly to confirm your booking.
                  </p>
                  <a href={`tel:${PHONE_PRIMARY}`}>
                    <Button className="bg-sky-500 hover:bg-sky-400 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call {PHONE_PRIMARY}
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ) : (
              <Card className="border-border shadow-md">
                <CardContent className="p-8">
                  <form
                    onSubmit={handleBooking}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        value={booking.name}
                        onChange={(e) =>
                          setBooking((b) => ({ ...b, name: e.target.value }))
                        }
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                        placeholder="Your full name"
                        data-ocid="booking.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        value={booking.phone}
                        onChange={(e) =>
                          setBooking((b) => ({ ...b, phone: e.target.value }))
                        }
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                        placeholder="Your phone number"
                        data-ocid="booking.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="booking-service"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Service Type *
                      </label>
                      <Select
                        required
                        value={booking.serviceType}
                        onValueChange={(val) =>
                          setBooking((b) => ({ ...b, serviceType: val }))
                        }
                      >
                        <SelectTrigger
                          id="booking-service"
                          className="w-full focus:ring-sky-400"
                          data-ocid="booking.select"
                        >
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tandem-paragliding">
                            Tandem Paragliding
                          </SelectItem>
                          <SelectItem value="ultralight-flight">
                            UltraLight Flight
                          </SelectItem>
                          <SelectItem value="pathao-booking">
                            Pathao Booking
                          </SelectItem>
                          <SelectItem value="siv-training">
                            SIV Training
                          </SelectItem>
                          <SelectItem value="tour-package">
                            Tour Package
                          </SelectItem>
                          <SelectItem value="transport-service">
                            Transport Service
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="booking-date"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Preferred Date *
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        required
                        value={booking.date}
                        onChange={(e) =>
                          setBooking((b) => ({ ...b, date: e.target.value }))
                        }
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                        data-ocid="booking.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="booking-message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="booking-message"
                        rows={3}
                        value={booking.message}
                        onChange={(e) =>
                          setBooking((b) => ({ ...b, message: e.target.value }))
                        }
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-sky-400 transition resize-none"
                        placeholder="Number of passengers, pickup location, special requests..."
                        data-ocid="booking.textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-sky-500 hover:bg-sky-400 text-white w-full py-3 text-base font-semibold"
                      data-ocid="booking.submit_button"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-[oklch(0.14_0.06_220)] to-[oklch(0.12_0.03_200)]"
          data-ocid="contact.section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
                Contact Us
              </h2>
              <p className="text-white/70 text-lg">
                Ready to fly or book? Get in touch today.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                {
                  label: "Owner Mobile",
                  value: PHONE_PRIMARY,
                  href: `tel:${PHONE_PRIMARY}`,
                },
                {
                  label: "Email",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                  icon: "mail",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`contact.card.${i + 1}`}
                >
                  <Card className="border-0 bg-white/10 text-white h-full">
                    <CardContent className="p-6 text-center flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-sky-500/30 flex items-center justify-center">
                        {item.icon === "mail" ? (
                          <Mail className="w-5 h-5 text-sky-300" />
                        ) : (
                          <Phone className="w-5 h-5 text-sky-300" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1">
                          {item.label}
                        </p>
                        <p className="text-white/70 text-xs break-all">
                          {item.value}
                        </p>
                      </div>
                      <a href={item.href} className="mt-auto w-full">
                        <Button
                          size="sm"
                          className="w-full bg-sky-500 hover:bg-sky-400 text-white border-0"
                        >
                          {item.icon === "mail" ? "Send Email" : "Call Now"}
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-2 mt-8 text-white/50 text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Pokhara, Nepal</span>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="bg-[oklch(0.10_0.03_220)] text-white py-12"
        data-ocid="footer.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
                  <Wind className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-bold text-white">
                  Hunuman Paragliding
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                APPI Certified Advanced SIV Pilot · License No. {LICENSE_NO} ·
                Pro Tandem · Pathao Booking
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-sky-400 text-sm transition-colors"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">
                Contact
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  {PHONE_PRIMARY}
                </li>
                {PHONE_SECONDARY && (
                  <li className="flex items-center gap-2 text-white/50 text-sm">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    {PHONE_SECONDARY}
                  </li>
                )}
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  {EMAIL}
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  Pokhara, Nepal
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-white/10 mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
              reserved.
            </p>
            <p>
              Pilot: {OWNER_NAME} | APPI SIV License No. {LICENSE_NO} | Advanced
              SIV Pilot
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
