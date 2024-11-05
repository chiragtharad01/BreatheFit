let currentIndex = 0;

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Update current index
    currentIndex += direction;

    // Loop back if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Calculate translation
    const translateX = -currentIndex * 100;

    // Apply translation with smooth animation
    carousel.style.transform = `translateX(${translateX}%)`;
}

// script.js
let dealCards = [
    {
      image: "https://via.placeholder.com/250x150",
      title: "Deal 1",
      price: "₹ 999",
      mrp: "₹ 1,499",
      discount: "33% off"
    },
    {
      image: "https://via.placeholder.com/250x150",
      title: "Deal 2",
      price: "₹ 1,299",
      mrp: "₹ 1,999",
      discount: "35% off"
    },
    {
      image: "https://via.placeholder.com/250x150",
      title: "Deal 3",
      price: "₹ 1,499",
      mrp: "₹ 2,499",
      discount: "40% off"
    },
    {
      image: "https://via.placeholder.com/250x150",
      title: "Deal 4",
      price: "₹ 1,699",
      mrp: "₹ 2,999",
      discount: "43% off"
    },
    {
      image: "https://via.placeholder.com/250x150",
      title: "Deal 5",
      price: "₹ 1,899",
      mrp: "₹ 3,499",
      discount: "46% off"
    }
  ];
  
  let leftButton = document.querySelector(".left-button");
  let rightButton = document.querySelector(".right-button");
  let dealsContainer = document.querySelector(".deals-container");
  
  function renderDealCards() {
    dealCards.forEach((deal) => {
      let dealCard = document.createElement("div");
      dealCard.className = "deal-card";
      dealCard.innerHTML = `
        <img src="${deal.image}" alt="${deal.title}">
        <h3 class="deal-title">${deal.title}</h3>
        <p class="deal-price">${deal.price}</p>
        <p class="deal-mrp">${deal.mrp}</p>
        <p class="discount-label">${deal.discount}</p>
        <button class="deal-button">Buy Now</button>
      `;
      dealsContainer.appendChild(dealCard);
    });
  }
  
  renderDealCards();
  
  leftButton.addEventListener("click", () => {
    dealsContainer.scrollLeft -= 300;
  });
  
  rightButton.addEventListener("click", () => {
    dealsContainer.scrollLeft += 300;
  });