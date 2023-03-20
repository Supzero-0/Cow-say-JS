import information from "./information.js";
import { say } from 'cowsay';

console.log(say({
    text: "Hello I'm " + information.nom + " from " + information.campus,
    e: "Oo",
    T: "U ",
}));