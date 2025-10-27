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

export default function FBgraphchart() {
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
        labels: ["2017", "2018", "2019", "2020", "2021", "2022","2023","2024","2025"],
        datasets: [
          {
            label: "Facbook",
            data: [660,710,682,540,416,440,553,571,602],
            borderColor: "rgba(27, 47, 235, 1)",
            backgroundColor: "rgba(59, 116, 238, 0.53)",
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
            text: "Facebook downloads graph"
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Years",        // ✅ X-axis label
              font: { size: 15}
            },
            grid: { color: "rgba(27, 47, 235, 1)" }
          },
          y: {
            title: {
              display: true,
              text: "Number of millon", // ✅ Y-axis label
              font: { size: 15 }
            },
            beginAtZero: true,
            grid: { color: "rgba(27, 47, 235, 1)" }
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
