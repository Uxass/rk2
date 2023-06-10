const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector("#container");
button.addEventListener("click", () => {
  if (input.value) {
    container.insertAdjacentHTML("beforeend", `<p>${input.value}</p>`);
    input.value = "";
  }
});