import type { Metadata } from "next";

import { ProjectCaseStudy, type CaseStudyProject } from "@/components/projects/project-case-study";

export const metadata: Metadata = {
  title: "Siflo — Cross-Platform POS & Business Management",
  description:
    "Case study of Siflo, a cross-platform POS application with offline SQLite storage, online MongoDB synchronization, invoicing, ledgers, payments, returns, and business management.",
};

const siflo: CaseStudyProject = {
  number: "02",
  category: "POS & Business Management",
  title: "Siflo",
  description:
    "A cross-platform point-of-sale and business management application designed to keep everyday sales, purchases, inventory, payments, ledgers, and financial records organized — even when the application is offline.",

  heroImage: "/projects/siflo/hero.png",
  heroImageAlt: "Siflo point-of-sale application",

  technologies: [
    "React Native",
    "Expo",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "SQLite",
    "Redux Toolkit",
    "RTK Query",
    "Zustand",
    "SecureStore",
  ],

  role: "Full-Stack Developer",
  type: "Business Software",
  platform: "Cross-Platform Mobile",
  status: "In Development",

  overview:
    "Siflo is a practical POS application built to manage the everyday operations of a small business. It brings sales, purchases, products, customers, suppliers, payments, returns, ledgers, and profit and loss tracking into one application, with an offline-first approach so core business operations can continue without a reliable internet connection.",

  challenge:
    "A POS application cannot depend entirely on an internet connection. Sales and business records need to remain accessible when connectivity is unavailable, while the application still needs a reliable online backend for persistence, synchronization, reporting, and access to generated documents.",

  solution:
    "Siflo uses a cross-platform React Native application with local SQLite storage for offline operation and MongoDB Atlas as the online data layer. The application can work with local business data and synchronize with the backend when connectivity is available, while the backend also handles business operations and invoice generation.",

  features: [
    {
      number: "01",
      title: "Sales & Purchases",
      description:
        "Record sales and purchases while maintaining the related products, customers, suppliers, quantities, and financial records.",
    },
    {
      number: "02",
      title: "Offline-First Data",
      description:
        "Core application data can be stored locally using SQLite so the POS remains useful even when an internet connection is unavailable.",
    },
    {
      number: "03",
      title: "Online Synchronization",
      description:
        "MongoDB Atlas provides the online persistence layer while the application architecture supports working with local and remote business data.",
    },
    {
      number: "04",
      title: "Customer & Supplier Ledgers",
      description:
        "Track outstanding balances, payments, transaction history, and ledger activity for customers and suppliers.",
    },
    {
      number: "05",
      title: "Returns & Adjustments",
      description:
        "Handle sale and purchase returns while keeping related financial records and balances consistent.",
    },
    {
      number: "06",
      title: "Profit & Loss",
      description:
        "Provide business-level financial information including sales, purchases, profit, loss, and related operational statistics.",
    },
    {
      number: "07",
      title: "Invoice Documents",
      description:
        "Generate invoice PDFs that can be downloaded and shared directly from the application.",
    },
    {
      number: "08",
      title: "Product & Inventory Management",
      description:
        "Manage products and inventory information alongside the sales and purchase workflows.",
    },
  ],

  architecture: {
    frontend: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "RTK Query", "Zustand"],
    backend: ["Node.js", "Express", "REST APIs"],
    database: ["SQLite", "MongoDB Atlas"],
    services: ["PDF Invoice Generation", "SecureStore", "Offline Data Layer"],
  },

  decisions: [
    {
      title: "Offline-first data model",
      description:
        "Local SQLite storage allows important POS data to remain available without requiring a constant internet connection.",
    },
    {
      title: "Local + cloud data layers",
      description:
        "The application separates local persistence from the online MongoDB Atlas backend, creating a foundation for reliable synchronization between the device and server.",
    },
    {
      title: "Centralized API state",
      description:
        "RTK Query is used to manage communication with the backend while keeping remote data fetching and caching organized.",
    },
    {
      title: "Document generation on the backend",
      description:
        "Invoice PDF generation is handled as part of the backend workflow so invoices can be produced consistently from business transaction data.",
    },
  ],

  gallery: [
    {
      src: "/projects/siflo/screen-1.png",
      alt: "Siflo POS application dashboard",
      group: "POS App",
    },
    {
      src: "/projects/siflo/screen-2.png",
      alt: "Siflo sales interface",
      group: "POS App",
    },
    {
      src: "/projects/siflo/screen-3.png",
      alt: "Siflo products interface",
      group: "POS App",
    },
    {
      src: "/projects/siflo/screen-4.png",
      alt: "Siflo customer and supplier management",
      group: "POS App",
    },
  ],

  github: "https://github.com/Abdullahsaif77/siflo",
};

export default function SifloPage() {
  return <ProjectCaseStudy project={siflo} />;
}
