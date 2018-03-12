
var epTopButtonEn = document.getElementById("eptopbuttonen");
var epTopButtonDis = document.getElementById("eptopbuttondis");
var Tag1 = document.getElementById("tag1");
var Tag2 = document.getElementById("tag2");
var Tag3 = document.getElementById("tag3");




epTopButtonEn.addEventListener('click', function(event) {
    Tag1.disabled = !Tag1.disabled;
    Tag2.disabled = !Tag2.disabled;
    Tag3.disabled = !Tag3.disabled;
   
    epTopButtonEn.style.display = "none";
    epTopButtonDis.style.display = "block";
});

Tag1.addEventListener('click', function(event) {

    if(Tag1.classList.contains("btn-default")){
        Tag1.classList.remove("btn-default");
        Tag1.classList.add("btn-primary");
    }
     else if(Tag1.classList.contains("btn-primary")){
        Tag1.classList.add("btn-default");
        Tag1.classList.remove("btn-primary");
     }    
});

Tag2.addEventListener('click', function(event) {

    if(Tag2.classList.contains("btn-default")){
        Tag2.classList.remove("btn-default");
        Tag2.classList.add("btn-primary");
    }
     else if(Tag2.classList.contains("btn-primary")){
        Tag2.classList.add("btn-default");
        Tag2.classList.remove("btn-primary");
     }    
});

Tag3.addEventListener('click', function(event) {

    if(Tag3.classList.contains("btn-default")){
        Tag3.classList.remove("btn-default");
        Tag3.classList.add("btn-primary");
    }
     else if(Tag3.classList.contains("btn-primary")){
        Tag3.classList.add("btn-default");
        Tag3.classList.remove("btn-primary");
     }    
});

epTopButtonDis.addEventListener('click', function(event) {
    
    Tag1.disabled = !Tag1.disabled;
    Tag2.disabled = !Tag2.disabled;
    Tag3.disabled = !Tag3.disabled;
    epTopButtonEn.style.display = "block";
    epTopButtonDis.style.display = "none";
});


