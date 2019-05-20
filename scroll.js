window.onscroll = function() {
  if (document.body.scrollTop > 450)
    {
      document.querySelector("nav").className = "scrollMenu";
    }
  else {
      document.querySelector("nav").className = "";
    }
}