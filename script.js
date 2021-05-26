"use strict";

let numberOfFilms;

function start() {
  	while (numberOfFilms == "null" || numberOfFilms == "" || isNaN(numberOfFilms)) {
    	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  	}
}

start();

let personalMovieDB = {
  	count: numberOfFilms,
  	movies: {},
  	actors: {},
  	genres: [],
  	privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
         b = +prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && !isNaN(b) && a.length < 50) {
         personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
  		console.log("Мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  		console.log("Достаточно фильмов");
	} else if (personalMovieDB.count >= 30) {
  		console.log("Киноман");
	} else {
  		console.log("Произошла Обишка");
	}
}

detectPersonalLevel();

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);



function writeYourGenres () {
	for(let i = 1; i <= 3; i++) {
		const genre = prompt(`Какой твой любимый жанр ${i}`);
		personalMovieDB.genres[i-1] = genre;
	}
	
}

writeYourGenres();