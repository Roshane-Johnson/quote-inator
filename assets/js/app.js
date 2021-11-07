let getQuote = document.querySelector(".get-quote");
let quoteAuthor = document.querySelector(".quote__author");
let quoteText = document.querySelector(".quote__text");

(function init() {
	fetch("https://api.quotable.io/random")
		.then((resp) => resp.json())
		.then((data) => {
			quoteAuthor.textContent = data.author;
			quoteText.textContent = data.content;
		});
})();

getQuote.onclick = () => {
	getQuote.childNodes[0].classList.add("fa-spin");
	setTimeout(() => getQuote.childNodes[0].classList.remove("fa-spin"), 1000);

	fetch("https://api.quotable.io/random")
		.then((resp) => resp.json())
		.then((data) => {
			quoteAuthor.textContent = data.author;
			quoteText.textContent = data.content;
		});
};
