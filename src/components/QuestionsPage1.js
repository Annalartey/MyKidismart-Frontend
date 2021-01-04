import React, { useState } from "react";

const animals = {
  "🐈": "CAT",
  "🐕": "DOG",
  "🐎": "HORSE",
  "🐄": "COW",
  "🐪": "CAMEL",
  "🐁": "MOUSE",
  "🐇": "RABBIT",
  "🐆": " LEOPARD",
  "🐂": "Ox",
  "🐖": "PIG",
  "🐻": "BEAR",
  "🐼": "PANDA",
  "🐔": "Chicken",
  "🐢": "TURTLE",
  "🐋": "WHALE",
  "🐠": "TROPICAL FISH",
  "🐒": "MONKEY",
  "🐅": "TIGER",
  "🐀": "RAT",
  "🐐": "GOAT",
  "🐬": "DOLPHIN",
  "🐌": "SNAIL",
  "🦋": "BUTTERFLY",
  "🐞": "LADY BEETLE OR LADY BUG",
  "🦂": "SCORPION"

};


const listAnimals = {
  fontSize: "5rem",
  padding: "0.5rem",
  cursor: "pointer"
};


export default function App() {
  var [meaning, setmeaning] = useState("");

  var listOfAnimals = Object.keys(animals);

  function onClickHandler(animal) {
    var meaning = animals[animal];

    setmeaning(meaning);
    console.log(animal);
  }

  return (
    <div className="w-full">
      <div className="">
      <h2 className="font-bold text-4xl text-gray-800 text-center">{meaning}</h2>
      </div>
      {listOfAnimals.map(function (animal) {
        return (
          <span className=""
            onClick={() => onClickHandler(animal)}
            style={listAnimals}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
<br></br>
<h5 className="mt-4 mx-8 font-semibold text-2xl text-center">Kids guess the animal and click to see name.</h5>
<a href="/questionpage" className="rounded bg-gray-200 px-4 mt-20 ml-8 mt-4 border-2 text-lg">Back</a>
    
    </div>
  );
}