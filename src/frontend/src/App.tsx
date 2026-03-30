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
import { Toaster } from "@/components/ui/sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  Award,
  CheckCircle,
  ChevronDown,
  Mail,
  Map as MapIcon,
  MapPin,
  Menu,
  Mountain,
  Package,
  Phone,
  Star,
  Wind,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Pilot", href: "#pilot" },
  { label: "Book Now", href: "#book" },
  { label: "License", href: "#license" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Tandem Paragliding",
    description:
      "Soar above the Himalayas with our certified APPI tandem pilot. No experience required — just breathtaking views and pure freedom.",
  },
  {
    icon: <Mountain className="w-8 h-8" />,
    title: "Paragliding Courses",
    description:
      "Learn to fly with professional APPI-certified instruction. From beginner discovery flights to advanced SIV maneuver training.",
  },
  {
    icon: <MapIcon className="w-8 h-8" />,
    title: "Jeep & Transport Tours",
    description:
      "Explore the Pokhara valley and Himalayan trails in comfort. Jeep, bus, and bike rental services for all adventure needs.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Tour Packages",
    description:
      "All-inclusive Nepal adventure packages combining paragliding, trekking, sightseeing, and cultural experiences in the Himalayas.",
  },
];

const EVALUATIONS = [
  { course: "APPI 1 Discover", status: "Empty" },
  { course: "APPI 2 Explore", status: "Empty" },
  { course: "APPI 3 Pilot", status: "Empty" },
  { course: "Dynamic Soaring", status: "Empty" },
  { course: "Winch", status: "Empty" },
  { course: "Thermalling", status: "Empty" },
  { course: "APPI 4 Progress", status: "Empty" },
  { course: "XC", status: "Empty" },
  { course: "SIV", status: "Empty" },
  { course: "Advanced SIV", status: "Empty" },
  { course: "APPI 5 Advanced", status: "Empty" },
  { course: "Non-commercial Tandem", status: "Empty" },
  { course: "Pro Tandem", status: "Full" },
  { course: "Assistant Instructor", status: "Empty" },
  { course: "APPI Instructor", status: "Empty" },
];

const PAYMENT_QRS = [
  {
    label: "eSewa",
    img: "/assets/uploads/img_6445-019d3906-088f-73e6-abfb-afc405478758-1.jpeg",
  },
  {
    label: "NIC Asia MoBank",
    img: "/assets/uploads/img_6438-019d37f8-acbc-74ea-a346-7a452942ecde-1.jpeg",
  },
  {
    label: "Khalti",
    img: "/assets/uploads/img_6444-019d3856-7507-7017-a64b-d346278ef17a-1.jpeg",
  },
  {
    label: "cityPAY / Bank Wallet",
    img: "/assets/uploads/img_6446-019d390d-1ec6-764d-b06d-19c1250ca14f-2.jpeg",
  },
  {
    label: "MyPay",
    img: "/assets/uploads/img_6437-019d390d-1e81-76f8-9d6d-cbdd6618bb1a-1.jpeg",
  },
];

export default function App() {
  const { actor } = useActor();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    flightType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Service unavailable. Please try again.");
      return;
    }
    if (!formData.flightType) {
      toast.error("Please select a flight type.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitInquiry(
        formData.name,
        formData.phone,
        formData.date,
        formData.flightType,
        formData.message,
      );
      setSubmitted(true);
      toast.success("Booking inquiry submitted! We'll contact you shortly.");
      setFormData({
        name: "",
        phone: "",
        date: "",
        flightType: "",
        message: "",
      });
    } catch {
      toast.error("Submission failed. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-body text-pw-body">
      <Toaster />

      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 shadow-heavy"
        style={{ background: "var(--pw-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "var(--pw-teal)" }}
              >
                <Wind className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-wide">
                New Para World Tsering Dorjee
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a href="#book" className="hidden md:inline-flex">
                <Button
                  data-ocid="nav.book_now.button"
                  className="font-semibold text-white"
                  style={{ background: "var(--pw-teal)" }}
                >
                  BOOK NOW
                </Button>
              </a>
              <button
                type="button"
                className="md:hidden text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                data-ocid="nav.mobile_menu.toggle"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden px-4 pb-4 pt-2"
            style={{ background: "var(--pw-dark)" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full mt-2 font-semibold text-white"
              style={{ background: "var(--pw-teal)" }}
              onClick={() => {
                setMobileOpen(false);
                window.location.hash = "#book";
              }}
            >
              BOOK NOW
            </Button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.18 0.06 220) 0%, oklch(0.28 0.07 196) 40%, oklch(0.44 0.09 196) 75%, oklch(0.58 0.10 185) 100%)",
        }}
      >
        {/* Decorative sky layers */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.75 0.10 185), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
          style={{
            background:
              "linear-gradient(to top, oklch(0.22 0.04 200), transparent)",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          {/* Brand mark */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-heavy"
              style={{ background: "var(--pw-teal)" }}
            >
              <Wind className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-white/70 text-lg font-medium mb-2 tracking-widest uppercase">
            New Para World Tsering Dorjee Company
          </p>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight mb-4 tracking-tight">
            Paraglide Nepal
            <br />
            <span style={{ color: "var(--pw-sky)" }}>With New Para World</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Experience the Himalayan Skies with Nepal&apos;s Certified APPI
            Pilots. Soar above Pokhara&apos;s breathtaking valley from
            Sarangkot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book">
              <Button
                data-ocid="hero.book_flight.primary_button"
                size="lg"
                className="font-bold text-white px-8 py-3 text-base shadow-heavy"
                style={{ background: "var(--pw-teal)" }}
              >
                BOOK YOUR FLIGHT
              </Button>
            </a>
            <a href="#services">
              <Button
                data-ocid="hero.explore_tours.secondary_button"
                size="lg"
                variant="outline"
                className="font-bold px-8 py-3 text-base border-2 border-white text-white bg-transparent hover:bg-white/10"
              >
                EXPLORE TOURS
              </Button>
            </a>
          </div>
          {/* scroll hint */}
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--pw-teal)" }}
            >
              What We Offer
            </p>
            <h2
              className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight"
              style={{ color: "var(--pw-dark)" }}
            >
              Our Adventure Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <Card
                key={svc.title}
                data-ocid={`services.item.${i + 1}`}
                className="shadow-card hover:shadow-heavy transition-shadow border-0 group"
              >
                <CardHeader className="pb-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ background: "var(--pw-sky)" }}
                  >
                    <span style={{ color: "var(--pw-dark)" }}>{svc.icon}</span>
                  </div>
                  <CardTitle
                    className="font-heading font-bold text-base"
                    style={{ color: "var(--pw-dark)" }}
                  >
                    {svc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PILOT ── */}
      <section
        id="pilot"
        className="py-20"
        style={{ background: "oklch(0.97 0.02 196)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--pw-teal)" }}
            >
              Certified & Experienced
            </p>
            <h2
              className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight"
              style={{ color: "var(--pw-dark)" }}
            >
              Meet Our Expert Pilot
            </h2>
          </div>
          <div className="flex justify-center">
            <Card className="shadow-heavy border-0 max-w-sm w-full overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/uploads/img_5093-019d3860-119e-721d-8fd0-1d3350036da1-1.png"
                  alt="Tsering Dorjee - Chief Pilot"
                  className="w-full h-80 object-cover object-top"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(27,63,70,0.92), transparent)",
                  }}
                >
                  <h3 className="font-heading font-bold text-xl text-white">
                    Tsering Dorjee
                  </h3>
                  <p className="text-white/80 text-sm">Chief Pilot & Founder</p>
                </div>
              </div>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award
                      className="w-4 h-4"
                      style={{ color: "var(--pw-teal)" }}
                    />
                    <span className="text-sm font-medium">
                      APPI SIV Pilot — License No. 10359
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star
                      className="w-4 h-4"
                      style={{ color: "var(--pw-teal)" }}
                    />
                    <span className="text-sm font-medium">
                      Advanced SIV Pilot
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className="w-4 h-4"
                      style={{ color: "var(--pw-teal)" }}
                    />
                    <span className="text-sm font-medium">
                      Pro Tandem — Full Certification
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: "var(--pw-teal)" }}
                    />
                    <span className="text-sm text-muted-foreground">
                      Brunch Office Company, Bandipur, Pokhara, Nepal Sub-Metro
                    </span>
                  </div>
                </div>
                <a href="tel:9808091436" className="block mt-4">
                  <Button
                    data-ocid="pilot.call.primary_button"
                    className="w-full font-semibold text-white"
                    style={{ background: "var(--pw-teal)" }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call: 9808091436 / 9766047350
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── BOOK NOW ── */}
      <section id="book" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--pw-teal)" }}
            >
              Reserve Your Adventure
            </p>
            <h2
              className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight"
              style={{ color: "var(--pw-dark)" }}
            >
              Book Your Flight
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="shadow-heavy border-0">
              <CardHeader>
                <CardTitle
                  className="font-heading"
                  style={{ color: "var(--pw-dark)" }}
                >
                  Flight Inquiry Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div
                    data-ocid="book.success_state"
                    className="text-center py-8"
                  >
                    <CheckCircle
                      className="w-14 h-14 mx-auto mb-4"
                      style={{ color: "var(--pw-teal)" }}
                    />
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: "var(--pw-dark)" }}
                    >
                      Inquiry Submitted!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you! We&apos;ll contact you on your provided number
                      to confirm your booking.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="text-white"
                      style={{ background: "var(--pw-teal)" }}
                    >
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          data-ocid="book.name.input"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, name: e.target.value }))
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          data-ocid="book.phone.input"
                          placeholder="98XXXXXXXX"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((p) => ({
                              ...p,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          data-ocid="book.date.input"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, date: e.target.value }))
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <Label>Flight Type *</Label>
                        <Select
                          value={formData.flightType}
                          onValueChange={(v) =>
                            setFormData((p) => ({ ...p, flightType: v }))
                          }
                        >
                          <SelectTrigger data-ocid="book.flight_type.select">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Tandem Paragliding">
                              Tandem Paragliding
                            </SelectItem>
                            <SelectItem value="Paragliding Course">
                              Paragliding Course
                            </SelectItem>
                            <SelectItem value="Transport Tour">
                              Transport Tour
                            </SelectItem>
                            <SelectItem value="Tour Package">
                              Tour Package
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        data-ocid="book.message.textarea"
                        placeholder="Any special requirements or questions..."
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <Button
                      type="submit"
                      data-ocid="book.submit.submit_button"
                      disabled={submitting}
                      className="w-full font-bold text-white text-base"
                      style={{ background: "var(--pw-teal)" }}
                    >
                      {submitting ? "Submitting..." : "SUBMIT BOOKING INQUIRY"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Info side */}
            <div className="space-y-6">
              <div>
                <h3
                  className="font-heading font-bold text-xl mb-3"
                  style={{ color: "var(--pw-dark)" }}
                >
                  Why Fly With New Para World Tsering Dorjee?
                </h3>
                <ul className="space-y-3">
                  {[
                    "APPI certified Pro Tandem pilot with License No. 10359",
                    "Advanced SIV certified — highest safety standards",
                    "Panoramic Himalayan views over Pokhara valley",
                    "All equipment provided — no experience needed",
                    "Professional photos & videos of your flight available",
                    "Flexible scheduling, 7 days a week",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: "var(--pw-teal)" }}
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="p-5 rounded-xl"
                style={{ background: "oklch(0.97 0.02 196)" }}
              >
                <h4
                  className="font-semibold mb-3"
                  style={{ color: "var(--pw-dark)" }}
                >
                  Contact for Immediate Booking
                </h4>
                <a
                  href="tel:9808091436"
                  className="flex items-center gap-2 mb-2 hover:underline"
                  style={{ color: "var(--pw-teal)" }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-bold">9808091436 / 9766047350</span>
                </a>
                <a
                  href="mailto:mypagentnewparaworld@gmail.com"
                  className="flex items-center gap-2 text-sm hover:underline"
                  style={{ color: "var(--pw-teal)" }}
                >
                  <Mail className="w-4 h-4" />
                  <span>mypagentnewparaworld@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPI EVALUATIONS ── */}
      <section
        id="credentials"
        className="py-20"
        style={{ background: "oklch(0.97 0.02 196)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--pw-teal)" }}
            >
              Official APPI Record
            </p>
            <h2
              className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight"
              style={{ color: "var(--pw-dark)" }}
            >
              Member Auto Evaluations
            </h2>
          </div>
          <Card className="shadow-card border-0">
            <CardHeader
              className="rounded-t-lg"
              style={{ background: "var(--pw-dark)" }}
            >
              <div className="text-white space-y-1">
                <p className="font-bold text-lg">APPI Member Evaluation Card</p>
                <p className="text-white/70 text-sm">
                  License No.{" "}
                  <span className="font-bold text-white">10359</span>{" "}
                  &nbsp;|&nbsp; Name:{" "}
                  <span className="font-bold text-white">Tsering Dorjee</span>
                </p>
                <p className="text-white/70 text-sm">
                  Tel:{" "}
                  <span className="font-bold text-white">+977 9806513749</span>
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div
                className="px-4 py-2"
                style={{ background: "oklch(0.92 0.04 196)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--pw-teal)" }}
                >
                  Paragliding
                </p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">
                      Course / Level
                    </TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {EVALUATIONS.map((ev, i) => (
                    <TableRow
                      key={ev.course}
                      data-ocid={`credentials.item.${i + 1}`}
                    >
                      <TableCell className="font-medium">{ev.course}</TableCell>
                      <TableCell>
                        {ev.status === "Full" ? (
                          <Badge
                            className="text-white font-bold"
                            style={{ background: "var(--pw-teal)" }}
                          >
                            ✓ FULL
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="text-muted-foreground"
                          >
                            Empty
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div
                className="px-4 py-2 border-t"
                style={{ background: "oklch(0.92 0.04 196)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--pw-teal)" }}
                >
                  Power / Paratrick
                </p>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-muted-foreground italic">
                  Power and Paratrick course records will be listed here when
                  evaluations are completed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── LICENSE ── */}
      <section id="license" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--pw-teal)" }}
            >
              Verified Credentials
            </p>
            <h2
              className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight"
              style={{ color: "var(--pw-dark)" }}
            >
              License & Rating Proof
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <Award className="w-5 h-5" />,
                label: "License No.",
                value: "10359",
              },
              {
                icon: <Star className="w-5 h-5" />,
                label: "Rating",
                value: "APPI 3 Pilot / Advanced SIV",
              },
              {
                icon: <CheckCircle className="w-5 h-5" />,
                label: "School",
                value: "Blue Sky Paragliding",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 rounded-xl shadow-card"
                style={{ background: "oklch(0.97 0.02 196)" }}
              >
                <span style={{ color: "var(--pw-teal)" }}>{item.icon}</span>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "var(--pw-dark)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-heavy">
            <img
              src="/assets/uploads/img_6449-019d3b05-871f-76f8-ad07-2ec50043fe97-1.jpeg"
              alt="APPI Member Proof Rating Certificate"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── SCAN & PAY ── */}
      <section
        id="payment"
        className="py-20"
        style={{ background: "oklch(0.97 0.02 196)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--pw-teal)" }}
            >
              Convenient Payments
            </p>
            <h2
              className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight"
              style={{ color: "var(--pw-dark)" }}
            >
              Scan & Pay
            </h2>
            <p className="mt-3 text-muted-foreground">
              We accept multiple digital payment methods for your convenience.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {PAYMENT_QRS.map((qr, i) => (
              <div
                key={qr.label}
                data-ocid={`payment.item.${i + 1}`}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-3 rounded-xl shadow-card w-full">
                  <img
                    src={qr.img}
                    alt={`${qr.label} QR Code`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <p
                  className="mt-2 text-xs font-semibold text-center"
                  style={{ color: "var(--pw-dark)" }}
                >
                  {qr.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "var(--pw-teal)" }}
            >
              Get In Touch
            </p>
            <h2
              className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight"
              style={{ color: "var(--pw-dark)" }}
            >
              Contact Us
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.97 0.02 196)" }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "var(--pw-teal)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: "var(--pw-dark)" }}
                  >
                    Phone
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Call us for immediate booking
                  </p>
                  <a href="tel:9808091436">
                    <Button
                      data-ocid="contact.call.primary_button"
                      className="font-bold text-white"
                      style={{ background: "var(--pw-teal)" }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      9808091436 / 9766047350
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.97 0.02 196)" }}
                >
                  <Mail
                    className="w-5 h-5"
                    style={{ color: "var(--pw-teal)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: "var(--pw-dark)" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:mypagentnewparaworld@gmail.com"
                    data-ocid="contact.email.link"
                    className="text-sm hover:underline"
                    style={{ color: "var(--pw-teal)" }}
                  >
                    mypagentnewparaworld@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "oklch(0.97 0.02 196)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "var(--pw-teal)" }}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: "var(--pw-dark)" }}
                  >
                    Address
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Brunch Office Company, Bandipur
                    <br />
                    Pokhara, Nepal Sub-Metro
                  </p>
                </div>
              </div>
            </div>
            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-heavy h-80 lg:h-auto">
              <iframe
                title="New Para World Tsering Dorjee Location"
                src="https://www.google.com/maps?q=Bandipur,+Pokhara,+Nepal&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "var(--pw-dark)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "var(--pw-teal)" }}
                >
                  <Wind className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading font-bold text-xl text-white">
                  New Para World Tsering Dorjee
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                New Para World Tsering Dorjee Company — Nepal&apos;s premier
                paragliding adventure company based in Pokhara. APPI certified
                pilots, breathtaking Himalayan flights, and unforgettable
                experiences.
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-white/40 text-xs">
                  APPI SIV Pilot License No. 10359
                </p>
                <p className="text-white/40 text-xs">
                  Advanced SIV Pilot — Tsering Dorjee
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-white mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-white/50 mt-0.5 shrink-0" />
                  <a
                    href="tel:9808091436"
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    9808091436 / 9766047350
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-white/50 mt-0.5 shrink-0" />
                  <a
                    href="mailto:mypagentnewparaworld@gmail.com"
                    className="text-white/60 text-sm hover:text-white transition-colors break-all"
                  >
                    mypagentnewparaworld@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-white/50 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">
                    Brunch Office Company, Bandipur,
                    <br />
                    Pokhara, Nepal Sub-Metro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright strip */}
        <div
          className="border-t py-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
            <span>
              © {new Date().getFullYear()} New Para World Tsering Dorjee
              Company. All rights reserved.
            </span>
            <span>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
