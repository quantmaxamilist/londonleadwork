// London Leadwork — all site copy lives here.
// SOURCES
//  [T-LEAD] tavancontractors.co.uk/lead-work-roof-specialist-berkshire (verbatim)
//  [T-HOME] tavancontractors.co.uk home page (verbatim)
//  [G]      Google Business Profile "Roofing Tavan Contractors Ltd" (rating, count, reviews verbatim)
//  [BRIEF]  Quantweb brief: London Leadwork is the lead work service of Tavan Contractors, now its own business
//  [QW]     Quantweb-written connective copy (descriptions of the services named in [T-LEAD] and of what the
//           photos show). Flagged for the owner to check — nothing here claims years, awards, stats or clients.

export const SITE = 'https://londonleadwork.co.uk'; // [QW] domain to confirm

export const brand = {
  name: 'London Leadwork',
  legalName: 'London Leadwork & Co Ltd', // from the logo
  parent: 'Tavan Contractors',
  parentLegal: 'Roofing Tavan Contractors Ltd', // [G]
  parentUrl: 'https://www.tavancontractors.co.uk',
};

export const contact = {
  phone: '07741 586705',
  phoneHref: 'tel:+447741586705',
  phone2: '020 3538 6994', // [G] Tavan landline
  phone2Href: 'tel:+442035386994',
  email: 'sales@tavancontractors.co.uk',
  street: '28 Mills Chase',
  town: 'Bracknell',
  postcode: 'RG12 9RE',
  geo: { lat: 51.409424, lng: -0.7378828 }, // [G]
};

export const google = {
  rating: '4.9', // [G]
  count: 37, // [G]
  url: 'https://maps.google.com/?cid=17289597500900732672',
  reviews: [
    { name: 'John Cook', when: '5 months ago', text: 'A great service and competitively priced. Complete de-moss of roof. Replaced broken tiles, resecured ridge tiles, resealed our flat roof and replaced lead flashing that was causing a leak. Great bunch if guys. Very professional, great quality of work and cleaned up very well afterwards. Well recommended.' },
    { name: 'Karol Fudalej', when: '10 months ago', text: 'Professional and respectful working attitude, on time completed job as agreed, Thank you so much to Harry and his Dad today 100% I can recommend Roofing Tavan Contractor Ltd, Director Dean is "A Man of his word "' },
    { name: 'Amandeep Bhamra', when: '2 years ago', text: 'Highly recommend. A*** asked Dean to come have a look at a few areas there were leaking , he’s was on the ball straight away, told us exactly what the issues are. Fixed them with no hassle. It’s great to see there still quality companies around like this. Will definitely be using them for future jobs.' },
  ],
};

// [T-LEAD] verbatim
export const lead = {
  title: 'Lead work',
  p1: 'Lead work is proven to be cost effective, long lasting and reliable. We can shape lead to fit any contours.',
  p2: 'Our highly skilled lead work team can supply you with long lasting cost effective replacement or maintenance of your lead work.',
  standard: 'All our lead work comply with the BS EN 12588 standard.',
  listIntro: 'The lead-works we undertake include:',
  list: [
    'Lead sheet roofs',
    'Lead side cheeks to dormers',
    'Lead box gutters',
    'Lead box windows',
    'Chimney gutters',
    'Flashings to parapet walls and chimney stacks.',
    'Installation of lead slates for flue pipes that penetrate slate, tile or flat roofs.',
  ],
  areasQ: 'Do you require lead-work services in Berkshire, Thames Valley, Surrey or South London?',
  quote: 'Call or email to arrange a FREE quotation',
};

// [T-HOME] verbatim
export const tavan = {
  experience: 'At Tavan we offer a competitively priced, professional roofing service, combined with over 100 man-years of experience and knowledge in the roofing industry.',
  base: 'We are based in Bracknell and operate throughout the home counties and M4 corridor.',
};

export type Service = { slug: string; name: string; short: string; body: string[]; img: string; alt: string; gallery: string[]; source: string };

// names = [T-LEAD] list; last two are what the photos show. Body copy = [QW]
export const services: Service[] = [
  {
    slug: 'lead-sheet-roofs', name: 'Lead sheet roofs', source: 'T-LEAD',
    short: 'Flat, pitched and shaped roofs dressed in sheet lead with rolls and drips.',
    body: ['Sheet lead laid in bays and jointed with wood-cored rolls, so each bay can move with heat without splitting.', 'Lanterns, cupolas, bay roofs and small canopies, as well as larger flat and pitched areas.'],
    img: 'lead-lantern-roof-rolls', alt: 'Octagonal lead sheet roof with wood-cored rolls on every hip',
    gallery: ['lead-lantern-ball-finial', 'lead-lantern-roof-rolls', 'lead-bay-roof-clay-tiles', 'lead-pier-cap-hips'],
  },
  {
    slug: 'lead-dormer-cheeks', name: 'Lead side cheeks to dormers', source: 'T-LEAD',
    short: 'Dormer cheeks, tops and aprons clad in lead and tied into the roof.',
    body: ['Dormer side cheeks, tops and front aprons clad in lead and dressed into the surrounding slates or tiles.', 'New dormers, and replacement of tired or leaking dormer leadwork.'],
    img: 'lead-dormer-cheeks', alt: 'Lead-clad dormer cheeks on a clay-tiled roof',
    gallery: ['lead-dormer-cheeks', 'lead-dormers-slate-roof', 'lead-dormer-roll-joints', 'lead-dormers-row', 'lead-dormer-tops-row', 'lead-dormers-clay-roof'],
  },
  {
    slug: 'lead-box-gutters', name: 'Lead box gutters', source: 'T-LEAD',
    short: 'Box and parapet gutters lined in lead, with steps (drips) to keep water moving.',
    body: ['Box and parapet gutters lined in lead behind parapet walls and between roof slopes.', 'Laid in lengths with drips (steps) between them, and dressed up under the roof covering.'],
    img: 'parapet-gutter-stone-house', alt: 'Long lead-lined parapet gutter behind a stone parapet wall',
    gallery: ['parapet-gutter-stone-house', 'parapet-gutter-lead-lined', 'parapet-gutter-leadworker'],
  },
  {
    slug: 'lead-box-windows', name: 'Lead box windows', source: 'T-LEAD',
    short: 'Lead roofs over bay and box windows, finished to the eaves.',
    body: ['Lead roofs over box and bay windows, with rolls and a dressed front edge.', 'Old coverings stripped and replaced, or new leadwork to a new bay.'],
    img: 'lead-bay-roof-clay-tiles', alt: 'Lead roof with rolls over a white bay window on a clay-tiled house',
    gallery: ['lead-bay-roof-clay-tiles', 'lead-dormer-tops-row'],
  },
  {
    slug: 'chimney-gutters', name: 'Chimney gutters', source: 'T-LEAD',
    short: 'Back gutters behind chimney stacks, lined in lead to keep the stack dry.',
    body: ['The back gutter behind a chimney stack catches everything running down the slope above it.', 'Lined in lead and dressed up the stack and under the roof covering.'],
    img: 'cornice-capping-stone', alt: 'Lead gutter and capping running along a stone parapet towards the chimney stacks',
    gallery: ['cornice-capping-stone', 'parapet-gutter-stone-house'],
  },
  {
    slug: 'lead-flashings', name: 'Flashings to parapet walls and chimney stacks', source: 'T-LEAD',
    short: 'Step, cover and apron flashings where a roof meets a wall or stack.',
    body: ['Step, cover and apron flashings where a roof meets a parapet wall or chimney stack.', 'Replacing split or slipped flashings is often what stops a leak.'],
    img: 'parapet-gutter-lead-lined', alt: 'Lead flashing and gutter along a parapet wall',
    gallery: ['parapet-gutter-lead-lined', 'cornice-capping-stone', 'parapet-gutter-leadworker'],
  },
  {
    slug: 'lead-slates', name: 'Lead slates for flue pipes', source: 'T-LEAD',
    short: 'Lead slates where flue pipes pass through slate, tile or flat roofs.',
    body: ['Installation of lead slates for flue pipes that penetrate slate, tile or flat roofs.', 'A lead slate seals round the pipe and is dressed into the roof covering around it.'],
    img: 'lead-dormers-slate-roof', alt: 'Slate roof with lead-clad dormers',
    gallery: ['lead-dormers-slate-roof'],
  },
  {
    slug: 'lead-cappings-and-pediments', name: 'Lead cappings, copings & curved pediments', source: 'photos',
    short: 'Curved pediments, parapet copings and cornices clad in lead, shaped on site.',
    body: ['Curved pediments, parapet copings, cornices and pier caps clad in lead and shaped to their contours on site.', 'Boarded first, then the lead is bossed and welded to the curve.'],
    img: 'curved-pediment-finished', alt: 'Curved pediment fully clad in lead above a flat roof',
    gallery: ['curved-pediment-finished', 'curved-pediment-detail', 'curved-pediment-coping', 'curved-pediment-flat-roof', 'lead-coping-welded', 'lead-pier-cap-rolls'],
  },
  {
    slug: 'lead-lanterns-and-finials', name: 'Lead lanterns, cupolas & finials', source: 'photos',
    short: 'Octagonal lantern roofs and leaded ball finials.',
    body: ['Octagonal lantern and cupola roofs in sheet lead, with rolls on every hip.', 'Timber ball finials and bases covered in lead to crown them.'],
    img: 'lead-lantern-ball-finial', alt: 'Octagonal lead lantern roof with a leaded ball finial, on scaffold',
    gallery: ['lead-lantern-ball-finial', 'lead-lantern-roof-rolls', 'lead-and-timber-finial'],
  },
];

// gallery — captions describe what each photo shows [QW]
export const work: { img: string; cap: string; tag: string }[] = [
  { img: 'curved-pediment-finished', cap: 'Curved pediment clad in lead', tag: 'Pediments' },
  { img: 'lead-lantern-ball-finial', cap: 'Lead lantern roof with ball finial', tag: 'Lanterns' },
  { img: 'parapet-gutter-stone-house', cap: 'Lead parapet gutter, stone house', tag: 'Gutters' },
  { img: 'lead-dormer-cheeks', cap: 'Lead dormer cheeks and top', tag: 'Dormers' },
  { img: 'curved-pediment-detail', cap: 'Lead dressed round a curved pediment', tag: 'Pediments' },
  { img: 'lead-bay-roof-clay-tiles', cap: 'Lead bay roof with rolls', tag: 'Bay roofs' },
  { img: 'lead-pier-cap-rolls', cap: 'Lead pier cap with rolls', tag: 'Cappings' },
  { img: 'lead-dormers-slate-roof', cap: 'Lead dormers on a slate roof', tag: 'Dormers' },
  { img: 'cornice-capping-stone', cap: 'Lead cornice capping', tag: 'Cappings' },
  { img: 'curved-pediment-coping', cap: 'Lead coping meeting a curved pediment', tag: 'Pediments' },
  { img: 'lead-lantern-roof-rolls', cap: 'Octagonal lead roof, hip rolls', tag: 'Lanterns' },
  { img: 'lead-dormer-roll-joints', cap: 'Lead dormer with roll joints', tag: 'Dormers' },
  { img: 'parapet-gutter-leadworker', cap: 'Leadworker on a parapet gutter', tag: 'Gutters' },
  { img: 'lead-coping-welded', cap: 'Lead coping with welded corners', tag: 'Cappings' },
  { img: 'lead-dormer-tops-row', cap: 'Row of leaded dormer tops', tag: 'Dormers' },
  { img: 'curved-pediment-flat-roof', cap: 'Pediment and copings from the roof', tag: 'Pediments' },
  { img: 'lead-pier-cap-hips', cap: 'Lead pier cap, hip rolls', tag: 'Cappings' },
  { img: 'lead-dormers-row', cap: 'Lead dormers in a row', tag: 'Dormers' },
  { img: 'parapet-gutter-lead-lined', cap: 'Lead-lined parapet gutter', tag: 'Gutters' },
  { img: 'lead-dormers-clay-roof', cap: 'Leaded dormers on a clay-tiled roof', tag: 'Dormers' },
  { img: 'curved-pediment-lead-clad', cap: 'Lead going on to a curved pediment', tag: 'In progress' },
  { img: 'lead-and-timber-finial', cap: 'Rolled lead and a timber ball finial', tag: 'In progress' },
];

// one job, three stages (same pediment)
export const process = [
  { img: 'curved-pediment-ply', n: '01', t: 'Boarded', d: 'The curve is boarded out first, so the lead has a sound base.' },
  { img: 'curved-pediment-lead-clad', n: '02', t: 'Leaded', d: 'Lead is dressed and shaped to the contour on site.' },
  { img: 'curved-pediment-coping', n: '03', t: 'Finished', d: 'Copings and pediment finished and tied into the flat roof.' },
];

// 3D lantern parts [QW]
export const lantern = {
  kicker: 'Built in lead',
  title: 'A lantern roof, piece by piece',
  p: 'The octagonal lead lantern roof from one of our jobs, rebuilt in 3D. Tap a part to see where it goes.',
  parts: [
    { key: 'base', label: 'Base & apron', words: 'Octagonal base with a lead apron dressed down over the upstand.' },
    { key: 'bays', label: 'Lead bays', words: 'Eight sheets of lead, one to each face.' },
    { key: 'rolls', label: 'Hip rolls', words: 'Wood-cored rolls cover the joints on every hip.' },
    { key: 'finial', label: 'Ball finial', words: 'A timber ball and collar, covered in lead.' },
  ],
};

export const faqs = [
  { q: 'What lead work do you do?', a: 'Lead sheet roofs, lead side cheeks to dormers, lead box gutters, lead box windows, chimney gutters, flashings to parapet walls and chimney stacks, and lead slates for flue pipes that penetrate slate, tile or flat roofs.' },
  { q: 'What standard do you work to?', a: 'All our lead work comply with the BS EN 12588 standard.' },
  { q: 'Which areas do you cover?', a: 'Berkshire, Thames Valley, Surrey and South London. We are based in Bracknell and operate throughout the home counties and M4 corridor.' },
  { q: 'Is the quote free?', a: 'Yes. Call or email to arrange a FREE quotation.' },
  { q: 'How are you connected to Tavan Contractors?', a: 'London Leadwork is the lead work side of Tavan Contractors, the Bracknell roofing company, now run as its own business.' },
];

export const nav = [
  { label: 'Lead work', href: '/lead-work' },
  { label: 'Our work', href: '/our-work' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Areas', href: '/areas' },
  { label: 'Contact', href: '/contact' },
];

// Areas — coverage from [T-LEAD] (Berkshire, Thames Valley, Surrey, South London) + [T-HOME] (home counties, M4 corridor)
export type Area = { slug: string; name: string; county: string; lat: number; lng: number };
export const areas: Area[] = [
  { slug: 'bracknell', name: 'Bracknell', county: 'Berkshire', lat: 51.4136, lng: -0.7505 },
  { slug: 'reading', name: 'Reading', county: 'Berkshire', lat: 51.4543, lng: -0.9781 },
  { slug: 'wokingham', name: 'Wokingham', county: 'Berkshire', lat: 51.4112, lng: -0.8339 },
  { slug: 'windsor', name: 'Windsor', county: 'Berkshire', lat: 51.4817, lng: -0.6136 },
  { slug: 'maidenhead', name: 'Maidenhead', county: 'Berkshire', lat: 51.5218, lng: -0.7177 },
  { slug: 'ascot', name: 'Ascot', county: 'Berkshire', lat: 51.4084, lng: -0.6707 },
  { slug: 'slough', name: 'Slough', county: 'Berkshire', lat: 51.5105, lng: -0.595 },
  { slug: 'crowthorne', name: 'Crowthorne', county: 'Berkshire', lat: 51.3709, lng: -0.793 },
  { slug: 'sandhurst', name: 'Sandhurst', county: 'Berkshire', lat: 51.348, lng: -0.804 },
  { slug: 'newbury', name: 'Newbury', county: 'Berkshire', lat: 51.4014, lng: -1.3231 },
  { slug: 'henley-on-thames', name: 'Henley-on-Thames', county: 'Thames Valley', lat: 51.5357, lng: -0.903 },
  { slug: 'marlow', name: 'Marlow', county: 'Thames Valley', lat: 51.571, lng: -0.776 },
  { slug: 'camberley', name: 'Camberley', county: 'Surrey', lat: 51.337, lng: -0.742 },
  { slug: 'woking', name: 'Woking', county: 'Surrey', lat: 51.319, lng: -0.558 },
  { slug: 'guildford', name: 'Guildford', county: 'Surrey', lat: 51.2362, lng: -0.5704 },
  { slug: 'staines-upon-thames', name: 'Staines-upon-Thames', county: 'Surrey', lat: 51.434, lng: -0.511 },
  { slug: 'egham', name: 'Egham', county: 'Surrey', lat: 51.431, lng: -0.552 },
  { slug: 'virginia-water', name: 'Virginia Water', county: 'Surrey', lat: 51.402, lng: -0.566 },
  { slug: 'weybridge', name: 'Weybridge', county: 'Surrey', lat: 51.371, lng: -0.457 },
  { slug: 'cobham', name: 'Cobham', county: 'Surrey', lat: 51.329, lng: -0.409 },
  { slug: 'esher', name: 'Esher', county: 'Surrey', lat: 51.369, lng: -0.365 },
  { slug: 'epsom', name: 'Epsom', county: 'Surrey', lat: 51.336, lng: -0.267 },
  { slug: 'farnborough', name: 'Farnborough', county: 'Hampshire', lat: 51.294, lng: -0.756 },
  { slug: 'kingston-upon-thames', name: 'Kingston upon Thames', county: 'South London', lat: 51.4123, lng: -0.3007 },
  { slug: 'richmond', name: 'Richmond', county: 'South London', lat: 51.4613, lng: -0.3037 },
  { slug: 'wimbledon', name: 'Wimbledon', county: 'South London', lat: 51.4214, lng: -0.2064 },
  { slug: 'putney', name: 'Putney', county: 'South London', lat: 51.459, lng: -0.216 },
  { slug: 'clapham', name: 'Clapham', county: 'South London', lat: 51.462, lng: -0.138 },
  { slug: 'sutton', name: 'Sutton', county: 'South London', lat: 51.3618, lng: -0.1945 },
  { slug: 'croydon', name: 'Croydon', county: 'South London', lat: 51.3762, lng: -0.0982 },
];
export const regions = ['Berkshire', 'Thames Valley', 'Surrey', 'Hampshire', 'South London'];

const R = 3958.8;
export function miles(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
export const fromBase = (a: Area) => Math.max(1, Math.round(miles(contact.geo, a)));
export const nearby = (a: Area, n = 4) => areas.filter((x) => x.slug !== a.slug).sort((x, y) => miles(a, x) - miles(a, y)).slice(0, n);

export const img = (k: string, sm = false) => `/img/work/${k}${sm ? '-sm' : ''}.webp`;
