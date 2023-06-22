/////////////////////////////////
//////// לא סיימתי /////////////
"use strict";
let movies_ar = localStorage["movies"]
  ? JSON.parse(localStorage["movies"])
  : [];
const init = () => {
  declareViewEvents();
};

const declareViewEvents = () => {
  const form = document.querySelector("#id_form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const movies_obj = {
      name: document.querySelector("#id_movieName").value,
      img: document.querySelector("#id_movieImg").value,
      rating: document.querySelector("#id_movieRating").value,
    };
    console.log(movies_obj);
    if (movies_obj.name.length < 2) {
      return alert("Name too short");
    } else if (movies_obj.img === "") {
      return alert("Put image url");
    } else if (movies_obj.rating < 1 || movies_obj.rating > 5) {
      return alert("Rating must be 1-5");
    }
    movies_ar.push(movies_obj);
    console.log(movies_ar);
    localStorage.setItem("movies", JSON.stringify(movies_ar));
  });
};
init();
