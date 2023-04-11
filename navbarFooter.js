function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navv").className =
      "navbar navbar-expand-sm navbar-light bg-light fixed-top navbar-scroll";
    document.getElementById("navv").style.transition = "ease-in .3s";
  } else {
    document.getElementById("navv").className =
      "navbar navbar-expand-sm navbar-dark bg-dark fixed-top bg-transparant";
    document.getElementById("navv").style.transition = "ease-out .3s";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function footerclick() {
  body.innerHTML = `<div class="footer-click d-flex justify-content-center mt-5">Nampaknya anda Gabut</div>`;
}
