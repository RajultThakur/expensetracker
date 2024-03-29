import { PieChart } from "react-minimal-pie-chart";
import React from "react";

export default function Chart() {
  return (
    <div className="w-[30%] h-[200px]">
      <PieChart
        data={[
          { title: "Food", value: 70, color: "#E38627" },
          { title: "Travel", value: 30, color: "#C13C37" },
          { title: "Other", value: 10, color: "#6A2135" },
        ]}
      />
    </div>
  );
}
