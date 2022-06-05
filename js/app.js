const quotes = {
  "- Walt Disney": '"The way Get Started Is To Quit Talking And Begin Doing"',
  "- Dalai Lama": " “The purpose of our lives is to be happy.”",
  "- John Lennon":
    "“Life is what happens when you’re busy making other plans.” ",
  "- Stephen King": " “Get busy living or get busy dying.”",
  "- Mae West":
    " “You only live once, but if you do it right, once is enough.”",
  "- Thomas A. Edison":
    " “Many of life’s failures are people who did not realize how close they were to success when they gave up.”",
  "- Albert Einstein":
    "“If you want to live a happy life, tie it to a goal, not to people or things.”",
  "- Babe Ruth":
    "“Never let the fear of striking out keep you from playing the game.”",
  "- Will Smith":
    " “Money and success don’t change people; they merely amplify what is already there.” ",
  "- Steve Jobs":
    " “Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” ",
  "- Eleanor Roosevelt":
    "“If life were predictable it would cease to be life, and be without flavor.” ",
  "- Henry Ford":
    " “The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”",
  "- (Attributed to various sources)":
    "“Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.” ",
  "- Celine Dion":
    " “Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.” ",
  "- John F. Kennedy":
    " “Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.” ",
  "- Helen Keller":
    " “When we do the best we can, we never know what miracle is wrought in our life or the life of another.” ",
  "- Bill Clinton":
    "“If you live long enough, you’ll make mistakes. But if you learn from them, you’ll be a better person.” ",
  "- Mary Kay Ash ":
    " “Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” ",
};

document.getElementById("generate").addEventListener("click", () => {
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];

  document.getElementById("quotes").innerText = quote;
  document.getElementById("author").innerText = author;
});
