const cartItems = JSON.parse(localStorage.getItem("cart"));
// console.log(cartItems);
const cartDetails = document.getElementById("cartDetails");
for (const key in cartItems) {
  console.log(cartItems[key]);
  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "card");
  const myImg = document.createElement("img");
  myImg.src = `${cartItems[key].image}`;
  myImg.setAttribute("class", "image2");

  const myName = document.createElement("h5");
  myName.innerText = `${cartItems[key].title}`;
  myName.setAttribute("id", "cardtitle");

  const myPara2 = document.createElement("p");
  myPara2.innerText = `$ ${cartItems[key].price}`;
  myPara2.setAttribute("class", "price");
 
  const myBtn2 = document.createElement("button");
    myBtn2.setAttribute("id", `${cartItems[key]}`);
    myBtn2.setAttribute("class", `cart`);
    myBtn2.innerText = "Buy Now";

  myDiv.append(myImg);
  myDiv.append(myName);

  myDiv.append(myPara2);
  myDiv.append(myBtn2);

  cartDetails.append(myDiv);
}
