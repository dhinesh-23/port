import React, { useRef, useEffect } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend,Filler);

export default function Instagraphchart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // 🔥 destroy old chart instance if exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [ "2020","2023","2024","2025"],
        datasets: [
          {
            label: "Instagram",
            data: [503, 696,1068,3800],
            borderColor: "#d60affff",
            backgroundColor: "rgba(255, 3, 137, 0.53)",
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: "top" },
          title: {
            display: true,
            text: "Instagram downloads graph"
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Years",        // ✅ X-axis label
              font: { size: 15}
            },
            grid: { color: "#d60affff" }
          },
          y: {
            title: {
              display: true,
              text: "Number of Million", // ✅ Y-axis label
              font: { size: 15 }
            },
            beginAtZero: true,
            grid: { color: "#d60affff" }
          }
        }
      }
    });

    return () => {
      // cleanup on unmount or refresh
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}

