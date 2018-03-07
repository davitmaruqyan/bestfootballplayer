
$('#btn1').click(function (e) {
  e.preventDefault();

  var data = {
    email: $('#login_email').val(),
    pass: $('#login_password').val()
  };

  $.post('http://localhost:3000/login/', data, function(xhr){
    let _xhr = JSON.parse(xhr);
    if (_xhr.errLogin) {
      $('.errEmail').html(_xhr.errLogin)
    };

    if (_xhr.errPass) {
      $('.errPass').html(_xhr.errPass)
    };

    if (_xhr.redirect) {
      window.location.href = _xhr.redirect
    }
  })
})
