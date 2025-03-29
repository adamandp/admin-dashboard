"use client";

import { useEffect, useRef } from "react";
import { map } from "./users-by-country-map";
import { CountryData } from "@/lib/definitions/dashboard";

export const UsersByCountryMap = ({ data }: { data: CountryData[] }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createdMap = map(mapContainer, data);
    return () => createdMap?.remove();
  });

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-c-5"
    />
  );
};
