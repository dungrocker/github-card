$(document).ready(function () {
   $("input").keypress(function (event) {
       if (event.which == 13) {
           var n = $("input").val();
           $.get('https://api.github.com/users/' + n, function (data) {
              var anh=data.avatar_url;
              var ten=data.name;
               $('.container').append('<div class="card"><img src="' + anh + ' " class="avatar"><p class="name">' + ten + '</p></div>');
           });
       }
   });
});
