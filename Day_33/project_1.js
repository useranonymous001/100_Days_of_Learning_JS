let quote = document.querySelector(".quote");
let btn = document.querySelector("#new-quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"This is the first random quote"`,
    person: `rohan khatri`,
  },
  {
    quote: `"This is the second random quote"`,
    person: `bandana khatri`,
  },
  {
    quote: `"This is the third random quote"`,
    person: `ram`,
  },
  {
    quote: `"This is the fourth random quote"`,
    person: `shyam`,
  },
];

btn.addEventListener("click", function () {
  let randomQuote = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[randomQuote].quote;
  person.innerText = quotes[randomQuote].person;
});
