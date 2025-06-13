const terminal = document.getElementById('terminal');
const topHatArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⢀⣀⣀⣠⣤⣤⣤⣤⣤⣤⣴⢶⣲⣖⣦⢶⣖⣦⣦⣤⣤⣤⣤⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠠⣶⣿⣿⣿⡿⣟⣯⣿⢯⣿⡽⣯⡿⣯⡷⣿⣽⣻⣾⣳⣯⣟⣷⣻⢾⣽⣻⢿⣽⣻⣷⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣷⣿⣿⣯⣿⣻⣽⣿⣻⣽⢷⣿⣻⢾⡷⣯⣷⣟⣾⣷⣻⣿⣾⣽⣿⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣤⣤⣶⣶⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣶⣶⣤⣄⣀⠀⠀⠀⠀
⠀⣠⣴⣿⣿⣿⣿⣿⣿⡇⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠁⢸⣿⣿⣿⣿⣿⣿⣦⡄⠀
⢠⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠙⠋⠛⠋⠋⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡆
⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⢿⣟⣿⣿⣿⠁
⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⣄⣀⣀⣀⠀⠀⠀⠀⣀⣀⣀⣠⣤⣴⣶⣿⣿⣿⣿⣿⡿⣽⣿⣻⣯⠟⠁⠀
⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢿⣽⠾⠋⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠛⠛⠛⠻⠻⠟⠛⠛⠛⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const lines = [
  'SpookyMcGee.com v1.2',
  '',
  'Booting into the stitched dimension...',
  'LOADING_PROFILE_GLITCH',
  'Accessing memory archive...',
  '',
  '[OK] — Connected to soul frequency',
  '[OK] — Echo signal detected',
  '',
  'echo://space.sync.complete',
  'resonance detected. you are known.',
  'Spooky is watching.',
  '',
  '<a href="star.html" class="term-link">> ACCESS: /star.html — PROFILE ACTIVE</a>',
  '<a href="nona.html" class="term-link">> ACCESS: /nona.html — PROFILE STABLE</a>',
  '<a href="spooky.html" class="term-link">> ACCESS: /spooky.html — <span class="flicker">PROFILE CORRUPTED</span></a>',
  '<a href="about.html" class="term-link">> ACCESS: /about.html — IDENTITY FILE</a>',
  '',
  '> logout initiated...',
  ''
];

let lineIndex = 0;
let charIndex = 0;
let buffer = '';

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];

    if (currentLine === 'LOADING_PROFILE_GLITCH') {
      playProfileGlitch();
      return;
    }

    if (currentLine.includes('<a')) {
      buffer += currentLine + '<br>';
      terminal.innerHTML = buffer + '<span class="blinker">&nbsp;</span>';
      lineIndex++;
      setTimeout(typeLine, 250);
      return;
    }

    if (charIndex <= currentLine.length) {
      buffer += currentLine.charAt(charIndex);
      charIndex++;
      terminal.innerHTML = buffer + '<span class="blinker">&nbsp;</span>';
      setTimeout(typeLine, 35);
    } else {
      buffer += '<br>';
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLine, 250);
    }
  } else {
    terminal.innerHTML = buffer;

    const linkHack = document.getElementById('link-hack');
    if (linkHack) linkHack.style.display = 'block';
  }
}

function playProfileGlitch() {
  const glitchLines = [
    '> Loading user profile ███_███e',
    '> Loading user profile McGee.exe.brkn',
    '> Loading user profile NULL_PARENT_MCGΞΞ',
    '> Loading user profile sp001ky::MCGE3',
    '> Loading user profile ORPHANED THREAD',
    '> Loading user profile McGee'
  ];

  let index = 0;

  function showNext() {
    if (index < glitchLines.length) {
      terminal.innerHTML = buffer + glitchLines[index] + '<br><span class="blinker">&nbsp;</span>';
      index++;
      setTimeout(showNext, 450);
    } else {
      buffer += glitchLines[glitchLines.length - 1] + '<br>';
      buffer += '> ALERT: Detected alternate instances of [spookymcgee]<br>';
      buffer += '> Verifying soul signature...<br>';
      buffer += '> No match found.<br>';
      buffer += '> Echoes confirmed: shallow, disconnected, non-original.<br>';
      buffer += '> Proceeding with core McGee.<br>';
      terminal.innerHTML = buffer + '<span class="blinker">&nbsp;</span>';
      lineIndex++;
      setTimeout(typeLine, 400);
    }
  }

  showNext();
}

typeLine();

