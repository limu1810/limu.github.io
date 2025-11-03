const apiKey = "fc51ae1d5782ba2e60ac1a32c7796c4b";

document.getElementById("searchBtn").addEventListener("click",() => {
    const topic = document.getElementById("topicInput").value.trim() || "technology";
    getNews(topic);
})

async function getNews(topic) {
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(topic)}&lang=en&max=10&token=${apiKey}`;
     
    try{
const res = await fetch(url);
    const data = await res.json();

    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "";

    if (data.articles && data.articles.length > 0) {
      data.articles.slice(0, 10).forEach(article => {
        const div = document.createElement("div");
        div.className = "article";
        div.innerHTML = `
          <h2>${article.title}</h2>
          <p>${article.description || ""}</p>
          <a href="${article.url}" target="_blank">Read full article</a>
        `;
        newsContainer.appendChild(div);
      });
    } else {
      newsContainer.innerHTML = "<p>No news found for that topic.</p>";
    }
  } catch (err) {
    console.error("Error fetching news:", err);
    document.getElementById("newsContainer").innerHTML = "<p>Failed to load news.</p>";
  }
}
    
