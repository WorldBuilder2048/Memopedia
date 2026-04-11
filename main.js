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
