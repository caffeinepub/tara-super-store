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
  Car,
  CheckCircle,
  ChevronRight,
  CreditCard,
  Globe,
  Mail,
  MapPin,
  Menu,
  Navigation,
  Phone,
  QrCode,
  Send,
  Shield,
  ShoppingBag,
  Stethoscope,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const PHONE_PRIMARY = "9808091436";
const PHONE_SECONDARY = "9766047350";
const COMPANY_NAME = "New Para World Tsering Dorjee Company";
const OWNER_NAME = "Tsering Dorjee";
const EMAIL = "mypagentnewparaworld@gmail.com";
const ADDRESS = "Brunch Office Company, Bandipur, Pokhara, Nepal Sub-Metro";
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
    title: "UltraLight Flight Booking",
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
      "Book Pathao rides and delivery services through New Para World Tsering Dorjee Company. Fast, reliable, and convenient Pathao booking assistance for your travel needs.",
    color: "green",
  },
  {
    icon: Car,
    title: "inDrive Booking",
    badge: "Available",
    description:
      "Book inDrive rides through New Para World Tsering Dorjee Company. Affordable, transparent fare rides — your travel, your price. Convenient booking assistance in Pokhara.",
    color: "indigo",
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
      "Complete adventure tour packages including paragliding, sightseeing, and transportation. Customized itineraries for individuals and groups in Nepal.",
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
  {
    icon: CreditCard,
    title: "Digital Wallet Sales",
    badge: "Khalti / eSewa",
    description:
      "Buy and sell digital wallet credits — Khalti and eSewa — through New Para World Tsering Dorjee Company. Fast, secure top-ups for your digital payments.",
    color: "violet",
  },
  {
    icon: ShoppingBag,
    title: "Daraz Sells Agent",
    badge: "Agent",
    description:
      "Authorised Daraz sales agent. Browse, order, and receive products through our Daraz agent services. Call us to place your Daraz orders easily.",
    color: "orange",
  },
  {
    icon: Stethoscope,
    title: "Acupuncture Therapy",
    badge: "Therapist",
    description:
      "Professional acupuncture therapy, dry needling, cupping therapy, and moxibustion services by certified therapist Tsering Dorjee. Book your session today.",
    color: "rose",
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

const paymentMethods = [
  {
    name: "eSewa",
    gradient: "from-green-600 to-green-800",
    image:
      "/assets/uploads/img_6445-019d3906-088f-73e6-abfb-afc405478758-1.jpeg",
    alt: "eSewa QR Code — New Para World Tsering Dorjee Company",
    caption: "Scan to pay via eSewa",
    ocid: "payment.esewa.card",
  },
  {
    name: "NIC Asia MoBank",
    gradient: "from-blue-700 to-blue-900",
    image:
      "/assets/uploads/img_6438-019d37f8-acbc-74ea-a346-7a452942ecde-1.jpeg",
    alt: "NIC Asia MoBank QR Code — New Para World Tsering Dorjee Company",
    caption: "Scan to pay via NIC Asia MoBank",
    ocid: "payment.nicasia.card",
  },
  {
    name: "Khalti",
    gradient: "from-purple-600 to-purple-900",
    image:
      "/assets/uploads/img_6444-019d3856-7507-7017-a64b-d346278ef17a-1.jpeg",
    alt: "Khalti QR Code — New Para World Tsering Dorjee Company",
    caption: "Scan to pay via Khalti",
    ocid: "payment.khalti.card",
  },
  {
    name: "cityPAY / Bank Wallet",
    gradient: "from-teal-600 to-teal-800",
    image:
      "/assets/uploads/img_6446-019d3906-0a2a-77d7-ae00-7eee4e0ebbf8-2.jpeg",
    alt: "cityPAY Bank Wallet QR — New Para World Tsering Dorjee Company",
    caption: "Scan with your banking app",
    ocid: "payment.citypay.card",
  },
  {
    name: "MyPay",
    gradient: "from-sky-600 to-sky-800",
    image:
      "/assets/uploads/img_6437-019d390d-1e81-76f8-9d6d-cbdd6618bb1a-1.jpeg",
    alt: "MyPay QR Code — New Para World Tsering Dorjee Company",
    caption: "Scan to pay via MyPay",
    ocid: "payment.mypay.card",
  },
  {
    name: "Bank Wallet / PayPal",
    gradient: "from-blue-700 to-indigo-800",
    image: null,
    alt: "",
    caption: "Pay via Bank Wallet or PayPal",
    phone: "9808091436",
    email: "therapisttseringdorjee@gmail.com",
    ocid: "payment.paypal.card",
  },
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
      case "indigo":
        return {
          icon: "bg-indigo-100 text-indigo-600",
          badge: "bg-indigo-100 text-indigo-700",
          btn: "bg-indigo-600 hover:bg-indigo-500 text-white",
        };
      case "violet":
        return {
          icon: "bg-violet-100 text-violet-600",
          badge: "bg-violet-100 text-violet-700",
          btn: "bg-violet-600 hover:bg-violet-500 text-white",
        };
      case "orange":
        return {
          icon: "bg-orange-100 text-orange-600",
          badge: "bg-orange-100 text-orange-700",
          btn: "bg-orange-500 hover:bg-orange-400 text-white",
        };
      case "rose":
        return {
          icon: "bg-rose-100 text-rose-600",
          badge: "bg-rose-100 text-rose-700",
          btn: "bg-rose-600 hover:bg-rose-500 text-white",
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
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-sm text-white leading-tight hidden sm:block">
                New Para World
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
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1"
              >
                <Badge className="mb-4 bg-sky-500 text-white border-0 px-3 py-1 text-xs font-medium tracking-wide uppercase">
                  APPI Certified · Pro Tandem Pilot
                </Badge>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  {COMPANY_NAME}
                </h1>
                <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-3">
                  Paragliding, adventure tours, transport booking, digital
                  wallet services and more in the heart of Pokhara, Nepal.
                </p>
                <p className="text-base text-white/60 mb-8">
                  Owner:{" "}
                  <span className="text-sky-400 font-semibold">
                    {OWNER_NAME}
                  </span>{" "}
                  &nbsp;|&nbsp; APPI License No.{" "}
                  <span className="text-sky-400 font-semibold">
                    {LICENSE_NO}
                  </span>{" "}
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
                  <a href="#booking">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                    >
                      Book Now <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Owner photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="shrink-0"
              >
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-sky-400/50 shadow-2xl shadow-sky-900/40">
                  <img
                    src="/assets/uploads/img_5093-019d3860-119e-721d-8fd0-1d3350036da1-1.png"
                    alt="Tsering Dorjee — Owner, New Para World Tsering Dorjee Company"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-center text-sky-400 text-sm font-semibold mt-3">
                  {OWNER_NAME}
                </p>
                <p className="text-center text-white/50 text-xs">
                  Acupuncture Therapist · APPI Pilot
                </p>
              </motion.div>
            </div>
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
                Paragliding, UltraLight flights, ride booking, therapy,
                transport, digital wallet sales, and more in Pokhara, Nepal.
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
                    transition={{ duration: 0.5, delay: i * 0.07 }}
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

        {/* CREDENTIALS */}
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
                &nbsp;|&nbsp; Tel: +977 {PHONE_PRIMARY}
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
                        <span>Advanced SIV Pilot</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>Acupuncture Therapist</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>+977 {PHONE_PRIMARY}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>+977 {PHONE_SECONDARY}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Evaluations table */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <Card className="border-white/10 bg-white/5 overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white font-heading text-lg">
                      Paragliding &amp; Power / Paratrick Evaluations
                    </CardTitle>
                    <p className="text-white/50 text-xs">
                      First Name: Tsering &nbsp;|&nbsp; Last Name: Dorjee
                      &nbsp;|&nbsp; License No. {LICENSE_NO}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-3 px-5 text-white/50 font-medium text-xs uppercase tracking-wide">
                              Course / Level
                            </th>
                            <th className="text-center py-3 px-5 text-white/50 font-medium text-xs uppercase tracking-wide">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {evaluations.map((ev, i) => (
                            <tr
                              key={ev.name}
                              className={`border-b border-white/5 ${
                                i % 2 === 0 ? "bg-white/0" : "bg-white/[0.02]"
                              }`}
                              data-ocid={`credentials.row.${i + 1}`}
                            >
                              <td className="py-2.5 px-5 text-white/80">
                                {ev.name}
                              </td>
                              <td className="py-2.5 px-5 text-center">
                                <Badge
                                  className={
                                    ev.status === "Full"
                                      ? "bg-sky-500 text-white border-0 text-xs"
                                      : "bg-white/10 text-white/50 border-0 text-xs"
                                  }
                                >
                                  {ev.status}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <Badge className="mb-4 bg-sky-500 text-white border-0 text-xs uppercase tracking-wide">
                Official Certificate
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
                License &amp; Rating Proof
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
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-border shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-sky-700 to-sky-900 p-5 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5">
                    <Award className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">
                      APPI Member Proof Rating
                    </span>
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
                Pay securely via eSewa, NIC Asia MoBank, Khalti, cityPAY, MyPay,
                Bank Wallet or PayPal
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paymentMethods.map((pm, i) => (
                <motion.div
                  key={pm.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  data-ocid={pm.ocid}
                >
                  <Card className="border-border shadow-lg overflow-hidden h-full">
                    <div
                      className={`bg-gradient-to-br ${pm.gradient} p-5 text-center`}
                    >
                      <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5">
                        <QrCode className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-semibold">
                          {pm.name}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      {pm.image ? (
                        <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                          <img
                            src={pm.image}
                            alt={pm.alt}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-muted flex items-center justify-center min-h-[180px]">
                          <div className="text-center p-6">
                            <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground font-medium">
                              QR Code Coming Soon
                            </p>
                            {(pm as any).phone && (
                              <a
                                href={`tel:${(pm as any).phone}`}
                                className="text-xs text-blue-600 font-semibold mt-2 block hover:underline"
                              >
                                📞 {(pm as any).phone}
                              </a>
                            )}
                            {(pm as any).email && (
                              <a
                                href={`mailto:${(pm as any).email}`}
                                className="text-xs text-blue-600 mt-1 block hover:underline break-all"
                              >
                                ✉ {(pm as any).email}
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                      <p className="text-center text-sm text-muted-foreground mt-4">
                        {pm.caption}
                      </p>
                      <p className="text-center text-xs text-muted-foreground mt-1">
                        {COMPANY_NAME}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Fill in the form below and we&apos;ll confirm your booking.
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
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Booking Received!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you, we will contact you shortly to confirm your
                    booking.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setBooking({
                        name: "",
                        phone: "",
                        date: "",
                        serviceType: "",
                        message: "",
                      });
                    }}
                    className="bg-sky-500 hover:bg-sky-400 text-white"
                    data-ocid="booking.secondary_button"
                  >
                    Book Another
                  </Button>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className="border-border shadow-lg"
                  data-ocid="booking.card"
                >
                  <CardContent className="p-6 sm:p-8">
                    <form
                      onSubmit={handleBooking}
                      className="flex flex-col gap-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="booking-name"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Full Name
                          </label>
                          <input
                            id="booking-name"
                            type="text"
                            required
                            value={booking.name}
                            onChange={(e) =>
                              setBooking((b) => ({
                                ...b,
                                name: e.target.value,
                              }))
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
                            Phone Number
                          </label>
                          <input
                            id="booking-phone"
                            type="tel"
                            required
                            value={booking.phone}
                            onChange={(e) =>
                              setBooking((b) => ({
                                ...b,
                                phone: e.target.value,
                              }))
                            }
                            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                            placeholder="Your phone number"
                            data-ocid="booking.input"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="booking-date"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Preferred Date
                          </label>
                          <input
                            id="booking-date"
                            type="date"
                            value={booking.date}
                            onChange={(e) =>
                              setBooking((b) => ({
                                ...b,
                                date: e.target.value,
                              }))
                            }
                            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                            data-ocid="booking.input"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="booking-service"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Service Type
                          </label>
                          <Select
                            value={booking.serviceType}
                            onValueChange={(v) =>
                              setBooking((b) => ({ ...b, serviceType: v }))
                            }
                          >
                            <SelectTrigger
                              id="booking-service"
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
                              <SelectItem value="pathao-booking">
                                Pathao Booking
                              </SelectItem>
                              <SelectItem value="indrive-booking">
                                inDrive Booking
                              </SelectItem>
                              <SelectItem value="siv-training">
                                SIV Training
                              </SelectItem>
                              <SelectItem value="tour-packages">
                                Tour Packages
                              </SelectItem>
                              <SelectItem value="transport-services">
                                Transport Services
                              </SelectItem>
                              <SelectItem value="digital-wallet-sales">
                                Digital Wallet Sales (Khalti / eSewa)
                              </SelectItem>
                              <SelectItem value="daraz-agent">
                                Daraz Sells Agent
                              </SelectItem>
                              <SelectItem value="acupuncture-therapy">
                                Acupuncture Therapy
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
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
                            setBooking((b) => ({
                              ...b,
                              message: e.target.value,
                            }))
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
              </motion.div>
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
                Ready to book or have a question? Get in touch today.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  label: "Phone 1",
                  value: PHONE_PRIMARY,
                  href: `tel:${PHONE_PRIMARY}`,
                  icon: "phone",
                },
                {
                  label: "Phone 2",
                  value: PHONE_SECONDARY,
                  href: `tel:${PHONE_SECONDARY}`,
                  icon: "phone",
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
                          data-ocid={`contact.button.${i + 1}`}
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
              <span>{ADDRESS}</span>
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
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-bold text-white text-sm">
                  New Para World
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                APPI Certified Advanced SIV Pilot · License No. {LICENSE_NO} ·
                Pro Tandem · Acupuncture Therapist · Pathao &amp; inDrive
                Booking
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
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  {PHONE_SECONDARY}
                </li>
                <li className="flex items-center gap-2 text-white/50 text-sm">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  {EMAIL}
                </li>
                <li className="flex items-start gap-2 text-white/50 text-sm">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  {ADDRESS}
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
              Pilot: {OWNER_NAME} · APPI License No. {LICENSE_NO} · Advanced SIV
              Pilot · Acupuncture Therapist
            </p>
          </div>
          <div className="mt-4 text-center text-white/20 text-xs">
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/40 transition-colors"
            >
              &copy; {new Date().getFullYear()}. Built with love using
              caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
