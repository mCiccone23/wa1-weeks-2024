"use strict";

import dayjs from 'dayjs';

let id = 0;

function shortWord(arg){
    let newArg = [];
    arg.forEach(e => {
        if(e.length < 2)
        newArg.push("");
    else{
        newArg.push(e.substring(0,2).concat(e.substring(e.length - 2, e.length)));
    }
    });

    return newArg;
}

let arg = ["cristian", "matteo", "x", "vivaldi"];
let newArg = shortWord(arg);
console.log(newArg);



function Film(title, isFavourite, date, rating, idPerson){
    this.id = ++id;
    this.isFavourite = isFavourite;
    this.date = dayjs(date);
    if(rating > 5)
        this.rating = 5;
    else if(rating < 1)
        this.rating = 1;
    else
        this.rating = rating;
    this.idPerson = idPerson;
}

let f1 = new Film("anatomia di una caduta", 1, "2023/10/05", 4, 1);

console.log(f1);

function FilmLibrary(){
    this.films = [];

    this.addNewFilm = (film) => {this.films.push(film)};

    this.sortByDate = () => {
        let x = this.films;
        x.sort((f1, f2) => f1.date.valueOf() - f2.date.valueOf());
        return x;
    }

    this.deleteFilm = (id) => {
        let x = [];
        this.films.forEach(e => {
            if( e.id != id)
                x.push(e);
        });
        this.films = x;
    }
}

let library = new FilmLibrary();
library.addNewFilm(f1);

let f2 = new Film("cristian balla", 0, "20220910", 2, 2);
library.addNewFilm(f2);
console.log(library);

let sorted = library.sortByDate();
console.log(sorted);

library.deleteFilm(1);
console.log(library);
