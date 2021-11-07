let getQuote = document.querySelector(".get-quote");
let copyQuote = document.querySelector(".copy-quote");
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

copyQuote.onclick = () => {
	let text = `${document.querySelector(".quote__text").textContent}\n - ${document.querySelector(".quote__author").textContent}\nQuote-Inator - ${
		location.host
	}`;

	copyToClipboard(text);
};

function copyToClipboard(text) {
	navigator.clipboard.writeText(text);

	Swal.fire({
		position: "bottom-end",
		icon: "success",
		title: "Quote copied to clipboard",
		showConfirmButton: false,
		toast: true,
		timer: 2500,
	});
}
