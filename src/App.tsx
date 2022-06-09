import type { Component } from "solid-js";
import Pre from "./components/Pre";

const App: Component = () => {
  return (
    <div class="bg-true-gray-900 h-screen w-screen text-white font-sans">
      <h1 class="text-center">JSON Formatter</h1>

      <Pre>
        {`
    "ip": "2405:201:6804:4072:7d0d:4311:2771:8db4",
    "colo": "DEL",
    "city": "Dehradun",
    "country": "IN",
    "continent": "AS",
    "latitude": "30.32200",
    "longitude": "78.03000",
    "postalCode": "248001",
    "region": "Uttarakhand",
    "regionCode": "UT",
    "timezone": "Asia/Kolkata"
    `}
      </Pre>
    </div>
  );
};

export default App;
