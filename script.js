"use strict";

let personalMovieDB = {
  	count: 0,
  	movies: {},
  	actors: {},
  	genres: [],
  	privat: false,
	start: function() {
		while (personalMovieDB.count == "null" || personalMovieDB.count == "" || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		  }
	},
	rememberMyFilms: function() {
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
	  },
	  detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			  console.log("Мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			  console.log("Достаточно фильмов");
		} else if (personalMovieDB.count >= 30) {
			  console.log("Киноман");
		} else {
			  console.log("Произошла Обишка");
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {
		for(let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if(genre === '' || genre == null) {
				console.log('Вы ввели некоректные данные или не ввели их');
				i--;
			} else {
				personalMovieDB.genres[i-1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр # ${i+1} - это ${item}`);
		});
		
	}
};

