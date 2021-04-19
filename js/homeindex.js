function fade() {
    $('.containerPreloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

function mouseOver() {
    document.getElementsByClassName("logo").src =
        "../images/home.png";
    document.getElementsByClassName("logo").style.width = "40px";
    }
      
function mouseOut() {
    document.getElementsByClassName("logo").src = "../images/logo1.svg";
    document.getElementsByClassName("logo").style.width = "70px";
    }