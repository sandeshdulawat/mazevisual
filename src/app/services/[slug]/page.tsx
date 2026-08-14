import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import ServicePageContent from "./ServicePageContent";
import InteriorPageContent from "./InteriorPageContent";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — Maze Visual`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (slug === "interior") {
    return <InteriorPageContent service={service} />;
  }

  return <ServicePageContent service={service} />;
}
