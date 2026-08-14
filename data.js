/* ==========================================================================
   Altura Expeditions — shared data (loaded before script.js and trek.js)
   ========================================================================== */

/* ---- Helpers ------------------------------------------------------------- */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* Grade label derived from difficulty */
const GRADE_BY_DIFFICULTY = {
  Easy: "Grade A — Easy / Leisurely",
  Moderate: "Grade B — Moderate",
  Challenging: "Grade C — Strenuous",
};

/* Shared defaults — override per trek in DETAIL_OVERRIDES below */
const DETAIL_DEFAULTS = {
  meals: "Breakfast daily, plus all meals while on the trail",
  accommodation: "3★ hotels in cities · teahouses & tented camps on trek",
  activity: "Trekking, hiking & cultural sightseeing",
  groupType: "Private & small-group departures",
  groupSize: "2 – 12 trekkers",
  bestSeason: "March – May & September – November",
};

/*
  Per-trek facts. Only the values that differ from DETAIL_DEFAULTS are listed
  here — everything else is merged in from DETAIL_DEFAULTS below. Add or edit
  freely; these drive the quick-facts panel on each trek page.
*/
const DETAIL_OVERRIDES = {
  "everest-base-camp": {
    maxAltitude: "5,364 m / 17,598 ft",
    start: "Lukla, Nepal",
    end: "Lukla, Nepal",
    bestSeason: "March – May & September – November",
  },
  "turquoise-lakes-circuit": {
    maxAltitude: "1,200 m / 3,940 ft",
    start: "El Chaltén, Argentina",
    end: "El Calafate, Argentina",
    bestSeason: "November – March (Patagonian summer)",
    accommodation: "Mountain lodges & wild campsites",
  },
  "emerald-valley-trek": {
    maxAltitude: "3,150 m / 10,335 ft",
    start: "Paro, Bhutan",
    end: "Thimphu, Bhutan",
    bestSeason: "March – May & September – November",
  },
  "gorge-crossing-expedition": {
    maxAltitude: "3,860 m / 12,664 ft",
    start: "Pokhara, Nepal",
    end: "Pokhara, Nepal",
  },
  "starlight-camp-trail": {
    maxAltitude: "2,800 m / 9,186 ft",
    start: "Marrakech, Morocco",
    end: "Marrakech, Morocco",
    bestSeason: "April – June & September – October",
    accommodation: "Riad in Marrakech · desert tented camps",
  },
  "high-plateau-traverse": {
    maxAltitude: "5,200 m / 17,060 ft",
    start: "Lhasa, Tibet",
    end: "Shigatse, Tibet",
    bestSeason: "May – early October",
  },
  "sea-of-clouds-summit": {
    maxAltitude: "4,600 m / 15,092 ft",
    start: "Cusco, Peru",
    end: "Cusco, Peru",
    bestSeason: "May – September (dry season)",
  },
  "annapurna-sunrise-loop": {
    maxAltitude: "3,210 m / 10,531 ft",
    start: "Pokhara, Nepal",
    end: "Pokhara, Nepal",
  },
  "alpine-lakes-wander": {
    maxAltitude: "2,450 m / 8,038 ft",
    start: "Cortina d'Ampezzo, Italy",
    end: "Cortina d'Ampezzo, Italy",
    bestSeason: "June – September",
    accommodation: "Alpine rifugios & mountain hotels",
  },
  "riverstone-forest-walk": {
    maxAltitude: "1,150 m / 3,773 ft",
    start: "Queenstown, New Zealand",
    end: "Te Anau, New Zealand",
    bestSeason: "November – April",
    accommodation: "Great Walk huts & lodges",
  },
  "sky-bridge-challenge": {
    maxAltitude: "5,106 m / 16,752 ft",
    start: "Kathmandu, Nepal",
    end: "Kathmandu, Nepal",
    bestSeason: "March – May & September – November",
  },
  "desert-peaks-odyssey": {
    maxAltitude: "1,750 m / 5,741 ft",
    start: "Amman, Jordan",
    end: "Wadi Rum, Jordan",
    bestSeason: "October – April",
    accommodation: "Hotels · Bedouin desert camps",
  },
  "glacier-rim-circuit": {
    maxAltitude: "1,490 m / 4,888 ft",
    start: "Reykjavík, Iceland",
    end: "Reykjavík, Iceland",
    bestSeason: "June – September",
    accommodation: "Guesthouses & mountain huts",
  },
  "cloudforest-ascent": {
    maxAltitude: "4,800 m / 15,748 ft",
    start: "Quito, Ecuador",
    end: "Quito, Ecuador",
    bestSeason: "June – September & December – February",
  },
};

/* Inclusions / exclusions — shared defaults, editable per trek if needed */
const DEFAULT_INCLUSIONS = [
  "All airport & trailhead transfers in a private vehicle",
  "Accommodation in hotels, teahouses and tented camps as per itinerary",
  "Experienced, certified English-speaking local guide",
  "Support crew and porters to carry group equipment",
  "All meals listed in the itinerary during the trek",
  "Necessary trekking permits and national park entry fees",
  "Group first-aid kit, oximeter and safety equipment",
  "Government taxes and official service charges",
];

const DEFAULT_EXCLUSIONS = [
  "International and domestic airfare (quoted separately)",
  "Travel insurance covering high-altitude trekking & evacuation",
  "Nepal / country visa fees where applicable",
  "Personal trekking gear and clothing",
  "Meals in cities not specified in the itinerary",
  "Tips and gratuities for guides, porters and drivers",
  "Personal expenses (drinks, laundry, Wi-Fi, hot showers)",
  "Costs arising from delays outside our control (weather, flights)",
];

/* ---- The 14 trekking packages -------------------------------------------- */
const packages = [
  {
    name: "Everest Base Camp",
    region: "Nepal, Himalayas",
    image: "images/trek-1.png",
    days: 14,
    difficulty: "Challenging",
    price: 2450,
    desc: "Follow the legendary trail to the foot of the world's highest peak through Sherpa villages and glacial moraine.",
    overview:
      "The Everest Base Camp trek is the pilgrimage every serious walker dreams of — a slow, spectacular climb through the heart of the Khumbu to the foot of the highest mountain on Earth. You'll trace the footsteps of legendary mountaineers past spinning prayer wheels, swaying suspension bridges and hillsides draped in fluttering prayer flags.",
  },
  {
    name: "Turquoise Lakes Circuit",
    region: "Patagonia, Argentina",
    image: "images/trek-2.png",
    days: 8,
    difficulty: "Moderate",
    price: 1890,
    desc: "Hike shorelines of vivid glacial lakes ringed by jagged granite spires and hanging glaciers.",
    overview:
      "Patagonia's Turquoise Lakes Circuit strings together the region's most electric-blue glacial lakes beneath a skyline of granite towers and hanging ice. It is raw, windswept, end-of-the-world scenery with comfortable lodges and a relaxed daily rhythm that suits confident first-time trekkers.",
  },
  {
    name: "Emerald Valley Trek",
    region: "Bhutan",
    image: "images/trek-3.png",
    days: 6,
    difficulty: "Easy",
    price: 1290,
    desc: "A gentle journey through terraced valleys, rhododendron forests, and remote mountain monasteries.",
    overview:
      "The Emerald Valley Trek is a gentle immersion into the Last Shangri-La. Wander terraced farmland and rhododendron forest between whitewashed dzongs and cliff-clinging monasteries, ending each day with Bhutan's famously warm hospitality. Ideal for those who want culture and scenery without long, hard days.",
  },
  {
    name: "Gorge Crossing Expedition",
    region: "Nepal, Annapurna",
    image: "images/trek-4.png",
    days: 10,
    difficulty: "Moderate",
    price: 1650,
    desc: "Cross dramatic suspension bridges over roaring gorges on this classic mid-mountain adventure.",
    overview:
      "The Gorge Crossing Expedition is a classic mid-mountain Annapurna adventure defined by its dramatic river gorges and the long, swaying suspension bridges that span them. Expect a rich mix of subtropical forest, terraced hillsides and grandstand views of Annapurna and Machapuchare.",
  },
  {
    name: "Starlight Camp Trail",
    region: "Morocco, Atlas",
    image: "images/trek-5.png",
    days: 5,
    difficulty: "Easy",
    price: 990,
    desc: "Trek by day and sleep under blazing desert-mountain skies at remote wild campsites.",
    overview:
      "The Starlight Camp Trail pairs easy High Atlas walking with unforgettable nights under some of the clearest skies on the planet. Trek through Berber villages and rust-red valleys by day, then gather round the fire at remote camps as the Milky Way blazes overhead.",
  },
  {
    name: "High Plateau Traverse",
    region: "Tibet",
    image: "images/trek-6.png",
    days: 12,
    difficulty: "Challenging",
    price: 2280,
    desc: "A remote high-altitude crossing of windswept plateaus beneath distant snow giants.",
    overview:
      "The High Plateau Traverse is a remote, high-altitude journey across the roof of the world. Vast windswept plains, turquoise sacred lakes and distant snow giants define this demanding crossing, threaded together with visits to some of Tibet's most revered monasteries.",
  },
  {
    name: "Sea of Clouds Summit",
    region: "Peru, Andes",
    image: "images/trek-7.png",
    days: 9,
    difficulty: "Challenging",
    price: 1980,
    desc: "Climb above the clouds to a sunrise summit overlooking endless layered ridgelines.",
    overview:
      "The Sea of Clouds Summit climbs high into the Peruvian Andes to a dawn viewpoint that floats above a rolling ocean of cloud. It's a demanding but deeply rewarding route through Quechua villages, high passes and ancient stone trails steeped in Inca history.",
  },
  {
    name: "Annapurna Sunrise Loop",
    region: "Nepal, Annapurna",
    image: "images/trek-1.png",
    days: 11,
    difficulty: "Moderate",
    price: 1740,
    desc: "The most beloved circuit in the Himalayas, famed for its sunrise panoramas over the range.",
    overview:
      "The Annapurna Sunrise Loop is the most beloved trek in the Himalaya for good reason — a perfectly balanced circuit of terraced valleys, forested ridges and jaw-dropping sunrise panoramas over the entire Annapurna massif. Comfortable teahouses and moderate days make it a firm all-rounder favourite.",
  },
  {
    name: "Alpine Lakes Wander",
    region: "Dolomites, Italy",
    image: "images/trek-2.png",
    days: 4,
    difficulty: "Easy",
    price: 860,
    desc: "A relaxed introduction to alpine trekking past mirror lakes and pastel dolomite towers.",
    overview:
      "The Alpine Lakes Wander is a relaxed, scenic introduction to hut-to-hut trekking in the Italian Dolomites. Stroll between mirror-still lakes and pastel limestone spires, refuel on espresso and homemade pasta at mountain rifugios, and soak up some of Europe's most photogenic peaks.",
  },
  {
    name: "Riverstone Forest Walk",
    region: "New Zealand",
    image: "images/trek-3.png",
    days: 5,
    difficulty: "Easy",
    price: 1120,
    desc: "Wind through ancient forests and glacial rivers on one of the great walks of the south.",
    overview:
      "The Riverstone Forest Walk follows one of New Zealand's fabled Great Walks through ancient beech forest, hanging valleys and glacier-fed rivers. Well-maintained trails and cosy huts make this a gentle, family-friendly way to experience the raw beauty of the South Island.",
  },
  {
    name: "Sky Bridge Challenge",
    region: "Nepal, Manaslu",
    image: "images/trek-4.png",
    days: 13,
    difficulty: "Challenging",
    price: 2190,
    desc: "A demanding remote circuit with high passes, deep valleys, and vertigo-inducing bridges.",
    overview:
      "The Sky Bridge Challenge circles the mighty Manaslu on one of Nepal's wildest restricted-area routes. Deep river valleys, a lofty high pass and a string of vertigo-inducing suspension bridges reward committed trekkers with raw scenery and a fraction of the crowds.",
  },
  {
    name: "Desert Peaks Odyssey",
    region: "Jordan, Wadi",
    image: "images/trek-5.png",
    days: 7,
    difficulty: "Moderate",
    price: 1380,
    desc: "Trek sandstone canyons and star-filled nights in one of the planet's most cinematic deserts.",
    overview:
      "The Desert Peaks Odyssey traverses the towering sandstone landscapes of Wadi Rum and beyond, combining scrambly desert-mountain walking with nights in Bedouin camps beneath a blaze of stars. It's a cinematic, otherworldly journey through Jordan's most storied wilderness.",
  },
  {
    name: "Glacier Rim Circuit",
    region: "Iceland",
    image: "images/trek-6.png",
    days: 6,
    difficulty: "Moderate",
    price: 1560,
    desc: "Walk the edge of vast ice caps and volcanic ridges in the land of fire and ice.",
    overview:
      "The Glacier Rim Circuit walks the dramatic edge where Iceland's vast ice caps meet steaming volcanic country. Expect black-sand deserts, rainbow-hued rhyolite ridges, hidden hot springs and the surreal, ever-changing light of the land of fire and ice.",
  },
  {
    name: "Cloudforest Ascent",
    region: "Ecuador, Andes",
    image: "images/trek-7.png",
    days: 8,
    difficulty: "Challenging",
    price: 1720,
    desc: "Climb from misty cloudforest to a high volcanic summit teeming with rare wildlife.",
    overview:
      "The Cloudforest Ascent rises from mist-drenched, orchid-hung cloudforest to the thin air of a high Andean volcano. Along the way you'll spot rare birds and wildlife, soak in remote hot springs and test yourself on a genuine high-altitude summit push.",
  },
];

/* Attach slug + merged details to every package */
packages.forEach((p) => {
  p.slug = slugify(p.name);
  const regionFirst = p.region.split(",")[0].trim();
  p.details = {
    duration: `${p.days} days`,
    grade: GRADE_BY_DIFFICULTY[p.difficulty],
    start: `${regionFirst}`,
    end: `${regionFirst}`,
    ...DETAIL_DEFAULTS,
    ...(DETAIL_OVERRIDES[p.slug] || {}),
  };
  p.includes = p.includes || DEFAULT_INCLUSIONS;
  p.excludes = p.excludes || DEFAULT_EXCLUSIONS;
});

/* ---- Testimonials -------------------------------------------------------- */
const testimonials = [
  {
    text: "Altura made Everest Base Camp feel achievable and safe. Our guide's knowledge and care turned a bucket-list dream into the trip of a lifetime.",
    name: "Maya Thompson",
    role: "Everest Base Camp, 2025",
    initials: "MT",
  },
  {
    text: "The small group size made all the difference. It felt like trekking with friends who happened to be world-class mountaineers.",
    name: "Daniel Okafor",
    role: "Patagonia Lakes Circuit",
    initials: "DO",
  },
  {
    text: "Every detail was handled — permits, lodges, meals, acclimatisation. All I had to do was walk and be amazed. Flawless organisation.",
    name: "Sofia Ramos",
    role: "Annapurna Sunrise Loop",
    initials: "SR",
  },
  {
    text: "I was nervous as a first-timer, but the guides met me exactly where I was. I've already booked my second Altura expedition.",
    name: "Liam Chen",
    role: "Dolomites Alpine Lakes",
    initials: "LC",
  },
];
