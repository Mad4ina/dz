const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели ?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const
    question1 = prompt("Один из последних просмотренных фильмов"),
    answer1 = prompt("На сколько оцените его ?"),
    question2 = prompt("Один из последних просмотренных фильмов"),
    answer2 = prompt("На сколько оцените его ?");

personalMovieDB.movies[question1] = answer1


personalMovieDB.movies[question2] = answer2



console.log(personalMovieDB);