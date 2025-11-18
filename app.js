// create and show a card for ONE movie
const showMovieCard = function (movie) {
    const $wrapper = $(".wrapper");

    // Remove any previous card
    $wrapper.empty();

    //replaces spaces with _ for image names so that I can easily get all the images for every movie in the array
    const fileName = movie.title.toLowerCase().replace(/ /g, "_");

    //creates a box with the image and title of whatever movie is selected randomly
    const markup = `
        <div class="box">
            <img class="movie_pic" src="./images/${fileName}.jpg" alt="${movie.title}" />
            <p class="movieInfo">${movie.title}</p>
        </div>
    `;

    $wrapper.append(markup);

    // Adds a shadow to the box to look nice
    $(".box").css({
        "box-shadow": "0 10px 25px black"
    });

    // on mouseover, displays a string with the movie director, category, and release year. 
    $(".box").on("mouseover", function () {
        $(this).find("p.movieInfo").text(`Directed by ${movie.director}, the category of this movie is ${movie.category} and was released in ${movie.releaseYear}.`);
    });

    // Switches back to title on mouseout
    $(".box").on("mouseout", function () {
        $(this).find("p.movieInfo").text(movie.title);
    });
};

// Function for randomly selecting a movie from the array
const getRandomMovie = function () {
    const index = Math.floor(Math.random() * movies.length);
    return movies[index];
};

const showInformation = function () {
    // Want the hint to be hidden when there is no movie card
    $('.hint').hide();

    $("#randomMovie").on("click", function () {
        const randomMovie = getRandomMovie();
        showMovieCard(randomMovie);
        $('.hint').show();
    });

    $("#clear").on("click", function () {
        $(".wrapper").empty();
        $('.hint').hide();
    });
};

// Run when DOM is ready
$(document).ready(showInformation);