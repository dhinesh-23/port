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

export default function ScreenTimebarchart() {
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
        labels: ["one day"],
        datasets: [
          {
            label: "Facebook",
            data: [33],
            backgroundColor: "#97B5F6"
          },
          {
            label: "whatsapp",
            data: [38],
            backgroundColor: "#7AFF9D"
          },
          {
            label: "Instagram",
            data: [48],
            backgroundColor: "rgba(255, 99, 132, 0.8)"
          },
          {
            label: "Twitter / X",
            data: [29],
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
            text: "Average Daily Screen Time",
            font: { size: 18 }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Per day",
              font: { size: 14, weight: "bold" }
            }
          },
          y: {
            title: {
              display: true,
              text: "Minutes",
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
