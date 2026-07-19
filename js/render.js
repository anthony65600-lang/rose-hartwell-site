/*
  Construit la grille de livres et les filtres a partir de js/books-data.js.
  Rien ici a modifier pour ajouter un livre - c'est tout dans books-data.js.
*/

function bookCard(book) {
  const subtitleHtml = book.subtitle
    ? `<p class="book-subtitle">${book.subtitle}</p>`
    : "";
  const coverHtml = book.cover
    ? `<img src="${book.cover}" alt="${book.title} cover" loading="lazy">`
    : `<span>${book.title.split(" ").map(w => w[0]).slice(0, 2).join("")}</span>`;
  return `
    <article class="book-card" data-category="${book.category}" data-title="${book.title.toLowerCase()}" data-asin="${book.asin}">
      <div class="book-cover" aria-hidden="true">
        ${coverHtml}
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

  grid.querySelectorAll(".book-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".book-link")) return;
      const book = BOOKS.find(b => b.asin === card.dataset.asin);
      if (book) openModal(book);
    });
  });
}

function relatedCardHtml(book) {
  const coverHtml = book.cover
    ? `<img src="${book.cover}" alt="${book.title} cover" loading="lazy">`
    : `<span>${book.title.split(" ").map(w => w[0]).slice(0, 2).join("")}</span>`;
  return `
    <a class="related-card" href="https://www.amazon.com/dp/${book.asin}" target="_blank" rel="noopener">
      <div class="related-cover">${coverHtml}</div>
      <span class="related-title">${book.title}</span>
    </a>
  `;
}

function openModal(book) {
  const modal = document.getElementById("book-modal");
  const body = document.getElementById("modal-body");

  const subtitleHtml = book.subtitle
    ? `<p class="modal-subtitle">${book.subtitle}</p>`
    : "";
  const coverHtml = book.cover
    ? `<img src="${book.cover}" alt="${book.title} cover">`
    : `<span>${book.title.split(" ").map(w => w[0]).slice(0, 2).join("")}</span>`;

  const related = BOOKS
    .filter(b => b.category === book.category && b.asin !== book.asin)
    .slice(0, 3);

  const relatedHtml = related.length
    ? `
      <div class="modal-related">
        <h4>You might also like</h4>
        <div class="related-grid">${related.map(relatedCardHtml).join("")}</div>
      </div>
    `
    : "";

  body.innerHTML = `
    <div class="modal-cover">${coverHtml}</div>
    <div class="modal-info">
      <h3>${book.title}</h3>
      ${subtitleHtml}
      <div class="book-meta">
        <span class="book-price">$${book.price}</span>
        <span class="book-category-tag">${book.category}</span>
      </div>
      <a class="cta" href="https://www.amazon.com/dp/${book.asin}" target="_blank" rel="noopener">View on Amazon &rarr;</a>
    </div>
    ${relatedHtml}
  `;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("book-modal").hidden = true;
  document.body.style.overflow = "";
}

function initModal() {
  const modal = document.getElementById("book-modal");
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
  modal.addEventListener("click", (e) => {
    if (e.target.closest(".related-card")) closeModal();
  });
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
  initModal();
  document.getElementById("book-search").addEventListener("input", applyFilters);
  document.getElementById("year").textContent = new Date().getFullYear();
});
