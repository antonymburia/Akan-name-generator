function namakangeneratore() {
  // declare variable
  var name = document.getElementById('name').value;
  var year = parseInt(document.getElementById('yob').value);
  var b_month = parseInt(document.getElementById('birth_month').value);
  var day = parseInt(document.getElementById('dob').value);
  var gender = document.getElementById('gender').value;

  // get exact date and month
  var current_year = new Date().getFullYear();
  var month = b_month -1;
  // get day number
  let date, week_day;
  date = new Date(year, month, day);
  week_day = date.getDay();
  // validate year month and day
  if (year < 1000 || year > current_year) {
    alert('enter a valid year');
  } else {
    if (month < 1 || month > 31) {
      alert('enter a valid month');
    }
  }

  // store names and days arrays
  var male_names = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var female_names = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];}
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];