// create and show a card for ONE movie
const showMovieCard = function (movie) {
    const $wrapper = $(".wrapper");

    // Remove any previous card
    $wrapper.empty();

    const fileName = movie.title.toLowerCase().replace(/ /g, "_");

    const markup = `
        <div class="box">
            <img class="movie_pic" src="./images/${fileName}.jpg" alt="${movie.title}" />
            <p class="movieInfo">${movie.title}</p>
        </div>
    `;

    $wrapper.append(markup);

    $(".box").css({
        "box-shadow": "0 10px 25px black"
    });

    $(".box").on("click", function () {
        $(this).find("p.movieInfo").text(
            movie.director + " - " + movie.category + " - " + movie.releaseYear
        );
    });

    $(".box").on("mouseover", function () {
        $(this).find("p.movieInfo").text(`Directed by ${movie.director}, the category of this movie is ${movie.category} and was released in ${movie.releaseYear}.`);
    });

    $(".box").on("mouseout", function () {
        $(this).find("p.movieInfo").text(movie.title);
    });
};

const getRandomMovie = function () {
    const index = Math.floor(Math.random() * movies.length);
    return movies[index];
};

const showInformation = function () {
    $("#randomMovie").on("click", function () {
        const randomMovie = getRandomMovie();
        showMovieCard(randomMovie);
    });

    $("#clear").on("click", function () {
        $(".wrapper").empty();
    });
};

// Run when DOM is ready
$(document).ready(showInformation);