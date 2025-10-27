import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register components
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function Advertisingbarchart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy old chart to prevent “Canvas already in use” error
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new Bar Chart
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["advertisement"],
        datasets: [
          {
            label: "Facebook",
            data: [2.2],
            backgroundColor: "#97B5F6"
          },
          {
            label: "whatsapp",
            data: [1.3],
            backgroundColor: "#7AFF9D"
          },
          {
            label: "Instagram",
            data: [1.7],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
          },
          {
            label: "Twitter / X",
            data: [0.6],
            backgroundColor: "#7AD3FF"
          },
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
            text: "Advertising Reach",
            font: { size: 18 }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Apps",
              font: { size: 14, weight: "bold" }
            }
          },
          y: {
            title: {
              display: true,
              text: "Reaching Audience (billions)",
              font: { size: 14, weight: "bold" }
            },
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center",     // Center vertically
        height: "100%",
        padding: "2rem",
        backgroundColor: "#FFFFFF"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "400px",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "1rem",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >
        <canvas ref={chartRef} id="barChart" />
      </div>
    </div>
  );
}
