function getDogPicture(num) {
  const url = "https://dog.ceo/api/breeds/image/random/" + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function checkValidForm(val) {
  if(val >= 1 && val <= 50) {
    return true;
  }
  else {
    return false;
  }
}

function checkForm() {
  $('form').submit(event => {
    event.preventDefault();
    const resultNum = $('#num').val();
    if(checkValidForm(resultNum)) {
      console.log(`Results to retrieve: ${resultNum}`);
      getDogPicture(resultNum);
    }
    else {
      alert('Try Again. Enter a number between 1 - 50.')
    }
  });
}

$(function() {
  console.log('Yay! App is loaded! Waiting for submit!');
  checkForm();
});