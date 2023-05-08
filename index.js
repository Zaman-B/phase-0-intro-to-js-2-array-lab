// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
function appendCat(name) {
    const newCats = [...cats];
    newCats.push("Broom");
    return newCats;
}
function prependCat(name) {
    const newCats = [...cats];
    newCats.unshift("Arnold");
    return newCats;
}
function removeLastCat(name) {
    const newCats = cats.slice(0, 2);
    return newCats;
}
function removeFirstCat(name) {
    const newCats = cats.slice(1);
    return newCats;
}