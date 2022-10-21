async function fetched() {
  let url = "./data.json";
  let res = await fetch(url);
  let data = await res.json();
  productDetails(data);
}
fetched();

function productDetails(data) {
  const main = document.getElementById("cards");
  data.map((value) => {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "card");
    const Img = document.createElement("img");
    Img.src = `${value.image}`;
    Img.setAttribute("class", "image2");
    const Title = document.createElement("h5");
    Title.innerText = `${value.title}`;
    Title.setAttribute("id", "cardtitle");
    const description = document.createElement("p");
    description.innerText = `${value.description}`;
    description.setAttribute("class", "card-text");

    const price = document.createElement("p");
    price.innerText = `$ ${value.price}`;
    price.setAttribute("class", "price");
    const rating = document.createElement("p");
    rating.innerHTML = `<b>Rating:${value.rating.rate}</b>`;
    rating.setAttribute("class", "rating");
    const Btn = document.createElement("button");
    Btn.setAttribute("id", `${value.id}`);
    Btn.setAttribute("class", `cart`);
    Btn.innerText = "Add to Cart";
    myDiv.append(Img);
    myDiv.append(Title);
    myDiv.append(description);
    myDiv.append(price);
    myDiv.append(rating);
    myDiv.append(Btn);
    main.append(myDiv);
    document.getElementById(`${value.id}`).addEventListener("click", () => {
      fullDetails(`${value.id}`);
      document.getElementById(`${value.id}`).disabled = true;
      document.getElementById(`${value.id}`).style.backgroundColor = "white";
      document.getElementById(`${value.id}`).style.color = "black";
      document.getElementById(`${value.id}`).style.cursor = "not-allowed";
    });
  });
}
let cart = {};
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}
async function fullDetails(id) {
  let url = "./data.json";

  let res = await fetch(url);
  let data = await res.json();
  data.map((value) => {
   
    if (value.id == id) {
      let cartItem = {
        title: value.title,
        price: value.price,
        image: value.image,
        description:value.description,
      };
      cart[value.id] = cartItem;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
}
