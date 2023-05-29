import React, { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import ChartService from "../usecase/ChartService";
import Navbar from "../components/Navbar";

const DashboardChart = () => {
  const [carrierNoise, setCarrierNoise] = useState([]);
  const [signalNoise, setSignalNoise] = useState([]);

  const fetchCarrier = async () => {
    try {
      const res = await ChartService.getListCarrier();
      setCarrierNoise(res);
    } catch (error) {
      console.log("Error fetching carrier noise:", error);
    }
  };

  const fetchSignal = async () => {
    try {
      const res = await ChartService.getSignalNoise();
      console.log('res',res)
      setSignalNoise(res[0]);
    } catch (error) {
      console.log("Error fetching carrier noise:", error);
    }
  };

  useEffect(() => {
    fetchCarrier();
    fetchSignal();
  }, []);

  const chartData = {
    labels: carrierNoise[0]?.dataTime?.slice(1), // Remove the first timestamp
    datasets: [
      {
        label: "Term US Min",
        data: carrierNoise[0]?.termUsMin,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Term US Avg",
        data: carrierNoise[0]?.termUsAvg,
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartDataSignalNoise = {
    labels: signalNoise?.dataTime?.slice(1),
    datasets: [
      {
        label: 'Term DS Min',
        data: signalNoise?.termDsMin,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Term Current Avg',
        data: signalNoise?.termCurrentAvg,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Term DS Avg',
        data: signalNoise?.termDsAvg,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="text-center">
      <Navbar />
      <h1>DASHBOARD CHART</h1>
      <div>
        <h1>Carrier over Noise</h1>
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
      <div>
        <h1>Signal to Noise</h1>
        <Chart type="line" data={chartDataSignalNoise} options={chartOptions} />
      </div>
    </div>
  );
};

export default DashboardChart;
