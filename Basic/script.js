console.log("hello");

document.getElementById("btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const course = document.getElementById("course").value;

  console.log(name, email, password, course);

  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

  let flag = true;

  if (name === "") {
    document.getElementById("name_error").innerHTML = "Name cant be empty.";
    flag = false;
  } else {
    document.getElementById("name_error").innerHTML = "";
  }

  if (email === "") {
    document.getElementById("email_error").innerHTML = "Email cant be empty.";
    flag = false;
  } else if (!email.includes("@")) {
    document.getElementById("email_error").innerHTML = "Not a valid email.";
    flag = false;
  } else {
    document.getElementById("email_error").innerHTML = "";
  }

  if (password == "") {
    document.getElementById("password_error").innerHTML =
      "Password cant be empty.";
    flag = false;
  } else if (!passwordRegex.test(password)) {
    document.getElementById("password_error").innerHTML =
      "Please create a stronger password.";
    flag = false;
  } else {
    document.getElementById("password_error").innerHTML = "";
  }

  if (course === "" || course === undefined) {
    document.getElementById("course_error").innerHTML = "Course cant be empty.";
    flag = false;
  } else {
    document.getElementById("course_error").innerHTML = "";
  }

  if (flag) {
    document.getElementById("successmessage").innerHTML =
      "Student registered successfully.";

    document.getElementById("name_details").innerHTML =
      "Student Name : " + name;
    document.getElementById("email_details").innerHTML =
      "Student Email : " + email;
    document.getElementById("password_details").innerHTML =
      "Student Password : " + password;
    document.getElementById("course_details").innerHTML =
      "Student Course : " + course;
  }
});
