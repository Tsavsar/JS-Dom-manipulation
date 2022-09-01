const usernamefield = document.querySelector(".username");
const agefield = document.querySelector(".age");
const dobfield = document.querySelector(".birthday");
const form = document.querySelector("form");

form.addEventListener("submit", storeData);

async function storeData(e) {
  e.preventDefault();

  const userData = {
    username: usernamefield.value,
    age: Number(agefield.value),
    dob: dobfield.value,
  };

  if (
    userData.username.trim() == "" ||
    userData.dob.trim() == "" ||
    isNaN(userData.age)
  )
    return;

  const stringifiedObj = JSON.stringify(userData);

  localStorage.setItem("userData", stringifiedObj);

  const aTag = document.createElement("a");
  aTag.setAttribute("href", "./blog.html");
  aTag.click();
}
