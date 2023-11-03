function validateMessage() {

  var msgField = document.getElementById('contact-message').value;

  var required = 30;

  var left = required - msgField.length;

  if (left > 0) {
    msgError.innerHTML = left + 'more characters required';
    return false;
  } else {
    msgError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
  }
}
