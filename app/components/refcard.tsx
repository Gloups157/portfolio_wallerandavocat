import React from "react";
import Image from "next/image";

interface RefcardProps {
    title: string;
    description: string;
    url: string;
    cover: string;
    languages: string[];
    tags: string[];
}

const Refcard: React.FC<RefcardProps> = ({title, description, url, cover, languages, tags}) => {
    return (
        <div>
            <Image
                src={cover}
                alt={cover}
            />
            <h3>
                {title}
            </h3>
            <div>
                {languages.map((language, index) => (
                    <Image key={index} src={language} alt="language" width={50} height={50}/>
                ))}
            </div>
            <p>
                {description}
            </p>
            <a href={url}>
               Lien du projet
            </a>
        </div>
    );
}

export default Refcard;