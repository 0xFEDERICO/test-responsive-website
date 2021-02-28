function animateCSS(element, animation, prefix = 'animate__'){
    const animationName = `${prefix}${animation}`;
    element.classList.add(`${prefix}animated`, animationName, `${prefix}slower`);
    element.style.animationFillMode = "forwards";
}

function entered(e) {
    if (e.keyCode == 13) {
      var url = document.getElementById("inputurl").value;
      if (url != null && url != "") {
        document.getElementById("iframephone").src = url;
        document.getElementById("iframetablet").src = url;
        document.getElementById("iframetabletland").src = url;
        document.getElementById("iframelaptop").src = url;
        animateCSS(document.getElementById("input-page"), "fadeOut");
        setTimeout(function(){
          animateCSS(document.getElementById("smartphone"), "bounceInDown");
          document.getElementById("smartphone").style.opacity = "1";
        }, 3000);
        setTimeout(function(){
          animateCSS(document.getElementById("smartphone"), "bounceOutDown");
        }, 10000);
        setTimeout(function(){
          animateCSS(document.getElementById("tablet"), "zoomIn");
          document.getElementById("tablet").style.opacity = "1";
        }, 13000);
        setTimeout(function(){
          animateCSS(document.getElementById("tablet"), "zoomOut");
        }, 20000);
        setTimeout(function(){
          animateCSS(document.getElementById("tablet-landscape"), "zoomIn");
          document.getElementById("tablet-landscape").style.opacity = "1";
        }, 23000);
        setTimeout(function(){
          animateCSS(document.getElementById("tablet-landscape"), "zoomOut");
        }, 30000);
        setTimeout(function(){
          animateCSS(document.getElementById("laptop"), "bounceInDown");
          document.getElementById("laptop").style.opacity = "1";
        }, 33000);
        setTimeout(function(){
          animateCSS(document.getElementById("laptop"), "bounceOutDown");
        }, 40000);
      }
    }
}
