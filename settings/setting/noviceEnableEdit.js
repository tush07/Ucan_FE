
var noTopButtonEn = document.getElementById("notopbuttonen");
var noTopButtonDis = document.getElementById("notopbuttondis");
var noTag1 = document.getElementById("notag1");
var noTag2 = document.getElementById("notag2");
var noTag3 = document.getElementById("notag3");




noTopButtonEn.addEventListener('click', function(event) {
    noTag1.disabled = !noTag1.disabled;
    noTag2.disabled = !noTag2.disabled;
    noTag3.disabled = !noTag3.disabled;
   
    noTopButtonEn.style.display = "none";
    noTopButtonDis.style.display = "block";
});

noTag1.addEventListener('click', function(event) {

    if(noTag1.classList.contains("btn-default")){
        noTag1.classList.remove("btn-default");
        noTag1.classList.add("btn-primary");
    }
     else if(noTag1.classList.contains("btn-primary")){
        noTag1.classList.add("btn-default");
        noTag1.classList.remove("btn-primary");
     }    
});

noTag2.addEventListener('click', function(event) {

    if(noTag2.classList.contains("btn-default")){
        noTag2.classList.remove("btn-default");
        noTag2.classList.add("btn-primary");
    }
     else if(noTag2.classList.contains("btn-primary")){
        noTag2.classList.add("btn-default");
        noTag2.classList.remove("btn-primary");
     }    
});

noTag3.addEventListener('click', function(event) {

    if(noTag3.classList.contains("btn-default")){
        noTag3.classList.remove("btn-default");
        noTag3.classList.add("btn-primary");
    }
     else if(noTag3.classList.contains("btn-primary")){
       noTag3.classList.add("btn-default");
        noTag3.classList.remove("btn-primary");
     }    
});

noTopButtonDis.addEventListener('click', function(event) {
    
    noTag1.disabled = !noTag1.disabled;
    noTag2.disabled = !noTag2.disabled;
    noTnoag3.disabled = !noTag3.disabled;
    noTopButtonEn.style.display = "block";
    noTopButtonDis.style.display = "none";
});


