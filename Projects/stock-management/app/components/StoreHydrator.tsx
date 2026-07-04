"use client";

import { useEffect } from "react";
import { useDashboardStore } from "@/lib/store";

export default function StoreHydrator() {
  const hydrate = useDashboardStore((state) => state.hydrate);

  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  return null;
}
