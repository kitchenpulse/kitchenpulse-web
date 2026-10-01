import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EquipmentPageView from "@/components/equipment/EquipmentPageView";
import {
  getEquipmentPage,
  listEquipmentSlugs,
} from "@/lib/equipment/data";
import { buildEquipmentMetadata } from "@/lib/equipment/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listEquipmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getEquipmentPage(slug);
  if (!page) return {};
  return buildEquipmentMetadata(page);
}

export default async function EquipmentSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getEquipmentPage(slug);
  if (!page) notFound();
  return <EquipmentPageView page={page} />;
}
