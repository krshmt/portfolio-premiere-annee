const scrollTo = document.getElementById('scroll-to');
scrollTo.addEventListener('click', () => {
  const target = document.getElementById('target'); // Remplacez "target-element" par l'ID de l'élément que vous souhaitez faire défiler en douceur
  target.scrollIntoView({behavior: 'smooth'});
});