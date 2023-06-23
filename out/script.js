"use strict";
const characterName = document.getElementById("character-name");
const inputName = document.getElementById("name-input");
const selectCharacterClass = document.getElementById("character-class-selecet");
const characterClassImage = document.getElementById("character-class-img");
const selectCharacterGender = document.getElementById("character-gender");
const selectCharacterRace = document.getElementById("character-race-selecet");
const characterRaceImage = document.getElementById("character-img");
inputName.addEventListener("input", function (event) {
    let target = event.target;
    characterName.innerHTML = target.value;
});
const renderClass = () => characterClassImage.src = `./images/${selectCharacterClass.value}.png`;
const renderRace = () => characterRaceImage.src = `./images/${selectCharacterRace.value}-${selectCharacterGender.value}.png`;
selectCharacterRace.addEventListener("change", renderRace);
selectCharacterGender.addEventListener("change", renderRace);
selectCharacterClass.addEventListener("change", renderClass);
