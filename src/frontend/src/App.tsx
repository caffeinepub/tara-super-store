import { Button } from "@/components/ui/button";
import {
  Building2,
  Clock,
  Facebook,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Signal,
  Smartphone,
  User,
  Wifi,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#categories" },
  { label: "Contact", href: "#contact" },
];

const CATEGORIES = [
  {
    icon: Smartphone,
    title: "Ncell SIM Cards",
    desc: "New SIM cards, eSIM, and prepaid connections for all customers.",
  },
  {
    icon: Signal,
    title: "Ncell Recharge",
    desc: "Top-up vouchers and digital recharge for Ncell numbers.",
  },
  {
    icon: Wifi,
    title: "Data Packs",
    desc: "Daily, weekly & monthly internet data packages from Ncell.",
  },
  {
    icon: Home,
    title: "Accessories",
    desc: "Mobile accessories, phone covers, cables and more.",
  },
];

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
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-lg font-bold"
              style={{ background: "var(--store-orange)" }}
            >
              📶
            </div>
            <div className="leading-tight">
              <div
                className="text-sm tracking-wide"
                style={{ color: "var(--store-orange)", fontWeight: 700 }}
              >
                REETIRIWAAZ STORE
              </div>
              <div
                className="text-[10px]"
                style={{ color: "oklch(var(--muted-foreground))" }}
              >
                POS Tara Super Store
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
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

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex text-white"
              style={{ background: "var(--store-orange)", border: "none" }}
              data-ocid="nav.primary_button"
            >
              <a href="#contact">Visit Us</a>
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

        {/* Mobile menu */}
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
            <button
              type="button"
              onClick={() => handleMobileNav("#contact")}
              data-ocid="nav.primary_button"
              className="mt-3 w-full text-center text-sm font-semibold text-white py-2 px-4 rounded-lg"
              style={{ background: "var(--store-orange)" }}
            >
              Visit Us
            </button>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative w-full min-h-[560px] flex items-center"
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
              "linear-gradient(90deg, rgba(31,20,5,0.82) 0%, rgba(31,20,5,0.5) 60%, rgba(31,20,5,0.18) 100%)",
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
              Ncell Dealer · Pokhara
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Reetiriwaaz Store POS Tara Super Store
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
              Your trusted Ncell dealer at Prithive Chowk. SIM cards, recharge,
              data packs and mobile accessories — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="text-white font-semibold"
                style={{ background: "var(--store-orange)", border: "none" }}
                data-ocid="hero.primary_button"
              >
                <a href="#contact">Find Us</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold border-white text-white bg-white/10 hover:bg-white/20"
                data-ocid="hero.secondary_button"
              >
                <a href="#categories">Our Products</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
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
              Ncell Products & Services
            </h2>
            <p
              className="text-sm"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Everything Ncell, available right here at Prithive Chowk.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-xs hover:shadow-warm transition-shadow"
                data-ocid={`categories.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.93 0.04 60)" }}
                >
                  <cat.icon
                    size={22}
                    style={{ color: "var(--store-orange)" }}
                  />
                </div>
                <h3
                  className="font-semibold text-base mb-1"
                  style={{ color: "oklch(var(--foreground))" }}
                >
                  {cat.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                >
                  {cat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STORE INFO */}
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
              Store Information
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

            {/* Store details */}
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
                About the Store
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
                      Store Name
                    </div>
                    <div className="text-sm font-medium">
                      Reetiriwaaz Store POS Tara Super Store
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Ncell Products Dealer
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
                      Pokhara, P.O. Box No. 18
                      <br />
                      Nepal SUB-METRO
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
                      href="tel:9802257198"
                      className="text-sm font-medium hover:underline block"
                      data-ocid="contact.link"
                    >
                      9802257198
                    </a>
                    <a
                      href="tel:9808091436"
                      className="text-sm font-medium hover:underline block"
                      data-ocid="contact.link"
                    >
                      9808091436
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
                      href="mailto:reetiriwaazstore@gmail.com"
                      className="text-sm font-medium hover:underline block break-all"
                      data-ocid="contact.link"
                    >
                      reetiriwaazstore@gmail.com
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
                      Store Hours
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
                  src="/assets/uploads/img_6439-019d37d0-3080-74de-8194-b74fd9cfc712-2.jpeg"
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
                    Tsering Dorja · 9808091436
                  </div>
                </div>
              </div>

              {/* NIC Asia QR */}
              <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-xs">
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
            <span className="text-lg font-semibold">Store Hours</span>
          </div>
          <p className="text-white/90 text-base">
            Open Daily &nbsp;<strong>7:00 AM – 9:00 PM</strong>
          </p>
          <p className="text-white/75 text-sm mt-1">
            Paljorling Camp, Prithive Chowk, Pokhara · 9802257198 / 9808091436
          </p>
          <p className="text-white/75 text-sm mt-0.5">
            <a
              href="mailto:reetiriwaazstore@gmail.com"
              className="hover:text-white transition-colors underline"
              data-ocid="contact.link"
            >
              reetiriwaazstore@gmail.com
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
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: "var(--store-orange)" }}
              >
                📶
              </div>
              <div>
                <div className="text-sm font-bold tracking-wide">
                  REETIRIWAAZ STORE
                </div>
                <div className="text-[10px] text-white/60">
                  POS Tara Super Store
                </div>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Your trusted Ncell products dealer in the heart of Pokhara, Nepal.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4
              className="text-sm font-semibold mb-3 uppercase tracking-wider"
              style={{ color: "var(--store-olive)" }}
            >
              Address
            </h4>
            <ul className="space-y-1.5 text-xs text-white/75">
              <li>Paljorling Camp, Prithive Chowk</li>
              <li>Pokhara, P.O. Box No. 18</li>
              <li>Nepal SUB-METRO</li>
              <li className="mt-2">
                <a
                  href="tel:9802257198"
                  className="hover:text-white transition-colors"
                  data-ocid="footer.link"
                >
                  📞 9802257198
                </a>
              </li>
              <li>
                <a
                  href="tel:9808091436"
                  className="hover:text-white transition-colors"
                  data-ocid="footer.link"
                >
                  📞 9808091436
                </a>
              </li>
              <li>
                <a
                  href="mailto:reetiriwaazstore@gmail.com"
                  className="hover:text-white transition-colors break-all"
                  data-ocid="footer.link"
                >
                  ✉️ reetiriwaazstore@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
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

          {/* Social */}
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
