const quotes = {
    science: [
        { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein" },
        { text: "To confine our attention to terrestrial matters would be to limit the human spirit.", author: "Stephen Hawking" },
        { text: "Science is organised knowledge. Wisdom is organised life", author: "Immanuel Kant" },
        { text: "Science is a beautiful gift to humanity; we should not distort it.", author: "A. P. J. Abdul Kalam" },
        { text: "The science of today is the technology of tomorrow.", author: "Edward Teller" },
        { text: "The good thing about science is that it’s true whether or not you believe in it.", author: "Neil deGrasse Tyson" },
        { text: "Science may set limits to knowledge, but should not set limits to imagination.", author: "Bertrand Russell" },
        { text: "No one should approach the temple of science with the soul of a money changer.", author: "Thomas Browne (1605-82)" }
        
    ],
    life: [
        { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
        { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
        { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" }
        
    ],
    friendship: [
        { text: "Truly great friends are hard to find, difficult to leave, and impossible to forget.", author: "G. Randolf" },
        { text: "When friendships are real, they are not glass threads or frostwork, but the solidest things we can know.", author: "Ralph Waldo Emerson" },
        { text: "Time doesn't take away from friendship, nor does separation.", author: "Tennessee Williams" },
        { text: "Real friends are the ones you can count on no matter what. The ones who go into the forest to find you and bring you home.", author: "Morgan Matson" },
        { text: "Silence makes the real conversations between friends. Not the saying, but the never needing to say that counts.", author: "Margaret Lee Runbeck" },
        { text: "My old grandmother always used to say, summer friends will melt away like summer snows, but winter friends are friends forever.", author: "George R.R. Martin" },
        { text: "A man's friendships are one of the best measures of his worth.", author: "Charles Darwin" },
        { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" }
        
    ],
};


// define variables
let currentQuoteIndex = 0;
let currentCategory = 'all';
let fontSize = 1.2;

const categorySelect = document.getElementById('category');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const darkModeToggle = document.getElementById('dark-mode');
const increaseFontSizeButton = document.getElementById('increase');
const decreaseFontSizeButton = document.getElementById('decrease');


// generator and update quotes

const updateQuote = () => {
    const categoryQuotes = currentCategory === 'all' ? Object.values(quotes).flat() : quotes[currentCategory];
    if (categoryQuotes.length === 0) {
        quoteText.textContent = "No quotes available for this category.";
        quoteAuthor.textContent = "";
        return;
    }
    const quote = categoryQuotes[currentQuoteIndex];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `— ${quote.author}`;
};

// Generate Next Quote -> increment 1 index of object
const showNextQuote = () => {
    const categoryQuotes = currentCategory === 'all' ? Object.values(quotes).flat() : quotes[currentCategory];
    currentQuoteIndex = (currentQuoteIndex + 1) % categoryQuotes.length;
    updateQuote();
};

// Generate Next Quote -> decrement 1 index of object
const showPreviousQuote = () => {
    const categoryQuotes = currentCategory === 'all' ? Object.values(quotes).flat() : quotes[currentCategory];
    currentQuoteIndex = (currentQuoteIndex - 1 + categoryQuotes.length) % categoryQuotes.length;
    updateQuote();
};




// show Random quote
const showRandomQuote = () => {
    const categoryQuotes = currentCategory === 'all' ? Object.values(quotes).flat() : quotes[currentCategory];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    currentQuoteIndex = randomIndex;
    updateQuote();
};

// Select category of quotes
categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentQuoteIndex = 0;
    updateQuote();
});

//  Change page dark and light mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
};

// Font Alteration
const changeFontSize = (increment) => {
    fontSize = Math.max(0.5, fontSize + increment);
    quoteText.style.fontSize = `${fontSize}em`;
};


// Call EventListeners
document.getElementById('next').addEventListener('click', showNextQuote);
document.getElementById('prev').addEventListener('click', showPreviousQuote);
document.getElementById('random').addEventListener('click', showRandomQuote);
// darkModeToggle.addEventListener('change', toggleDarkMode);
darkModeToggle.addEventListener('change', toggleDarkMode);
increaseFontSizeButton.addEventListener('click', () => changeFontSize(0.1));
decreaseFontSizeButton.addEventListener('click', () => changeFontSize(-0.1));




toggleDarkMode(); // Ensure correct mode on load
// Initial quote display
updateQuote();

