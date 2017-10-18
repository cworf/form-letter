$(function(){
  $("#form").submit(function(event){
    var name = $("input#first-name").val() + " " + $("input#last-name").val();
    event.preventDefault();
    $("#name").text(name);
    $(".card-footer").show();
  });
});
