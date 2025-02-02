import React, { lazy, Suspense } from "react";
import "./App.css";
import { LoadingSpinner } from "./components/LoadingSpinner";

const MyLazyDashboard = lazy(() => import("./components/Dashboard"));

const App = () => (
  <div className="w-full h-full">
    <Suspense
      fallback={
        <div className="w-full h-dvh flex justify-center items-center">
          <LoadingSpinner />
        </div>
      }
    >
      <MyLazyDashboard />
    </Suspense>
  </div>
);

export default App;
