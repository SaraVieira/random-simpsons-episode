import { useLoaderData, json, Link } from "remix";
import { MeiliSearch } from "meilisearch";
import { Star } from "~/Icons";
import { Tomato } from "~/Icons";

const getRandomInt = (max) => Math.floor(Math.random() * (max - 1 + 1)) + 1;

export let loader = async () => {
  const client = new MeiliSearch({
    host: "https://search.selfhostedfuckery.pw/",
    apiKey: process.env.API_KEY,
  });
  const index = await client.index("simpsons");

  const { numberOfDocuments } = await index.getStats();
  const id = getRandomInt(numberOfDocuments);

  const data = await index.getDocument(id);
  return json(data);
};

export let meta = () => {
  return {
    title: "Random Simpsons Episode",
    description:
      "This website does exactly what the title says, it will give you a random simpsons episode to watch when you are bored",
  };
};

export default function Index() {
  let episode = useLoaderData();

  return (
    <main>
      <h1 className="sr-only">Random Simpsons Episode</h1>
      <h2>{episode.name}</h2>
      <h3>
        S{episode.season}E{episode.number}
      </h3>
      <img src={episode.image?.original} alt={episode.name} />

      <h6>
        Rating: {episode.rating}/10
        <div style={{ marginTop: -4 }}>
          {" "}
          {episode.rating > 7.5 ? <Star /> : <Tomato />}
        </div>
      </h6>
      <article dangerouslySetInnerHTML={{ __html: episode.summary }}></article>
      <Link to="/" reloadDocument>
        <button>Give me another</button>
      </Link>
    </main>
  );
}
