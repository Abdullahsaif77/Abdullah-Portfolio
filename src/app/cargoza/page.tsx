import type { Metadata } from "next";

import { ProjectCaseStudy, type CaseStudyProject } from "@/components/projects/project-case-study";

export const metadata: Metadata = {
  title: "Cargoza — SaaS Logistics & Dispatch Platform",
  description:
    "Case study of Cargoza, a SaaS logistics and dispatch platform connecting administrators and drivers through bidding, route-based opportunities, real-time tracking, and operational management.",
};

const cargoza: CaseStudyProject = {
  number: "01",
  category: "SaaS Logistics & Dispatch",
  title: "Cargoza",
  description:
    "A multi-surface logistics platform that connects administrators and drivers through dispatch opportunities, bidding, route-based matching, real-time location tracking, and operational communication.",

  heroImage: "/projects/cargoza/hero.png",
  heroImageAlt: "Cargoza logistics and dispatch platform",

  technologies: [
    "React Native",
    "Expo",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "RTK Query",
    "Socket.IO",
    "JWT",
    "Redis",
    "Stripe",
    "Cloudinary",
    "Google APIs",
  ],

  role: "Full-Stack Developer",
  type: "Client Project",
  platform: "Driver App + Admin Mobile + Admin Web",
  status: "Completed",

  overview:
    "Cargoza is a SaaS logistics and dispatch platform built around the relationship between administrators and drivers. Administrators can manage their driver network, create shipments, propose dispatch opportunities, and monitor active drivers, while drivers can discover relevant bids, respond with an acceptance or counter-offer, communicate with administrators, and share their location in real time.",

  challenge:
    "The platform needed to coordinate multiple applications around the same operational workflow. Administrators needed tools to manage drivers, create shipments, send bids, communicate with their teams, and monitor locations, while drivers needed a mobile experience for discovering opportunities, responding to bids, viewing routes, and sharing their live location. The backend also had to handle frequent location updates without turning every real-time event into a database write.",

  solution:
    "Cargoza was built as a connected ecosystem consisting of a driver mobile application, an admin mobile application, an admin web panel, and a shared backend. Socket.IO handles real-time communication and location updates, MongoDB stores persistent application data, Redis helps reduce repeated work and external API usage, while Google Maps APIs support route and location functionality. Stripe, Cloudinary, JWT authentication, and RTK Query support the surrounding product workflows.",

  ecosystem: [
    {
      label: "Driver App",
      value: "React Native + Expo",
      description:
        "The mobile experience for drivers to view available bids, respond to dispatch opportunities, make offers, communicate with administrators, view routes, and share their location in real time.",
    },
    {
      label: "Admin Mobile",
      value: "Mobile Operations",
      description:
        "A mobile control surface for administrators to manage their drivers and monitor driver locations while staying connected to ongoing operations.",
    },
    {
      label: "Admin Web",
      value: "Vite Web Panel",
      description:
        "The web-based administration experience for managing the organization, drivers, shipments, bids, routes, communication, and other operational workflows.",
    },
    {
      label: "Backend",
      value: "Node.js + Express",
      description:
        "The central application layer connecting the different clients, enforcing business logic, handling authentication, and coordinating persistent and real-time operations.",
    },
    {
      label: "Real-Time Layer",
      value: "Socket.IO",
      description:
        "The communication layer used for live driver location updates and real-time interactions between connected users.",
    },
    {
      label: "External Services",
      value: "Maps + Payments + Media",
      description:
        "Google APIs, Stripe, and Cloudinary extend the platform with mapping, payment, and media capabilities.",
    },
  ],

  features: [
    {
      number: "01",
      title: "Dispatch bidding",
      description:
        "Administrators can create shipment opportunities and propose bids to drivers. Drivers can review available opportunities and either accept a bid or respond with an offer.",
    },
    {
      number: "02",
      title: "Route-based opportunities",
      description:
        "Drivers can discover dispatch opportunities relevant to their routes, helping connect available work with the drivers who can realistically serve it.",
    },
    {
      number: "03",
      title: "Real-time driver tracking",
      description:
        "Drivers continuously share their location through Socket.IO, allowing administrators to monitor connected drivers without relying on repeated polling requests.",
    },
    {
      number: "04",
      title: "Driver management",
      description:
        "Administrators can manage the drivers within their organization, including adding drivers and removing or expelling them when necessary.",
    },
    {
      number: "05",
      title: "Shipments & routes",
      description:
        "Administrators can create shipments and manage route-related operational data, while drivers can access current and previous route information.",
    },
    {
      number: "06",
      title: "Real-time communication",
      description:
        "Administrators can communicate with drivers through the platform, including conversations with individual drivers and broader driver communication.",
    },
    {
      number: "07",
      title: "SaaS subscriptions",
      description:
        "The platform uses a subscription-oriented SaaS model where administrators can purchase plans for their organization and manage their connected driver network.",
    },
    {
      number: "08",
      title: "External service integrations",
      description:
        "Google APIs, Stripe, and Cloudinary are integrated into the platform to support mapping, payment, and media-related functionality.",
    },
  ],

  architecture: {
    frontend: ["React Native", "Expo", "Vite", "RTK Query"],
    backend: ["Node.js", "Express", "JWT"],
    database: ["MongoDB"],
    services: ["Socket.IO", "Redis", "Google APIs", "Stripe", "Cloudinary"],
  },

  decisions: [
    {
      title: "Separate real-time communication from persistence",
      reasoning:
        "Driver location can change frequently, so writing every Socket.IO location event directly to MongoDB would create unnecessary database activity.",
      outcome:
        "Meaningful movement points can be evaluated and accumulated before being persisted, reducing unnecessary database writes while maintaining real-time visibility.",
    },
    {
      title: "Use Socket.IO for live location updates",
      reasoning:
        "Driver tracking requires the server and connected clients to exchange updates continuously without relying on repeated polling requests.",
      outcome:
        "The platform can deliver live driver location updates to connected administrative interfaces through a dedicated real-time communication layer.",
    },
    {
      title: "Use Redis to reduce repeated external work",
      reasoning:
        "Some operations can require repeated access to external services or repeated processing of data that does not need to be recalculated every time.",
      outcome:
        "Redis provides a caching layer that can reduce unnecessary repeated work and external API usage.",
    },
    {
      title: "Build multiple clients around one backend",
      reasoning:
        "Drivers and administrators have fundamentally different workflows, while the underlying business data and rules need to remain consistent.",
      outcome:
        "The Driver App, Admin Mobile application, and Admin Web panel can provide purpose-built experiences while sharing the same backend and data model.",
    },
  ],

  gallery: [
    {
      src: "/projects/cargoza/screen-9.png",
      alt: "Cargoza Admin web dashboard",
      group: "Admin Web",
    },
    {
      src: "/projects/cargoza/screen-10.png",
      alt: "Cargoza Admin web dispatch management",
      group: "Admin Web",
    },
    {
      src: "/projects/cargoza/screen-11.png",
      alt: "Cargoza Admin web driver management",
      group: "Admin Web",
    },
    {
      src: "/projects/cargoza/screen-12.png",
      alt: "Cargoza Admin web dispatch management",
      group: "Admin Web",
    },
    {
      src: "/projects/cargoza/screen-13.png",
      alt: "Cargoza Admin web dispatch management",
      group: "Admin Web",
    },
    {
      src: "/projects/cargoza/screen-14.png",
      alt: "Cargoza Admin web dispatch management",
      group: "Admin Web",
    },
    {
      src: "/projects/cargoza/screen-15.png",
      alt: "Cargoza Admin web dispatch management",
      group: "Admin Web",
    },
    {
      src: "/projects/cargoza/screen-5.png",
      alt: "Cargoza administration interface",
      group: "Admin",
    },

    {
      src: "/projects/cargoza/screen-7.png",
      alt: "Cargoza administration and operations interface",
      group: "Admin",
    },
    {
      src: "/projects/cargoza/screen-8.png",
      alt: "Cargoza administration and operations interface",
      group: "Admin",
    },

    {
      src: "/projects/cargoza/screen-1.png",
      alt: "Cargoza driver application interface",
      group: "Driver App",
    },
    {
      src: "/projects/cargoza/screen-2.png",
      alt: "Cargoza driver application workflow",
      group: "Driver App",
    },

    {
      src: "/projects/cargoza/screen-4.png",
      alt: "Cargoza driver application workflow",
      group: "Driver App",
    },
  ],

  github: "https://github.com/Abdullahsaif77/cargoza",
};

export default function CargozaPage() {
  return <ProjectCaseStudy project={cargoza} />;
}
