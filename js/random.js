const randomName = document.querySelectorAll("today");
console.log(randomName);
var uniq=Math.floor(1/(n*s)*100*1000)/1000;

function randomer() {
var rn = Math.round(Math.random()*(n-1));
var rs = Math.round(Math.random()*(s-1))
randomName[0].innerHTML = `Today: <textn>${names[rn]} ${surnames[rs]}</textn>!<br>Chance of this name being dropped is <textu>${uniq}%</textu>!`;
}

const bodyElement = document.querySelectorAll("body");
console.log(bodyElement);
bodyElement[0].background = `images/yager/yager${Math.round(Math.random()*4)}.jpg`;
console.log(bodyElement[0].background);
//document.write("Today: <textn>"+names[rn]+" "+surnames[rs]+"</textn>!<br>Chance of this name being dropped is <textu>"+uniq+"%</textu>!");

/*function bodyBackgroundRandomer() {
  bodyElement[0].background = `images/yager/yager${Math.round(Math.random()*4)}.jpg`;
}*/
