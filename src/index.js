function displayQuote(response) {
  console.log("poem generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "57t510363ca64d76cf8d437ao0eea1eb";

  let context =
    " You are a book quote expert and you love to get inspired by your favorite book quotes. Your mission is to generate a quote from any book in basic HTMl. Make sure to follow the User instructions. Make sure to always specify the book and the author in the end.";
  let prompt = `User instructions are: Generate a book quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⌛Generating a book quote about ${instructionsInput.value}</div>`;

  console.log("Generating quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let bookQuoteElement = document.querySelector("#quote-generator-form");
bookQuoteElement.addEventListener("submit", generateQuote);
