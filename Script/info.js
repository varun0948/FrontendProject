document.addEventListener("DOMContentLoaded", () => {
  const trips = {
    europe: {
      title: "Explore Europe",
      subtitle: "7-Day journey through Europe's iconic cities and landscapes.",
      image: "../Images/europe/europe.jpg",
      images: [
        "../Images/europe/europe1.jpg",
        "../Images/europe/europe2.jpg",
        "../Images/europe/europe3.jpg",
        "../Images/europe/europe4.jpg",
        "../Images/europe/europe5.jpg",
      ],
      button: "../Files/booking.html?trip=europe",
      description:
        "Experience the rich history, diverse cultures, and stunning architecture of Europe's top destinations including Paris, Rome, and Barcelona. Visit iconic landmarks, savor world-class cuisine, and immerse yourself in local traditions.",
      itinerary: [
        "Day 1: Arrival in Paris and welcome dinner at a local bistro.",
        "Day 2: Full day city tour of Paris - Eiffel Tower, Louvre Museum, and Seine River cruise.",
        "Day 3: Travel by train to Rome, Italy, with evening stroll in Trastevere.",
        "Day 4: Explore ancient Rome - Colosseum, Roman Forum, and Vatican City.",
        "Day 5: Flight to Barcelona and tapas tasting tour.",
        "Day 6: Discover Gaudí’s masterpieces: Sagrada Familia, Park Güell, and Gothic Quarter.",
        "Day 7: Departure from Barcelona with memories to last a lifetime.",
      ],
      price: "€2,500 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, guided city tours, breakfast daily, local transfers, and museum entry fees.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Emily R",
          comment:
            "An unforgettable experience across Europe's most beautiful cities.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "Michael T",
          comment: "Well-organized and packed with amazing sights.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Scandinavian Adventure",
        "Eastern Europe Explorer",
        "Mediterranean Cruise",
      ],
    },
    switerzland: {
      title: "Discover Switzerland",
      subtitle: "Experience Alpine beauty and Swiss charm.",
      image: "/Images/switzerland.jpg",
      images: [
        "https://images.pexels.com/photos/2779863/pexels-photo-2779863.jpeg?cs=srgb&dl=pexels-nextvoyage-2779863.jpg&fm=jpg",
        "https://c.wallhere.com/photos/cd/06/Switzerland_Zurich_morning_city_river_sunrise_reflection_sky-2258592.jpg!d",
        "https://wallpapercave.com/wp/wp5101628.jpg",
        "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/452544/pexels-photo-452544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],

      description:
        "Enjoy pristine lakes, towering Alps, and quaint villages in Switzerland. Hike scenic trails, taste world-famous Swiss chocolates, and explore cosmopolitan cities like Zurich and Geneva.",
      itinerary: [
        "Day 1: Arrival in Zurich and city sightseeing.",
        "Day 2: Explore Lucerne and Lake Lucerne cruise.",
        "Day 3: Scenic train ride to Interlaken and mountain activities.",
        "Day 4: Visit Jungfraujoch - Top of Europe.",
        "Day 5: Discover Bern’s Old Town and museums.",
        "Day 6: Day trip to Montreux and Chillon Castle.",
        "Day 7: Departure from Geneva after a leisurely morning.",
      ],
      price: "CHF 3,200 per person",
      inclusions:
        "Flights, 4-star hotels, Swiss Travel Pass, guided tours, breakfast included.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Anna L",
          comment:
            "Breathtaking views and amazing hospitality throughout the trip.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "John D",
          comment: "Loved the scenic train rides and mountain excursions.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Switzerland&t=&z=7&ie=UTF8&iwloc=&output=embed",
      related: [
        "Austria Alps Tour",
        "Italy Northern Lakes",
        "France Alpine Escape",
      ],
    },
    dubai: {
      title: "Discover Dubai",
      subtitle: "5-Day luxury escape in the heart of the UAE.",
      image: "../Images/dubai1.jpg",
      images: [
        "../Images/dubai/dubai1.jpg",
        "../Images/dubai/dubai2.jpg",
        "../Images/dubai/dubai3.jpg",
        "../Images/dubai/dubai4.jpg",
        "../Images/dubai/dubai5.jpg",
      ],
      button: "../Files/booking.html?trip=dubai",
      description:
        "Dive into a world of luxury and innovation in Dubai, where modern skyscrapers meet desert adventures. Explore iconic landmarks, shop in grand malls, and experience the vibrant culture of the Middle East.",
      itinerary: [
        "Day 1: Arrival in Dubai and evening Dhow cruise with dinner.",
        "Day 2: City tour - Burj Khalifa, Dubai Mall, and Dubai Fountain show.",
        "Day 3: Desert safari with dune bashing, camel rides, and BBQ dinner.",
        "Day 4: Visit to Miracle Garden, Dubai Frame, and shopping at Souk Madinat Jumeirah.",
        "Day 5: Departure from Dubai.",
      ],
      price: "$1,800 per person",
      inclusions:
        "Round-trip flights, 4-star hotel, daily breakfast, guided tours, desert safari experience, and all transfers.",
      reviews: [
        {
          rating: "⭐ 4.9/5",
          user: "Arjun S",
          comment:
            "Dubai exceeded all expectations – a perfect blend of luxury and culture.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Lena M",
          comment: "The desert safari was a thrilling highlight of the trip!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Dubai&t=&z=10&ie=UTF8&iwloc=&output=embed",
      related: [
        "Abu Dhabi Getaway",
        "Qatar Cultural Tour",
        "Middle East Luxury Escape",
      ],
    },
    maldives: {
      title: "Maldives Paradise Escape",
      subtitle: "6-Day tropical getaway to pristine beaches and coral islands.",
      image: "../Images/maldives.jpg",
      images: [
        "../Images/maldives/maldives1.jpg",
        "../Images/maldives/maldives2.jpg",
        "../Images/maldives/maldives3.jpg",
        "../Images/maldives/maldives4.jpg",
        "../Images/maldives/maldives5.jpg",
      ],
      button: "../Files/booking.html?trip=maldives",
      description:
        "Relax on the white sandy beaches of the Maldives, swim in turquoise waters, and stay in luxurious overwater villas. Perfect for honeymooners and beach lovers seeking tranquility and adventure.",
      itinerary: [
        "Day 1: Arrival in Malé and speedboat transfer to the resort.",
        "Day 2: Leisure day at the beach and spa treatments.",
        "Day 3: Snorkeling excursion and island hopping tour.",
        "Day 4: Sunset dolphin cruise and private candlelight dinner.",
        "Day 5: Water sports - kayaking, paddleboarding, or scuba diving.",
        "Day 6: Departure with unforgettable island memories.",
      ],
      price: "$3,200 per person",
      inclusions:
        "Round-trip flights, luxury overwater villa, daily breakfast and dinner, excursions, airport transfers, and taxes.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Sophia G",
          comment: "A dream vacation! The water villa experience is unmatched.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Rahul N",
          comment: "Peaceful, stunning views, and perfect service throughout.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Maldives&t=&z=6&ie=UTF8&iwloc=&output=embed",
      related: [
        "Bali Beach Retreat",
        "Seychelles Island Tour",
        "Fiji Honeymoon Package",
      ],
    },
    singapore: {
      title: "Vibrant Singapore Tour",
      subtitle: "4-Day city adventure in the heart of Southeast Asia.",
      image: "../Images/singapore.jpg",
      images: [
        "../Images/singapore/singapore1.jpg",
        "../Images/singapore/singapore2.jpg",
        "../Images/singapore/singapore3.jpg",
        "../Images/singapore/singapore4.jpg",
        "../Images/singapore/singapore5.jpg",
      ],
      button: "../Files/booking.html?trip=singapore",
      description:
        "Explore the bustling streets, futuristic gardens, and multicultural neighborhoods of Singapore. A perfect blend of tradition and innovation, this tour is ideal for families, couples, and solo travelers.",
      itinerary: [
        "Day 1: Arrival and evening at Marina Bay Sands SkyPark and Spectra Light Show.",
        "Day 2: Full day city tour - Merlion Park, Chinatown, Little India, and Gardens by the Bay.",
        "Day 3: Sentosa Island adventure including Universal Studios and SEA Aquarium.",
        "Day 4: Free time for shopping and departure.",
      ],
      price: "$1,600 per person",
      inclusions:
        "Round-trip airfare, 4-star hotel, daily breakfast, guided city and island tours, attraction tickets, and local transfers.",
      reviews: [
        {
          rating: "⭐ 4.8/5",
          user: "Nathan W",
          comment:
            "Singapore is amazing! So clean, modern, and packed with fun.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "Aisha K",
          comment: "Loved every moment – especially the Gardens by the Bay!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Singapore&t=&z=11&ie=UTF8&iwloc=&output=embed",
      related: ["Malaysia Explorer", "Thailand Discovery", "Hong Kong Getaway"],
    },
  };
  const params = new URLSearchParams(window.location.search);
  const tripKey = params.get("trip");
  const trip = trips[tripKey];

  if (!trip) {
    document.getElementById(
      "tripContent"
    ).innerHTML = `<h2>Trip not found!</h2>`;
    return;
  }

  const heroSection = `
    <header class="hero" id="hero" style="background-image: url('${trip.image}')">
      <div class= "overlay"> 
        <h1>${trip.title}</h1>
        <p>${trip.subtitle}</p>
      </div>
    </header>
  `;

  const gallerySection = `
    <div class="gallery" id="gallery">
      ${trip.images
        .map(
          (img) =>
            `<img src="${img}" alt="Gallery image" class="gallery-img" />`
        )
        .join("")}
    </div>
  `;

  const otherContent = `
    <section>
      <h2>Why You'll Love This Trip</h2>
      <p>${trip.description}</p>
    </section>

    
    <section>
    <h2>Itinerary</h2>
    <div class="itinerary-day">
    ${trip.itinerary.map((day) => `<strong>${day}</strong>`).join("")}
    </div>
    </section>
    

    <section>
      <div class="price-box">
        <h2>${trip.price}</h2>
        <p>${trip.inclusions}</p>
        <button class="book-btn" id="bookNowBtn">Book Now</button>
      </div>
    </section>

    <section>
      <h2>What Our Travelers Say</h2>
      ${trip.reviews
        .map(
          (r) => `
        <div class="review">
          <strong>${r.rating} – ${r.user}:</strong> ${r.comment}
        </div>
      `
        )
        .join("")}
    </section>

    <section>
      <h2>Explore the Area</h2>
      <iframe src="${trip.mapEmbed}"></iframe>
    </section>

    <section>
      <h2>You Might Also Like</h2>
      <div class="related-destinations">
        ${trip.related
          .map((name) => `<div class="related-card">${name}</div>`)
          .join("")}
      </div>
    </section>

    <section class="social-sharing">
      <h2>Share This Trip</h2>
      <button>Facebook</button>
      <button>Instagram</button>
      <button>Twitter</button>
      <button>Copy Link</button>
    </section>
  `;

  document.getElementById("tripContent").innerHTML =
    heroSection + gallerySection + otherContent;

  // Add click event to gallery images to change hero background
  const hero = document.getElementById("hero");
  document.getElementById("gallery").addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("gallery-img")) {
      hero.style.backgroundImage = `url('${e.target.src}')`;
    }
  });
  const bookNowBtn = document.getElementById("bookNowBtn");
  const bookingLink = "../Files/booking.html";
  bookNowBtn.addEventListener("click", function () {
    window.location.href = bookingLink;
  });
});
