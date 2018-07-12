$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});

    $("#home").click(function()
    {
        $("#main-view").load("/index.php");
    });
    $("#profile").click(function()
    {
        $("#main-view").load("pages/profile.php");
    });
    $("#skills").click(function()
    {
        $("#main-view").load("pages/skills.php");
    });
    $("#work").click(function()
    {
        $("#main-view").load("pages/work.php");
    });
    $("#contact").click(function()
    {
        $("#main-view").load("pages/contact.php");
    });