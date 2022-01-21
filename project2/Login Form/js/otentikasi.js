function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "nullDev" && password == "1234") {
      alert("Welcome back!");
    } else {
      alert("Login Failed");
      return false;
    }
  }