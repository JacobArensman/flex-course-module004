
const newest = filmDatabase.filter((film) => {return film.Year >=2014;});
const avengers = filmDatabase.filter((film) => {return film.Title.includes("Avengers");});
const xmen = filmDatabase.filter((film) => {return film.Title.includes("X-Men");});
const princess = filmDatabase.filter((film) => {return film.Title.includes("Princess");});
const batman = filmDatabase.filter((film) => {return film.Title.includes("Batman");});


//add poster function
const addFilm = (name) => {
  filmList.innerHTML = "";
  return name.forEach((film) => {

    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");

    const filmList = document
      .getElementById("filmList")
      .getElementsByTagName("ul")[0];
    filmList.appendChild(li);
    li.appendChild(a);
    a.setAttribute("href", `https://www.imdb.com/title/${film.imdbID}`);
    a.appendChild(img);
    img.setAttribute("src", `${film.Poster}`);
  });
};



const filmList = document.getElementById("filmList").getElementsByTagName("ul")[0];
addEventListener("click", (event) => {
  switch (event.target.id) {
    case "newest": return addFilm(newest);
    case "avenger": return addFilm(avengers);
    case "xmen": return addFilm(xmen);
    case "princess": return addFilm(princess);
    case "batman": return addFilm(batman);
  }
});






















/*

const filtered = data.movies.filter((item) => {return item.Year >= 2014;});

const avengers = data.movies.filter((item) => {return item.Title.includes("Avengers");});

const xmen = data.movies.filter((item) => {return item.Title.includes("X-Men");});

const princess = data.movies.filter((item) => {return item.Title.includes("Princess");});

const batman = data.movies.filter((item) => {return item.Title.includes("Batman");});



//add poster function
const makePoster = (name) => {
  
  movieList.innerHTML = "";
  
  return name.forEach((movie) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const a = document.createElement("a");

    const movieList = document
      .getElementById("movieList")
      .getElementsByTagName("ul")[0];
    movieList.appendChild(li);
    li.appendChild(a);
    a.setAttribute("href", `https://www.imdb.com/title/${movie.imdbID}`);
    a.appendChild(img);
    img.setAttribute("src", `${movie.Poster}`);
  });
};



const movieList = document.getElementById("movieList").getElementsByTagName("ul")[0];
const navLinks = document.querySelector(".nav_links");
const navClick = navLinks.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "newest":
      return makePoster(filtered);

    case "avenger":
      return makePoster(avengers);

    case "xmen":
      return makePoster(xmen);

    case "princess":
      return makePoster(princess);

    case "batman":
      return makePoster(batman);

    case "searchbar":
      movieList.innerHTML = "";
      const searchBar = document.getElementById("searchbar");
      searchBar.addEventListener("keyup", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredMovies = data.Movies.filter((movie) => {
          return movie.Title.toLowerCase().includes(searchTerm);
        });
        movieList.innerHTML = "";
        addPoster(filteredMovies);
      });
  }
});

*/




