import React, { useState } from "react";
import "./global.css";
import FilterTags from "./theme/FilterTags";
// import ChartWidget from "@components/ChartWidget";
// import { ChartWidgetOptionsType } from "@ChartWidget/type";

// const chartWidgetOptions: ChartWidgetOptionsType = {
//   style: {
//     width: "100%",
//     maxWidth: "1000px",
//     height: "650px",
//   },
//   other: "Something",
// };

const options = [
  { value: "First", label: "First" },
  { value: "Second", label: <h1>Second</h1> },
];

const App: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>("Second");

  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      {/* <ChartWidget options={chartWidgetOptions} /> */}
      <div>
        <FilterTags
          filterOptions={options}
          selectedValue={filterValue}
          setFilter={setFilterValue}
          className="border p-4 w-[200px]"
        />
      </div>
    </div>
  );
};

export default App;
