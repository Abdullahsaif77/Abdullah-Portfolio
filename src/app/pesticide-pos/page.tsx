import type { Metadata } from "next";

import { ProjectCaseStudy, type CaseStudyProject } from "@/components/projects/project-case-study";

export const metadata: Metadata = {
  title: "Pesticide Shop POS — Desktop Business Management",
  description:
    "Case study of a desktop POS and business management application for pesticide shops, with offline operation, inventory, sales, purchases, ledgers, reporting, and cloud backups.",
};

const pesticide: CaseStudyProject = {
  number: "03",
  category: "Desktop POS & Business Software",
  title: "Pesticide Shop POS",
  description:
    "A desktop point-of-sale and business management application built for a pesticide shop, covering sales, purchases, inventory, customers, suppliers, ledgers, expenses, reports, and reliable offline data management.",

  heroImage: "/projects/pos/hero2.png",
  heroImageAlt: "Pesticide Shop POS desktop application",

  /**
   * Desktop application → render the hero in landscape ratio.
   * (This is also the default, but declaring it explicitly
   * keeps intent clear across the codebase.)
   */
  heroAspect: "landscape",

  technologies: ["Electron", "React", "Vite", "JavaScript", "SQLite", "Node.js", "Cloud Backup"],

  role: "Full-Stack Developer",
  type: "Client Project",
  platform: "Desktop Application",
  status: "Completed",

  overview:
    "The Pesticide Shop POS is a desktop business management system designed around the daily operations of a retail pesticide business. It manages sales, purchases, products, inventory, suppliers, customers, ledgers, expenses, reports, cash management, and other shop operations from a single offline-capable application.",

  challenge:
    "The application needed to support day-to-day shop operations without depending on an internet connection. Business records such as sales, purchases, inventory, customer balances, supplier balances, and expenses needed to remain available locally while also providing a reliable way to protect business data through backups.",

  solution:
    "The application was built as an Electron desktop application with React and SQLite. Local storage keeps the core business system available offline, while a backup system allows important application data to be protected through cloud backups.",

  features: [
    {
      number: "01",
      title: "Sales Management",
      description:
        "Record and manage shop sales while maintaining product quantities, customer information, and related financial records.",
    },
    {
      number: "02",
      title: "Purchase Management",
      description:
        "Track purchases from suppliers and maintain the relationship between purchasing activity, products, inventory, and supplier balances.",
    },
    {
      number: "03",
      title: "Inventory Management",
      description:
        "Manage products and stock levels while keeping inventory connected to sales and purchasing workflows.",
    },
    {
      number: "04",
      title: "Customer & Supplier Ledgers",
      description:
        "Maintain financial records and outstanding balances for customers and suppliers.",
    },
    {
      number: "05",
      title: "Expenses & Cash Management",
      description:
        "Track business expenses and manage cash-related shop operations from within the application.",
    },
    {
      number: "06",
      title: "Reports",
      description:
        "Provide business reports that help the shop review sales, purchases, inventory, expenses, and financial activity.",
    },
    {
      number: "07",
      title: "Offline Operation",
      description:
        "Core business functionality works locally without requiring an active internet connection.",
    },
    {
      number: "08",
      title: "Cloud Backups",
      description:
        "Protect important business data by providing cloud-based backup functionality for the locally stored application data.",
    },
  ],

  architecture: {
    frontend: ["React", "Vite", "Electron"],
    backend: ["Electron Main Process", "Node.js"],
    database: ["SQLite", "Local Database"],
    services: ["Cloud Backups", "Local File Storage"],
  },

  /**
   * Each decision must have: title, reasoning, outcome.
   */
  decisions: [
    {
      title: "Local-first business data",
      reasoning:
        "SQLite was used as the local data layer so the application could continue operating without relying on an internet connection.",
      outcome:
        "The shop stays fully operational during internet outages — sales, inventory, and ledger data remain available on-device.",
    },
    {
      title: "Desktop architecture",
      reasoning:
        "Electron provides the desktop application environment while React handles the user interface and application experience.",
      outcome:
        "A native-feeling desktop app with web-speed development — installable, offline-capable, and cross-platform.",
    },
    {
      title: "Data protection through backups",
      reasoning:
        "Cloud backups provide an additional layer of protection for business records stored locally on the shop computer.",
      outcome:
        "Business records survive hardware failure — local SQLite data can be restored from cloud backups.",
    },
    {
      title: "Business-focused workflows",
      reasoning:
        "The application was structured around actual shop operations rather than generic CRUD screens, connecting sales, purchases, inventory, ledgers, expenses, and reporting.",
      outcome:
        "The interface mirrors how the shop actually runs, reducing training time and making daily operations faster.",
    },
  ],

  gallery: [
    { src: "/projects/pos/hero2.png", alt: "Dashboard", group: "Desktop" },
    { src: "/projects/pos/screen-1.jpeg", alt: "Dashboard", group: "Desktop" },
    { src: "/projects/pos/screen-2.jpeg", alt: "Sales", group: "Desktop" },
    { src: "/projects/pos/screen-3.jpeg", alt: "Inventory", group: "Desktop" },
    { src: "/projects/pos/screen-4.jpeg", alt: "Management", group: "Desktop" },
  ],

  github: "https://github.com/Abdullahsaif77/pesticide-pos",
};

export default function PesticidePage() {
  return <ProjectCaseStudy project={pesticide} />;
}
