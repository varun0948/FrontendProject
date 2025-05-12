// info.js

const trips = {
  Thailand: {
    title: "Trip to Thailand",
    image: "../Images/thailand.jpg",
    destination: "Bangkok, Thailand",
    price: "$1500",
    description:
      "Explore the vibrant and beautiful city of Bangkok with our all-inclusive tour package. Discover its temples, markets, and street food culture.",
    dayNightInfo: "4 days and 3 nights in Bangkok.",
    tripEssentials:
      "Passport, Travel insurance, Thai Baht (THB), Camera, Comfortable clothing.",
    transportation:
      "Round trip flights, local transport, and guided tours included.",
    accommodation: "4-star hotel with breakfast.",
    itinerary:
      "Day 1: Arrival in Bangkok, Day 2: Grand Palace & Wat Pho, Day 3: Chatuchak Market & Chao Phraya River Cruise, Day 4: Free time and Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo:
      "Wear light, comfortable clothes as Bangkok can get very hot. Don't forget sunscreen!",
  },
  Edinburgh: {
    title: "Trip to Edinburgh",
    image: "../Images/p10.jpg",
    destination: "Edinburgh, Scotland",
    price: "$1800",
    description:
      "Discover the charming city of Edinburgh, Scotland, with a guided tour of its historical landmarks.",
    dayNightInfo: "5 days and 4 nights in Edinburgh.",
    tripEssentials: "Passport, Travel insurance, GBP, Camera, Umbrella.",
    transportation: "Round trip flights and local transport included.",
    accommodation: "3-star hotel with breakfast.",
    itinerary:
      "Day 1: Arrival, Day 2: Edinburgh Castle & Royal Mile, Day 3: Arthur's Seat hike, Day 4: Holyrood Palace & Whisky tasting, Day 5: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo: "Bring a raincoat and comfortable walking shoes.",
  },
  japan: {
    title: "Trip to Japan",
    image: "../Images/p7.jpg",
    destination: "Tokyo, Japan",
    price: "$2200",
    description:
      "Experience the vibrant culture and history of Tokyo, Japan, from ancient temples to modern skyscrapers.",
    dayNightInfo: "7 days and 6 nights in Tokyo.",
    tripEssentials: "Passport, Travel insurance, Yen, Camera, Power adapter.",
    transportation:
      "Round trip flights, local transport, and Shinkansen (bullet train).",
    accommodation: "4-star hotel with breakfast.",
    itinerary:
      "Day 1: Arrival, Day 2: Senso-ji Temple & Asakusa, Day 3: Akihabara & Shibuya, Day 4: Mount Fuji day trip, Day 5: Meiji Shrine & Harajuku, Day 6: Shopping & Tokyo Tower, Day 7: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo: "Dress modestly when visiting temples.",
  },
  Australia: {
    title: "Trip to Australia",
    image: "../Images/australia.jpg",
    destination: "Sydney, Australia",
    price: "$2500",
    description:
      "A sun-soaked adventure in Sydney, from iconic landmarks like the Sydney Opera House to the beautiful beaches.",
    dayNightInfo: "6 days and 5 nights in Sydney.",
    tripEssentials: "Passport, Travel insurance, AUD, Sunscreen, Camera.",
    transportation: "Round trip flights and local transport included.",
    accommodation: "5-star hotel with breakfast.",
    itinerary:
      "Day 1: Arrival, Day 2: Sydney Opera House & Harbour Bridge, Day 3: Bondi Beach & Coogee Coastal Walk, Day 4: Blue Mountains day trip, Day 5: Taronga Zoo & Darling Harbour, Day 6: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo: "Bring a hat and sunglasses for sun protection.",
  },
  Vietnam: {
    title: "Trip to Vietnam",
    image: "../Images/p11.jpg",
    destination: "Hanoi & Halong Bay, Vietnam",
    price: "$1400",
    description:
      "Explore the stunning landscapes of Halong Bay and the historic charm of Hanoi, Vietnam.",
    dayNightInfo: "5 days and 4 nights in Hanoi & Halong Bay.",
    tripEssentials:
      "Passport, Travel insurance, VND (Vietnamese Dong), Camera.",
    transportation: "Round trip flights and local transport included.",
    accommodation: "3-star hotels with breakfast.",
    itinerary:
      "Day 1: Arrival in Hanoi, Day 2: Old Quarter & Hoan Kiem Lake, Day 3: Halong Bay cruise, Day 4: Water Puppetry & Temple of Literature, Day 5: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo: "Pack light and bring a hat for sun protection.",
  },
  London: {
    title: "Trip to London",
    image: "../Images/p13.jpg",
    destination: "London, England",
    price: "$2100",
    description:
      "Explore London's iconic landmarks, from the Tower of London to Buckingham Palace, on this 6-day adventure.",
    dayNightInfo: "6 days and 5 nights in London.",
    tripEssentials: "Passport, Travel insurance, GBP, Camera, Power adapter.",
    transportation: "Round trip flights and Oyster card for local transport.",
    accommodation: "4-star hotel with breakfast.",
    itinerary:
      "Day 1: Arrival, Day 2: Tower of London & Tower Bridge, Day 3: Buckingham Palace & West End Show, Day 4: Natural History Museum & Hyde Park, Day 5: Thames River Cruise & London Eye, Day 6: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo: "Bring a raincoat and comfortable walking shoes.",
  },
  Switerzland: {
    title: "Trip to Switzerland",
    image: "../Images/p6.jpg",
    destination: "Zurich & Lucerne, Switzerland",
    price: "$2700",
    description:
      "Experience the Swiss Alps, scenic lakes, and charming cities of Zurich and Lucerne in this unforgettable tour.",
    dayNightInfo: "7 days and 6 nights in Zurich & Lucerne.",
    tripEssentials:
      "Passport, Travel insurance, CHF (Swiss Franc), Camera, Layered clothing.",
    transportation: "Round trip flights, trains, and boat trips included.",
    accommodation: "4-star hotels with breakfast.",
    itinerary:
      "Day 1: Arrival in Zurich, Day 2: Old Town Zurich & Lake Zurich, Day 3: Lucerne city tour, Day 4: Mount Pilatus & Chapel Bridge, Day 5: Glacier Express train ride, Day 6: Bern day trip, Day 7: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo:
      "Dress in layers as the weather can change rapidly in the Alps.",
  },
  Spain: {
    title: "Trip to Spain",
    image: "../Images/spain.jpg",
    destination: "Madrid, Spain",
    price: "$2000",
    description:
      "Discover the rich culture, architecture, and vibrant lifestyle of Spain. Explore Madrid's art museums, beautiful parks, and stunning architecture.",
    dayNightInfo: "7 days and 6 nights in Madrid.",
    tripEssentials:
      "Passport, Travel insurance, Euros (EUR), Camera, Comfortable walking shoes.",
    transportation:
      "Round trip flights, public transport, and guided tours included.",
    accommodation: "4-star hotels with breakfast.",
    itinerary:
      "Day 1: Arrival in Madrid, Day 2: Prado Museum & Royal Palace, Day 3: Retiro Park & Gran Via, Day 4: Toledo day trip, Day 5: Santiago Bernabéu Stadium & Flamenco show, Day 6: Segovia day trip, Day 7: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo:
      "Make sure to wear comfortable shoes for exploring the city on foot.",
  },
  Dubai: {
    title: "Trip to Dubai",
    image: "../Images/dubai.jpg",
    destination: "Dubai, UAE",
    price: "$2500",
    description:
      "Experience the luxury and opulence of Dubai. Visit its world-famous skyscrapers, shopping malls, and desert safaris.",
    dayNightInfo: "5 days and 4 nights in Dubai.",
    tripEssentials:
      "Passport, Travel insurance, AED (Emirati Dirham), Camera, Modest clothing for visiting mosques.",
    transportation:
      "Round trip flights, private transfers, and desert safari included.",
    accommodation: "5-star hotels with breakfast.",
    itinerary:
      "Day 1: Arrival in Dubai, Day 2: Burj Khalifa & Dubai Mall, Day 3: Desert safari, Day 4: Dubai Marina & Jumeirah Beach, Day 5: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo:
      "Dubai can get very hot in summer, so be sure to stay hydrated and wear sunscreen.",
  },

  SriLanka: {
    title: "Trip to Sri Lanka",
    image: "../Images/sriLanka.jpg",
    destination: "Colombo & Kandy, Sri Lanka",
    price: "$2200",
    description:
      "Explore the tropical beauty, ancient temples, and rich cultural heritage of Sri Lanka. Enjoy scenic beaches, tea plantations, and wildlife safaris.",
    dayNightInfo: "8 days and 7 nights in Sri Lanka.",
    tripEssentials:
      "Passport, Travel insurance, LKR (Sri Lankan Rupee), Camera, Lightweight clothing.",
    transportation:
      "Round trip flights, private transfers, and jeep safaris included.",
    accommodation: "3-star hotels with breakfast.",
    itinerary:
      "Day 1: Arrival in Colombo, Day 2: Colombo city tour, Day 3: Kandy Temple of the Tooth, Day 4: Nuwara Eliya Tea plantations, Day 5: Yala National Park safari, Day 6: Bentota beach day, Day 7: Galle day trip, Day 8: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo:
      "Carry insect repellent for visits to rural areas and national parks.",
  },

  Kazakhstan: {
    title: "Trip to Kazakhstan",
    image: "../Images/kazakstan.jpg",
    destination: "Almaty & Astana, Kazakhstan",
    price: "$2400",
    description:
      "Discover Kazakhstan's diverse landscapes, from its majestic mountains to the modern architecture of Astana. Explore Almaty's history, parks, and local culture.",
    dayNightInfo: "7 days and 6 nights in Kazakhstan.",
    tripEssentials:
      "Passport, Travel insurance, KZT (Kazakhstani Tenge), Camera, Warm clothing.",
    transportation:
      "Round trip flights, internal flights, and transfers included.",
    accommodation: "4-star hotels with breakfast.",
    itinerary:
      "Day 1: Arrival in Almaty, Day 2: Almaty city tour, Day 3: Medeu Ice Skating & Big Almaty Lake, Day 4: Flight to Astana, Day 5: Astana city tour, Day 6: Khan Shatyr & Baiterek Tower, Day 7: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo:
      "Bring a warm jacket, especially for visits to the mountains.",
  },

  SouthKorea: {
    title: "Trip to South Korea",
    image: "../Images/p18.jpg",
    destination: "Seoul & Jeju Island, South Korea",
    price: "$2300",
    description:
      "Explore the dynamic blend of tradition and modernity in South Korea. Visit Seoul's palaces, shopping districts, and the beautiful Jeju Island.",
    dayNightInfo: "9 days and 8 nights in South Korea.",
    tripEssentials:
      "Passport, Travel insurance, KRW (South Korean Won), Camera, Comfortable shoes.",
    transportation:
      "Round trip flights, internal flights, and guided tours included.",
    accommodation: "4-star hotels with breakfast.",
    itinerary:
      "Day 1: Arrival in Seoul, Day 2: Gyeongbokgung Palace & Bukchon Hanok Village, Day 3: Namsan Seoul Tower & Myeongdong shopping, Day 4: DMZ tour, Day 5: Flight to Jeju Island, Day 6: Jeju sightseeing & hikes, Day 7: Seongsan Ilchulbong & beaches, Day 8: Flight back to Seoul, Day 9: Departure.",
    contactInfo: "support@travelco.com | +1-234-567-8910",
    additionalInfo:
      "Jeju Island has beautiful beaches, but temperatures can be cooler, so pack accordingly.",
  },
};

window.onload = function () {
  const tripGot = new URLSearchParams(window.location.search).get("trip");
  if (tripGot && trips[tripGot]) {
    const trip = trips[tripGot];

    document.getElementById("trip-title").textContent = trip.title;
    document.getElementById("trip-image").src = trip.image;
    document.getElementById("trip-destination").textContent = trip.destination;
    document.getElementById("trip-price").textContent = trip.price;
    document.getElementById("trip-description").textContent = trip.description;

    document.getElementById("day-night-info").textContent = trip.dayNightInfo;
    document.getElementById("trip-essentials").textContent =
      trip.tripEssentials;
    document.getElementById("transportation").textContent = trip.transportation;
    document.getElementById("accommodation").textContent = trip.accommodation;
    document.getElementById("itinerary").textContent = trip.itinerary;
    document.getElementById("contact-info").textContent = trip.contactInfo;
    document.getElementById("additional-info").textContent =
      trip.additionalInfo;
  } else {
    document.querySelector(".trip-container").innerHTML =
      "<p>Trip not found!</p>";
  }
};
