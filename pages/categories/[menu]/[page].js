import { useRouter } from "next/router";
import Grid from "../../../components/Grid";
import axios from "axios";
import Link from "next/link";
import LayoutGrid from "../../../components/LayoutGrid";

const Recipes = ({ recipes }) => {
  const router = useRouter();
  if (router.isFallback || !recipes) {
    return <div>Loading...</div>;
  }

  const sendRecipe = () => {
    console.log("coucou");
  };

  return (
    <LayoutGrid>
      {recipes.map((c, idx) => (
        <Link
          href={`/recipe/${encodeURIComponent(c.display.displayName)}`}
          key={c.display.displayName + idx}
        >
          <a onClick={sendRecipe}>
            <Grid
              tag={c.display.displayName}
              img={c.display.images[0]}
              name={c.display.displayName}
            />
          </a>
        </Link>
      ))}
    </LayoutGrid>
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
      arr = arr.concat({ params: { menu: url, page: i.toString() } });
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

  console.log("coucou");

  return {
    props: {
      recipes,
    },
    // revalidate: 1,
  };
}
