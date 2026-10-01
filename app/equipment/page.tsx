import type { Metadata } from "next";
import EquipmentPageView from "@/components/equipment/EquipmentPageView";
import { getEquipmentHub } from "@/lib/equipment/data";
import { buildEquipmentMetadata } from "@/lib/equipment/metadata";

const hub = getEquipmentHub();

export const metadata: Metadata = buildEquipmentMetadata(hub);

export default function EquipmentHubPage() {
  return <EquipmentPageView page={hub} />;
}
