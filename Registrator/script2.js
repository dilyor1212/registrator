document.querySelector(".registration").addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector(".user").value;
  let password = document.querySelector(".pass").value;

  if (username.trim() === "" || password.trim() === "") {
    document.querySelector("#message").textContent = "Please fill in all fields.";
    return;
  }

  let existingUsers = JSON.parse(localStorage.getItem("users")) || {};

  if (existingUsers.hasOwnProperty(username)) {
    document.querySelector(".message").textContent = "Username already exists. Please choose another one.";
    return;
  }

  existingUsers[username] = password;
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("One second!\nUsername: " + username + "\nPassword: " + password);

  window.location.href = "index2.html";
});

document.querySelector(".login").addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.querySelector(".user").value;
  let password = document.querySelector(".pass").value;

  let existingUsers = JSON.parse(localStorage.getItem("users")) || {};

  if (existingUsers.hasOwnProperty(username) && existingUsers[username] === password) {
    alert("Login successful! Redirecting...");
    window.location.href = "index2.html";
  } else {
    alert("Invalid username or password.");
  }
});
