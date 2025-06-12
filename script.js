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
let buffer = '';

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];

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
    document.getElementById('link-hack').style.display = 'block';
    const linkHack = document.getElementById('link-hack');
if (linkHack) linkHack.style.display = 'block';

   /* // ✅ Trigger glitch + hat AFTER typing is complete
    setTimeout(() => {
      const original = terminal.innerHTML;
      terminal.innerHTML = '<pre class="glow">█▒▓▒▓▒█▒▓▒▓▒█▒▓▒▓▒█▒▓▒▓▒█</pre>';

      setTimeout(() => {
        terminal.innerHTML = '<pre class="glow">' + topHatArt + '</pre>';

        setTimeout(() => {
          terminal.innerHTML = original;
        }, 3000);
      }, 400);
    }, 20000);
  }
}
*/
typeLine();
