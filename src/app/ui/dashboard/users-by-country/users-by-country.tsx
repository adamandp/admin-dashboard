"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/card";
import { map } from "./users-by-country-map";
import { fetchUsersByCountry } from "@/lib/data";
import { useSuspenseQuery } from "@tanstack/react-query";

export const UsersByCountry = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { data } = useSuspenseQuery({
    queryKey: ["users-by-country"],
    queryFn: fetchUsersByCountry,
  });

  useEffect(() => {
    const createdMap = map(mapContainer, data.data);
    return () => createdMap?.remove();
  });

  return (
    <Card>
      <div ref={mapContainer} className="w-full aspect-[16/4] rounded-c-5" />
    </Card>
  );
};
