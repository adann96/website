  $(document).ready(function()
{
  $('header').css('overflow','hidden');
  $("#hamburger").click(function()
    {
    $('header').slideToggle("slow");
    });
});