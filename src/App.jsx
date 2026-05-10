import React from "react";
import { motion } from "framer-motion";
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Zap,
  Award,
  CheckCircle2,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Server,
  HelpCircle,
  Star,
  ArrowRight,
  Wrench,
  Package,
  Laptop,
  Home,
  Building2,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Email & Web Hosting",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    text: "Domains, DNS, business email, mailbox setup, website hosting, migrations, and support.",
  },
  {
    icon: Wifi,
    title: "WiFi & Broadband Support",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    text: "Router setup, poor signal fixes, mesh WiFi, broadband troubleshooting, and network improvements.",
  },
  {
    icon: Monitor,
    title: "Computer Support",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    text: "Hardware, software, slow computers, new device setup, virus removal, backups, and upgrades.",
  },
];

const quickLinks = ["Web Hosting", "Email Setup", "Broadband Help", "Network Support", "Business IT Support"];

const hub = [
  [Wrench, "Tips & Guides", "Simple advice for better tech"],
  [Monitor, "How To Help", "Step by step support"],
  [ShieldCheck, "Security", "Protect your devices"],
  [Laptop, "Latest Tech", "Setup and upgrade advice"],
  [Package, "Offers", "Good value tech support"],
];

const stats = [
  ["8", "Years Experience"],
  ["3500+", "Issues Solved"],
  ["1600+", "Happy Customers"],
  ["50+", "5 Star Reviews"],
];

export default function ITSupportWebsite() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <header className="sticky top-0 z-50 bg-black text-white shadow-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold tracking-tight">
            SmartFix <span className="text-orange-500">IT</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium lg:flex">
            {['Home', 'Services', 'Business', 'About Us', 'Reviews', 'Contact'].map((item, index) => (
              <a key={item} href={index === 0 ? '#' : `#${item.toLowerCase().replaceAll(' ', '-')}`} className={index === 0 ? 'text-orange-500' : 'hover:text-orange-500'}>{item}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 text-sm lg:flex">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange-500" /> 0800 123 4567</span>
            <a href="#contact" className="rounded-sm bg-white px-4 py-2 font-semibold text-black hover:bg-orange-500 hover:text-white">Get Support</a>
          </div>
          <button className="rounded-sm bg-orange-500 p-3 lg:hidden"><Menu className="h-5 w-5" /></button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
              Your tech. Our expertise. <span className="text-orange-500">Problem solved.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-200">Trusted IT support for homes and small businesses. Help with hosting, email, WiFi, broadband, computers, software, and networks.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="bg-orange-500 px-7 py-4 text-sm font-bold text-white hover:bg-orange-600">Get Support Now</a>
              <a href="#services" className="border border-white px-7 py-4 text-sm font-bold text-white hover:border-orange-500 hover:text-orange-500">Our Services</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto w-full max-w-md border-t-[18px] border-orange-500 bg-white p-10 text-black shadow-2xl">
            <ShieldCheck className="mb-5 h-12 w-12 text-orange-500" />
            <h2 className="text-2xl font-bold">Trusted support for all your tech</h2>
            <ul className="mt-7 space-y-4 text-sm text-neutral-700">
              {["Fast response", "Affordable fixed prices", "Experienced IT support", "Satisfaction guaranteed"].map((item) => (
                <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-orange-500" /> {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-4">
          {[[Zap, 'Fast Response', 'Quick and practical help'], [Award, 'Expert Support', 'Friendly and experienced'], [ShieldCheck, 'Clear Pricing', 'Honest and transparent'], [CheckCircle2, 'Guaranteed Care', 'Support you can trust']].map(([Icon, title, text]) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="h-9 w-9 text-orange-500" />
              <div><h3 className="font-bold text-orange-500">{title}</h3><p className="text-sm text-neutral-300">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <main>
        <section id="services" className="px-6 py-20">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-semibold">Get your <span className="text-orange-500">support</span> started</h2>
            <div className="mx-auto mt-4 h-1 w-10 bg-orange-500" />
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr_1fr_260px]">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="overflow-hidden rounded-sm bg-white text-left shadow-xl shadow-neutral-200/80">
                    <img src={service.image} alt="" className="h-40 w-full object-cover" />
                    <div className="p-6">
                      <Icon className="mb-3 h-7 w-7 text-orange-500" />
                      <h3 className="font-bold">{service.title}</h3>
                      <p className="mt-3 min-h-20 text-sm leading-6 text-neutral-600">{service.text}</p>
                      <a href="#contact" className="mt-5 inline-block bg-black px-5 py-3 text-xs font-bold text-white hover:bg-orange-500">Book Support</a>
                    </div>
                  </article>
                );
              })}
              <div className="rounded-sm bg-white p-5 text-left shadow-xl shadow-neutral-200/80">
                {quickLinks.map((item) => (
                  <a key={item} href="#contact" className="flex items-center justify-between border-b py-4 text-sm font-medium last:border-b-0 hover:text-orange-500">
                    {item}<ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 px-6 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-semibold">Services at your <span className="text-orange-500">convenience</span></h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[[Home, "Come to you", "On site help at your home or office for WiFi, broadband, and computer issues."], [Phone, "Remote support", "Quick help by phone or remote session for software, email, and setup problems."], [Mail, "Email support", "Send your issue over and get clear advice on the best next step."]].map(([Icon, title, text]) => (
                <div key={title} className="rounded-sm bg-white p-7 text-left shadow">
                  <Icon className="mb-4 h-8 w-8 text-orange-500" />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange-500">Find out more <ArrowRight className="h-4 w-4" /></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-neutral-950 px-6 py-20 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center opacity-20" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">We fix <span className="text-orange-500">everything</span></h2>
              <p className="mt-5 max-w-xl text-neutral-300">From broken devices to business IT issues, we provide practical support for your devices, systems, hosting, and networks.</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-200">
                {["Email, domains and web hosting", "WiFi, broadband and network support", "Laptops, desktops and peripherals", "Software setup and troubleshooting"].map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
              <a href="#contact" className="mt-8 inline-block bg-white px-6 py-3 text-sm font-bold text-black hover:bg-orange-500 hover:text-white">View All Services</a>
            </div>
            <div className="rounded-full border border-orange-500/40 p-8 text-center">
              <div className="mx-auto grid h-72 w-52 rotate-12 place-items-center rounded-[2.5rem] border-8 border-neutral-800 bg-neutral-100 shadow-2xl">
                <Wifi className="h-20 w-20 text-orange-500" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-6 py-6 text-center text-white">
          <p className="inline-block pr-6">Got a question? We are here to help.</p>
          <a href="#contact" className="inline-block border border-white px-6 py-3 text-sm font-bold hover:border-orange-500 hover:text-orange-500">Contact Us</a>
        </section>

        <section className="px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold">A hub for <span className="text-orange-500">techies</span> of all levels</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-5">
            {hub.map(([Icon, title, text]) => (
              <div key={title} className="border bg-white shadow-sm">
                <div className="grid place-items-center bg-black py-6">
                  <Icon className="h-8 w-8 text-orange-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-neutral-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-neutral-100 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-semibold">Frequently <span className="text-orange-500">asked Questions</span></h2>
            <div className="mt-10 space-y-4">
              {[
                ["How long will my support take?", "Most simple issues can be looked at quickly. More complex issues may take longer and you will always be kept updated."],
                ["Can you help with email and hosting?", "Yes. I can help with domains, DNS, website hosting, business email, mailbox setup and migrations."],
                ["Can you improve WiFi and broadband?", "Yes. I can check router placement, signal issues, mesh WiFi, broadband faults, and network setup."],
              ].map(([q, a]) => (
                <div key={q} className="rounded-sm bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between font-bold">
                    <span>{q}</span>
                    <HelpCircle className="h-5 w-5 text-orange-500" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-neutral-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold">Real customer <span className="text-orange-500">reviews</span></h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {["Brilliant service. My laptop was fixed quickly and now runs better than ever.", "Super helpful and reliable. They set up our office network and improved our WiFi massively."].map((text, index) => (
                <div key={text} className="rounded-sm bg-black/70 p-7 text-left shadow">
                  <div className="mb-4 flex text-orange-500">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="leading-7 text-neutral-200">{text}</p>
                  <p className="mt-4 font-bold text-orange-500">Customer {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="business" className="px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold">SmartFix IT for <span className="text-orange-500">Business & Education</span></h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              [Building2, "Business IT Support", "Tailored IT support for small businesses."],
              [Wifi, "Network Solutions", "Reliable wired, wireless and broadband support."],
              [Server, "Hosting & Email", "Managed hosting, domains and business email setup."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-sm bg-white p-7 text-left shadow-lg shadow-neutral-200/80">
                <Icon className="mb-4 h-8 w-8 text-orange-500" />
                <h3 className="font-bold text-orange-500">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-bold">Find out more <ArrowRight className="h-4 w-4 text-orange-500" /></a>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-neutral-100 px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">
            {stats.map(([number, label]) => (
              <div key={label}>
                <div className="text-4xl font-light text-orange-500">{number}</div>
                <p className="mt-2 text-sm text-neutral-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[300px_1fr]">
            <div>
              <h2 className="text-3xl font-bold">Got questions? <span className="text-orange-500">Let us know</span></h2>
              <p className="mt-4 text-neutral-600">Call <span className="font-bold text-orange-500">0800 123 4567</span> or send a message and we will get back to you.</p>
            </div>
            <form className="grid gap-4 md:grid-cols-2">
              <input className="border p-4" placeholder="Name" />
              <input className="border p-4" placeholder="Email" />
              <input className="border p-4" placeholder="Phone" />
              <select className="border p-4">
                <option>Service</option>
                <option>Email & Web Hosting</option>
                <option>WiFi & Broadband</option>
                <option>Computer Support</option>
              </select>
              <textarea className="border p-4 md:col-span-2" rows="5" placeholder="Message" />
              <button className="bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600 md:col-start-2">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-950 px-6 py-14 text-neutral-300">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-white">SmartFix <span className="text-orange-500">IT</span></h3>
            <p className="mt-4 text-sm leading-6">Expert IT support for homes and businesses. Fast, reliable and affordable technical solutions.</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm"><li>Home</li><li>Services</li><li>Business</li><li>Contact</li></ul>
          </div>
          <div>
            <h4 className="font-bold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm"><li>Email Hosting</li><li>Web Hosting</li><li>Network Support</li><li>Hardware Support</li></ul>
          </div>
          <div>
            <h4 className="font-bold text-white">Contact Us</h4>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex gap-2"><Phone className="h-4 w-4 text-orange-500" /> 0800 123 4567</p>
              <p className="flex gap-2"><Mail className="h-4 w-4 text-orange-500" /> hello@example.co.uk</p>
              <p className="flex gap-2"><MapPin className="h-4 w-4 text-orange-500" /> Your town, UK</p>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs">© {new Date().getFullYear()} SmartFix IT. All rights reserved.</p>
      </footer>
    </div>
  );
}