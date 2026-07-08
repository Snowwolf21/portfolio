import { metrics } from "@/data/about";

import MetricCard from "./MetricCard"

export default function MetricGrid() {
  return (
    <div className="
        grid
        grid-cols-2
        gap-6
        md:grid-cols-2
        sm:grid-cols-2
        hover:border-accent/40
        
        transition-all
        duration-500
        ">

      {metrics.map(metric => (

        <MetricCard key={metric.label} {...metric} />

      ))}

    </div>
  );
}


