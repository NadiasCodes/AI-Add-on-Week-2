function generateQuote(event) {
  event.preventDefault();

  let quoteElement = document.querySelector("#quote");

  new Typewriter("#quote", {
    strings: "To the stars that listen.. and the dreams that are answered",
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

let bookQuoteElement = document.querySelector("#quote-generator-form");
bookQuoteElement.addEventListener("submit", generateQuote);
