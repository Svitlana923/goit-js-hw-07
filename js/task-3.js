const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input",
    (event) => {
    const spanText = event.currentTarget.value.trim();
    output.textContent = spanText === "" ? "Anonymous": spanText;
});
