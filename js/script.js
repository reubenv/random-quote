// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array of objects for the main quotes to be used for the application
var quotes = [
  {
    quote: '“R” is among the most menacing of sounds. That\'s why they call it “murder”. Not “muckduck.”',
    source: 'Dwight Schrute',
    citation: 'Mafia',
    year: 2009,
    tags: ['comedy', 'tv show', 'Grotti']
  },
  {
    quote: 'I love catching people in the act. That’s why I always whip open doors.',
    source: 'Dwight Schrute',
    citation: 'Frame Toby',
    year: 2008,
    tags: ['comedy', 'tv show', 'planking']
  },
  {
    quote: 'Whenever I\'m about to do something, I think, "Would an idiot do that?" And if they would, I do not do that thing.',
    source: 'Dwight Schrute',
    citation: 'Business School',
    year: 2007,
    tags: ['comedy', 'tv show', 'Michael']
  },
  {
    quote: 'How would I describe myself? Three words: hardworking, alpha male, jackhammer, merciless, insatiable.',
    source: 'Dwight Schrute',
    citation: 'The Return',
    year: 2007,
    tags: ['comedy', 'tv show', 'Andy']
  },
  {
    quote: 'I don\'t have a lot of experience with vampires, but I have hunted werewolves. I shot one once, but by the time I got to it, it had turned back into my neighbor\'s dog.',
    source: 'Dwight Schrute',
    citation: 'Business School',
    year: 2007,
    tags: ['comedy', 'tv show', 'Jim']
  },
  {
    quote: 'Why tip someone for a job I\'m capable of doing myself? I can deliver food. I can drive a taxi. I can, and do, cut my own hair. I did however, tip my urologist, because I am unable to pulverize my own kidney stones.',
    source: 'Dwight Schrute',
    citation: 'Michael\'s Birthday',
    year: 2006,
    tags: ['comedy', 'tv show', 'sandwich']
  },
  {
    quote: 'If I could menstruate, I wouldn\'t have to deal with idiotic calendars anymore. I\'d just be able to count down from my previous cycle. Plus, I\'d be more in tune with the moon and the tides.',
    source: 'Dwight Schrute',
    citation: 'Women\'s Appreciation',
    year: 2007,
    tags: ['comedy', 'tv show']
  },
  {
    quote: 'I never smile if I can help it... Showing one\'s teeth is a submission signal in primates. When someone smiles at me, all I see is a chimpanzee begging for its life.',
    source: 'Dwight Schrute',
    citation: 'Conflict Resolution',
    year: 2006,
    tags: ['comedy', 'tv show']
  },
  {
    quote: 'Michael is like Mozart, and I\'m like Butch Cassidy. You mess with Mozart and you\'re gonna get a bullet in your head, courtesy of Butch Cassidy.',
    source: 'Dwight Schrute',
    citation: 'Office Olympics',
    year: 2005,
    tags: ['comedy', 'tv show', 'Michael']
  },
  {
    quote: 'I am not a security threat. And, my middle name is Kurt, not Fart.',
    source: 'Dwight Schrute',
    citation: 'Conflict Resolution',
    year: 2006,
    tags: ['comedy', 'tv show', 'Jim']
  }
];

// Create an empty array of objects to hold the "viewed" quotes
var viewedQuotes = [];
// Set a time interval for refreshing the quote automatically every 15 seconds
var intervalID = window.setInterval(printQuote,15000);

// Fucntion to generate the random number to use w/ the randomColor function
function setRandomValue(myVal){
  return randomValue = Math.floor((Math.random() * myVal));
}

// Function to return a random quote
function getRandomQuote(){
  // Since we're going to remove quotes from the main quotes array of objects, need to check when its empty and refill it
  if (quotes.length === 0) {
    quotes = viewedQuotes.splice(0, viewedQuotes.length);
  }
  // Randomize a number to use as the index for the array of objects, and set the object to a variable
  var randomNum = setRandomValue(quotes.length);
  // Splice the object from the main quotes array of objects so it won't get displayed again
  var quote = quotes.splice(randomNum,1)[0];
  // Push the quote we're going to display to the viewedQuotes array of objects
  viewedQuotes.push(quote);

  // Dumping the quote object, along w/ the array of objects for the quotes and viewedQuotes to console just to verify everything is working
  console.log(quote);
  console.log(quotes);
  console.log(viewedQuotes);

  return quote;
}

function randomColor() {
  // Construct the string to be used as the color, using the setRandomValue function to set the RGB values
  var color = 'rgb(';
  color += setRandomValue(256);
  color += ',';
  color += setRandomValue(256);
  color += ',';
  color += setRandomValue(256);
  color += ')';
  // Set the document body bgcolor
  document.body.style.backgroundColor = color;
}

function printQuote() {
  // Get the quote to be displayed
  var quoteToDisplay = getRandomQuote();

  // Create the HTML string to be displayed in the quote-box DIV
  var quoteHTML = '<p class="quote">';
  quoteHTML += quoteToDisplay.quote;
  quoteHTML += '</p><p class="source">';
  quoteHTML += quoteToDisplay.source;

  // Only show the citation if it exists for a quote object
  if (quoteToDisplay.citation !== null) {
    quoteHTML += '<span class="citation">';
    quoteHTML += quoteToDisplay.citation;
    quoteHTML += '</span>';
  }

  // Only show the year if it exists for a quote object
  if (quoteToDisplay.year !== null) {
    quoteHTML += '<span class="year">';
    quoteHTML += quoteToDisplay.year;
    quoteHTML += '</span>';
  }

  quoteHTML += '</p>';

  // Change the background color every time the printQuote() function is triggered
  randomColor();

  // Set the innerHTML of the quote-box DIV to the quoteHTML variable
  document.getElementById('quote-box').innerHTML = quoteHTML;
}
