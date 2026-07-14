/*
  Construit la grille de livres et les filtres a partir de js/books-data.js.
  Rien ici a modifier pour ajouter un livre - c'est tout dans books-data.js.
*/

function bookCard(book) {
  const subtitleHtml = book.subtitle
    ? `<p class="book-subtitle">${book.subtitle}</p>`
    : "";
  return `
    <article class="book-card" data-category="${book.category}" data-title="${book.title.toLowerCase()}">
      <div class="book-cover" aria-hidden="true">
        <span>${book.title.split(" ").map(w => w[0]).slice(0, 2).join("")}</span>
      </div>
      <div class="book-info">
        <h3>${book.title}</h3>
        ${subtitleHtml}
        <div class="book-meta">
          <span class="book-price">$${book.price}</span>
          <span class="book-category-tag">${book.category}</span>
        </div>
        <a class="book-link" href="https://www.amazon.com/dp/${book.asin}" target="_blank" rel="noopener">
          View on Amazon &rarr;
        </a>
      </div>
    </article>
  `;
}

function renderBooks(list) {
  const grid = document.getElementById("books-grid");
  grid.innerHTML = list.length
    ? list.map(bookCard).join("")
    : `<p class="no-results">No books match your search.</p>`;
  document.getElementById("book-count").textContent = BOOKS.length;
}

function buildCategoryFilters() {
  const categories = ["All", ...new Set(BOOKS.map(b => b.category))];
  const wrap = document.getElementById("category-filters");
  wrap.innerHTML = categories
    .map((c, i) => `<button class="filter-btn${i === 0 ? " active" : ""}" data-category="${c}">${c}</button>`)
    .join("");

  wrap.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });
}

function applyFilters() {
  const activeCategory = document.querySelector(".filter-btn.active")?.dataset.category || "All";
  const search = document.getElementById("book-search").value.trim().toLowerCase();

  const filtered = BOOKS.filter(b => {
    const matchesCategory = activeCategory === "All" || b.category === activeCategory;
    const matchesSearch = !search || b.title.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  renderBooks(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  buildCategoryFilters();
  renderBooks(BOOKS);
  document.getElementById("book-search").addEventListener("input", applyFilters);
  document.getElementById("year").textContent = new Date().getFullYear();
});
