import type { Ship } from "@/util/types/graphql";
import Image from "next/image";

interface ShipItemProps {
  ship: Ship;
  missingAttributes?: number;
  onShipClicked: (shipId: string) => void;
}

export function ShipItem({
  ship,
  missingAttributes,
  onShipClicked,
}: ShipItemProps) {
  return (
    <div
      className="grid grid-cols-2 gap-4 cursor-pointer"
      onClick={() => onShipClicked(ship.id)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={ship.image ?? "placeholder.svg"}
          alt={ship.name ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="mt-2">
        <div className="mb-4">
          <div className="text-lg">{ship.name}</div>
          <div className="text-xs">{ship.id}</div>
        </div>
        <div>Class: {ship.class ?? "Unknown"}</div>
        <div>Home port: {ship.home_port}</div>
        <div>Year built: {ship.year_built ?? "Unknown"}</div>
        <div>Type: {ship.type}</div>
        <div>Active: {ship.active ? "Yes" : "No"}</div>
        <div>Missing attributes: {missingAttributes ?? "Unknown"}</div>
      </div>
    </div>
  );
}
