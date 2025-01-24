'use client';
import Refcard from "@/app/components/refcard";
import RefcardJson from "@/app/data/refcards.json";
import {useState} from "react";

interface RefcardData {
    title: string;
    description: string;
    url: string;
    cover: string;
    languages: string[];
}

export default function Home() {
    const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  return (
    <main className="flex flex-col bg-repeat" style={{backgroundImage: "url('/images/paper_bg.png')"}}>

        <div className="flex justify-around mt-72 -top-16">
            <div className="border-4 w-60 h-96 ml-52">
            </div>
            <div className="absolute top-5">
                <img src="/images/dotted.png" alt="pointillés"/>
                <img className="mt-32" src="/images/dotted-1.png" alt="pointillés"/>
            </div>
            <h1 className="flex justify-center self-center text-5xl">
                Wallerand Avocat
            </h1>
            <div className="border-4 w-60 h-96 mr-52">
            </div>
        </div>

        <div className="flex align-middle p-10 mt-[650px] bg-gray-50">
            <div className="flex flex-col self-center text-3xl">
                <h2 className="text-8xl mb-10">Profil</h2>
                <h3 className="text-5xl">Les débuts</h3>
                <p>
                    Salut, je m&apos;appelle Wallerand et suis un passionné d&apos;informatique et particulièrement de
                    la
                    Programmation Orientée Objet.
                    voulant au départ exprimer ma créativité aussi bien dans le graphisme,
                    la modélisation 3D ou encore la musique, j&apos;ai tout naturellement voulu apprendre à faire des
                    jeux
                    vidéos en C# avec Unity.
                </p>
                <div className="mt-10"></div>
                <h3 className="text-5xl">Objectifs pour 2025</h3>
                <p>
                    Actuellement en deuxième année de BUT Informatique en section internationnale à l&apos;université de
                    Bordeaux,
                    j&apos;ai un stage de deux mois de prévu dans le domaine de l&apos;aéronautique en avril et je
                    recherche
                    activement une alternance dans le développement d&apos;application pour juillet 2025.
                </p>
            </div>
            <img className="self-center w-3/4 h-3/4 aspect-square mr-40" src="/images/covers/bench.jpg" alt="Portrait"/>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-96">
              {RefcardJson.map((data: RefcardData, index: number) => (
                  <Refcard key={index}
                           title={data.title}
                           description={data.description}
                           url={data.url}
                           cover={getCoverImage(data.cover)}
                           languages={data.languages.map((language) => getLanguageIcon(language))}
                           isExpanded={expandedCardIndex === index}
                           onClick={() => setExpandedCardIndex(expandedCardIndex === index ? null : index)}
                  />
              ))}
          </div>
      </main>
  );

    function getCoverImage(cover: string): string {
        const filePath = "/images/covers/" + cover;
        if (true) {
            return filePath;
        } else {
            throw new Error(`File not found: ${filePath}`);
        }
  }

  function  getLanguageIcon (language: string) : string {
      const filePath = "/images/icons/languages/" + language + ".png";
      if (true) {
          return filePath;
      } else {
          throw new Error(`File not found: ${filePath}`);
      }
    }
}
