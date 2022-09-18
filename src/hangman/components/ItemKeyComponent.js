import React from "react";
import { LetterComponent } from "./LetterComponent";

export const ItemKeyComponent = ({ listWord }) => {
  
    return (
    <div className="word">
        {listWord.map((item) => (
            <LetterComponent 
            key={item.id} 
            letter={item.letter} 
            status={item.status}
            />
        ))}
    </div>
    );
};