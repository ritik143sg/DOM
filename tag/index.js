// Write your code below:
const fruits = document.getElementsByTagName("li");

for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontStyle = "italic";
  if (fruits[i].innerHTML == "Mango") {
    fruits[i].style.color = "blue";
  }
}
