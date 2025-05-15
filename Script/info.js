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

    switzerland: {
      title: "Discover Switzerland",
      subtitle: "Experience Alpine beauty and Swiss charm.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494522344529-bc230ed4f1e8?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
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
      title: "Dynamic Dubai",
      subtitle: "The city of the future with desert charm.",
      image:
        "https://images.unsplash.com/photo-1505765055940-90b13f6e3c1a?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1486308510493-cbfa3f04e84d?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Discover the luxurious city of Dubai with its futuristic architecture, desert safaris, and vibrant nightlife. Experience shopping, entertainment, and cultural heritage all in one place.",
      itinerary: [
        "Day 1: Arrival and visit to Dubai Mall & Fountain Show.",
        "Day 2: Burj Khalifa observation deck and Souk Al Bahar.",
        "Day 3: Desert Safari with BBQ dinner and camel rides.",
        "Day 4: Explore Palm Jumeirah and Atlantis Aquaventure Waterpark.",
        "Day 5: Visit Dubai Marina and Dhow cruise dinner.",
        "Day 6: Cultural tour of Al Fahidi Historical District and Dubai Museum.",
        "Day 7: Relax at JBR beach and departure.",
      ],
      price: "AED 7,000 per person",
      inclusions:
        "Flights, 5-star hotels, desert safari, breakfast, and city tours.",
      reviews: [
        {
          rating: "⭐ 4.9/5",
          user: "Sara K",
          comment: "Luxury and adventure combined perfectly in Dubai.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "Ahmed M",
          comment: "Amazing experience with desert safari and city views.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Dubai&t=&z=10&ie=UTF8&iwloc=&output=embed",
      related: ["Abu Dhabi Tour", "Oman Desert Adventure", "Qatar Highlights"],
    },

    maldives: {
      title: "Maldives Paradise",
      subtitle: "Tropical island luxury and underwater wonders.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1494522344529-bc230ed4f1e8?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Escape to the Maldives with pristine white sandy beaches, crystal clear lagoons, and vibrant coral reefs. Enjoy water sports, luxury overwater villas, and world-class hospitality.",
      itinerary: [
        "Day 1: Arrival and check-in to overwater villa.",
        "Day 2: Snorkeling and scuba diving adventure.",
        "Day 3: Relax on the beach and spa day.",
        "Day 4: Sunset dolphin cruise.",
        "Day 5: Visit local islands and markets.",
        "Day 6: Water sports and beach volleyball.",
        "Day 7: Departure after a leisurely breakfast.",
      ],
      price: "USD 4,500 per person",
      inclusions:
        "Flights, luxury resort stay, water activities, breakfast and dinner.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Lucy P",
          comment: "The ultimate tropical paradise getaway.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Mark S",
          comment: "Breathtaking views and amazing underwater life.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Maldives&t=&z=9&ie=UTF8&iwloc=&output=embed",
      related: [
        "Seychelles Escape",
        "Bali Beach Holiday",
        "Mauritius Adventure",
      ],
    },

    singapore: {
      title: "Singapore Highlights",
      subtitle: "Modern city meets tropical paradise.",
      image:
        "https://images.unsplash.com/photo-1517959105823-0386156b578a?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Explore the vibrant city-state of Singapore with its iconic Marina Bay Sands, Gardens by the Bay, and cultural diversity. Indulge in world-class cuisine and shopping.",
      itinerary: [
        "Day 1: Arrival and Marina Bay Sands SkyPark visit.",
        "Day 2: Explore Gardens by the Bay and Cloud Forest.",
        "Day 3: Visit Sentosa Island – Universal Studios and beaches.",
        "Day 4: Chinatown and Little India cultural tours.",
        "Day 5: Shopping on Orchard Road and local markets.",
        "Day 6: Singapore Zoo and Night Safari.",
        "Day 7: Departure with last-minute sightseeing.",
      ],
      price: "SGD 3,000 per person",
      inclusions:
        "Flights, hotel stay, attraction tickets, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Amy W",
          comment: "A perfect blend of urban life and nature.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "David C",
          comment: "Loved the cultural diversity and delicious food.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Singapore&t=&z=12&ie=UTF8&iwloc=&output=embed",
      related: [
        "Malaysia Highlights",
        "Thailand Adventure",
        "Indonesia Getaway",
      ],
    },

    newzealand: {
      title: "New Zealand Adventure",
      subtitle: "Explore stunning landscapes and Maori culture.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Discover the breathtaking fjords, mountains, and beaches of New Zealand. Experience Maori culture, adventure sports, and vibrant cities like Auckland and Wellington.",
      itinerary: [
        "Day 1: Arrival in Auckland and city tour.",
        "Day 2: Explore Rotorua – geothermal parks and Maori culture.",
        "Day 3: Visit Hobbiton Movie Set and Waitomo Glowworm Caves.",
        "Day 4: Travel to Queenstown and adventure activities.",
        "Day 5: Milford Sound cruise and scenic hikes.",
        "Day 6: Explore Wellington – Te Papa Museum and waterfront.",
        "Day 7: Departure with memories of stunning landscapes.",
      ],
      price: "NZD 4,200 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Chris M",
          comment: "Nature and adventure perfectly combined.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Laura K",
          comment: "Beautiful landscapes and rich cultural experiences.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=New%20Zealand&t=&z=6&ie=UTF8&iwloc=&output=embed",
      related: ["Australia Outback", "Fiji Islands", "Tahiti Escape"],
    },

    bhutan: {
      title: "Bhutan Spiritual Journey",
      subtitle: "Experience the Land of Happiness and Himalayan culture.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Explore Bhutan’s serene monasteries, stunning Himalayan landscapes, and unique cultural heritage. Visit ancient dzongs, participate in festivals, and experience local hospitality.",
      itinerary: [
        "Day 1: Arrival in Paro and visit Rinpung Dzong.",
        "Day 2: Hike to Tiger’s Nest Monastery (Taktsang).",
        "Day 3: Explore Thimphu – Buddha Dordenma and local markets.",
        "Day 4: Visit Punakha Dzong and suspension bridge.",
        "Day 5: Cultural immersion in local villages.",
        "Day 6: Attend traditional Bhutanese festival (if available).",
        "Day 7: Departure from Paro with spiritual memories.",
      ],
      price: "USD 3,800 per person",
      inclusions:
        "Flights, accommodation, all transfers, local guide, meals as per itinerary.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Anita G",
          comment: "A peaceful and deeply spiritual experience.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Raj P",
          comment: "Bhutan’s culture and landscapes are breathtaking.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Bhutan&t=&z=7&ie=UTF8&iwloc=&output=embed",
      related: [
        "Nepal Trekking",
        "Tibet Cultural Tour",
        "India Himalayan Adventure",
      ],
    },

    hungary: {
      title: "Hungary Highlights",
      subtitle: "Discover Budapest and beyond.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Explore Hungary’s capital Budapest with its thermal baths, historic architecture, and vibrant nightlife. Visit charming towns like Eger and Lake Balaton for a perfect getaway.",
      itinerary: [
        "Day 1: Arrival in Budapest and evening Danube cruise.",
        "Day 2: Visit Buda Castle, Fisherman’s Bastion, and Matthias Church.",
        "Day 3: Thermal baths experience at Széchenyi Spa.",
        "Day 4: Day trip to Eger wine region.",
        "Day 5: Explore Lake Balaton and Tihany Peninsula.",
        "Day 6: Visit Hungarian National Museum and local markets.",
        "Day 7: Departure after breakfast.",
      ],
      price: "€1,800 per person",
      inclusions:
        "Flights, accommodation, guided tours, entrance fees, breakfast.",
      reviews: [
        {
          rating: "⭐ 4.8/5",
          user: "Eva H",
          comment: "Beautiful architecture and relaxing baths.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "Peter K",
          comment: "Great wine tours and friendly locals.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Hungary&t=&z=7&ie=UTF8&iwloc=&output=embed",
      related: [
        "Austria Classic Tour",
        "Czech Republic Explorer",
        "Slovakia Highlights",
      ],
    },

    mauritius: {
      title: "Mauritius Island Escape",
      subtitle: "Tropical paradise with rich culture and adventure.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Discover Mauritius with its pristine beaches, vibrant coral reefs, and unique cultural mix. Enjoy water sports, hiking, and local cuisine.",
      itinerary: [
        "Day 1: Arrival and beach relaxation.",
        "Day 2: Visit Black River Gorges National Park.",
        "Day 3: Explore Chamarel Seven Colored Earth and waterfalls.",
        "Day 4: Snorkeling and diving at Blue Bay Marine Park.",
        "Day 5: Cultural tour of Port Louis.",
        "Day 6: Catamaran cruise and island hopping.",
        "Day 7: Departure after breakfast.",
      ],
      price: "USD 3,500 per person",
      inclusions:
        "Flights, resort stay, guided tours, meals as specified, transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Jessica L",
          comment: "Perfect blend of nature and culture.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Tom B",
          comment: "Amazing beaches and friendly people.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Mauritius&t=&z=10&ie=UTF8&iwloc=&output=embed",
      related: ["Seychelles Islands", "Maldives Luxury", "Reunion Island"],
    },

    johannesburg: {
      title: "Johannesburg Explorer",
      subtitle: "Urban culture, history, and wildlife adventures.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Experience Johannesburg’s rich history, vibrant culture, and nearby wildlife safaris. Visit museums, local markets, and enjoy South African cuisine.",
      itinerary: [
        "Day 1: Arrival and city tour including Apartheid Museum.",
        "Day 2: Visit Constitution Hill and Maboneng Precinct.",
        "Day 3: Day trip to Pilanesberg National Park Safari.",
        "Day 4: Explore Soweto Township and Mandela House.",
        "Day 5: Visit Johannesburg Botanical Gardens.",
        "Day 6: Local market tours and cultural shows.",
        "Day 7: Departure with rich cultural insights.",
      ],
      price: "ZAR 18,000 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 4.9/5",
          user: "Nina S",
          comment: "A wonderful mix of history and adventure.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "David N",
          comment: "The safari was a highlight of my trip.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Johannesburg&t=&z=10&ie=UTF8&iwloc=&output=embed",
      related: [
        "Cape Town Highlights",
        "Kruger National Park",
        "Namibia Desert Tour",
      ],
    },

    malaysia: {
      title: "Malaysia Experience",
      subtitle: "Diverse cultures, nature, and urban wonders.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Explore Malaysia's multicultural cities, tropical rainforests, and beautiful islands. Enjoy local cuisine, bustling markets, and vibrant festivals.",
      itinerary: [
        "Day 1: Arrival in Kuala Lumpur and city tour.",
        "Day 2: Visit Batu Caves and Petronas Towers.",
        "Day 3: Explore Cameron Highlands tea plantations.",
        "Day 4: Island hopping in Langkawi.",
        "Day 5: Cultural tour of Penang.",
        "Day 6: Rainforest adventure in Taman Negara National Park.",
        "Day 7: Departure after breakfast.",
      ],
      price: "MYR 7,500 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Sarah L",
          comment: "A rich blend of cultures and nature.",
        },
        {
          rating: "⭐ 4.6/5",
          user: "James W",
          comment: "Beautiful landscapes and friendly people.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Malaysia&t=&z=7&ie=UTF8&iwloc=&output=embed",
      related: ["Singapore Highlights", "Indonesia Islands", "Thailand Tour"],
    },

    australia: {
      title: "Australia Outback and Coast",
      subtitle: "Adventure in nature and vibrant cities.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Explore the Australian outback, Great Barrier Reef, and vibrant cities like Sydney and Melbourne. Experience wildlife, beaches, and indigenous culture.",
      itinerary: [
        "Day 1: Arrival in Sydney and city tour.",
        "Day 2: Visit Blue Mountains National Park.",
        "Day 3: Great Barrier Reef snorkeling and diving.",
        "Day 4: Explore Melbourne’s cultural sites.",
        "Day 5: Wildlife spotting at Phillip Island.",
        "Day 6: Aboriginal cultural experience.",
        "Day 7: Departure with unforgettable memories.",
      ],
      price: "AUD 4,500 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Emma J",
          comment: "A perfect mix of adventure and culture.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Liam P",
          comment: "Stunning nature and friendly locals.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Australia&t=&z=5&ie=UTF8&iwloc=&output=embed",
      related: ["New Zealand Adventure", "Fiji Islands", "Tasmania Tour"],
    },

    austria: {
      title: "Austria Classic Tour",
      subtitle: "Music, culture, and alpine beauty.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&fit=crop&w=600&q=80",
      ],
      description:
        "Experience Vienna’s classical music heritage, stunning architecture, and alpine landscapes of Salzburg and Innsbruck.",
      itinerary: [
        "Day 1: Arrival in Vienna and city tour.",
        "Day 2: Visit Schönbrunn Palace and Vienna State Opera.",
        "Day 3: Travel to Salzburg and explore Mozart’s birthplace.",
        "Day 4: Day trip to Hallstatt and lake views.",
        "Day 5: Explore Innsbruck and alpine scenery.",
        "Day 6: Attend classical music concert.",
        "Day 7: Departure with cultural memories.",
      ],
      price: "€2,200 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Anna W",
          comment: "A magical journey through music and mountains.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Mark D",
          comment: "Beautiful cities and great hospitality.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Austria&t=&z=7&ie=UTF8&iwloc=&output=embed",
      related: [
        "Hungary Highlights",
        "Czech Republic Explorer",
        "Germany Classic",
      ],
    },

    finland: {
      title: "Finland Northern Lights",
      subtitle: "Magical aurora borealis and winter activities.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&w=600&q=80",
      ],
      description:
        "Witness the stunning Northern Lights in Lapland and enjoy winter sports like snowmobiling and husky sledding.",
      itinerary: [
        "Day 1: Arrival in Helsinki and city tour.",
        "Day 2: Flight to Rovaniemi – visit Santa Claus Village.",
        "Day 3: Northern Lights tour and photography session.",
        "Day 4: Snowmobile safari and husky sledding.",
        "Day 5: Explore Arctic wildlife and nature parks.",
        "Day 6: Relax in a glass igloo accommodation.",
        "Day 7: Departure with unforgettable memories.",
      ],
      price: "€3,000 per person",
      inclusions:
        "Flights, accommodation, guided tours, winter gear, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Mikaela L",
          comment: "A magical experience under the aurora lights.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Johan S",
          comment: "Winter activities were thrilling and fun.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Finland&t=&z=6&ie=UTF8&iwloc=&output=embed",
      related: ["Norway Fjords", "Sweden Lapland", "Iceland Adventure"],
    },

    norway: {
      title: "Norway Fjords and Mountains",
      subtitle: "Breathtaking fjords and scenic hikes.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&w=600&q=80",
      ],
      description:
        "Explore Norway’s majestic fjords, waterfalls, and mountain trails. Enjoy boat cruises, scenic drives, and charming coastal towns.",
      itinerary: [
        "Day 1: Arrival in Oslo and city sightseeing.",
        "Day 2: Train journey to Bergen – explore Bryggen Wharf.",
        "Day 3: Fjord cruise and waterfall hikes.",
        "Day 4: Visit Flåm and scenic railway.",
        "Day 5: Explore Stavanger and coastal views.",
        "Day 6: Hiking and nature photography.",
        "Day 7: Departure with scenic memories.",
      ],
      price: "NOK 25,000 per person",
      inclusions:
        "Flights, accommodation, guided tours, boat cruises, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Sven L",
          comment: "Stunning nature and peaceful fjords.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Ingrid M",
          comment: "Beautiful hikes and friendly locals.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Norway&t=&z=6&ie=UTF8&iwloc=&output=embed",
      related: [
        "Finland Northern Lights",
        "Sweden Nature Tour",
        "Iceland Adventure",
      ],
    },

    unitedkingdom: {
      title: "United Kingdom Classics",
      subtitle: "History, culture, and iconic landmarks.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&w=600&q=80",
      ],
      description:
        "Explore London, Edinburgh, and other historic cities in the UK. Visit castles, museums, and enjoy traditional British culture.",
      itinerary: [
        "Day 1: Arrival in London and city tour.",
        "Day 2: Visit Tower of London and Buckingham Palace.",
        "Day 3: Travel to Edinburgh and explore the Royal Mile.",
        "Day 4: Visit Edinburgh Castle and Arthur’s Seat.",
        "Day 5: Day trip to the Scottish Highlands.",
        "Day 6: Explore Oxford and Cambridge universities.",
        "Day 7: Departure with lasting memories.",
      ],
      price: "£2,000 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Helen P",
          comment: "Rich history and beautiful architecture.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "James B",
          comment: "A well-organized and fun trip.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=United%20Kingdom&t=&z=6&ie=UTF8&iwloc=&output=embed",
      related: [
        "Ireland Explorer",
        "France Classic Tour",
        "Germany Cultural Trip",
      ],
    },

    france: {
      title: "France Romantic Getaway",
      subtitle: "Parisian charm and countryside beauty.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&w=600&q=80",
      ],
      description:
        "Discover Paris with its iconic Eiffel Tower, art museums, and charming cafes. Explore the French countryside, vineyards, and historic towns.",
      itinerary: [
        "Day 1: Arrival in Paris and city tour.",
        "Day 2: Visit Louvre Museum and Notre Dame.",
        "Day 3: Explore Montmartre and Sacré-Cœur.",
        "Day 4: Day trip to Versailles Palace.",
        "Day 5: Wine tasting in Burgundy region.",
        "Day 6: Explore Loire Valley castles.",
        "Day 7: Departure with romantic memories.",
      ],
      price: "€2,500 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Isabelle C",
          comment: "Romantic and unforgettable experience.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "Pierre L",
          comment: "Beautiful art and delicious food.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=France&t=&z=6&ie=UTF8&iwloc=&output=embed",
      related: [
        "Italy Classic Tour",
        "Spain Culture Trip",
        "United Kingdom Classics",
      ],
    },

    italy: {
      title: "Italy Classic Tour",
      subtitle: "History, art, and culinary delights.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&w=600&q=80",
      ],
      description:
        "Visit Rome, Florence, Venice, and other historic cities. Enjoy art masterpieces, ancient ruins, and authentic Italian cuisine.",
      itinerary: [
        "Day 1: Arrival in Rome and Colosseum visit.",
        "Day 2: Explore Vatican City and museums.",
        "Day 3: Travel to Florence and Uffizi Gallery.",
        "Day 4: Visit Venice and gondola ride.",
        "Day 5: Tuscan countryside wine tour.",
        "Day 6: Cooking class and local market visit.",
        "Day 7: Departure with cultural memories.",
      ],
      price: "€2,800 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Marco G",
          comment: "A perfect blend of history and food.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Laura S",
          comment: "Beautiful cities and friendly guides.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Italy&t=&z=6&ie=UTF8&iwloc=&output=embed",
      related: [
        "France Romantic Getaway",
        "Spain Culture Trip",
        "Austria Classic Tour",
      ],
    },

    spain: {
      title: "Spain Culture Trip",
      subtitle: "Fiestas, architecture, and beaches.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&w=600&q=80",
        "https://images.unsplash.com/photo-1445820130133-c00464d3f9b1?auto=format&w=600&q=80",
      ],
      description:
        "Experience Spain’s lively fiestas, architectural marvels, and sunny beaches. Visit Barcelona, Madrid, and Andalusia regions.",
      itinerary: [
        "Day 1: Arrival in Barcelona and city tour.",
        "Day 2: Visit Sagrada Familia and Park Güell.",
        "Day 3: Travel to Madrid and explore museums.",
        "Day 4: Day trip to Toledo and Segovia.",
        "Day 5: Flamenco show and tapas tasting.",
        "Day 6: Explore Andalusia and Alhambra.",
        "Day 7: Departure with vibrant memories.",
      ],
      price: "€2,300 per person",
      inclusions:
        "Flights, accommodation, guided tours, breakfast, and transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Carlos M",
          comment: "Amazing culture and delicious food.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "Elena R",
          comment: "Fun and lively experience.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Spain&t=&z=6&ie=UTF8&iwloc=&output=embed",
      related: [
        "France Romantic Getaway",
        "Italy Classic Tour",
        "Portugal Explorer",
      ],
    },
  };

  const params = new URLSearchParams(window.location.search);
  const tripKey = params.get("trip") || "europe";
  const trip = trips[tripKey];

  if (!trip) {
    document.getElementById(
      "tripContent"
    ).innerHTML = `<h2>Trip not found!</h2>`;
    return;
  }

  // Hero section with background image and text visible on top
  const heroSection = `
    <header class="hero" id="hero" style="background-image: url('${trip.image}')">
      <div class= "overlay"> 
        <h1>${trip.title}</h1>
        <p>${trip.subtitle}</p>
      </div>
    </header>
  `;

  // Gallery thumbnails (click to change hero bg)
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

  // Other trip info sections
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
        <button class="book-btn">Book Now</button>
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
});
