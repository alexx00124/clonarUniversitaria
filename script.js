const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.getElementById('dots');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const heroSection = document.querySelector('.hero');

const menuItem = document.getElementById('ofertaAcademicaItem');
const menuTrigger = document.getElementById('ofertaTrigger');
const categoryButtons = Array.from(document.querySelectorAll('.category-btn'));
const programLists = Array.from(document.querySelectorAll('.program-list'));

const tecnicosSearch = document.getElementById('tecnicosSearch');
const tecnicosItems = Array.from(document.querySelectorAll('[data-tecnico-item]'));
const tecnicosEmpty = document.getElementById('tecnicosEmpty');
const tecnicosResults = document.getElementById('tecnicosResults');

let currentIndex = 0;
let autoplayId;

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function setActiveCategory(category) {
  categoryButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.category === category);
  });

  programLists.forEach((list) => {
    list.classList.toggle('is-active', list.dataset.category === category);
  });
}

function openMegaMenu() {
  if (!menuItem || !menuTrigger) {
    return;
  }

  menuItem.classList.add('is-open');
  menuTrigger.setAttribute('aria-expanded', 'true');
}

function closeMegaMenu() {
  if (!menuItem || !menuTrigger) {
    return;
  }

  menuItem.classList.remove('is-open');
  menuTrigger.setAttribute('aria-expanded', 'false');
}

function filterTecnicos(query) {
  if (!tecnicosResults || tecnicosItems.length === 0) {
    return;
  }

  const normalizedQuery = normalizeText(query);
  const hasQuery = normalizedQuery.length > 0;
  let visibleCount = 0;

  tecnicosItems.forEach((item) => {
    const programName = normalizeText(item.textContent || '');
    const isVisible = programName.includes(normalizedQuery);
    item.hidden = !isVisible;
    if (isVisible) {
      visibleCount += 1;
    }
  });

  tecnicosResults.classList.toggle('is-open', hasQuery && visibleCount > 0);
  if (tecnicosEmpty) {
    tecnicosEmpty.classList.toggle('is-open', hasQuery && visibleCount === 0);
  }
}

function renderDots() {
  if (!dotsContainer) {
    return;
  }

  dotsContainer.innerHTML = '';
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `dot${index === currentIndex ? ' active' : ''}`;
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ir al aviso ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function goToSlide(index) {
  slides[currentIndex].classList.remove('active');
  currentIndex = (index + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
  renderDots();
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

function startAutoplay() {
  stopAutoplay();
  autoplayId = window.setInterval(nextSlide, 6000);
}

function stopAutoplay() {
  if (autoplayId) {
    window.clearInterval(autoplayId);
  }
}

function initCarousel() {
  if (!nextBtn || !prevBtn || !dotsContainer || slides.length === 0) {
    return;
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoplay();
  });

  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
  }

  renderDots();
  startAutoplay();
}

function initMegaMenu() {
  if (!menuItem || !menuTrigger) {
    return;
  }

  menuTrigger.addEventListener('click', () => {
    const isOpen = menuItem.classList.contains('is-open');
    if (isOpen) {
      closeMegaMenu();
    } else {
      openMegaMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menuItem.contains(event.target)) {
      closeMegaMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMegaMenu();
    }
  });

  categoryButtons.forEach((button) => {
    const category = button.dataset.category;

    button.addEventListener('mouseenter', () => {
      setActiveCategory(category);
    });

    button.addEventListener('click', () => {
      setActiveCategory(category);
    });
  });
}

function initTecnicosSearch() {
  if (!tecnicosSearch) {
    return;
  }

  tecnicosSearch.addEventListener('input', (event) => {
    filterTecnicos(event.target.value);
  });

  document.addEventListener('click', (event) => {
    const searchArea = tecnicosSearch.closest('.tecnicos-search-shell');
    if (!searchArea || searchArea.contains(event.target)) {
      return;
    }

    tecnicosResults?.classList.remove('is-open');
    tecnicosEmpty?.classList.remove('is-open');
  });
}

initCarousel();
initMegaMenu();
initTecnicosSearch();
