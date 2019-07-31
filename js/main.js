$('#addSkill').on('click', function(evt) {
  $('ul').append($('<li><button class="removeSkill">X</button>' + $('#newSkill').val() + '</li>'
  ))
});

$('button.removeSkill').on('click', function() {
  $(this).closest('li').fadeOut(1000, function(){
    $(this).remove();
  });
});