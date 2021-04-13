var quotesList = [
    {
        quoteItem: "Obsessed is a word used often by the lazy, in order to describe the dedicated.",
    },
    {
        quoteItem: "KSE: remember, after Knowledge you must Strategize and Execute.",
    },
    {
        quoteItem:
            "The current education system forgot, you have to inspire kids. You can’t just lecture them.",
    },
    {
        quoteItem: "Everybody wants the good life, but not everybody gets the good life.",
    },
    {
        quoteItem: "Be humble. Persevere. Read more. Toughen up.",
    },
    {
        quoteItem:
            "If it won’t matter in one week, one month or one year, then don’t worry about it.",
    },
    {
        quoteItem:
            "The day you figure out your career destiny is the day your true financial freedom begins.",
    },
];

var quoteBtn = document.getElementById("getQuote"),
    quote = document.getElementById("quote");

window.onload = getRndmQuote;
quoteBtn.addEventListener("click", getRndmQuote);

function getRndmQuote() {
    random = Math.floor(Math.random() * quotesList.length);
    quote.innerHTML = quotesList[random].quoteItem;
}
