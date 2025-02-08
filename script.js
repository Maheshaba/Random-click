let quotes = [
         "Believe in yourself!",
         "You can do it",
         "Never give up!",
         "Success is the best revenge.",
         "Dream big and dare to fail",
         "Work hard in silence, let success make the noise."
];

function generateQuote() {
         let randomIndex = Math.floor(Math.random() * quotes.length);
         document.getElementById("quote").textContent = quotes[randomIndex];
}




