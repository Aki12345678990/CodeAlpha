const quotes = [
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Don’t cry because it’s over, smile because it happened.", author: "Dr. Seuss" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "In three words I can sum up everything I’ve learned about life: it goes on.", author: "Robert Frost" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { quote: "Life is what happens to us while we are making other plans.", author: "Allen Saunders" },
    { quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { quote: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Whoever is happy will make others happy too.", author: "Anne Frank" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { quote: "You make a life out of what you have, not what you're missing.", author: "Kate Morton" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    { quote: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
    { quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
    { quote: "Out of difficulties grow miracles.", author: "Jean de La Bruyère" },
    { quote: "You do not find the happy life. You make it.", author: "Camilla Eyring Kimball" },
    { quote: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" }
    
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const tweetLink = document.getElementById('tweet-link');
const facebookLink = document.getElementById('facebook-link');
const instagramLink = document.getElementById('instagram-link');
const whatsappLink = document.getElementById('whatsapp-link');
const newQuoteButton = document.getElementById('new-quote');
const shareQuoteButton = document.getElementById('share-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayNewQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
    const quoteText = encodeURIComponent(`"${randomQuote.quote}" - ${randomQuote.author}`);
    tweetLink.href = `https://twitter.com/intent/tweet?text=${quoteText}`;
    facebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${quoteText}`;
    instagramLink.href = `https://www.instagram.com/`;
    whatsappLink.href = `https://api.whatsapp.com/send?text=${quoteText}`;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?abstract,dark')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.color = "#ffffff";
    document.querySelector(".container").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    document.querySelector(".container").style.color = "#ffffff";
    const buttons = document.querySelectorAll("button, .social-media a");
    buttons.forEach(button => {
        button.style.backgroundColor = "#444";
        button.style.color = "#fff";
        button.style.border = "1px solid #555";
    });
}

function shareQuote() {
    alert(`Share this quote: "${quoteElement.textContent}" - ${authorElement.textContent}`);
}

newQuoteButton.addEventListener('click', displayNewQuote);
shareQuoteButton.addEventListener('click', shareQuote);
displayNewQuote();
