let tweetBtn = document.getElementById("tweetBtn");
tweetBtn.addEventListener("click", submitTweet);
let tweetBody = document.getElementById("tweetBody");
// tweetBody.addEventListener("keyup", );
var count = 0;
tweetBody.onkeydown = () => {
  count = tweetBody.value.length;
  console.log(count);
  counter.innerText = count + ` characters`;
  if (count > 280) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
};
let counter = document.getElementById("counter");

console.log(count);
console.log(tweetBody.value.length);

function submitTweet() {
  let container = document.createElement("div");
  let tweetPara = document.createElement("p");

  let deleteIcon = document.createElement("img");

  let tweetsTimeline = document.getElementById("tweetsTimeline");
  if (count < 280) {
    tweetPara.innerHTML = tweetBody.value;
    let checkText = tweetPara.innerHTML;

    console.log(checkText.includes("@"));
    console.log(checkText.indexOf("@"));
    console.log(checkText.split(" "));
    console.log(
      checkText.slice(checkText.indexOf("@"), checkText.indexOf(" "))
    );
    let tweetArr = checkText.split(" ");
    for (var i in tweetArr) {
      if (tweetArr[i].charAt(0) === "@" && tweetArr[i].length > 1) {
        tweetArr[i] = `<a href="www.twitter.com/${tweetArr[i].slice(1)}">${
          tweetArr[i]
        }</a>`;
      }
    }
    tweetPara.innerHTML = tweetArr.join(" ");
    console.log(tweetArr.join(" "));

    deleteIcon.src = "src/delete-xxl.png";
    deleteIcon.style.width = "20px";
    deleteIcon.style.height = "20px";
    container.appendChild(tweetPara);
    container.appendChild(deleteIcon);
    container.style.display = "flex";
    // container.style.justifyContent = "space-evenly";
    deleteIcon.style.margin = "10pt 0 0 10pt";
    deleteIcon.addEventListener("click", deleteTweet);

    tweetsTimeline.appendChild(container);

    tweetBody.value = "";
    counter.innerText = 0 + " characters";
    function deleteTweet() {
      tweetsTimeline.removeChild(container);
    }
  } else {
    counter.innerText = "exceeded by " + (count - 280) + " characters";
  }
}
