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

export default function Twittergraphchart() {
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
         labels: ["2010", "2011", "2012","2013","2014","2015","2016","2017", "2018", "2019", "2020", "2021", "2022","2023","2024","2025"],
        datasets: [
          {
            label: "Twitter / X",
            data: [40,85,151,218,271,304,313,310,298,312,347,362,401,421,430,440],
            borderColor: "rgb(0, 174, 255)",
            backgroundColor: "rgba(3, 171, 255, 0.53)",
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
            text: "Twitter / X downloads graph"
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Years",        // ✅ X-axis label
              font: { size: 15}
            },
            grid: { color: "rgb(0, 174, 255)" }
          },
          y: {
            title: {
              display: true,
              text: "Number of Million", // ✅ Y-axis label
              font: { size: 15}
            },
            beginAtZero: true,
            grid: { color: "rgb(0, 174, 255)" }
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

