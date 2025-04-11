"use client";

import type { Ship, ShipMissingAttributes } from "@/util/types/graphql";
import { ShipItem } from "./ShipItem";
import { Modal } from "./Modal";
import { useState } from "react";
import Image from "next/image";

interface ShipListingProps {
  ships: Ship[];
  missingAttributesData: ShipMissingAttributes[];
}

export const ShipListing = ({
  ships = [],
  missingAttributesData = [],
}: ShipListingProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShip, setSelectedShip] = useState<Ship | null>();

  const handleShipClick = (shipId: string) => {
    setSelectedShip(ships.find((x) => x.id === shipId));
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {ships.map((ship) => {
          const missingAttrs = missingAttributesData.find(
            (x) => x.shipId === ship.id,
          )?.missingCount;

          return ship ? (
            <ShipItem
              key={ship.id}
              ship={ship}
              missingAttributes={missingAttrs}
              onShipClicked={(shipId) => handleShipClick(shipId)}
            />
          ) : null;
        })}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedShip?.name ?? ""}
      >
        <div className="flex flex-col gap-4">
          <div className="relative aspect-auto h-96">
            <Image
              src={selectedShip?.image ?? "placeholder.svg"}
              alt={selectedShip?.name ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">Class</dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {selectedShip?.class ?? "Unknown"}
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  Year built
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {selectedShip?.year_built ?? "Unknown"}
                </dd>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  Home port
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {selectedShip?.home_port ?? "Unknown"}
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <div className="text-sm/6 font-medium text-gray-900 mb-4">
              Mission data:
            </div>
            {selectedShip?.missions?.length ? (
              <table className="min-w-full border border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Mission</th>
                    <th className="py-2 px-4 text-left">Flight</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedShip?.missions?.map((mission) => (
                    <tr key={mission?.name} className="border-b">
                      <td className="py-2 px-4">{mission?.name}</td>
                      <td className="py-2 px-4">{mission?.flight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <span className="text-sm/6">No Mission Data</span>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
