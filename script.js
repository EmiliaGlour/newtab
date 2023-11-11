const input = document.getElementById("search-input");
const placeholderText = "Search with Google or enter address";

input.addEventListener("input", function() {
  const inputValue = input.value;
  if (inputValue !== "") {
    input.style.color = "white";
    input.placeholder = "";
    animateText(inputValue);
  } else {
    input.style.color = "#2f3030";
    input.placeholder = placeholderText;
    stopTextAnimation();
  }
});