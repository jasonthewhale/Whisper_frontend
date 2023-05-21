/**
 * Toggle the dark and light mode.
 */
function toggleMode() {
  var body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    document.getElementById("logo_image").src = "./image/robot_black.svg";
    document.getElementById("toggle_image").src = "./image/sunlight.svg";
    document.getElementById("education_image").src = "./image/education_black.png";
    document.getElementById("work_image").src = "./image/work_black.png";
    document.getElementById("create_image").src = "./image/idea_black.png";
    document.getElementById("user_avatar").src = "./image/user_black.png";
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    document.getElementById("logo_image").src = "./image/robot_logo.svg";
    document.getElementById("toggle_image").src = "./image/moonlight.svg";
    document.getElementById("education_image").src = "./image/education_white.png";
    document.getElementById("work_image").src = "./image/work_white.png";
    document.getElementById("create_image").src = "./image/idea_white.png";
    document.getElementById("user_avatar").src = "./image/user_white.png";
  }
}

/**
 * Handle stream output for demo.
 */
function transcript() { 
  let paragraph = document.querySelector('#paragraph p');
  // Split the paragraph into words with space as the delimiter.
  let words = paragraph.innerHTML.split(' ');

  // Remove the paragraph element.
  paragraph.innerHTML = '';
  paragraph.style.display='block';

  // For each word in the words array, append it to the paragraph element with a delay.
  words.forEach((word, index) => {
  setTimeout(() => paragraph.innerHTML += word + ' ', index * 100);
  });
}

/**
 * Handle the navigation to the target URL.
 * @param {*} targetUrl Taget URL.
 * @param {*} ifCheck Check if input is empty.
 */
function navigateToUrl(targetUrl, ifCheck) {
  const inputBox = document.getElementById("email-box");
  const input = inputBox.value.trim();

  if (!ifCheck) {
    window.location.href = targetUrl;
  } else {
    if (input !== "") {
      // Set my personal email as an example.
      if (input == "youjunchen000220@gmail.com") {
        // Simulate existed user.
        alert("User exist, please log in.")
        window.location.href = "login.html";
      } else {
        // Simulate new user.
        alert("New user, please sign up.")
        window.location.href = "signup.html";
      }
    } else {
      alert("Please enter the email before going to next step.");
    }
  }
}

/**
* Wrapped functiion to handle signup process (User not existed).
* @param {*} targetUrl Taget URL.
*/
function signUp(targetUrl) {
const inputEmail = document.getElementById("email-box");
const inputPassword = document.getElementById("password1-box");
const inputRepeatPassword = document.getElementById("password2-box");
const email = inputEmail.value.trim();
const password = inputPassword.value.trim();
const repeatPassword = inputRepeatPassword.value.trim();

if (email == "" || password == "" || repeatPassword  == "") {
    alert("Email or password cannot be empty.");
} else if (password != repeatPassword) {
    alert("Password and repeated Password mismatch. \nPlease double check the password.");
} else {
    alert("Successfully Signed up.");
    // Navigate to the target URL if successfully signed up.
    window.location.href = targetUrl;
}
}

/**
 * Wrapped functiion to handle login process (Existed user).
 * @param {*} targetUrl Taget URL.
 */
function logIn(targetUrl) {
  const inputEmail = document.getElementById("email-box");
  const inputPassword = document.getElementById("password-box");
  const email = inputEmail.value.trim();
  const password = inputPassword.value.trim();

  // Check if the email or password is empty.
  if (email == "" || password == "") {
      alert("Email or password cannot be empty.")
  } else {
      alert("Successfully loged in, please submit url or upload file.")
      // Navigate to the target URL if successfully logged in.
      window.location.href = targetUrl;
  }
}


/**
 * Event listeneres for upload page
 */
document.getElementById('upload_button').addEventListener('click', function() {
  document.getElementById('file_input').click();
});

document.getElementById('file_input').addEventListener('change', function(e) {
  // Handle the file formats here.
  const fileName = e.target.files[0].name;
  document.getElementById('file_name').textContent = fileName;
  document.getElementById('file_info').style.display = 'block';
  document.getElementById('submit_button').style.display = 'inline-block';
});

document.getElementById('submit_button').addEventListener('click', function() {
  // Handle the file submission logic here.
  alert('File successfully submitted!');
});


document.getElementById('send_button').addEventListener('click', function() {
  // Handle the file submission logic here.
  const urlBox = document.getElementById("youtube_url");
  const url = urlBox.value.trim();
  if (url == "") {
    alert("URL cannot be empty, please provide a YouTube URL.")
  }
  else if (!url.includes("youtube")) {
    alert("Whisper only supports YouTube URL currently. \nPlease provide a valid URL.")
  }
  else {
    alert('URL successfully submitted! \nWhisper is watching vedio for you!');
    window.location.href = "history.html";
  }
});