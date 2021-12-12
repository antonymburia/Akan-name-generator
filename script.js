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
}