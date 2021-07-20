import React, { useState } from "react";

import { Paper, AppBar, Tabs, Tab } from "@material-ui/core";

const Selector = ({ categories, changeHandler }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    changeHandler(categories[newValue]);
  };

  return (
      <Tabs value={value} onChange={handleChange} centered>
        {categories.map((c, idx) => (
          <Tab
            label={c.display.displayName}
            key={c.display.displayName + idx}
          />
        ))}
      </Tabs>
  );
};

export default Selector;
