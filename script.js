window.addEventListener('DOMContentLoaded', () => {
  const gifList = [
    'images/NothingandNowhere.gif',
    'images/spookyliveaction.gif',
    'images/Star2.gif',
    'images/Nona.gif'
  ];

  const gifDurations = [4000, 4000, 4000, 4000]; // ms per gif

  const gifElement = document.getElementById('stitch-gif');
  const intro = document.getElementById('intro-overlay');
  const main = document.getElementById('main-site');

  let current = 0;

  function playNextGif() {
    if (!gifElement || !intro || !main) {
      console.error('Missing elements:', { gifElement, intro, main });
      return;
    }

    if (current < gifList.length) {
      gifElement.src = gifList[current];
      setTimeout(() => {
        current++;
        playNextGif();
      }, gifDurations[current]);
    } else {
      intro.style.opacity = '0';
      setTimeout(() => {
        intro.style.display = 'none';
        document.body.classList.add('show-page');
        main.classList.add('show');
      }, 1000); // Match CSS transition duration
    }
  }

  playNextGif();
});
