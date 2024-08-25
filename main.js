   

function p1(){
    var x= document.getElementById("nav1");
    var y=document.getElementById("btn1");
    var z=document.getElementById("b");

   if(x.style.display==="none"){
        x.style.display="block";
        y.style.display="none";
   } else {
        x.style.display="none";
        y.style.display="block";
   }
}

function p2(){
    
    var x= document.getElementById("nav1");
    var y=document.getElementById("btn1");
    var z=document.getElementById("b");

   if(x.style.display==="block"){
        x.style.display="none";
        y.style.display="block";
   } else {
        x.style.display="block";
        y.style.display="none";
   }
}



 