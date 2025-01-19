import Refcard from "@/app/components/refcard";
import RefcardData from "@/app/data/refcards.json";

interface RefcardData {
    title: string;
    description: string;
    url: string;
    cover: string;
    languages: string[];
    tags: string[];
}

export default function Home() {
  return (
      <main className="">
        <h1>
            Wallerand Avocat
        </h1>

          <div>
              {RefcardData.map() => (
                    <Refcard  />
                )}
              }
          </div>
      </main>
  );
}
