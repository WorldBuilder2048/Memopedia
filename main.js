// ===== СПИСОК СТРАНИЦ =====
const pages = [
  { title: "Cat and the X-ray Electrocardiograph", file: "cat_and_x-ray_electrocardiograph.html" },
  { title: "Law of Sudden Object Disappearance", file: "law_of_disappearance_of_things.html" },
  { title: "Paradox of Tangled Wires", file: "tangled_wires.html" },
  { title: "Theory of the Missing Sock", file: "missing_sock.html" },
  { title: "Effect of Entering a Room and Forgetting Why", file: "forgot_why_entered.html" },
  { title: "Device That Stops Working When Needed", file: "device_failure_deadline.html" },
  { title: "Phenomenon of Closet Overfilling", file: "closet_overflow.html" },
  { title: "Law of Meanness", file: "law_of_meanness.html" },
  { title: "Law of Contradiction of Expectation", file: "law_of_contradiction.html" },
  { title: "The Drawer of Random Things", file: "random_drawer.html" }
];

// ===== ПОИСК =====
function search() {
  const query = document.getElementById("searchBox")?.value.toLowerCase().trim();
  const resultsBox = document.getElementById("searchResults");

  if (!resultsBox) return;

  if (!query) {
    resultsBox.style.display = "none";
    return;
  }

  const results = pages.filter(p =>
    p.title.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsBox.innerHTML = "<div style='padding:8px;'>No results</div>";
  } else {
    resultsBox.innerHTML = results.map(p =>
      `<div style="padding:8px; cursor:pointer;" onclick="goTo('${p.file}')">
        ${p.title}
      </div>`
    ).join("");
  }

  resultsBox.style.display = "block";
}

function goTo(file) {
  window.location.href = file;
}

// закрытие поиска
document.addEventListener("click", function(e) {
  if (!e.target.closest(".search-container")) {
    const box = document.getElementById("searchResults");
    if (box) box.style.display = "none";
  }
});

// ===== КНОПКА НА ГЛАВНУЮ =====
function goHome() {
  window.location.href = "index.html";
}

// ===== FOOTER (общий для всех страниц) =====
function createFooter() {
  const footer = document.createElement("div");
  footer.className = "footer";

  footer.innerHTML = `
    <div style="margin-bottom:5px;">
      <a href="articles.html">Articles</a> | 
      <a href="about.html">About</a>
    </div>
    Content is available under CC BY-SA 4.0.<br>
    Memopedia code is licensed under the MIT License.<br>
    © WorldBuilder2048
  `;

  document.body.appendChild(footer);
}

// автоматически добавляем при загрузке
window.addEventListener("DOMContentLoaded", createFooter);

// ===== TOPBAR EXTENSIONS (search + main link) =====
function enhanceTopbar() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  // --- ссылка на главную ---
  const homeLink = document.createElement("a");
  homeLink.href = "index.html";
  homeLink.textContent = "Main page";
  homeLink.style.marginLeft = "10px";

  topbar.appendChild(homeLink);

  // --- контейнер поиска ---
  const form = document.createElement("form");
  form.className = "search-container";
  form.style.marginLeft = "auto";
  form.style.position = "relative";

  form.innerHTML = `
    <input type="text" id="searchBox" placeholder="Search Memopedia" oninput="search()" autocomplete="off">
    <div id="searchResults" style="
      position:absolute;
      top:30px;
      right:0;
      width:300px;
      background:white;
      border:1px solid #a2a9b1;
      display:none;
      z-index:1000;
    "></div>
  `;

  topbar.appendChild(form);

  // --- random article ---
  const randomLink = document.createElement("a");
  randomLink.href = "#";
  randomLink.textContent = "Random article";
  randomLink.style.marginLeft = "10px";
  
  randomLink.onclick = function(e) {
    e.preventDefault();
    randomArticle();
  };
  
  topbar.appendChild(randomLink);
  
}

// запускаем
window.addEventListener("DOMContentLoaded", enhanceTopbar);

// ===== RANDOM ARTICLE =====
function randomArticle() {
  const random = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = random.file;
}
