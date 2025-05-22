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

    rockyMountains: {
      title: "Rocky Mountain Majesty",
      subtitle: "7-Day adventure through the Canadian Rockies.",
      image: "../Images/rockymountains/rockymountains.jpg",
      images: [
        "../Images/rockymountains/rockymountains1.jpg",
        "../Images/rockymountains/rockymountains2.jpg",
        "../Images/rockymountains/rockymountains3.jpg",
        "../Images/rockymountains/rockymountains4.jpg",
        "../Images/rockymountains/rockymountains5.jpg",
      ],
      button: "../Files/booking.html?trip=rockymountains",
      description:
        "Discover the breathtaking beauty of the Canadian Rocky Mountains. Witness majestic peaks, turquoise lakes, and abundant wildlife. Enjoy scenic drives, thrilling outdoor activities, and charming mountain towns.",
      itinerary: [
        "Day 1: Arrival in Calgary, transfer to Banff. Explore Banff town.",
        "Day 2: Banff sightseeing - Tunnel Mountain, Bow Falls, Banff Gondola. Optional hot springs visit.",
        "Day 3: Yoho National Park - Spiral Tunnels, Emerald Lake, Takakkaw Falls. Drive to Lake Louise.",
        "Day 4: Explore Lake Louise and Moraine Lake. Drive along the Icefields Parkway, arrive in Jasper.",
        "Day 5: Columbia Icefield Adventure - Ice Explorer and Skywalk. Visit Athabasca Falls.",
        "Day 6: Jasper National Park exploration - Maligne Canyon, Maligne Lake, Spirit Island. Wildlife viewing.",
        "Day 7: Departure from Jasper, return to Calgary.",
      ],
      price: "€2,800 per person",
      inclusions:
        "Round-trip flights (to Calgary), 4-star accommodations, guided tours, daily breakfast, national park passes, and local transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "David S",
          comment:
            "An incredible journey through stunning landscapes. Every day was a new wonder.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Sarah L",
          comment:
            "Well-planned itinerary and unforgettable views. Highly recommend this trip!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Alaskan Wilderness",
        "Swiss Alps Expedition",
        "Patagonian Trails",
      ],
    },
    austria: {
      title: "Austrian Alpine & Cultural Charm",
      subtitle:
        "7-Day journey through Austria's historic cities and scenic landscapes.",
      image: "../Images/austria/austria.jpg",
      images: [
        "../Images/austria/austria1.jpg",
        "../Images/austria/austria2.jpg",
        "../Images/austria/austria3.jpg",
        "../Images/austria/austria4.jpg",
        "../Images/austria/austria5.jpg",
      ],
      button: "../Files/booking.html?trip=austria",
      description:
        "Immerse yourself in the imperial grandeur of Vienna, the musical heritage of Salzburg, and the breathtaking alpine beauty of Innsbruck. Experience Austria's rich history, stunning architecture, and charming traditions.",
      itinerary: [
        "Day 1: Arrival in Vienna. Explore the Innere Stadt (First District) and enjoy a welcome dinner.",
        "Day 2: Vienna exploration - Schönbrunn Palace, Hofburg Palace, Albertinaplatz. Evening views from Kahlenberg.",
        "Day 3: Train to Salzburg. Self-guided walking tour of Salzburg's Old Town, Mozart's birthplace, Hohensalzburg Fortress.",
        "Day 4: Day trip to Hallstatt, the 'Pearl of Austria'. Explore the village and lake.",
        "Day 5: Train to Innsbruck. Explore Innsbruck's historic center, Golden Roof. Enjoy Tyrolean cuisine.",
        "Day 6: Visit Swarovski Crystal Worlds in Wattens. Explore the gardens and unique crystal displays.",
        "Day 7: Departure from Innsbruck.",
      ],
      price: "€2,200 per person",
      inclusions:
        "Round-trip flights, 3-star accommodations, inter-city train connections, daily breakfast, and city passes.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Anna K",
          comment:
            "A perfect blend of history, culture, and natural beauty. Austria truly captivated us!",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Thomas P",
          comment:
            "Seamless travel and incredible sights. The Hallstatt day trip was a highlight.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Bavarian Alps Tour",
        "Swiss Grand Tour",
        "Czech Republic & Slovakia",
      ],
    },
    finland: {
      title: "Finnish Arctic & Lake District",
      subtitle:
        "7-Day journey through Finland's enchanting landscapes and Arctic wonders.",
      image: "../Images/finland/finland.jpg",
      images: [
        "../Images/finland/finland1.jpg",
        "../Images/finland/finland2.jpg",
        "../Images/finland/finland3.jpg",
        "../Images/finland/finland4.jpg",
        "../Images/finland/finland5.jpg",
      ],
      button: "../Files/booking.html?trip=finland",
      description:
        "Embark on an unforgettable adventure to Finland, from the vibrant capital of Helsinki to the magical Arctic Circle. Experience unique Sami culture, encounter reindeers, and hunt for the Northern Lights.",
      itinerary: [
        "Day 1: Arrival in Helsinki. Explore Helsinki city center. Overnight train to Rovaniemi.",
        "Day 2: Arrival in Rovaniemi. Visit Santa Claus Village and cross the Arctic Circle.",
        "Day 3: Reindeer farm visit and nature experience. Enjoy a traditional Finnish sauna.",
        "Day 4: Drive to Luosto. Amethyst mine adventure and stunning Lapland views.",
        "Day 5: Explore Inari and Sami culture at the Siida Museum.",
        "Day 6: Return to Rovaniemi. Optional husky safari or snowmobile tour (seasonal).",
        "Day 7: Scenic daytime train back to Helsinki for departure.",
      ],
      price: "€2,600 per person",
      inclusions:
        "Round-trip flights, overnight train, 4-star accommodations, guided tours, daily breakfast, and local transfers.",
      reviews: [
        {
          rating: "⭐ 4.9/5",
          user: "Olivia M",
          comment:
            "Magical experience in Lapland! The Northern Lights were breathtaking.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "James H",
          comment:
            "Well-organized trip with unique cultural insights. Loved the reindeer farm.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Norwegian Fjords Expedition",
        "Swedish Wilderness Tour",
        "Icelandic Wonders",
      ],
    },
    norway: {
      title: "Norwegian Fjords & Coastal Wonders",
      subtitle:
        "7-Day self-drive adventure through Norway's majestic fjords and scenic routes.",
      image: "../Images/norway/norway.jpg",
      images: [
        "../Images/norway/norway1.jpg",
        "../Images/norway/norway2.jpg",
        "../Images/norway/norway3.jpg",
        "../Images/norway/norway4.jpg",
        "../Images/norway/norway5.jpg",
      ],
      button: "../Files/booking.html?trip=norway",
      description:
        "Embark on an unforgettable self-drive journey through Norway's iconic fjords, stunning waterfalls, and charming villages. Witness the natural grandeur of Sognefjord and Geirangerfjord, and experience picturesque driving routes.",
      itinerary: [
        "Day 1: Arrival in Bergen. Pick up rental car. Explore Bergen city center and take the Fløibanen funicular.",
        "Day 2: Drive to Voss, Tvindefossen waterfall. Continue to Sogndal, optional Flåmsbana railway ride and Stegastein viewpoint.",
        "Day 3: Drive along Sognefjellet National Tourist Route. Visit Dalsnibba viewpoint, arrive in Geiranger.",
        "Day 4: Explore Geiranger Fjord. Optional kayaking, hiking, or chocolate factory visit. Scenic ferry ride through Geirangerfjord.",
        "Day 5: Drive to Ålesund. Explore the Art Nouveau architecture of Ålesund.",
        "Day 6: Drive to Briksdal Glacier. Hike to the glacier. Continue to Loen, optional Loen Skylift.",
        "Day 7: Departure from Bergen (or continue your journey).",
      ],
      price: "€2,900 per person",
      inclusions:
        "Round-trip flights (to Bergen), rental car, 4-star accommodations, daily breakfast, and ferry fares within the itinerary.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Sophia K",
          comment:
            "The fjords are truly magnificent. A self-drive tour is the best way to experience Norway's beauty.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Liam W",
          comment:
            "Every view was postcard-perfect. The itinerary was well-paced and allowed for ample exploration.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Swedish Lake & Forest Tour",
        "Danish Coastal Discovery",
        "Icelandic Ring Road",
      ],
    },
    italy: {
      title: "Italian Highlights: Rome, Venice & Amalfi",
      subtitle:
        "7-Day journey through Italy's most iconic cities and coastal beauty.",
      image: "../Images/italy/italy.jpg",
      images: [
        "../Images/italy/italy1.jpg",
        "../Images/italy/italy2.jpg",
        "../Images/italy/italy3.jpg",
        "../Images/italy/italy4.jpg",
        "../Images/italy/italy5.jpg",
      ],
      button: "../Files/booking.html?trip=italy",
      description:
        "Experience the romance, history, and culinary delights of Italy. From the ancient wonders of Rome to the romantic canals of Venice and the stunning cliffside villages of the Amalfi Coast, this trip offers an unforgettable Italian escape.",
      itinerary: [
        "Day 1: Arrival in Rome. Explore Trevi Fountain and Rome's vibrant piazzas. Enjoy a traditional Roman dinner.",
        "Day 2: Ancient Rome - Colosseum, Roman Forum, Palatine Hill. Optional Vatican City tour.",
        "Day 3: Vatican City - St. Peter's Basilica, Sistine Chapel, Vatican Museums. Sunset views from Pincian Hill Terrace.",
        "Day 4: High-speed train to Venice. Explore Grand Canal, St. Mark's Square, Doge's Palace. Gondola ride.",
        "Day 5: Day trip to Murano and Burano islands, known for glassblowing and colorful houses.",
        "Day 6: Flight to Naples, transfer to Amalfi Coast. Explore Positano and enjoy coastal views.",
        "Day 7: Explore Amalfi town and Ravello. Departure from Naples.",
      ],
      price: "€2,700 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, inter-city train tickets, daily breakfast, and selected tours.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Chloe B",
          comment:
            "Italy is a dream! This itinerary perfectly captured its essence. Absolutely loved it.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Daniel F",
          comment:
            "From ancient history to coastal charm, every day was a new highlight. The food was incredible!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Tuscan Countryside Escape",
        "Sicilian Shores",
        "Greek Island Hopping",
      ],
    },
    netherlands: {
      title: "Dutch Delights: Canals, Culture & Countryside",
      subtitle:
        "7-Day journey through the Netherlands' charming cities and picturesque landscapes.",
      image: "../Images/netherlands/netherlands.jpg",
      images: [
        "../Images/netherlands/netherlands1.jpg",
        "../Images/netherlands/netherlands2.jpg",
        "../Images/netherlands/netherlands3.jpg",
        "../Images/netherlands/netherlands4.jpg",
        "../Images/netherlands/netherlands5.jpg",
      ],
      button: "../Files/booking.html?trip=netherlands",
      description:
        "Explore the vibrant capital of Amsterdam, iconic windmills, charming historic towns, and innovative architecture. Immerse yourself in Dutch art, history, and a unique way of life.",
      itinerary: [
        "Day 1: Arrival in Amsterdam. Explore Dam Square, Royal Palace, Anne Frank House, and a canal cruise.",
        "Day 2: Amsterdam's Art & Culture - Rijksmuseum, Van Gogh Museum. Explore De Pijp neighborhood.",
        "Day 3: Day trip to Zaanse Schans. See windmills, clog making, and traditional cheese production.",
        "Day 4: Train to Groningen. Explore the Martini Tower and the Wadden Sea (UNESCO site).",
        "Day 5: Train to Utrecht. Climb the Dom Tower, explore the Old Canal. Optional visit to De Haar Castle.",
        "Day 6: Train to Rotterdam. Explore modern architecture: Market Hall, Cube Houses, Delfshaven.",
        "Day 7: Departure from Rotterdam or return to Amsterdam.",
      ],
      price: "€2,300 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, inter-city train tickets, daily breakfast, and selected museum entry fees.",
      reviews: [
        {
          rating: "⭐ 4.8/5",
          user: "Jessica B",
          comment:
            "Amsterdam was wonderful, and the day trips really showed the diversity of the Netherlands.",
        },
        {
          rating: "⭐ 4.6/5",
          user: "Kevin H",
          comment:
            "Smooth travel and unique experiences. Loved cycling around the cities!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Belgian Cities & Breweries",
        "German Fairy Tale Route",
        "French Châteaux Tour",
      ],
    },
    france: {
      title: "French Grandeur: Paris & French Riviera",
      subtitle:
        "7-Day journey through France's romantic capital and glamorous coastline.",
      image: "../Images/france/france.jpg",
      images: [
        "../Images/france/france1.jpg",
        "../Images/france/france2.jpg",
        "../Images/france/france3.jpg",
        "../Images/france/france4.jpg",
        "../Images/france/france5.jpg",
      ],
      button: "../Files/booking.html?trip=france",
      description:
        "Experience the timeless romance of Paris, marvel at iconic landmarks, immerse yourself in art and culture, and then unwind on the dazzling beaches of the French Riviera. A perfect blend of city chic and coastal bliss.",
      itinerary: [
        "Day 1: Arrival in Paris. Eiffel Tower, Louvre Museum, Seine River cruise. Welcome dinner at a bistro.",
        "Day 2: Paris Culture & Art - Musée d'Orsay, Orangerie Museum, Montmartre, Sacré-Cœur Basilica.",
        "Day 3: Day trip to Palace of Versailles. Explore the palace and gardens. Evening stroll in the Latin Quarter.",
        "Day 4: Travel to Nice (French Riviera). Relax on pebble beaches, explore Old Town (Vieux Nice).",
        "Day 5: Day trip to Monaco. Visit Prince's Palace, walk through gardens. Enjoy lunch with marina views.",
        "Day 6: Explore Cannes (Boulevard de la Croisette) and Antibes (Picasso Museum, historic center).",
        "Day 7: Departure from Nice.",
      ],
      price: "€2,650 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, train travel between Paris and Nice, guided city tours, daily breakfast, and selected entry fees.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Charlotte W",
          comment:
            "Paris was magical, and the French Riviera was stunning. A truly unforgettable trip!",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Oliver P",
          comment:
            "From cultural immersion to glamorous beaches, this itinerary had it all. Highly recommend!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Loire Valley Châteaux",
        "Provence Lavender Fields",
        "Spanish Culinary Journey",
      ],
    },
    uk: {
      title: "United Kingdom: Cities & Countryside",
      subtitle:
        "7-Day exploration of the UK's historic cities and picturesque landscapes.",
      image: "../Images/uk/uk.jpg",
      images: [
        "../Images/uk/uk1.jpg",
        "../Images/uk/uk2.jpg",
        "../Images/uk/uk3.jpg",
        "../Images/uk/uk4.jpg",
        "../Images/uk/uk5.jpg",
      ],
      button: "../Files/booking.html?trip=uk",
      description:
        "Discover the vibrant history and culture of the United Kingdom. From the iconic landmarks of London to the ancient Roman baths of Bath and the charming countryside of the Cotswolds, experience the best of England.",
      itinerary: [
        "Day 1: Arrival in London. Explore Westminster Abbey, Big Ben, and the Houses of Parliament.",
        "Day 2: London's Royal & Cultural Hub - Buckingham Palace, Trafalgar Square, British Museum.",
        "Day 3: Day trip to Stonehenge and Bath. Explore the Roman Baths and Bath Abbey.",
        "Day 4: Train to Edinburgh, Scotland. Explore Edinburgh Castle and the Royal Mile.",
        "Day 5: Edinburgh's Historic Charm - Arthur's Seat, Holyrood Palace, National Museum of Scotland.",
        "Day 6: Day trip to the Scottish Highlands or Loch Ness (optional).",
        "Day 7: Departure from Edinburgh.",
      ],
      price: "€2,400 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, inter-city train tickets, guided city tours, daily breakfast, and selected entry fees.",
      reviews: [
        {
          rating: "⭐ 4.7/5",
          user: "Grace M",
          comment:
            "A fantastic overview of England and Scotland! Loved the mix of city and history.",
        },
        {
          rating: "⭐ 4.5/5",
          user: "Henry C",
          comment:
            "Well-planned itinerary, though a bit fast-paced. Still, saw so much in 7 days!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Irish Coast & Castles",
        "Welsh Peaks & Valleys",
        "French Culinary Tour",
      ],
    },
    spain: {
      title: "Spanish Tapestry: Culture & Architecture",
      subtitle:
        "7-Day journey through Spain's vibrant cities and historic wonders.",
      image: "../Images/spain/spain.jpg",
      images: [
        "../Images/spain/spain1.jpg",
        "../Images/spain/spain2.jpg",
        "../Images/spain/spain3.jpg",
        "../Images/spain/spain4.jpg",
        "../Images/spain/spain5.jpg",
      ],
      button: "../Files/booking.html?trip=spain",
      description:
        "Immerse yourself in the passionate culture, stunning architecture, and delectable cuisine of Spain. From the artistic marvels of Barcelona to the historic grandeur of Madrid and the Andalusian charm of Seville and Granada, this trip offers a rich Spanish experience.",
      itinerary: [
        "Day 1: Arrival in Barcelona. Explore Gaudí's masterpieces: Sagrada Família, Park Güell. Evening tapas tour.",
        "Day 2: Barcelona's Charm - Gothic Quarter, Las Ramblas, Barceloneta Beach. Optional Camp Nou visit.",
        "Day 3: High-speed train to Madrid. Explore Plaza Mayor, Puerta del Sol. Visit Museo del Prado.",
        "Day 4: Madrid's Art & History - Museo Reina Sofía (Guernica). Day trip to Toledo.",
        "Day 5: High-speed train to Seville. Explore Barrio de Santa Cruz, Seville Cathedral, Alcázar. Evening flamenco show.",
        "Day 6: High-speed train to Granada. Explore the Alhambra and Generalife Gardens. Enjoy tapas and local wine.",
        "Day 7: High-speed train to Córdoba. Explore Mezquita-Catedral, Alcázar de los Reyes Cristianos. Departure from Seville/Madrid.",
      ],
      price: "€2,550 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, high-speed train tickets, guided city tours, daily breakfast, and selected entry fees.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Isabella G",
          comment:
            "Spain was vibrant and captivating! The itinerary was perfectly paced to see the highlights.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Noah D",
          comment:
            "From Gaudí to the Alhambra, every day was a feast for the eyes and the senses. Highly recommended!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Portuguese Coastal Gems",
        "Moroccan Imperial Cities",
        "Italian Culinary Journey",
      ],
    },

    australia: {
      title: "Australia: Sydney, Reef & Outback",
      subtitle:
        "7-Day journey through Australia's iconic cities, natural wonders, and unique wildlife.",
      image: "../Images/australia/australia.jpg",
      images: [
        "../Images/australia/australia1.jpg",
        "../Images/australia/australia2.jpg",
        "../Images/australia/australia3.jpg",
        "../Images/australia/australia4.jpg",
        "../Images/australia/australia5.jpg",
      ],
      button: "../Files/booking.html?trip=australia",
      description:
        "Experience the vibrant city life of Sydney, snorkel the magnificent Great Barrier Reef, and encounter unique Australian wildlife. This trip offers a taste of Australia's diverse landscapes and iconic attractions.",
      itinerary: [
        "Day 1: Arrival in Sydney. Explore Sydney Opera House, Sydney Harbour Bridge, The Rocks.",
        "Day 2: Day trip to Blue Mountains National Park. Scenic World, Three Sisters rock formation.",
        "Day 3: Sydney exploration - Bondi Beach, ferry to Manly. Enjoy a farewell dinner with harbour views.",
        "Day 4: Flight to Cairns (gateway to the Great Barrier Reef). Transfer to hotel. Explore Cairns Esplanade.",
        "Day 5: Full-day Great Barrier Reef excursion. Snorkeling, diving (optional), and coral viewing from a pontoon.",
        "Day 6: Day trip to Kuranda Village. Scenic Railway up, Skyrail Rainforest Cableway down. Visit Wildlife Park.",
        "Day 7: Departure from Cairns.",
      ],
      price: "€3,500 per person",
      inclusions:
        "Round-trip flights, internal flights, 4-star accommodations, selected guided tours, daily breakfast, and local transfers.",
      reviews: [
        {
          rating: "⭐ 4.9/5",
          user: "Emily R",
          comment:
            "Australia was incredible! The Great Barrier Reef was a lifelong dream come true. Sydney was so vibrant.",
        },
        {
          rating: "⭐ 4.7/5",
          user: "Liam W",
          comment:
            "A fantastic trip with a great balance of city and nature. The Blue Mountains were beautiful.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Tasmanian Wilderness",
        "Melbourne's Laneways & Culture",
        "New Zealand South Island",
      ],
    },
    newZealand: {
      title: "New Zealand: South Island Scenic Wonders",
      subtitle:
        "7-Day adventure through New Zealand's dramatic South Island landscapes.",
      image: "../Images/newzealand/newzealand.jpg",
      images: [
        "../Images/newzealand/newzealand1.jpg",
        "../Images/newzealand/newzealand2.jpg",
        "../Images/newzealand/newzealand3.jpg",
        "../Images/newzealand/newzealand4.jpg",
        "../Images/newzealand/newzealand5.jpg",
      ],
      button: "../Files/booking.html?trip=newzealand",
      description:
        "Embark on an epic journey through the breathtaking South Island of New Zealand. From the adventure capital of Queenstown to the majestic fjords of Milford Sound and the stunning West Coast glaciers, prepare to be amazed.",
      itinerary: [
        "Day 1: Arrival in Queenstown. Explore Queenstown town center, ride the Skyline Gondola for panoramic views.",
        "Day 2: Milford Sound coach tour and cruise. Witness stunning fjords, waterfalls, and wildlife. Overnight in Te Anau.",
        "Day 3: Drive to Franz Josef Glacier. Scenic stops along the way. Optional helicopter flight over the glacier (weather permitting).",
        "Day 4: Explore Franz Josef or Fox Glacier. Optional guided glacier hike or hot pools relaxation.",
        "Day 5: Drive through Arthur's Pass to Christchurch. Scenic train journey (optional). Explore Christchurch city center.",
        "Day 6: Christchurch exploration - Botanic Gardens, Canterbury Museum. Optional whale watching in Kaikoura.",
        "Day 7: Departure from Christchurch.",
      ],
      price: "€3,200 per person",
      inclusions:
        "Round-trip flights (to Queenstown/from Christchurch), 4-star accommodations, internal transfers by coach, guided tours, daily breakfast, and selected entry fees.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Olivia M",
          comment:
            "New Zealand's South Island is unbelievably beautiful. Every day was a new stunning landscape.",
        },
        {
          rating: "⭐ 4.8/5",
          user: "Ethan S",
          comment:
            "The Milford Sound cruise was a highlight! Well-organized trip, saw so much of this incredible country.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "New Zealand North Island Explorer",
        "Australian Great Ocean Road",
        "Fiji Island Hopping",
      ],
    },
    bhutan: {
      title: "Bhutan: Kingdom of Happiness",
      subtitle:
        "7-Day spiritual and cultural journey through the Kingdom of Bhutan.",
      image: "../Images/bhutan/bhutan.jpg",
      images: [
        "../Images/bhutan/bhutan1.jpg",
        "../Images/bhutan/bhutan2.jpg",
        "../Images/bhutan/bhutan3.jpg",
        "../Images/bhutan/bhutan4.jpg",
        "../Images/bhutan/bhutan5.jpg",
      ],
      button: "../Files/booking.html?trip=bhutan",
      description:
        "Discover the mystical Kingdom of Bhutan, a land of ancient monasteries, stunning Himalayan landscapes, and profound spirituality. Experience unique traditions and the famed Gross National Happiness philosophy.",
      itinerary: [
        "Day 1: Arrival in Paro, transfer to Thimphu. Explore Thimphu city, visit Buddha Dordenma.",
        "Day 2: Thimphu sightseeing - Tashichho Dzong, National Memorial Chorten. Explore local markets.",
        "Day 3: Drive to Punakha via Dochula Pass. Visit Punakha Dzong and Chimi Lhakhang.",
        "Day 4: Explore Punakha Valley. Optional hike to the Punakha Suspension Bridge.",
        "Day 5: Return to Paro. Explore Paro town, visit Rinpung Dzong.",
        "Day 6: Hike to Tiger's Nest Monastery (Paro Taktsang). Optional hot stone bath in the evening.",
        "Day 7: Departure from Paro.",
      ],
      price: "€3,200 per person",
      inclusions:
        "Round-trip flights (to Paro), 3-star accommodations, all internal transfers, guided tours, daily meals (full board), and Bhutan Visa fee.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Maya R",
          comment:
            "Bhutan was an incredible spiritual journey. The Tiger's Nest hike was challenging but rewarding.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Arjun S",
          comment:
            "A truly unique cultural experience. The landscapes were breathtaking and the people welcoming.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Nepal Himalaya Trek",
        "Tibet Cultural Journey",
        "Indian Golden Triangle",
      ],
    },
    hungary: {
      title: "Hungarian Charms: Budapest & Beyond",
      subtitle:
        "7-Day journey through Hungary's vibrant capital and historic towns.",
      image: "../Images/hungary/hungary.jpg",
      images: [
        "../Images/hungary/hungary1.jpg",
        "../Images/hungary/hungary2.jpg",
        "../Images/hungary/hungary3.jpg",
        "../Images/hungary/hungary4.jpg",
        "../Images/hungary/hungary5.jpg",
      ],
      button: "../Files/booking.html?trip=hungary",
      description:
        "Discover the magnificent architecture and rich history of Budapest, the 'Pearl of the Danube'. Explore thermal baths, historic castles, and vibrant markets, and venture into the charming Hungarian countryside.",
      itinerary: [
        "Day 1: Arrival in Budapest. Explore Central Market Hall, Buda Castle. Evening at a Ruin Pub.",
        "Day 2: Budapest exploration - Parliament Building, Fisherman's Bastion, Matthias Church. Enjoy Hungarian cuisine.",
        "Day 3: Relax at Széchenyi Thermal Bath. Explore Heroes' Square and City Park. Evening Danube River cruise.",
        "Day 4: Day trip to Szentendre, an artistic riverside village. Explore its galleries and shops.",
        "Day 5: Train to Eger. Explore Eger Castle, Minaret, and taste local wines in the Valley of the Beautiful Women.",
        "Day 6: Day trip to Hortobágy National Park, explore the Hungarian Puszta and traditional horse shows.",
        "Day 7: Return to Budapest for departure.",
      ],
      price: "€1,900 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, inter-city train tickets, daily breakfast, and selected entry fees.",
      reviews: [
        {
          rating: "⭐ 4.7/5",
          user: "Laura T",
          comment:
            "Budapest is stunning! A great mix of relaxation and sightseeing. Loved the thermal baths.",
        },
        {
          rating: "⭐ 4.5/5",
          user: "Peter G",
          comment:
            "Well-organized trip, and the food was delicious. Eger was a charming discovery.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Prague & Czech Republic",
        "Vienna & Austrian Alps",
        "Transylvanian Wonders",
      ],
    },
    johannesburg: {
      title: "Johannesburg: Urban & Wildlife Safari",
      subtitle:
        "7-Day journey through Johannesburg's vibrant culture and South African wildlife.",
      image: "../Images/johannesburg/johannesburg.jpg",
      images: [
        "../Images/johannesburg/johannesburg1.jpg",
        "../Images/johannesburg/johannesburg2.jpg",
        "../Images/johannesburg/johannesburg3.jpg",
        "../Images/johannesburg/johannesburg4.jpg",
        "../Images/johannesburg/johannesburg5.jpg",
      ],
      button: "../Files/booking.html?trip=johannesburg",
      description:
        "Experience the vibrant energy of Johannesburg, delve into South Africa's rich history, and embark on a thrilling safari adventure. Discover cultural landmarks, bustling markets, and abundant wildlife.",
      itinerary: [
        "Day 1: Arrival in Johannesburg. Explore Maboneng Precinct, art galleries, and rooftop bars.",
        "Day 2: Cultural Immersion - Apartheid Museum, guided tour of Soweto (including Mandela House).",
        "Day 3: Full-day safari to Pilanesberg National Park. Search for the Big Five. Enjoy a picnic lunch.",
        "Day 4: Shopping at Sandton City. Optional spa day for relaxation and pampering.",
        "Day 5: Day trip to Stellenbosch Winelands. Wine tasting tours and vineyard lunch.",
        "Day 6: Adventure & History - Cradle of Humankind (Sterkfontein Caves, Maropeng Visitor Centre). Optional zip-lining.",
        "Day 7: Farewell Johannesburg. Leisurely morning, souvenir shopping, departure.",
      ],
      price: "€2,900 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, guided city tours, safari entry fees, daily breakfast, and local transfers.",
      reviews: [
        {
          rating: "⭐ 4.8/5",
          user: "Nomusa D",
          comment:
            "A truly enriching experience. The safari was amazing, and learning about South African history was profound.",
        },
        {
          rating: "⭐ 4.6/5",
          user: "Chris J",
          comment:
            "Johannesburg surprised me with its vibrancy. The winelands trip was a lovely escape.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Cape Town & Garden Route",
        "Kruger National Park Safari",
        "Victoria Falls & Botswana",
      ],
    },
    mauritius: {
      title: "Mauritius: Island Paradise & Azure Waters",
      subtitle: "7-Day escape to the tropical paradise of Mauritius.",
      image: "../Images/mauritius/mauritius.jpg",
      images: [
        "../Images/mauritius/mauritius1.jpg",
        "../Images/mauritius/mauritius2.jpg",
        "../Images/mauritius/mauritius3.jpg",
        "../Images/mauritius/mauritius4.jpg",
        "../Images/mauritius/mauritius5.jpg",
      ],
      button: "../Files/booking.html?trip=mauritius",
      description:
        "Indulge in the pristine beaches, turquoise lagoons, and lush landscapes of Mauritius. Discover its vibrant culture, stunning natural wonders, and enjoy thrilling water sports or simply unwind in luxury.",
      itinerary: [
        "Day 1: Arrival in Mauritius. Transfer to your resort. Relax and enjoy the beach.",
        "Day 2: Explore North Mauritius - Pamplemousses Gardens, Port Louis (capital city), Caudan Waterfront.",
        "Day 3: Leisure day. Optional Blue Safari Submarine tour or catamaran cruise.",
        "Day 4: Explore South Mauritius - Trou aux Cerfs (volcanic crater), Grand Bassin (sacred lake), Chamarel (Colored Earth and waterfall).",
        "Day 5: Leisure day. Optional Undersea Walk or parasailing.",
        "Day 6: Full-day excursion to Ile Aux Cerfs Island. Enjoy water sports like snorkeling, parasailing, and pristine beaches.",
        "Day 7: Farewell Mauritius. Last-minute shopping or relaxation, departure.",
      ],
      price: "€3,100 per person",
      inclusions:
        "Round-trip flights, 5-star resort accommodations, daily breakfast and dinner, guided island tours, and airport transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Priya S",
          comment:
            "Mauritius is a dream! The beaches are stunning, and the activities offered were fantastic.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Ben T",
          comment:
            "Pure relaxation and beauty. Ile Aux Cerfs was a highlight. Highly recommend this luxurious escape.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Seychelles Island Hopping",
        "Maldives Overwater Bliss",
        "Reunion Island Adventure",
      ],
    },
    thailand: {
      title: "Thailand: Temples, Islands & City Buzz",
      subtitle:
        "7-Day journey through Thailand's cultural wonders and stunning islands.",
      image: "../Images/thailand/thailand.jpg",
      images: [
        "../Images/thailand/thailand1.jpg",
        "../Images/thailand/thailand2.jpg",
        "../Images/thailand/thailand3.jpg",
        "../Images/thailand/thailand4.jpg",
        "../Images/thailand/thailand5.jpg",
      ],
      button: "../Files/booking.html?trip=thailand",
      description:
        "Experience the vibrant energy of Bangkok, the stunning limestone karsts of Krabi, and the idyllic beaches of Phi Phi Island. Discover ancient temples, bustling markets, and breathtaking natural beauty.",
      itinerary: [
        "Day 1: Arrival in Krabi. Transfer to hotel, relax and enjoy the coastline.",
        "Day 2: Four Island Adventure by speed boat - Tub Island, Chicken Island, Poda Island, Pranang Cave.",
        "Day 3: Scenic drive to Phuket. Settle into your hotel. Evening optional Phuket Fantasea show.",
        "Day 4: Day tour to Phi Phi Island by ferry. Enjoy white beaches, limestone cliffs, and clear waters.",
        "Day 5: Flight to Bangkok. Check into hotel. Optional Chao Phraya River Cruise Dinner.",
        "Day 6: Bangkok City Tour - Golden Buddha Temple, Reclining Buddha. Optional Sea Life Bangkok Ocean World or Madame Tussauds.",
        "Day 7: Farewell Bangkok. Last-minute shopping, departure.",
      ],
      price: "€2,100 per person",
      inclusions:
        "Round-trip flights, internal flights, 4-star accommodations, guided tours, daily breakfast, and local transfers.",
      reviews: [
        {
          rating: "⭐ 4.8/5",
          user: "Chloe W",
          comment:
            "Thailand was amazing! The island hopping was fantastic, and Bangkok was an experience.",
        },
        {
          rating: "⭐ 4.6/5",
          user: "Sam R",
          comment:
            "A great balance of cultural exploration and relaxation. The food was incredible!",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Vietnamese Mekong Delta",
        "Cambodian Angkor Temples",
        "Malaysian Borneo Adventure",
      ],
    },
    sriLanka: {
      title: "Sri Lanka: Cultural Triangle & Southern Coast",
      subtitle:
        "7-Day journey through Sri Lanka's ancient heritage and stunning beaches.",
      image: "../Images/srilanka/srilanka.jpg",
      images: [
        "../Images/srilanka/srilanka1.jpg",
        "../Images/srilanka/srilanka2.jpg",
        "../Images/srilanka/srilanka3.jpg",
        "../Images/srilanka/srilanka4.jpg",
        "../Images/srilanka/srilanka5.jpg",
      ],
      button: "../Files/booking.html?trip=srilanka",
      description:
        "Discover the ancient wonders, lush landscapes, and pristine beaches of Sri Lanka. Explore UNESCO World Heritage Sites, embark on wildlife safaris, and unwind by the Indian Ocean.",
      itinerary: [
        "Day 1: Arrival in Colombo. Transfer to Dambulla. Visit Dambulla Cave Temple.",
        "Day 2: Explore Sigiriya Rock Fortress (Lion Rock) in the morning. Afternoon safari in Minneriya National Park (seasonal for elephants).",
        "Day 3: Transfer to Kandy. Visit Temple of the Sacred Tooth Relic. Explore Kandy Lake.",
        "Day 4: Explore Nuwara Eliya, 'Little England'. Visit a tea plantation and factory. Enjoy the scenic beauty.",
        "Day 5: Scenic train ride from Nuwara Eliya/Ella to the Southern Coast (Mirissa/Galle).",
        "Day 6: Southern Coast - Whale watching in Mirissa (seasonal) or explore Galle Fort (UNESCO site). Relax on the beach.",
        "Day 7: Transfer to Colombo for departure.",
      ],
      price: "€1,800 per person",
      inclusions:
        "Round-trip flights, 3-star accommodations, all internal transfers by private vehicle, guided tours, daily breakfast, and selected entry fees.",
      reviews: [
        {
          rating: "⭐ 4.7/5",
          user: "Priya D",
          comment:
            "Sri Lanka is a beautiful country with so much to offer. The cultural sites and beaches were amazing.",
        },
        {
          rating: "⭐ 4.5/5",
          user: "Suresh N",
          comment:
            "Well-organized trip, saw a lot in a week. The train ride was a highlight.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Kerala Backwaters & Beaches",
        "Rajasthan Royal Tour",
        "Maldives Beach Bliss",
      ],
    },
    malaysia: {
      title: "Malaysia: City, Nature & Islands",
      subtitle:
        "7-Day exploration of Malaysia's diverse landscapes and vibrant culture.",
      image: "../Images/malaysia/malaysia.jpg",
      images: [
        "../Images/malaysia/malaysia1.jpg",
        "../Images/malaysia/malaysia2.jpg",
        "../Images/malaysia/malaysia3.jpg",
        "../Images/malaysia/malaysia4.jpg",
        "../Images/malaysia/malaysia5.jpg",
      ],
      button: "../Files/booking.html?trip=malaysia",
      description:
        "Discover the bustling metropolis of Kuala Lumpur, the lush tea plantations of Cameron Highlands, and the stunning beaches of Langkawi. Experience Malaysia's unique blend of modernity, nature, and diverse cultures.",
      itinerary: [
        "Day 1: Arrival in Kuala Lumpur. Explore Petronas Twin Towers, Batu Caves, and city center.",
        "Day 2: Kuala Lumpur's Cultural melting pot - Little India, Chinatown, local markets. Enjoy street food.",
        "Day 3: Transfer to Cameron Highlands. Visit tea plantations, strawberry farms, and mossy forest.",
        "Day 4: Explore Cameron Highlands. Optional hiking or visit to butterfly garden.",
        "Day 5: Flight to Langkawi Island. Relax on the beach, enjoy sunset dinner.",
        "Day 6: Langkawi Island tour - SkyBridge, Oriental Village, Eagle Square. Optional island hopping.",
        "Day 7: Departure from Langkawi.",
      ],
      price: "€2,000 per person",
      inclusions:
        "Round-trip flights, internal flights, 4-star accommodations, daily breakfast, and selected tours.",
      reviews: [
        {
          rating: "⭐ 4.6/5",
          user: "Wei L",
          comment:
            "A great introduction to Malaysia. Kuala Lumpur was exciting, and Langkawi was so relaxing.",
        },
        {
          rating: "⭐ 4.4/5",
          user: "Hannah C",
          comment:
            "Enjoyed the variety of experiences. Cameron Highlands was a refreshing change of pace.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Singapore City Break",
        "Indonesian Bali Retreat",
        "Thailand Island Hopping",
      ],
    },
    maldives: {
      title: "Maldives: Overwater Bliss & Aquatic Wonders",
      subtitle:
        "7-Day luxurious escape to the pristine islands of the Maldives.",
      image: "../Images/maldives/maldives.jpg",
      images: [
        "../Images/maldives/maldives1.jpg",
        "../Images/maldives/maldives2.jpg",
        "../Images/maldives/maldives3.jpg",
        "../Images/maldives/maldives4.jpg",
        "../Images/maldives/maldives5.jpg",
      ],
      button: "../Files/booking.html?trip=maldives",
      description:
        "Indulge in unparalleled luxury and natural beauty in the Maldives. Stay in exquisite overwater bungalows, swim in crystal-clear lagoons, and explore vibrant coral reefs through snorkeling and diving.",
      itinerary: [
        "Day 1: Arrival in Malé, transfer to your resort island (e.g., Hulhumalé or a private island). Relax.",
        "Day 2: Enjoy resort amenities. Optional snorkeling or scuba diving excursion to a nearby reef.",
        "Day 3: Leisure day. Indulge in spa treatments, sunbathe on pristine beaches, or enjoy water sports.",
        "Day 4: Excursion to a sandbank, picnic lunch. Dolphin safari in the evening.",
        "Day 5: Explore local island life (e.g., Maafushi). Experience Maldivian culture and local cuisine.",
        "Day 6: Deep-sea fishing trip or a romantic sunset cruise.",
        "Day 7: Departure from Malé.",
      ],
      price: "€4,000 per person",
      inclusions:
        "Round-trip flights, 5-star resort accommodations (overwater bungalow option), daily breakfast and dinner, selected excursions, and speedboat/seaplane transfers.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Anjali S",
          comment:
            "The Maldives exceeded all expectations. Utter paradise, perfect for honeymooners.",
        },
        {
          rating: "⭐ 5/5",
          user: "Marcus F",
          comment:
            "Every moment was magical. The marine life is incredible, and the overwater villa was a dream.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Seychelles Island Hopping",
        "Mauritius Island Paradise",
        "Fiji Honeymoon Escape",
      ],
    },
    seychelles: {
      title: "Seychelles: Island Hopping & Pristine Beaches",
      subtitle:
        "7-Day island hopping adventure through the stunning Seychelles archipelago.",
      image: "../Images/seychelles/seychelles.jpg",
      images: [
        "../Images/seychelles/seychelles1.jpg",
        "../Images/seychelles/seychelles2.jpg",
        "../Images/seychelles/seychelles3.jpg",
        "../Images/seychelles/seychelles4.jpg",
        "../Images/seychelles/seychelles5.jpg",
      ],
      button: "../Files/booking.html?trip=seychelles",
      description:
        "Explore the breathtaking beauty of the Seychelles, from the vibrant capital of Mahé to the lush Vallee de Mai on Praslin and the iconic Anse Source D'Argent on La Digue. Discover pristine beaches, unique wildlife, and crystal-clear waters.",
      itinerary: [
        "Day 1: Arrival in Mahé Island. Transfer to hotel (Beau Vallon area). Relax on Beau Vallon Beach.",
        "Day 2: Mahé exploration - Victoria (capital city), Sir Selwyn Selwyn-Clarke Market, Botanical Gardens. Optional hike to Anse Major.",
        "Day 3: Ferry to Praslin Island. Visit Vallée de Mai (UNESCO site). Spend afternoon at Anse Lazio Beach.",
        "Day 4: Praslin Island - Optional boat trip to Curieuse Island for giant tortoises and snorkeling.",
        "Day 5: Ferry to La Digue Island. Explore Anse Source D'Argent, one of the world's most photographed beaches (by bicycle).",
        "Day 6: La Digue Island - Hike to Anse Cocos or Anse Marron. Enjoy the secluded beaches.",
        "Day 7: Ferry back to Mahé for departure.",
      ],
      price: "€3,500 per person",
      inclusions:
        "Round-trip flights, 4-star accommodations, inter-island ferry transfers, daily breakfast, and selected entry fees.",
      reviews: [
        {
          rating: "⭐ 5/5",
          user: "Sophie R",
          comment:
            "The Seychelles is truly paradise on Earth. Island hopping was the perfect way to experience it.",
        },
        {
          rating: "⭐ 4.9/5",
          user: "Leo G",
          comment:
            "Breathtaking beaches and unique natural wonders. Anse Source D'Argent was incredible.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Mauritius Tropical Escape",
        "Maldives Honeymoon Bliss",
        "Zanzibar Spice & Beach",
      ],
    },
    kazakhstan: {
      title: "Kazakhstan: Steppes, Canyons & Lakes",
      subtitle:
        "7-Day adventure through Kazakhstan's diverse landscapes and vibrant cities.",
      image: "../Images/kazakhstan/kazakhstan.jpg",
      images: [
        "../Images/kazakhstan/kazakhstan1.jpg",
        "../Images/kazakhstan/kazakhstan2.jpg",
        "../Images/kazakhstan/kazakhstan3.jpg",
        "../Images/kazakhstan/kazakhstan4.jpg",
        "../Images/kazakhstan/kazakhstan5.jpg",
      ],
      button: "../Files/booking.html?trip=kazakhstan",
      description:
        "Discover the vast beauty of Kazakhstan, from the modern cityscape of Almaty to the dramatic Charyn Canyon and the serene Kolsai Lakes. Experience diverse natural wonders and a glimpse into Central Asian culture.",
      itinerary: [
        "Day 1: Arrival in Almaty. Explore Kok Tobe Hill for panoramic views. Enjoy a traditional Kazakh dinner.",
        "Day 2: Almaty city tour - Ascension Cathedral, Central State Museum, Green Bazaar. Explore local cafes.",
        "Day 3: Day trip to Kolsai Lakes (Lake 1 and 2). Hike along the shores, enjoy stunning mountain scenery. Overnight in Saty Village.",
        "Day 4: Visit Kaindy Lake (sunken forest). Drive to Charyn Canyon, explore the 'Valley of Castles'. Return to Almaty.",
        "Day 5: Day trip to Altyn Emel National Park. Visit the Singing Dunes and Aktau Mountains (colorful rock formations).",
        "Day 6: Optional ski resort visit (Shymbulak) or explore Big Almaty Lake. Enjoy leisure time in Almaty.",
        "Day 7: Departure from Almaty.",
      ],
      price: "€2,300 per person",
      inclusions:
        "Round-trip flights, 3-star accommodations (including Saty Guesthouse), all internal transfers by private vehicle, guided tours, daily breakfast, and national park entry fees.",
      reviews: [
        {
          rating: "⭐ 4.7/5",
          user: "Elena P",
          comment:
            "Kazakhstan was surprisingly diverse and beautiful. The canyons and lakes were incredible.",
        },
        {
          rating: "⭐ 4.5/5",
          user: "Mark R",
          comment:
            "An adventurous trip with stunning natural wonders. The Singing Dunes were a unique experience.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Kyrgyzstan Mountain Treks",
        "Uzbekistan Silk Road Cities",
        "Mongolian Steppe Adventure",
      ],
    },
    iran: {
      title: "Iran: Ancient Persia & Timeless Beauty",
      subtitle:
        "7-Day cultural journey through Iran's historic cities and rich heritage.",
      image: "../Images/iran/iran.jpg",
      images: [
        "../Images/iran/iran1.jpg",
        "../Images/iran/iran2.jpg",
        "../Images/iran/iran3.jpg",
        "../Images/iran/iran4.jpg",
        "../Images/iran/iran5.jpg",
      ],
      button: "../Files/booking.html?trip=iran",
      description:
        "Delve into the captivating history and profound culture of ancient Persia. Explore magnificent mosques, bustling bazaars, stunning gardens, and the ruins of ancient empires across Iran's most iconic cities.",
      itinerary: [
        "Day 1: Arrival in Tehran. Transfer to Shiraz (internal flight). Explore Nasir al-Mulk Mosque and Qavam House.",
        "Day 2: Shiraz city tour - Vakil Mosque and Bazaar, Eram Garden, Hafiz Tomb. Enjoy traditional Iranian dinner.",
        "Day 3: Road trip to Isfahan. En route, visit Persepolis, Necropolis (Naqsh-e Rustam), and Pasargadae (UNESCO sites).",
        "Day 4: Isfahan exploration - Naqsh-e Jahan Square, Sheikh Lotfollah Mosque, Ali Qapu Palace, Shah Mosque, Historic Bazaar.",
        "Day 5: Isfahan continued - Chehel Sotoun Palace, Armenian Quarter, Vank Church. Explore Sio-se-pol and Khaju historical bridges. Road trip to Kashan.",
        "Day 6: Kashan city tour - Fin Garden, Agha Bozorg Mosque, Tabatabaei House, Sultan Amir Ahmad Bath. Transfer to Tehran.",
        "Day 7: Tehran city tour - Golestan Palace, Grand Bazaar, Sa'dabad Complex or Tajrish Bazaar. Departure from Tehran.",
      ],
      price: "€2,400 per person",
      inclusions:
        "Round-trip flights (to Tehran), internal flights, 3-star accommodations (traditional hotels where available), private vehicle with driver-guide, daily breakfast, and selected entry fees (excluding visa stamp fee and meals other than breakfast).",
      reviews: [
        {
          rating: "⭐ 4.8/5",
          user: "Fatima Z",
          comment:
            "Iran is a hidden gem! The history and architecture are mesmerizing, and the hospitality was incredible.",
        },
        {
          rating: "⭐ 4.6/5",
          user: "Daniel S",
          comment:
            "A truly enriching cultural experience. The ancient sites were awe-inspiring, and the bazaars were vibrant.",
        },
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Europe&t=&z=4&ie=UTF8&iwloc=&output=embed",
      related: [
        "Jordan Ancient Wonders",
        "Turkey Grand Tour",
        "Egypt Nile Cruise",
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
