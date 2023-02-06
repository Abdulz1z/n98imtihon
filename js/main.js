/** @format */

let input = document.getElementById("search-input");
let search_btn = document.getElementById("search-btn");
let drama = document.getElementById("drama");

const getfilms = (
   id,
   title,
   poster,
   overview,
   release_date,
   genres
) => {
   let div = document.createElement("div");
   div.className = "card, col-4";
   let img = document.createElement("img");
   img.className = "card-img-top";
   img.src = poster;
   let div2 = document.createElement("div");
   div2.className = "card-body";
   let h4 = document.createElement("h4");
   h4.className = "card-title";
   h4.innerHTML = title;
   let p = document.createElement("p");
   p.className = "card-text";
   p.innerHTML = overview;
   let h5 = document.createElement("h5");
   h5.className = "card-pg";
   h5.innerHTML = genres;
   let a = document.createElement("a");
   a.className = "btn-1";
   a.innerHTML = "Del";

   div2.append(h4, p, h5, a);
   div.append(img, div2);

   return div;
};

const filmscards = films => {
   const cardblog = document.getElementById("card_item");
   cardblog.innerHTML = "";
   films.forEach(
      ({
         id,
         title,
         poster,
         overview,
         release_date,
         genres,
      }) => {
         let cinema = getfilms(
            id,
            title,
            poster,
            overview,
            release_date,
            genres
         );
         cardblog.append(cinema);
      }
   );
};

filmscards(films);

search_btn.addEventListener("click", function (evt) {
   let new_data = films.filter(pr =>
      pr.title.toLowerCase().includes(input.value)
   );
   filmscards(new_data);
   input.value = "";
});

drama.addEventListener("click", () => {
   console.log(films.genres.includes("Drama"));
});
