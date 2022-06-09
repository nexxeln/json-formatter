import type { Component } from "solid-js";
import Pre from "./components/Pre";

const App: Component = () => {
  return (
    <div class="bg-true-gray-900 h-screen w-screen text-white font-sans">
      <h1 class="text-center">JSON Formatter</h1>

      <div class="mt-8" />
      <div class="w-full grid grid-cols-2 gap-10 px-4">
        <textarea
          placeholder="Paste JSON here"
          class="p-4 text-red-400 placeholder:text-red-300 focus:outline-none focus:ring focus:ring-red-500 h-48 font-mono resize-y rounded-md border transition ease-in-out bg-dark border-gray-700"
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
        />

        <Pre></Pre>
      </div>
    </div>
  );
};

export default App;
