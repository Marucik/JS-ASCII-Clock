function updateClock() {
  let date = new Date();
  let display = document.querySelector('.print');
  display.innerHTML = '';
  let time = date.getHours() < 10 ? '0' + date.getHours() : date.getHours().toString();
  time += ':';
  time += date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString();
  time += ':';
  time += date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds().toString();
  for (let i = 0; i < font.height; i++) {
    for (let j = 0; j < time.length; j++) {
      let number = time[j] == ':' ? 10 : parseInt(time[j]);
      display.innerHTML += font.digits[number][i];
    }
    display.innerHTML += '\n';
  }
}
//Starting without delay
updateClock();

setInterval(updateClock, 1000);