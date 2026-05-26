const cursor = document.querySelector(".cursor");
const tail = document.querySelector(".cursor-tail");

let mouseX = 0;
let mouseY = 0;

let tailX = 0;
let tailY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

function animateTail() {
  tailX += (mouseX - tailX) * 0.15;
  tailY += (mouseY - tailY) * 0.15;

  tail.style.left = tailX + "px";
  tail.style.top = tailY + "px";

  requestAnimationFrame(animateTail);
}

animateTail();

/* ========================================
   MOBILE NAVIGATION TOGGLE
======================================== */
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

/* ========================================
   SIMPLE HERO IMAGE FLOAT EFFECT
======================================== */

// Select image card
const imageCard = document.querySelector(".image-card");

// Mouse movement effect
document.addEventListener("mousemove", (e) => {
  if (!imageCard) return;

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  imageCard.style.transform = `
    rotateY(${x}deg)
    rotateX(${-y}deg)
  `;
});

/* ========================================
   SERVICES CARD 3D EFFECT
======================================== */

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  });
});

/* ========================================
   PRICING CARD EFFECT
======================================== */

const pricingCards = document.querySelectorAll(".pricing-card");

pricingCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-12px)
      scale(1.02)
    `;

    card.style.boxShadow = `
      ${-rotateY * 2}px ${rotateX * 2}px 0 #000,
      0 30px 40px rgba(0,0,0,0.22)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      scale(1)
    `;

    card.style.boxShadow = `
      10px 10px 0 #000
    `;
  });
});

/* ========================================
   FLOATING ANIMATION
======================================== */

pricingCards.forEach((card, index) => {
  const speed = 2 + index * 0.5;

  setInterval(() => {
    card.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-8px)" },
        { transform: "translateY(0px)" },
      ],
      {
        duration: speed * 1000,
        iterations: 1,
      },
    );
  }, speed * 1200);
});

/* ========================================
   CONTACT FORM EFFECT
======================================== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("mousemove", (e) => {
    const rect = contactForm.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    contactForm.style.transform = `
      perspective(1400px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  });

  contactForm.addEventListener("mouseleave", () => {
    contactForm.style.transform = `
      perspective(1400px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;
  });
}

/* ========================================
   MAGNETIC BUTTON EFFECT
======================================== */

const contactBtn = document.querySelector(".contact-btn");

if (contactBtn) {
  contactBtn.addEventListener("mousemove", (e) => {
    const rect = contactBtn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    contactBtn.style.transform = `
      translate(${x * 0.18}px, ${y * 0.18}px)
    `;
  });

  contactBtn.addEventListener("mouseleave", () => {
    contactBtn.style.transform = `
      translate(0px,0px)
    `;
  });
}

/* ========================================
   BUDGET BUTTONS
======================================== */

let selectedBudget = "";

const budgetButtons = document.querySelectorAll(".budget-buttons button");

budgetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    budgetButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedBudget = button.dataset.budget;
  });
});

/* ========================================
   FLOATING FORM ANIMATION
======================================== */

if (contactForm) {
  setInterval(() => {
    contactForm.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-6px)" },
        { transform: "translateY(0px)" },
      ],
      {
        duration: 3500,
        iterations: 1,
      },
    );
  }, 3500);
}

/* ========================================
   GOOGLE SHEETS FORM SUBMISSION
======================================== */

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Form data
    const formData = {
      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      company: document.getElementById("company").value,

      projectType: document.getElementById("projectType").value,

      budget: selectedBudget,

      message: document.getElementById("message").value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzxuPRZgdUlGlZAe0BUVB8trN17LNV3o6srEr_ygQMDBMrCntktuRX26QTCU6NypGsN/exec",
        {
          method: "POST",

          mode: "no-cors",

          headers: {
            "Content-Type": "text/plain",
          },

          body: JSON.stringify(formData),
        },
      );

      alert("Wink sent successfully ✨");

      form.reset();

      // Remove active budget button
      budgetButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      selectedBudget = "";
    } catch (error) {
      console.error(error);

      alert("Something went wrong ❌");
    }
  });
}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
