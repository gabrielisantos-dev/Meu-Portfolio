const nameElement = document.getElementById('name');
const devName = 'Gabrieli Santos.';

function typeWriter(text, i) {
  if (i < text.length) {
    nameElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 100);
  }
}

typeWriter(devName, 0);
