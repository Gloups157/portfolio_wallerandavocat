import React from "react";
import Image from "next/image";

interface RefcardProps {
    title: string;
    languages: string[];
}

const Refcard: React.FC<RefcardProps> = ({title, languages}) => {
    return (
        <div>
            <h3>{title}</h3>
            {languages.map((language, index) => (
                <Image key={index} src={language} alt="dd" width={500} height={500}/>
            ))}
        </div>
    );
}

export default Refcard;