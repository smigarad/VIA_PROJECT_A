function toogleContent(contentID) {
    var allContent = document.getElementsByClassName("links");
    var overlay = document.getElementById("overlay");
    var collabsable_links = document.getElementById("collapsable-links");

    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].id === contentID) {
            if (allContent[i].style.display === "none" || allContent[i].style.display === "") {
                allContent[i].style.display = "flex";
                overlay.style.display = "block";
                collabsable_links.style.borderTop = "1px solid black";
                collabsable_links.style.display = "block"; // Show collabsable_links
            } else {
                allContent[i].style.display = "none";
                overlay.style.display = "none";
                collabsable_links.style.borderTop = "none";
                collabsable_links.style.display = "none"; // Hide collabsable_links
            }
        } else {
            allContent[i].style.display = "none";
        }
    }
}


function closeContent(){
    var allContent = document.getElementsByClassName("links");
    var overlay  = document.getElementById("overlay");
    var subnav = document.getElementById("medium-subnav");
    var collapsable_links = document.getElementById('collapsable-links');
    for(var i = 0; i < allContent.length; i++){
        allContent[i].style.display = "none";
    }
    overlay.style.display = "none";
    subnav.style.display = "none";

}

document.addEventListener("DOMContentLoaded", function(){
    var overlay = document.getElementById("overlay");
    overlay.addEventListener("click", closeContent);
}
);

function toogleSubnavMedium(contentID){
    var subnav = document.getElementById("medium-subnav");
    var navbar_buttons = subnav.getElementsByClassName("navbar_button");
    var overlay = document.getElementById("overlay");
    var collabsable_links = document.getElementById("collapsable-links");
    if(subnav.style.display === "none" || subnav.style.display === ""){
        subnav.style.display = "flex";
        subnav.style.borderTop = "1px solid black";
        overlay.style.display = "block";
        for(var i = 0; i < navbar_buttons.length; i++){
            navbar_buttons[i].style.display = "block";
        }

    } else {
        subnav.style.display = "none";
        subnav.style.borderTop = "none";
        overlay.style.display = "none";
        collabsable_links.style.display = 'none';
        for(var i = 0; i < navbar_buttons.length; i++){
            navbar_buttons[i].style.display = "none";
        }
    }
}

function toogleContentMobile(contentID){
    var mobile_subnavs = document.getElementsByClassName("mobile-subnav");
    var links = document.getElementById(contentID);

    for(var i = 0; i < mobile_subnavs.length; i++){
        if(mobile_subnavs[i].id === contentID){
            if(mobile_subnavs[i].style.display === "none" || mobile_subnavs[i].style.display === ""){
                mobile_subnavs[i].style.display = "block";
            } else {
                mobile_subnavs[i].style.display = "none";
                links.style.borderTop = "none";
            }
        } else {
            mobile_subnavs[i].style.display = "none";
        }
    }

}

function setButtons(){
    var company_button = document.getElementById("company-button");
    var innovation_button = document.getElementById("innovation-button");
    var sustainability_button = document.getElementById("sustainability-button");
    var careers_button = document.getElementById("careers-button");
    var sport_button = document.getElementById("sport-button");

    var mobile_subnavs = document.getElementsByClassName("mobile-subnav");
    var links = document.getElementsByClassName("links");
    var subnav = document.getElementById("medium-subnav");
    var overlay = document.getElementById("overlay");
    if(window.innerWidth <= 1024){
        company_button.onclick = function (){toogleContentMobile('company-links-mobile')};
        innovation_button.onclick = function (){toogleContentMobile('innovation-links-mobile')};
        sustainability_button.onclick = function (){toogleContentMobile('sustainability-links-mobile')};
        careers_button.onclick = function (){toogleContentMobile('careers-links-mobile')};
        sport_button.onclick = function (){toogleContentMobile('sport-links-mobile')};


    }
    else{
        company_button.onclick = function (){toogleContent('company-links')};
        innovation_button.onclick = function (){toogleContent('innovation-links')};
        sustainability_button.onclick = function (){toogleContent('sustainability-links')};
        careers_button.onclick = function (){toogleContent('careers-links')};
        sport_button.onclick = function (){ toogleContent('sport-links')};
        for(var i = 0; i < mobile_subnavs.length; i++){
            mobile_subnavs[i].style.display = "none";
        }
        for(var i = 0; i < links.length; i++){
            links[i].style.borderTop = "none";
        }

        var collapsable_links = document.getElementById('collapsable-links');
        collapsable_links.style.display = 'none';
        subnav.style.display = "none";
        overlay.style.display = "none";
    }
}

var loaded = false;
window.addEventListener("resize", setButtons);
window.onload = function (){

    console.log('buttons called');
    console.log(loaded);
    if (loaded === true){
        var collapsable_links = document.getElementById('collapsable-links');
        collapsable_links.style.display = 'none';
        console.log('true');
    }
    loaded = true;
    setButtons();
}