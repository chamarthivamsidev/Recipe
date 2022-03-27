async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();

  return data;
}

async function appendData(
  meals,
  location,
  main,
  dec_div,
  dec_img,
  dec_ingradients
) {
  location.innerHTML = null;
  meals.map((el) => {
    let receipe_div = document.createElement("div");
    receipe_div.setAttribute("id", "receipe_div");

    receipe_div.addEventListener("click", function () {
      dec_div.classList.toggle("dec_div_content");
      dec_img.src = el.strMealThumb;
      dec_ingradients.innerHTML = `<p>Ingradients:</p><p>1.${el.strIngredient1}<br>2.${el.strIngredient2}<br>3.${el.strIngredient3}<br>4.${el.strIngredient4}<br>5.${el.strIngredient5}<br>6.${el.strIngredient6}<br>7.${el.strIngredient7}<br>8.${el.strIngredient8}<br>9.${el.strIngredient9}</p><p>Instructions:</p><p>${el.strInstructions}</p>`;
      main.style.opacity = "0.2";
      location.style.opacity = "0.2";
    });

    let img = document.createElement("img");
    img.src = el.strMealThumb;
    img.setAttribute("id", "re_img");

    let title = document.createElement("p");
    title.textContent = el.strMeal;

    let yt_logo = document.createElement("h6");
    yt_logo.setAttribute("id", "yt_logo");
    yt_logo.innerHTML = `<i class="fab fa-youtube fa-5x" style="color:red"></i>`;

    yt_logo.addEventListener("click", function () {
      window.open(`${el.strYoutube}`);
    });

    receipe_div.append(img, title, yt_logo);

    location.append(receipe_div);
  });
}

export { getData, appendData };
