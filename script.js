const nameElement = document.getElementById('name');
const devName = 'Gabrieli Santos.';

function typeWriter(text, i) {
  if (i < text.length) {
    nameElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 100);
  } else {
    setTimeout(() => eraseText(text), 2000);
  }
}

function eraseText(text) {
  let length = text.length;
  if (length > 0) {
    nameElement.innerHTML = text.substring(0, length - 1);
    setTimeout(() => eraseText(text.substring(0, length - 1)), 100);
  } else {
    document.querySelector('.main').style.display = 'block';
    document.querySelector('.background-container').style.display = 'none';
    document.body.style.backgroundColor = '#030518';
  }
}

typeWriter(devName, 0);
