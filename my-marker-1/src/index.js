import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MapMarker from './pages/MapMarker';
import Blog from './pages/Blog';
import DashboardChart from './pages/DashboardChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  TimeScale,
} from "chart.js";
import 'chart.js/auto'
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  TimeScale,
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "/chart",
    element: <DashboardChart />,
  },
  {
    path: "/map",
    element: <MapMarker />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
