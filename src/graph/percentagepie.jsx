import React, { useEffect, useRef } from "react";
import {
  Chart,
  ArcElement,
  PieController,
  Tooltip,
  Legend,
  Title
} from "chart.js";

// Register required chart.js elements
Chart.register(ArcElement, PieController, Tooltip, Legend, Title);

export default function Percentagepie() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy any previous chart to avoid “canvas already in use” error
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new Pie chart
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Facebook","whatsapp","Instagram", "Twitter"],
        datasets: [
          {
            label: "Mobile(Percentage)",
            data: [75,99,95,80],
            backgroundColor: [
              
              "#97B5F6",
              "#7AFF9D",
              "rgba(255, 99, 132, 0.8)",
              "#7AD3FF"
            ],
            borderColor: "white",
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom"
          },
          title: {
            display: true,
            text: "Mobile vs Desktop Users (Percentage)",
            font: { size: 18 }
          }
        }
      }
    });

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",           // ✅ Centers the chart horizontally
        justifyContent: "center",  // ✅ Horizontally center
        alignItems: "center",      // ✅ Vertically center
        height: "100%",           // Full screen height
        padding: "2rem",
        backgroundColor: "white" // Light background
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "400px",
          padding: "1rem",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >
        <canvas ref={chartRef} id="pieChart" />
      </div>
    </div>
  );
}
