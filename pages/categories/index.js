import React, { useState } from "react";
import Selector from "../../components/Selector";
import Grid from "../../components/Grid";
import { Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import axios from "axios";

import Link from "next/link";

const Categories = ({ categories }) => {
  const [filterType, setFilterType] = useState(categories[0]);

  return (
    <Paper className="flex flex-col justify-center items-center">
      <Selector
        categories={categories}
        changeHandler={(value) => {
          setFilterType(value);
        }}
      />
      <div className="grid grid-cols-2 gap-4 m-5 md:grid-cols-4">
        {filterType.display.categoryTopics.map((c, idx) => {
          return (
            <Link
              href={`/categories/${encodeURIComponent(c.display.tag)}/1`}
              key={c.display.displayName + idx}
            >
              <a>
                <Grid
                  tag={c.display.tag}
                  img={c.display.iconImage}
                  name={c.display.displayName}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </Paper>
  );
};

export async function getStaticProps() {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/categories/list",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": process.env.API_HOST,
    },
  };
  const { data } = await axios.request(options);

  if (!data) {
    return {
      notFound: true,
    };
  }
  const categories = data["browse-categories"].filter(
    (x) => x.type === "category-list"
  );

  return {
    props: { categories },
  };
}

export default Categories;
