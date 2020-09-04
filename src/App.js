import React from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        {/* Title + Select Input dropdow field */}
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="z">Worldwide</MenuItem>
            <MenuItem value="a">Option 2</MenuItem>
            <MenuItem value="b">Option 3</MenuItem>
            <MenuItem value="c">Yeeeee</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
