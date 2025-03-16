const events = [
  {
    date: 'FEB 28, 2025',
    title: 'OH HELLO KITTY! AMP @ SHIBUYA NOB',
    details: 'with Chikara the Boy, Northern Pele and SPIKE OUT',
    location: 'SHIBUYA, TOKYO',
  },
  {
    date: 'MAR 01, 2025',
    title: 'HEAVEN’S DOOR',
    details: 'with SPIKE OUT',
    location: 'SANGENJAYA, TOKYO',
  },
  {
    date: 'MAR 22, 2025',
    title: 'SADIE G: FOR THE FRIENDS @ CREAM SHIMOKITAZAWA',
    details: 'with VAIWATT, The Native Broadcast and more',
    location: 'SHIMOKITAZAWA, TOKYO',
  },
  {
    date: 'MAR 30, 2025',
    title: 'HEAVEN’S DOOR',
    details: 'with VAIWATT, The Native Broadcast and more',
    location: 'SANGENJAYA, TOKYO',
  },
  {
    date: 'APR 11, 2025',
    title: 'OUR TOWN @ RUBY ROOM TOKYO',
    details: 'with bands TBA',
    location: 'SHIBUYA, TOKYO',
  },
  {
    date: 'APR 12, 2025',
    title: 'AMP @ GAMUSO ASAGAYA',
    details: 'with bands TBA',
    location: 'ASAGAYA, TOKYO',
  },
  {
    date: 'MAY 3, 2025',
    title: `MAYONNAISE IN TOKYO - ONE NIGHT ONLY @ HEAVEN'S DOOR`,
    details: 'with Al Jang, FUQA and More Echo',
    location: 'SANGENJAYA, TOKYO',
  },
];

// Filter out past events
const getUpcomingEvents = () => {
  const today = new Date();
  return events.filter((event) => {
    const eventDate = new Date(event.date + ', 00:00:00');
    return eventDate >= today;
  });
};

export default getUpcomingEvents;
