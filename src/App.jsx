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
    href: "/email-web-hosting",
    image: "src/assets/images/hosting.jpg",
    text: "Domains, DNS, business email, mailbox setup, website hosting, migrations, and support.",
  },
  {
    icon: Wifi,
    title: "WiFi & Broadband Support",
    href: "/wifi-broadband-support",
    image: "src/assets/images/wifi.jpg",
    text: "Router setup, poor signal fixes, mesh WiFi, broadband troubleshooting, and network improvements.",
  },
  {
    icon: Monitor,
    title: "Computer Support",
    href: "/computer-support",
    image: "src/assets/images/support.jpg",
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

const servicePages = {
  "/email-web-hosting": {
    icon: Globe,
    title: "Email & Web Hosting",
    intro: "Reliable help with domains, DNS, email accounts, website hosting, migrations, and ongoing support.",
    overview:
      "Email and hosting can be confusing when something stops working. I can help you set up, fix, move, and manage your email and website hosting so everything works smoothly and professionally.",
    images: {
      hero: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
      feature: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
      support: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    },
    bullets: [
      "Business email setup and mailbox support",
      "Domain, DNS and hosting configuration",
      "Website hosting advice and migration help",
      "Email deliverability, spam and security checks",
    ],
    details: [
      ["Business email setup", "Set up professional email addresses, connect them to phones and computers, and make sure sending and receiving works correctly."],
      ["Domain and DNS help", "Configure domain records including MX, SPF, DKIM, DMARC, A records and CNAME records when needed."],
      ["Website hosting support", "Help choose, configure, or move website hosting so your site is stable, secure, and easy to manage."],
      ["Mailbox migrations", "Move emails between providers with minimal disruption, including help with backups and account settings."],
    ],
    process: ["Check your current setup", "Identify the best fix or migration plan", "Make the changes safely", "Test email, website and DNS records", "Provide clear notes for future use"],
    faqs: [
      ["Can you move my email to a new provider?", "Yes. I can help plan the move, update DNS records, connect devices and reduce downtime."],
      ["Can you help if my emails go to spam?", "Yes. I can check SPF, DKIM, DMARC and general deliverability settings."],
      ["Can you host my website?", "I can help set up and manage hosting or advise on the best provider for your needs."],
    ],
  },
  "/wifi-broadband-support": {
    icon: Wifi,
    title: "WiFi & Broadband Support",
    intro: "Improve slow WiFi, fix broadband issues, extend coverage, and make your home or office network more reliable.",
    overview:
      "Poor WiFi can make everything feel broken. I can check your router, broadband connection, WiFi coverage, interference, devices and network layout to find the cause and improve reliability.",
    images: {
      hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80",
      feature: "https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&w=1200&q=80",
      support: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1200&q=80",
    },
    bullets: [
      "Router setup and broadband troubleshooting",
      "Mesh WiFi and signal improvement",
      "Home and small office network checks",
      "Advice on broadband providers and equipment",
    ],
    details: [
      ["WiFi coverage checks", "Find weak signal areas and recommend better router placement, mesh WiFi, access points, or cabling where useful."],
      ["Broadband fault finding", "Check whether the issue is your broadband provider, router, WiFi signal, cabling, or connected devices."],
      ["Router and mesh setup", "Configure routers, mesh systems, guest networks, passwords, parental controls and basic security settings."],
      ["Speed and stability improvements", "Improve real world performance so video calls, streaming, work systems and smart devices run more reliably."],
    ],
    process: ["Test broadband speed and stability", "Check WiFi coverage", "Review router and device setup", "Recommend practical improvements", "Install and test the solution"],
    faqs: [
      ["Can you make WiFi better throughout the house?", "Yes. I can recommend and install mesh WiFi or access points depending on the property."],
      ["Can you deal with broadband dropouts?", "Yes. I can help identify whether the issue is internal equipment or the provider line."],
      ["Can you set up a new router?", "Yes. I can set up the router, WiFi name, password, security and connected devices."],
    ],
  },
  "/computer-support": {
    icon: Monitor,
    title: "Computer Support",
    intro: "Friendly support for laptops, desktops, software problems, slow computers, upgrades, and new device setup.",
    overview:
      "Whether your computer is slow, unreliable, infected, full, outdated, or difficult to use, I can help diagnose the issue and get it working properly again.",
    images: {
      hero: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=80",
      feature: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
      support: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80",
    },
    bullets: [
      "Windows and Mac troubleshooting",
      "Slow computer fixes and performance checks",
      "Hardware, printers and peripheral setup",
      "Software installation, backups and security checks",
    ],
    details: [
      ["Slow computer fixes", "Check startup apps, storage, memory, updates, malware, old software and hardware limitations."],
      ["Hardware and upgrades", "Help with SSD upgrades, memory upgrades, replacement parts, printers, monitors, keyboards and other peripherals."],
      ["Software support", "Install, update and troubleshoot common software, browsers, Microsoft 365, email apps and utilities."],
      ["Security and backup", "Check antivirus, remove unwanted software, set up backups and improve basic protection against data loss."],
    ],
    process: ["Discuss the problem", "Run checks and diagnostics", "Explain the issue clearly", "Carry out the agreed fix", "Test everything before finishing"],
    faqs: [
      ["Can you fix a slow laptop?", "Yes. I can diagnose the cause and suggest the best fix, from software cleanup to hardware upgrades."],
      ["Do you support Mac and Windows?", "Yes. I can help with both Windows PCs and Apple Macs."],
      ["Can you set up a new computer?", "Yes. I can transfer files, set up email, install software and configure backups."],
    ],
  },
  "/business-it-support": {
    icon: Building2,
    title: "Business IT Support",
    intro: "Practical IT support for small businesses that need reliable systems without complicated jargon.",
    overview:
      "Small businesses need IT that just works. I can help with day to day support, new starter setup, email, hosting, networking, computers, security and practical advice.",
    images: {
      hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80",
      feature: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      support: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    },
    bullets: [
      "Ongoing IT support for small businesses",
      "Email, hosting, computers and network support",
      "New starter setup and device configuration",
      "Security, backups and general IT advice",
    ],
    details: [
      ["Day to day support", "Help with user issues, software problems, email access, device setup and general troubleshooting."],
      ["New starter setup", "Prepare laptops, email accounts, software access, printers, shared drives and security basics."],
      ["Business continuity", "Review backups, device health, account recovery, security settings and critical systems."],
      ["Practical IT advice", "Clear guidance on upgrades, providers, software, security, hosting and network improvements."],
    ],
    process: ["Understand how your business works", "Review current systems", "Fix urgent issues", "Recommend sensible improvements", "Provide ongoing support as needed"],
    faqs: [
      ["Do you offer ongoing support?", "Yes. Support can be arranged as needed or on a regular basis depending on your business."],
      ["Can you support remote workers?", "Yes. I can help with laptops, email, remote access, security and home office connectivity."],
      ["Can you help us move email or hosting?", "Yes. I can plan and manage email, domain and hosting changes."],
    ],
  },
  "/network-support": {
    icon: Server,
    title: "Network Support",
    intro: "Support for wired and wireless networks, broadband, routers, switches, access points, and connectivity issues.",
    overview:
      "A reliable network is the foundation of good IT. I can help design, fix and improve small networks for homes and businesses, including wired connections, WiFi and broadband equipment.",
    images: {
      hero: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80",
      feature: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      support: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    bullets: [
      "Network fault finding and setup",
      "Router, switch and access point support",
      "WiFi coverage and stability improvements",
      "Small office network planning and advice",
    ],
    details: [
      ["Network fault finding", "Trace connection problems across routers, switches, cables, WiFi access points and devices."],
      ["Wired network setup", "Help with switches, Ethernet cabling, desk connections, printers, NAS devices and shared resources."],
      ["Wireless network setup", "Configure access points, mesh systems, guest WiFi, secure passwords and coverage improvements."],
      ["Small office planning", "Recommend a practical setup for reliability, security, future growth and easier support."],
    ],
    process: ["Map your current network", "Find weak points", "Recommend fixes", "Configure equipment", "Test speed, coverage and reliability"],
    faqs: [
      ["Can you set up office WiFi?", "Yes. I can set up routers, access points, guest networks and secure passwords."],
      ["Can you fix network dropouts?", "Yes. I can test the network and identify whether the issue is cabling, WiFi, router, broadband or device related."],
      ["Can you advise what equipment to buy?", "Yes. I can recommend suitable routers, switches, mesh systems and access points."],
    ],
  },
};

export default function ITSupportWebsite() {
  const isThankYouPage = window.location.pathname === "/thank-you";
  const currentService = servicePages[window.location.pathname];

  if (isThankYouPage) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white">
        <header className="bg-black px-6 py-5 shadow-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="/" className="text-2xl font-bold tracking-tight">
              SmartFix <span className="text-orange-500">IT</span>
            </a>
            <a href="/" className="rounded-sm bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-orange-500 hover:text-white">Back Home</a>
          </div>
        </header>

        <main className="relative grid min-h-[calc(100vh-76px)] place-items-center overflow-hidden px-6 py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950/90 to-black" />

          <section className="relative mx-auto max-w-2xl border-t-[18px] border-orange-500 bg-white p-10 text-center text-neutral-900 shadow-2xl md:p-14">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-orange-100">
              <CheckCircle2 className="h-11 w-11 text-orange-500" />
            </div>
            <h1 className="mt-8 text-4xl font-bold md:text-5xl">Thanks, your message has been sent.</h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              We have received your enquiry and will get back to you as soon as possible. If your enquiry is urgent, call 07944 521 440.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="/" className="bg-orange-500 px-7 py-4 text-sm font-bold text-white hover:bg-orange-600">Return Home</a>
              <a href="tel:08001234567" className="border border-neutral-900 px-7 py-4 text-sm font-bold text-neutral-900 hover:border-orange-500 hover:text-orange-500">Call Now</a>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (currentService) {
    const Icon = currentService.icon;

    return (
      <div className="min-h-screen bg-white font-sans text-neutral-900">
        <header className="bg-black px-6 py-5 text-white shadow-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="/" className="text-2xl font-bold tracking-tight">
              SmartFix <span className="text-orange-500">IT</span>
            </a>
            <a href="/" className="rounded-sm bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-orange-500 hover:text-white">Back Home</a>
          </div>
        </header>

        <main>
          <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
            <div className="absolute inset-0">
              <img src={currentService.images.hero} alt="" className="h-full w-full object-cover opacity-30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
            <div className="relative mx-auto max-w-5xl">
              <Icon className="h-14 w-14 text-orange-500" />
              <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">{currentService.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-200">{currentService.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/#contact" className="bg-orange-500 px-7 py-4 text-sm font-bold text-white hover:bg-orange-600">Request Support</a>
                <a href="tel:07944521440" className="border border-white px-7 py-4 text-sm font-bold text-white hover:border-orange-500 hover:text-orange-500">Call 07944 521 440</a>
              </div>
            </div>
          </section>

          <section className="px-6 py-20">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_360px]">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-orange-500">What is included</p>
                <h2 className="mt-3 text-4xl font-bold">Straightforward help with clear next steps.</h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">{currentService.overview}</p>

                <div className="mt-8 grid gap-4">
                  {currentService.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-4 rounded-sm border bg-white p-5 shadow-sm">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                      <p className="leading-7 text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-14">
                  <h2 className="text-3xl font-bold">How I can help</h2>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {currentService.details.map(([title, text]) => (
                      <div key={title} className="rounded-sm border bg-white p-6 shadow-sm">
                        <h3 className="font-bold text-orange-500">{title}</h3>
                        <p className="mt-3 text-sm leading-7 text-neutral-600">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-14 rounded-sm bg-neutral-100 p-8">
                  <h2 className="text-3xl font-bold">Typical process</h2>
                  <div className="mt-6 grid gap-4">
                    {currentService.process.map((step, index) => (
                      <div key={step} className="flex gap-4">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-500 text-sm font-bold text-white">{index + 1}</div>
                        <p className="pt-1 leading-7 text-neutral-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-3">
                  <div className="rounded-sm bg-black p-6 text-white shadow-lg">
                    <p className="text-4xl font-light text-orange-500">1</p>
                    <h3 className="mt-4 font-bold">Assess</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-300">I look at the issue, your setup and what you need the technology to do.</p>
                  </div>
                  <div className="rounded-sm bg-neutral-100 p-6 shadow-lg">
                    <p className="text-4xl font-light text-orange-500">2</p>
                    <h3 className="mt-4 font-bold">Fix</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">I carry out the agreed work with practical, cost conscious solutions.</p>
                  </div>
                  <div className="rounded-sm bg-black p-6 text-white shadow-lg">
                    <p className="text-4xl font-light text-orange-500">3</p>
                    <h3 className="mt-4 font-bold">Support</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-300">You get clear advice on what changed and how to avoid repeat issues.</p>
                  </div>
                </div>

                <div className="mt-14">
                  <h2 className="text-3xl font-bold">Questions about this service</h2>
                  <div className="mt-6 space-y-4">
                    {currentService.faqs.map(([question, answer]) => (
                      <div key={question} className="rounded-sm border bg-white p-5 shadow-sm">
                        <h3 className="font-bold">{question}</h3>
                        <p className="mt-2 text-sm leading-7 text-neutral-600">{answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="h-fit rounded-sm bg-neutral-950 p-8 text-white shadow-xl lg:sticky lg:top-24">
                <h3 className="text-2xl font-bold">Need this service?</h3>
                <p className="mt-4 leading-7 text-neutral-300">Send a message with a quick description of the issue and I will get back to you as soon as possible.</p>
                <a href="/#contact" className="mt-6 inline-block bg-orange-500 px-6 py-4 text-sm font-bold text-white hover:bg-orange-600">Get Support</a>
                <img src={currentService.images.feature} alt="" className="h-40 w-full object-cover opacity-80" />
                <div className="mt-8 border-t border-white/10 pt-6 text-sm text-neutral-300">
                  <p className="flex gap-2"><Phone className="h-4 w-4 text-orange-500" /> 07944 521 440</p>
                  <p className="mt-3 flex gap-2"><Mail className="h-4 w-4 text-orange-500" /> hello@example.co.uk</p>
                </div>
              </aside>
            </div>
          </section>
        </main>
      </div>
    );
  }

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
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange-500" /> 07944 521 440</span>
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
                      <a href={service.href} className="mt-5 inline-block bg-black px-5 py-3 text-xs font-bold text-white hover:bg-orange-500">Learn More</a>
                    </div>
                  </article>
                );
              })}
              <div className="rounded-sm bg-white p-5 text-left shadow-xl shadow-neutral-200/80">
                {quickLinks.map((item) => {
                  const href = item === "Web Hosting" ? "/email-web-hosting" : item === "Email Setup" ? "/email-web-hosting" : item === "Broadband Help" ? "/wifi-broadband-support" : item === "Network Support" ? "/network-support" : "/business-it-support";
                  return (
                    <a key={item} href={href} className="flex items-center justify-between border-b py-4 text-sm font-medium last:border-b-0 hover:text-orange-500">
                      {item}<ArrowRight className="h-4 w-4" />
                    </a>
                  );
                })}
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
                <a href={title === "Business IT Support" ? "/business-it-support" : title === "Network Solutions" ? "/network-support" : "/email-web-hosting"} className="mt-5 inline-flex items-center gap-1 text-sm font-bold">Find out more <ArrowRight className="h-4 w-4 text-orange-500" /></a>
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
              <p className="mt-4 text-neutral-600">Call <span className="font-bold text-orange-500">07944 521 440</span> or send a message and we will get back to you.</p>
            </div>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="grid gap-4 md:grid-cols-2"
            >
              <input
                type="hidden"
                name="access_key"
                value="f3a9804c-751e-4ffd-9930-6302bf1b73a9"
              />
              <input
                type="hidden"
                name="redirect"
                value={`${window.location.origin}/thank-you`}
              />
              <input className="border p-4" type="text" name="name" placeholder="Name" required />
              <input className="border p-4" type="email" name="email" placeholder="Email" required />
              <input className="border p-4" type="tel" name="phone" placeholder="Phone" />
              <select className="border p-4" name="service" required>
                <option value="">Service</option>
                <option value="Email & Web Hosting">Email & Web Hosting</option>
                <option value="WiFi & Broadband">WiFi & Broadband</option>
                <option value="Computer Support">Computer Support</option>
              </select>
              <textarea className="border p-4 md:col-span-2" name="message" rows="5" placeholder="Message" required />
              <input type="hidden" name="subject" value="New SmartFix IT enquiry" />
              <input type="checkbox" name="botcheck" className="hidden" />
              <button className="bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600 md:col-start-2" type="submit">Send Message</button>
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
              <p className="flex gap-2"><Phone className="h-4 w-4 text-orange-500" /> 07944 521 440</p>
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