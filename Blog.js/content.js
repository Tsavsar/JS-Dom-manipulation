const topicfield = document.querySelector(".topic");
const messagefield = document.querySelector(".message");
const postsfield = document.querySelector(".posts");
const postbtn = document.querySelector(".post-btn");

postbtn.addEventListener("click", addpost);
postsfield.addEventListener("click", deletecheck);

function addpost(event) {
  event.preventDefault();

  const postDiv = document.createElement("div");
  postDiv.classList.add("post");


  const posttopic = document.createElement("h1");
  posttopic.innerText = topicfield.value;
  posttopic.classList.add("post-items");
  postDiv.appendChild(posttopic);

  const postmessage = document.createElement("h1");
  postmessage.innerText = messagefield.value;
  postmessage.classList.add("post-items");
  postDiv.appendChild(postmessage);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "yes";
  completedButton.classList.add("complete-btn");
  postDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "del";
  trashButton.classList.add("trash-btn");
  postDiv.appendChild(trashButton);

  postsfield.appendChild(postDiv);

  topicfield.value = "";
  messagefield.value = "";

  if (topicfield == "") return;
}

function deletecheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const post = item.parentElement;
    post.remove(messagefield);
    //post.classList.add("fall");
    post.addEventListener("transitionend", function () {});
  }

  if (item.classList[0] === "complete-btn") {
    const post = item.parentElement;
    post.classList.toggle("completed");
  }
}

const premade = document.querySelector(".premade");
const add = document.querySelector(".add");
const addlist = document.querySelector(".c-addhere");

add.addEventListener("click", newdiv);
addlist.addEventListener("click", deletelist);

function newdiv(event) {
  event.preventDefault();

  const adddiv = document.createElement("div");
  adddiv.classList.add("adddiv");

  const para = document.createElement("p");
  para.innerHTML = "This is a paragraph.";
  adddiv.appendChild(para);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "X";
  trashButton.classList.add("trash");
  adddiv.appendChild(trashButton);

  addlist.appendChild(adddiv);
}

function deletelist(e) {
  const item = e.target;

  if (item.classList[0] === "trash") {
    const adddiv = item.parentElement;
    adddiv.remove(messagefield);
    //post.classList.add("fall");
    adddiv.addEventListener("transitionend", function () {});
  }
}
