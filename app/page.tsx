'use client';
import Refcard from "@/app/components/refcard";
import RefcardJson from "@/app/data/refcards.json";
import Navbar from "@/app/components/navbar";
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
        <Navbar/>
        <div className="flex justify-around mt-24 -top-16">
            <div className="border-4 w-60 h-96 ml-52">
                <img src="/images/bench1.png" alt="Wallerand au port" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute top-1">
                <img src="/images/dotted.png" alt="pointillés"/>
                <img className="mt-32" src="/images/dotted-1.png" alt="pointillés"/>
            </div>
            <h1 className="flexjustify-center self-center text-6xl">
                Wallerand Avocat
            </h1>
            <div className="flex border-4 w-60 h-96 mr-52 p-5 bg-customgrey-dark">
                <h2 className="text-2xl font-bold text-customgrey-light">Développeur full stack.</h2>
            </div>
        </div>

        <div className="flex align-middle p-10 mt-[650px] bg-gray-50">
            <div className="flex flex-col w-4/5 self-center text-2xl">
                <h2 className="text-8xl mb-10">Profil</h2>
                <div className="w-3/4 mb-10 h-[2px] bg-black"></div>
                <h3 className="text-5xl">Les débuts</h3>
                <p className="text-justify">
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
                <p className="text-justify">
                    Actuellement en deuxième année de BUT Informatique en section internationnale à l&apos;université de
                    Bordeaux,
                    j&apos;ai un stage de deux mois de prévu dans le domaine de l&apos;aéronautique en avril et je
                    recherche
                    activement une alternance dans le développement d&apos;application pour juillet 2025.
                </p>
            </div>
            <img className="self-center mt-32 w-3/4 h-3/4 aspect-square mr-40 p-6" src="/images/bench.jpg" alt="Portrait"/>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-64 mb-32">
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
        <p className="flex justify-center text-customgrey-medium">Wallerand Avocat - Portfolio ©</p>
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
