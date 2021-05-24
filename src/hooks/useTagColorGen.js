import React from "react";

const useTagColorGen = () => {
  const colorsArr = [
    {
      backgroundColor: "#00e5ff",
      color: "#000000",
    },
    {
      backgroundColor: "#0077ff",
      color: "#ffffff",
    },
    {
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
    {
      backgroundColor: "#ff7b00",
      color: "#ffffff",
    },
    {
      backgroundColor: "#ffd900",
      color: "#000000",
    },
    {
      backgroundColor: "#bbff00",
      color: "#000000",
    },
    {
      backgroundColor: "#34ba13",
      color: "#ffffff",
    },
    {
      backgroundColor: "#00fad0",
      color: "#000000",
    },
    {
      backgroundColor: "#685ba6",
      color: "#ffffff",
    },
    {
      backgroundColor: "#b575d9",
      color: "#ffffff",
    },
    {
      backgroundColor: "#d422cb",
      color: "#ffffff",
    },
    {
      backgroundColor: "#db1891",
      color: "#ffffff",
    },
    {
      backgroundColor: "#f26b86",
      color: "#ffffff",
    },
  ];

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return shuffle(colorsArr);
};

export default useTagColorGen;
