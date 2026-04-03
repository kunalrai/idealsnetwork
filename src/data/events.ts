export interface Event {
  title: string;
  slug: string;
  date: string;
  location: string;
  type: string;
  mode: string;
  url: string;
  startDate?: string;
  endDate?: string;
}

export const upcomingEvents: Event[] = [
  {
    title: 'Valuation and Fundraising of Tech and AI Start-Ups',
    slug: 'valuation-fundraising-tech-ai-startups-20march-2026',
    date: 'May 8, 2026',
    startDate: '2026-05-08',
    endDate: '2026-05-08',
    location: 'Singapore',
    type: 'Workshop',
    mode: 'Hybrid',
    url: 'https://idealsnetwork.com/valuation-fundraising-tech-ai-startups-20march-2026',
  },
  {
    title: 'Negotiation and Structuring of M&A and PE Deals',
    slug: 'negotiation-structuring-ma-pe-deals-17april-2026',
    date: 'May 15, 2026',
    startDate: '2026-05-15',
    endDate: '2026-05-15',
    location: 'Delhi',
    type: 'Workshop',
    mode: 'Hybrid',
    url: 'https://idealsnetwork.com/negotiation-structuring-ma-pe-deals-17april-2026',
  },
  {
  title: "Business Valuation Masterclass | Singapore '26",
    slug: 'business-valuation-with-aswath-damodaran-nov-singapore',
    date: 'November 12–13, 2026',
    startDate: '2026-11-12',
    endDate: '2026-11-13',
    location: 'Singapore',
    type: 'Workshop',
    mode: 'Hybrid',
    url: 'https://www.idealsnetwork.com/business-valuation-with-aswath-damodaran-nov-singapore',
  },
];

export const popularEvents: { title: string; url: string }[] = [
  { title: 'Due Diligence Master Class', url: 'https://www.idealsnetwork.com/due-diligence-master-class' },
  { title: 'Valuation and Fundraising of Tech Startups', url: 'https://www.idealsnetwork.com/valuation-and-funding-of-infra-real-estate-companies' },
  { title: 'Business Valuation & Financial Modeling Workshop', url: 'https://www.idealsnetwork.com/business-valuation-financial-modeling-workshop' },
  { title: 'Mergers And Acquisitions Workshop', url: 'https://www.idealsnetwork.com/mergers-and-acquisitions-workshop' },
  { title: 'Structuring & Negotiation of M&A and PE Deals', url: 'https://www.idealsnetwork.com/structuring-and-negotiation-of-M-&-A-and-PE-Deals' },
  { title: 'South East Asia Business Summit 2018', url: 'https://www.idealsnetwork.com/south-east-asia-business-summit-2018' },
  { title: 'Investment Deal Summit', url: 'https://www.idealsnetwork.com/investment-deal-summit' },
  { title: 'Business Valuation Summit', url: 'https://www.idealsnetwork.com/business-valuation-summit' },
  { title: 'Business Valuation Masterclass', url: '/business-valuation-masterclass' },
];

export const pastEventCities: { city: string; url: string; bg: string }[] = [
  { city: 'Mumbai', url: 'https://idealsnetwork.com/mumbai', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1655898624.jpg)' },
  { city: 'Bengaluru', url: 'https://idealsnetwork.com/bengaluru', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1655898716.jpg)' },
  { city: 'Hong Kong', url: 'https://idealsnetwork.com/hongkong', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1655898795.jpg)' },
  { city: 'Jakarta', url: 'https://idealsnetwork.com/jakarta-new', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1712395900.jpg)' },
  { city: 'Kuala Lumpur', url: 'https://idealsnetwork.com/kuala-lumpur', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1655898850.jpg)' },
  { city: 'Bangkok', url: 'https://idealsnetwork.com/bangkok', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1655899848.jpg)' },
  { city: 'Delhi', url: 'https://idealsnetwork.com/delhi', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1655898624.jpg)' },
  { city: 'Singapore', url: 'https://idealsnetwork.com/singapore-page', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1655898624.jpg)' },
  { city: 'Online', url: 'https://idealsnetwork.com/online-events', bg: 'url(https://www.idealsnetwork.com/uploads/images/img/1655898624.jpg)' },
];
