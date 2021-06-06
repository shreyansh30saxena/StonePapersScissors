let element1 = document.querySelector(".stone");
let element2 = document.querySelector(".paper");
let element3 = document.querySelector(".scissors");
let user = document.getElementById("user");
let img = document.querySelector(".img");
let result = document.getElementById("result");
let winner = document.getElementById("winner");
let overlay = document.getElementById("container");
let check = "";
let counter = 0;
let userScore = 0;
let computerScore = 0;


if (element1) {
  element1.addEventListener("click", swapper);
}
if (element2) {

  element2.addEventListener("click", swapper2);

}
if (element3) {

  element3.addEventListener("click", swapper3);

}


let myPic = new Array("https://ik.imagekit.io/kmclllhgwqm/stone3_B7OMm2BxP.png", "https://ik.imagekit.io/kmclllhgwqm/paper4_vdjkq3UXo.png", "https://ik.imagekit.io/kmclllhgwqm/scissors2_eulHZ4HcP.png", "https://ik.imagekit.io/kmclllhgwqm/stone3_B7OMm2BxP.png", "https://ik.imagekit.io/kmclllhgwqm/paper4_vdjkq3UXo.png", "https://ik.imagekit.io/kmclllhgwqm/scissors2_eulHZ4HcP.png", "https://ik.imagekit.io/kmclllhgwqm/stone3_B7OMm2BxP.png", "https://ik.imagekit.io/kmclllhgwqm/paper4_vdjkq3UXo.png", "https://ik.imagekit.io/kmclllhgwqm/scissors2_eulHZ4HcP.png");

function choosePic() {
  let rand = Math.floor((Math.random() * myPic.length));
  let randImage = myPic[rand];
  document.getElementById("computer").src = randImage;

  return randImage;
}

function swapper() {

  if (counter < 3) {
    counter += 1;
    console.log(counter);
    let res = choosePic();
    if (res == "https://ik.imagekit.io/kmclllhgwqm/stone3_B7OMm2BxP.png") {}
    if (res == "https://ik.imagekit.io/kmclllhgwqm/paper4_vdjkq3UXo.png") {
      computerScore += 1;
      document.getElementById("scoreComputer").innerHTML = computerScore;
    }
    if (res == "https://ik.imagekit.io/kmclllhgwqm/scissors2_eulHZ4HcP.png") {
      userScore += 1;
      document.getElementById("scoreUser").innerHTML = userScore;
    }
    user.src = "https://ik.imagekit.io/kmclllhgwqm/stone3_B7OMm2BxP.png";
  } else {
    if (computerScore > userScore) {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "Computer Wins";
      result.style.display = "block";
    }
    if (computerScore < userScore) {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "You Won";
      result.style.display = "block";
    } else {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "It's A Draw";
      result.style.display = "block";
    }
  }
}

function swapper2() {

  if (counter < 3) {
    counter += 1;
    let res = choosePic();
    if (res == "https://ik.imagekit.io/kmclllhgwqm/paper4_vdjkq3UXo.png") {}
    if (res == "https://ik.imagekit.io/kmclllhgwqm/scissors2_eulHZ4HcP.png") {
      computerScore += 1;
      document.getElementById("scoreComputer").innerHTML = computerScore;
    }
    if (res == "https://ik.imagekit.io/kmclllhgwqm/stone3_B7OMm2BxP.png") {
      userScore += 1;
      document.getElementById("scoreUser").innerHTML = userScore;
    }
    user.src = "https://ik.imagekit.io/kmclllhgwqm/paper4_vdjkq3UXo.png";
  } else {
    if (computerScore > userScore) {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "Computer Wins";
      result.style.display = "block";
    }
    if (computerScore < userScore) {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "You Won";
      result.style.display = "block";
    } else {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "It's A Draw";
      result.style.display = "block";
    }
  }
}

function swapper3() {

  if (counter < 3) {
    counter += 1;
    let res = choosePic();
    if (res == "https://ik.imagekit.io/kmclllhgwqm/scissors2_eulHZ4HcP.png") {}
    if (res == "https://ik.imagekit.io/kmclllhgwqm/stone3_B7OMm2BxP.png") {
      computerScore += 1;
      document.getElementById("scoreComputer").innerHTML = computerScore;
    }
    if (res == "https://ik.imagekit.io/kmclllhgwqm/paper4_vdjkq3UXo.png") {
      userScore += 1;
      document.getElementById("scoreUser").innerHTML = userScore;
    }
    user.src = "https://ik.imagekit.io/kmclllhgwqm/scissors2_eulHZ4HcP.png";
  } else {
    if (computerScore > userScore) {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "Computer Wins";
      result.style.display = "block";
    }
    if (computerScore < userScore) {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "You Won";
      result.style.display = "block";
    } else {
      overlay.style.filter = "blur(10px)";
      winner.innerHTML = "It's A Draw";
      result.style.display = "block";
    }
  }
}

function playagain() {

  overlay.style.filter = "none";
  result.style.display = "none";
  computerScore = 0;
  userScore = 0;
  counter = 0;
  document.getElementById("scoreComputer").innerHTML = computerScore;
  document.getElementById("scoreUser").innerHTML = userScore;
  user.style.width = "200px";
  user.src = "https://ik.imagekit.io/kmclllhgwqm/user_9McwxzVr2.png";
  document.getElementById("computer").src="https://ik.imagekit.io/kmclllhgwqm/computer2_UNxqBofs2.png"


}
/* onClick="choosePic()"*/
