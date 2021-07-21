import { useRouter } from "next/router";
import Grid from "../../../components/Grid";
import axios from "axios";
import LayoutGrid from "../../../components/LayoutGrid";
import { useState } from "react";
import RecipeModal from "../../../components/RecipeModal";

const Recipes = ({ recipes }) => {
  const router = useRouter();
  const [recipe, setRecipe] = useState({});
  const [showModal, setShowModal] = useState(false);

  if (router.isFallback) {
    return (
      <LayoutGrid>
        <div>Loading...</div>
      </LayoutGrid>
    );
  }

  const clickHandler = (c = null) => {
    setShowModal(!showModal);
    setRecipe(c);
  };

  return (
    <>
      <LayoutGrid>
        {recipes.map((c, idx) => (
          <a
            onClick={() => c.content.preparationSteps && clickHandler(c)}
            key={c.display.displayName + idx}
            className={`${!c.content.preparationSteps && "opacity-50"} `}
          >
            <Grid
              tag={c.display.displayName}
              img={c.display.images[0]}
              name={c.display.displayName}
            />
          </a>
        ))}
      </LayoutGrid>
      <RecipeModal
        open={showModal}
        data={recipe}
        modalHandler={() => clickHandler()}
      />
    </>
  );
};

export default Recipes;

export async function getStaticPaths() {
  const arrURL = [
    "list.recipe.search_based:fq:attribute_s_mv:(cuisine^cuisine-american)",
  ];
  let params = [];
  params = arrURL.flatMap((url) => {
    let arr = [];
    for (let i = 1; i < 10; i++) {
      arr = arr.concat({
        params: { menu: encodeURIComponent(url), page: i.toString() },
      });
    }
    return arr;
  });
  return {
    paths: params,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/list",

    params: {
      start: (params.page - 1) * 16,
      limit: "16",
      tag: params.menu,
    },
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": process.env.API_HOST,
    },
  };
  const { data } = await axios.request(options);

  const recipes = data.feed;

  return {
    props: {
      recipes,
    },
  };
}
