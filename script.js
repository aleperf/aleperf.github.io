const quote = document.querySelector('.sentence');
const author = document.querySelector('.author');

const quotes = [{author: 'Amanda Gorman', sentence: `For there is always light, if only we're brave enough to see it. <br>  If only we're brave enough to be it.` },
   {author:'Douglas Adams', sentence: 'The impossible often has a kind of integrity to it which the merely improbable lacks.'},
   {author:'William Shakespeare', sentence: 'It is not in the stars to hold our destiny but in ourselves.'},
   {author:'Jane Austen', sentence: 'I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! '},
   {author:'Alexandre Dumas', sentence: "One's work may be finished someday, but one's education never."},
   {author:'Agatha Christie', sentence: 'The impossible could not have happened, therefore the impossible must be possible in spite of appearances.'},
   {author:'Isaac Asimov', sentence: 'Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest.'},
   {author:'Lev Tolstoj', sentence: 'There is no greatness where there is not simplicity, goodness, and truth.'},
   {author:'Diana Wynne Jones', sentence: 'It is quite a risk to spank a wizard for getting hysterical about his hair.'},
   {author:'Octavia Butler', sentence: "All that you touch, You Change. All that you Change, Changes You. The only lasting truth is Change."},
   {author:'James S.A. Corey', sentence: 'You can tell you’ve found a really interesting question when nobody wants you to answer it.'},

]

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(randomQuote);

quote.innerHTML = randomQuote['sentence'];
author.innerHTML = randomQuote['author'];


