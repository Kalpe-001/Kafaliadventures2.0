/* ==========================================================================
   Altura Expeditions — landing page interactions
   ========================================================================== */

/* ---- Data: 11 for now trekking packages ----------------------------------------- */
const packages = [
  {
    name: "Api Base Camp",
    link_name:"api",
    region: "Farwest Nepal",
    image: "images/packages/api.jpg",
    days: 10,
    difficulty: "Challenging",
    price: "On Request",
    page:"api.html",
    desc: "Take a dive and dip into the untouched nature and authentic culture. Api Nampa with no crowd, no commercialization withstands in its purest form silently.",
  },
  {
    name: "Shey Phoksundo Lake",
    link_name:"phoksundo",
    region: "Farwest Nepal",
    image: "images/packages/shey-phoksundo.jpeg",
    days: 9,
    difficulty: "Challenging",
    price: "On Request",
    page:"phoksundo.html",
    desc: "Just sitting by the little village of Ringmo and watching the Phoksundo Lake change color throughout the day is enough to put a spell on you",
  },
  {
    name: "Khaptad National Park",
    link_name:"khaptad",
    region: "Farwest Nepal",
    image: "images/packages/khaptad.jpg",
    days: 7,
    page:"khaptad.html",
    difficulty: "Easy",
    price: "On Request",
    desc: "The Khaptad National Park, one of the main attractions of Khaptad, was established in 1984 in the far western region of Nepal. It is covered by beautiful oak and rhododendron forests.",
  },
  {
    name: "Rara National Park",
    link_name:"rara",
    region: "Midwest Nepal",
    image: "images/packages/rara.jpg",
    days: 6,
    page:"rara.html",
    difficulty: "Challenging",
    price: "On Request",
    desc: "When you visit this stunning part of Nepal, you’ll have the chance to witness incredible landscapes, diverse nature, and authentic culture.",
  },
  {
    name: "Ramaroshan Trek",
    link_name:"ramaroshan",
    region: "Farwest Nepal",
    image: "images/packages/ramaroshan.webp",
    days: 6,
    difficulty: "Moderate",
    price: "On Request",
    page:"ramaroshan.html",
    desc: "The Ramaroshan Trek is a pristine, off-the-beaten-path journey famed for its 12 crystal-clear lakes and 18 rolling green pastures (patans), waterfall, deep forest with diverse vegetation",
  },
  /*
  {
    name: "Saipal Base Camp",
    region: "Farwest Nepal",
    image: "images/packages/saipal.jpg",
    days: 12,
    difficulty: "Moderate",
    price: "On Request",
    desc: "COMING SOON",
  },
  */
  {
    name: "Mustang Tour",
    link_name:"mustang",
    region: "Central Nepal",
    image: "images/packages/mustang.jpg",
    days: 6,
    difficulty: "Moderate",
    price: "On Request",
    page:"mustang.html",
    desc: "Known for its remarkable blend of rugged Himalayan landscapes, ancient Tibetan-influenced culture, historic villages, and unforgettable trails far beyond Nepal's busy trekking routes.",
  },
  {
  name: "Shuklaphanta Jeep Safari",
  link_name: "jeepsafari",
  region: "Far West Nepal",
  image: "images/packages/jeepsafari.jpg",
  days: 3,
  difficulty: "Easy",
  price: "On Request",
  page: "jeepsafari.html",
  desc: "A thrilling three-day jeep safari through Shuklaphanta's vast grasslands and forests, with opportunities to spot swamp deer, wild boar, birds, and other wildlife in the wild landscapes of Nepal's Far West."
},
  /*
  {
    name: "Shuklaphanta Safari",
    link_name:"safari",
    region: "Farwest Nepal",
    image: "images/packages/shuklaphanta.jpg",
    days: "3",
    difficulty: "Easy",
    price: "On Request",
    desc:"COMING SOON"
  desc: "Shuklaphanta National Park is famous for housing the world's largest herd of swamp deer (barasingha),Royal Bengal tigers",},*/
    
  {
    name: "Jungle Walk",
    link_name:"junglewalk",
    region: "Farwest Nepal",
    image: "images/packages/junglewalk.jpg",
    days:"3",
    difficulty: "Easy",
    price: "On Request",
    page:"junglewalk.html",
    desc: "Explore Shuklaphanta's vast grasslands and forests on foot, discovering rare wildlife, peaceful wetlands, and the untamed natural beauty of Nepal's Far West.",
  },
  {
    name: "River Rafting",
    link_name:"rafting",
    region: "Farwest Nepal",
    image: "images/packages/rafting.png",
    days: "half-day/full-day or 5",
    difficulty: "Easy",
    price: 'Price on Req',
    page:"rafting.html",
    desc: "Ride the currents of the Mahakali River through rugged valleys and remote landscapes, experiencing an unforgettable adventure.",  },
  {
    name: "Hiking",
    link_name:"hiking",
    region: "Farwest Nepal",
    image: "images/packages/shivalik.jpg",
    difficulty: "Easy",
    days:"4",
    price: "On Request",
    page:"hiking.html",
    desc: "Explore the Shivalik Hills of Nepal's Chure Range, where forested ridges, river valleys, and diverse wildlife create an authentic journey through the country's southern landscapes.",  },
  {
    name: "Angling",
    link_name:"angling",
    region: "Farwest Nepal",
    image: "images/packages/angling.webp",
    days: "upto 4",
    page:"angling.html",
    difficulty: "Moderate",
    price: "On Request",
    desc: "Enjoy a peaceful angling experience along the Mahakali River, surrounded by scenic forests, flowing waters, and tranquil landscapes.",
    },
  {
    name: "Biking",
    link_name:"biking",
    region: "Farwest Nepal",
    image: "images/packages/cycling.jpg",
    days: 6,
    difficulty: "Moderate",
    price: "On Request",
    page:"biking.html",
    desc: "Cycle through the scenic Chure foothills, winding past forests, villages, and rolling landscapes while enjoying fresh air, peaceful surroundings, and an unforgettable countryside adventure filled with nature and exploration.",
    },
];

/* ---- Data: testimonials -------------------------------------------------- */
const testimonials = [
  {
    text:"",
    name:"",
    role:"",
    initials:"",
  },
  {
    text:"",
    name:"",
    role:"",
    initials:"",
  },
  {
    text:"",
    name:"",
    role:"",
    initials:"",
  },
  {
    text:"",
    name:"",
    role:"",
    initials:"",
  },
];

/* ---- SVG icon helpers ---------------------------------------------------- */
const icons = {
  calendar:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
};

/* ---- Render packages ----------------------------------------------------- */
function renderPackages() {
  const grid = document.getElementById("packageGrid");
  grid.innerHTML = packages
    .map(
      (p) => `
    <article class="card reveal" data-difficulty="${p.difficulty}">
      <div class="card__media">
        <img src="${p.image}" alt="${p.name} trek landscape" loading="lazy" />
        <span class="card__tag">${p.difficulty}</span>
      </div>
      <div class="card__body">
        <div class="card__meta">
          <span>${icons.pin} ${p.region}</span>
          <span>${icons.calendar} ${p.days} days</span>
        </div>
        <h3 class="card__title">${p.name}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__footer">
          <div class="card__price">
            <small>PRICE</small>
            <strong>${p.price.toLocaleString()}</strong>
          </div>
          <div class="card__actions">
            ${
              p.page
                ? `<a class="card__more" href="${p.page}">View More</a>`
                : ""
            }
            <a class="card__link" href="booking.html?trek=${p.link_name}" data-trek="${p.name}">Book ${icons.arrow}</a>
          </div>
        </div>
      </div>
    </article>`
    )
    .join("");

  // Prefill the booking form when a card's "Book" link is clicked.
  grid.querySelectorAll(".card__link").forEach((link) => {
    link.addEventListener("click", () => {
      const select = document.getElementById("trek");
      if (select) select.value = link.dataset.trek;
    });
  });

  observeReveals();
}

/* ---- Render testimonials ------------------------------------------------- */
function renderTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  grid.innerHTML = testimonials
    .map(
      (t) => `
    <figure class="testimonial reveal">
      <div class="testimonial__quote" aria-hidden="true">&ldquo;</div>
      <blockquote class="testimonial__text">${t.text}</blockquote>
      <div class="testimonial__stars" aria-label="5 out of 5 stars">
        ${icons.star.repeat(5)}
      </div>
      <figcaption class="testimonial__person">
        <span class="testimonial__avatar" aria-hidden="true">${t.initials}</span>
        <span>
          <span class="testimonial__name">${t.name}</span><br />
          <span class="testimonial__role">${t.role}</span>
        </span>
      </figcaption>
    </figure>`
    )
    .join("");
}

/* ---- Populate the trek <select> in the form ----------------------------- */
function populateTrekSelect() {
  const select = document.getElementById("trek");
  packages.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.name;
    opt.textContent = p.name;
    select.appendChild(opt);
  });
}

/* ---- Difficulty filter --------------------------------------------------- */
function initFilters() {
  const filters = document.querySelectorAll(".filter");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((f) => f.classList.remove("active"));
      btn.classList.add("active");
      const value = btn.dataset.filter;
      document.querySelectorAll(".card").forEach((card) => {
        const match = value === "all" || card.dataset.difficulty === value;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
}

/* ---- Mobile nav toggle --------------------------------------------------- */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---- Sticky header shadow on scroll -------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- Scroll reveal animation --------------------------------------------- */
let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach((el) => revealObserver.observe(el));
}

/* ---- Form submission ----------------------------------------------------- */

/* ---- Init ---------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderPackages();
  renderTestimonials();
  populateTrekSelect();
  initFilters();
  initNav();
  initHeaderScroll();
  observeReveals();
  document.getElementById("year").textContent = new Date().getFullYear();
});
      (function () {
        var form = document.getElementById("contactForm");
        var submit = document.getElementById("contactSubmit");
        var success = document.getElementById("contactSuccess");
        var error = document.getElementById("contactError");
        var navToggle = document.getElementById("navToggle");
        var nav = document.getElementById("nav");
        var header = document.getElementById("header");
        document.getElementById("year").textContent = new Date().getFullYear();
        nav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", function () { nav.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false"); }); });
        window.addEventListener("scroll", function () { header.classList.toggle("scrolled", window.scrollY > 10); }, { passive: true });
        form.querySelectorAll("input, select, textarea").forEach(function (field) { field.addEventListener("input", function () { field.closest(".field").classList.remove("field--invalid"); }); });
        form.addEventListener("submit", async function (event) {
          event.preventDefault(); success.hidden = true; error.hidden = true;
          if (!form.checkValidity()) { form.reportValidity(); return; }
          submit.disabled = true; submit.setAttribute("aria-busy", "true"); submit.textContent = "Sending...";
          try {
            var response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
            if (!response.ok) throw new Error("Request failed");
            form.reset(); success.hidden = false;
          } catch (requestError) { error.hidden = false; }
          finally { submit.disabled = false; submit.removeAttribute("aria-busy"); submit.textContent = "Send message"; }
        });
      }());