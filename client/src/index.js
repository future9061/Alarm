import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App"
import CurrentTime from './components/CurrentTime/CurrentTime';
import Alarm from './components/Alarm/Alarm';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Timer from './components/Timer/Timer';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <CurrentTime />,
      },
      {
        path: "/alarm",
        element: <Alarm />,
      }, {
        path: "/timer",
        element: <Timer />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>

);


reportWebVitals();
