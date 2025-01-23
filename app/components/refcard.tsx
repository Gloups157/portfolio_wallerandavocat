import React from "react";
import Image from "next/image";

interface RefcardProps {
    title: string;
    description: string;
    url: string;
    cover: string;
    languages: string[];
    isExpanded: boolean;
    onClick: () => void;
}

const Refcard: React.FC<RefcardProps> = ({title, description, url, cover, languages, isExpanded, onClick}) => {
    return (
        <div className={`${isExpanded ? 'w-1/2 h-lvh z-10 absolute left-1/4 right-1/4' : 'flex relative w-72 h-96'} transition-all duration-700`}
             onClick={onClick}>
            <Image className="rounded-3xl inset-0 z-0"
                   src={cover}
                   alt={cover}
                   layout="fill"
                   objectFit="cover"
            />
            <div className="flex flex-col justify-end inset-10 p-10">
                <div className="relative flex justify-end text-right">
                    <h3>{title}</h3>
                    <div className="">
                        {languages.map((language, index) => (
                            <Image
                                key={index}
                                src={language}
                                alt={language}
                                width={50}
                                height={50}
                            />
                        ))}
                    </div>
                </div>
                {isExpanded && (
                    <>
                        <p>{description}</p>
                        <a href={url}>Lien du projet</a>
                    </>
                )}
            </div>
        </div>
    );
}

export default Refcard;