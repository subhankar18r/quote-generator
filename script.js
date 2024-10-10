const categories = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];
const api_key = "ztG68rK7Od0mK8ATYgQOaw==cpjz45nLiu58XIKk";
let category = categories[Math.floor(Math.random() * categories.length)];
let api_url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

document.querySelector("button.new").addEventListener("click", async (e) => {
  e.target.disabled = true;
  generateQuote();
  setTimeout(() => {
    e.target.disabled = false;
  }, 1000);
});

async function generateQuote() {
  const response = await fetch(api_url, {
    headers: { "X-Api-Key": api_key },
  });
  const data = await response.json();

  const quote = data[0].quote;
  const author = "-- " + data[0].author;

  document.querySelector(".quote").innerHTML = quote;
  document.querySelector(".author").innerHTML = author;
  console.log(
    (document.querySelector(
      ".twitter-share-button"
    ).href = `https://twitter.com/intent/tweet?text=${quote}%0A${author}`)
  );
}

generateQuote();
