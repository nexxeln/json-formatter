import { Component, createSignal } from "solid-js";

import Pre from "./components/Pre";

const App: Component = () => {
  const [value, setValue] = createSignal("");
  const [parsedValue, setParsedValue] = createSignal("No content");

  const parseValue = () => {
    if (value() === "") {
      setParsedValue("No content");
      return;
    }

    try {
      setParsedValue(JSON.stringify(JSON.parse(value()), null, 2));
    } catch (error) {
      setParsedValue((error as Error).message);
    }

    console.log(parsedValue());
  };

  return (
    <div class="bg-true-gray-900 font-sans mb-6 text-light-900">
      <div class="mt-4" />
      <h1 class="text-center">JSON Formatter</h1>
      <div class="mt-8" />
      <div class="w-full grid grid-cols-2 gap-10 px-4">
        <div class="flex flex-col">
          <textarea
            placeholder="Paste JSON here"
            class="p-4 text-red-400 placeholder:text-red-300 focus:outline-none focus:ring focus:ring-red-500 h-48 font-mono resize-y rounded-md border transition ease-in-out bg-dark border-gray-700"
            value={value()}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
        <Pre>{parsedValue()}</Pre>
      </div>

      <div class="mt-4" />
      <button
        class="w-20 px-4 py-2 bg-red-500 rounded-md hover:bg-red-400 transition-colors text-light-900 duration-300 ml-4 cursor-pointer"
        onClick={parseValue}
      >
        Format
      </button>
    </div>
  );
};

export default App;
