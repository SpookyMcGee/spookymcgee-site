const terminal = document.getElementById('terminal');

const lines = [
  'SpookyMcGee.com v1.1',
  '',
  'Booting into the stitched dimension...',
  'Loading user profile [REDACTED_██_McGee]',
  'Accessing memory archive...',
  '',
  '[OK] — Connected to soul frequency',
  '[OK] — Echo signal detected',
  '',
  'Welcome to the echo space.',
  'Spooky is watching.',
  '',
  '<a href="star.html" class="term-link">> ACCESS: /star.html — PROFILE ACTIVE</a>',
  '<a href="nona.html" class="term-link">> ACCESS: /nona.html — PROFILE STABLE</a>',
  '<a href="spooky.html" class="term-link">> ACCESS: /spooky.html — <span class="flicker">PROFILE CORRUPTED</span></a>',
  '',
  '> logout initiated...',
  ''
];

let lineIndex = 0;
let charIndex = 0;
let buffer = ''; // holds fully typed content

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];

    // If the line contains HTML, skip character typing
    if (currentLine.includes('<a')) {
      buffer += currentLine + '<br>';
      terminal.innerHTML = buffer + '<span class="blinker">&nbsp;</span>';
      lineIndex++;
      setTimeout(typeLine, 250);
      return;
    }

    // Character typing
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
    document.getElementById('link-hack').style.display = 'block';
  }
}

typeLine();
