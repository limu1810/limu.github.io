const apiKey = "fc51ae1d5782ba2e60ac1a32c7796c4b";
const proxy = "https://api.allorigins.win/raw?url=";

// --- PAGE-LOAD: Fetch Top Headlines ---
window.onload = () => {
    loadHeadlines(); 
};

document.getElementById("reloadBtn").addEventListener("click", () => {
    loadHeadlines();
});

// Build valid GNews parameters for headlines
function buildHeadlineFilters() {
    const c = document.getElementById("countryFilter").value;
    const l = document.getElementById("langFilter").value;

    let str = "";
    if (c) str += `&country=${c}`;
    if (l) str += `&lang=${l}`;
    return str;
}

async function loadHeadlines() {
    const container = document.getElementById("headlinesContainer");
    container.innerHTML = "<p>Loading...</p>";

    const filterString = buildHeadlineFilters();

    const targetUrl = 
        `https://gnews.io/api/v4/top-headlines?max=10&token=${apiKey}${filterString}`;

    const url = `${proxy}${encodeURIComponent(targetUrl)}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        container.innerHTML = "";

        if (!data.articles || data.articles.length === 0) {
            container.innerHTML = "<p>No headlines found.</p>";
            return;
        }

        data.articles.forEach(article => {
            const div = document.createElement("div");
            div.className = "article";
            div.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description || ""}</p>
                <a href="${article.url}" target="_blank">Read full article</a>
            `;
            container.appendChild(div);
        });

    } catch (err) {
        console.error("Headline load error:", err);
        container.innerHTML = "<p>Failed to load headlines.</p>";
    }
}


// --- SEARCH: Your existing function (unchanged!) ---
document.getElementById("searchBtn").addEventListener("click", () => {
  const topic = document.getElementById("topicInput").value.trim() || "technology";
  getNews(topic);
});

async function getNews(topic) {
  const targetUrl = `https://gnews.io/api/v4/search?q=${encodeURIComponent(topic)}&lang=en&max=10&token=${apiKey}`;
  const url = `${proxy}${encodeURIComponent(targetUrl)}`;

  try {
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
    console.error("Search error:", err);
    document.getElementById("newsContainer").innerHTML = "<p>Failed to load news.</p>";
  }
}
