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
        <div className={`${isExpanded ? 'z-10 w-[800px] h-[600px]' : ' w-72 h-[425px]'} flex flex-col items-center border-8 border-customgrey-light bg-customgrey-dark  transition-all duration-700`}
             onClick={onClick}>
            <Image className="h-[210px] mt-6 object-cover inset-0 z-0 border-4 border-customgrey-light"
                   src={cover}
                   alt={cover}
                   width={200}
                   height={200}
            />
            <div className="flex flex-col justify-end inset-10 p-5">
                    <h3 className="text-customgrey-light font-semibold text-2xl text-right">{title}</h3>
                    <div className="h-12 w-auto flex justify-end flex-wrap">
                        {languages.map((language, index) => (
                            <Image className=""
                                key={index}
                                src={language}
                                alt={language}
                                   height={50}
                                   width={50}
                                layout="intrinsic"
                                objectFit="contain"
                            />
                        ))}
                </div>
                {isExpanded && (
                    <>
                        <p className="text-customgrey-light text-justify">{description}</p>
                        <a className="text-blue-500 text-right" href={url}>Lien du projet</a>
                    </>
                )}
            </div>
        </div>
    );
}

export default Refcard;