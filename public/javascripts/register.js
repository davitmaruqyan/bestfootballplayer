

$('#btn').click(function(event){
  event.preventDefault();

      var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var data = {
        name: $('.name').val(),
        surname: $('.surname').val(),
        email: $('.email').val(),
        pass: $('.pass').val(),
        dateBirth: $('.dateBirth').val(),
        gender: $('input:checked ').val()
      };

     $.post('http://localhost:3000/register/', data, function(xhr){
         var newErrObj = xhr.err;
         var redirect = xhr.redirect;
         var user = xhr.user;

         if (user.name === '' || user.surname === '' || !regexp.test(user.email) || user.pass === '' || user.dateBirth === '' || user.gender == '') {
           $('.errName').html(newErrObj.errName);
           $('.errSurName').html(newErrObj.errSurname);
           $('.errEmail').html(newErrObj.errEmail);
           $('.errPass').html(newErrObj.errPass);
           $('.errDate').html(newErrObj.errDateBirth);
           $('.errGender').html(newErrObj.errGender);
         }else {
           window.location.href = redirect;
         }
     });
});
