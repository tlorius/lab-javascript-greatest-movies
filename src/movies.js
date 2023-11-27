const testMovies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    }]
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(currentMovie => currentMovie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return (moviesArray.filter(currentMovie => currentMovie.director === "Steven Spielberg" && currentMovie.genre.indexOf("Drama") !== -1)).length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let scoredMovies = moviesArray.filter(currentMovie => "score" in currentMovie)
    return (Math.round(((scoredMovies.reduce((sum, currentScoredMovie) => sum + currentScoredMovie.score, 0)) / moviesArray.length)*100)/100);
    //check erics suggested solution on slack -> can solve this cleaner without the need to filter first!
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(currentMovie => currentMovie.genre.indexOf("Drama") !== -1)
    if (dramaMovies.length === 0) {
        return 0;
    }
    return (Math.round(((dramaMovies.reduce((sum, currentMovie) => sum + currentMovie.score, 0)) / dramaMovies.length)*100)/100);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let movSortedByYear = moviesArray.toSorted((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return movSortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedByTitle = moviesArray.map(a => a.title).toSorted((a, b) => {
        return a.localeCompare(b);
    });
    return sortedByTitle.toSpliced(20, moviesArray.length);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    //duration.split(' ') => expected result either xh, xm or xm or xh
    //parseInt(hours) * 60 parseInt(minutes)
    let formattedTime = moviesArray.map(movie => {
        let durationSplit = movie.duration.split(" ");
        console.log(durationSplit);
        let hours = parseInt(durationSplit[0]) * 60;
        let minutes = 0;
        if (durationSplit.length === 2) {
            minutes = (parseInt(durationSplit[1]));
        }
        console.log(hours, minutes);
        return {
            ...movie,
            duration: hours + minutes
        }
    });
    return formattedTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    console.log(`The best year was ${YEAR} with an average score of ${AVGSCOREFORTHATYEAR}`)
}
bestYearAvg()