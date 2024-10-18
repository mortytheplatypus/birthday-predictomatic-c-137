import React from 'react';
import BitwiseMatrix from './BitwiseMatrix';
import { birthdayLists, listNames } from '../constants/Constants';


function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

const BirthdayRevelation = ({ guessedBirthday, userChoices, resetGame }) => {
    return (
        <div className="revelation" style={{ fontFamily: 'monospace, ubuntu, serif', textAlign: 'center' }}>
            <h2>Holy cow, Rick! My Oracle actually worked!</h2>
            <h3>
                {userChoices.filter(Boolean).length === 1
                    ? "L-l-look at the crazy table you picked"
                    : "L-l-look at these crazy tables you picked"}
            </h3>
            <div className="selected-lists" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {birthdayLists.map((list, index) => (
                    userChoices[index] && (
                        <BitwiseMatrix
                            key={index}
                            title={`${listNames[index]}`}
                            numbers={list.numbers}
                        />
                    )
                ))}
            </div>
            <p>Your birthday's on the freakin' {guessedBirthday}{getOrdinalSuffix(guessedBirthday)}!</p>
            <button className="try-again-button" onClick={resetGame}>Let's *burp* with time again!</button>
        </div>
    );
};

export default BirthdayRevelation;
