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

export default function Whatappgraphchart() {
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
        labels: ["2013","2014","2015","2016","2017", "2018", "2019", "2020", "2021", "2022","2023","2024","2025"],
        datasets: [
          {
            label: "Whatsapp",
            data: [0.5,0.8,1.2,2.0,2.9,3.4,4.3,4.7,5.1,5.5,5.8,6.3,6.9],
            borderColor: "green",
            backgroundColor: "rgba(3, 255, 70, 0.53)",
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
            text: "WhatsApp downloads graph"
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Years",        // ✅ X-axis label
              font: { size: 15}
            },
            grid: { color: "rgba(27, 235, 44, 1)" }
          },
          y: {
            title: {
              display: true,
              text: "Number of billion", // ✅ Y-axis label
              font: { size: 15 }
            },
            beginAtZero: true,
            grid: { color: "rgba(27, 235, 44, 1)" }
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

