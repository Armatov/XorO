let img1 = document.getElementById("i1");
let img2 = document.getElementById("i2") ;
let img3 = document.getElementById("i3") ;
let img4 = document.getElementById("i4") ;
let img5 = document.getElementById("i5") ;
let img6 = document.getElementById("i6") ;
let img7 = document.getElementById("i7") ;
let img8 = document.getElementById("i8") ;
let img9 = document.getElementById("i9") ;
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let b7=document.getElementById("b7");
let b8=document.getElementById("b8");
let b9=document.getElementById("b9");
let reset=document.getElementById("reset");
let win=document.getElementById("win");
let redX = "img/redX.jpg",blueO = "img/Oimg.png",rp="img/rp.jpg";
let round = 1;
function Reset(){
    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
    b6.disabled=false;
    b7.disabled=false;
    b8.disabled=false;
    b9.disabled=false;
    img1.setAttribute("src",rp);
    img2.setAttribute("src",rp);
    img3.setAttribute("src",rp);
    img4.setAttribute("src",rp);
    img5.setAttribute("src",rp);
    img6.setAttribute("src",rp);
    img7.setAttribute("src",rp);
    img8.setAttribute("src",rp);
    img9.setAttribute("src",rp);
    win.textContent="";
    round=1;
}
function rab(){
     if(img1.getAttribute("src")==redX&&img2.getAttribute("src")==redX&&img3.getAttribute("src")==redX||
        img4.getAttribute("src")==redX&&img5.getAttribute("src")==redX&&img6.getAttribute("src")==redX||
        img7.getAttribute("src")==redX&&img8.getAttribute("src")==redX&&img9.getAttribute("src")==redX||
        img1.getAttribute("src")==redX&&img4.getAttribute("src")==redX&&img7.getAttribute("src")==redX||
        img2.getAttribute("src")==redX&&img5.getAttribute("src")==redX&&img8.getAttribute("src")==redX||
        img3.getAttribute("src")==redX&&img6.getAttribute("src")==redX&&img9.getAttribute("src")==redX||
        img1.getAttribute("src")==redX&&img5.getAttribute("src")==redX&&img9.getAttribute("src")==redX||
        img3.getAttribute("src")==redX&&img5.getAttribute("src")==redX&&img7.getAttribute("src")==redX){
       b1.disabled=true;
       b2.disabled=true;
       b3.disabled=true;
       b4.disabled=true;
       b5.disabled=true;
       b6.disabled=true;
       b7.disabled=true;
       b8.disabled=true;
       b9.disabled=true;
       win.textContent="Красный победил";
    }
    else if(img1.getAttribute("src")==blueO&&img2.getAttribute("src")==blueO&&img3.getAttribute("src")==blueO||
    img4.getAttribute("src")==blueO&&img5.getAttribute("src")==blueO&&img6.getAttribute("src")==blueO||
    img7.getAttribute("src")==blueO&&img8.getAttribute("src")==blueO&&img9.getAttribute("src")==blueO||
    img1.getAttribute("src")==blueO&&img4.getAttribute("src")==blueO&&img7.getAttribute("src")==blueO||
    img2.getAttribute("src")==blueO&&img5.getAttribute("src")==blueO&&img8.getAttribute("src")==blueO||
    img3.getAttribute("src")==blueO&&img6.getAttribute("src")==blueO&&img9.getAttribute("src")==blueO||
    img1.getAttribute("src")==blueO&&img5.getAttribute("src")==blueO&&img9.getAttribute("src")==blueO||
    img3.getAttribute("src")==blueO&&img5.getAttribute("src")==blueO&&img7.getAttribute("src")==blueO){
       b1.disabled=true;
       b2.disabled=true;
       b3.disabled=true;
       b4.disabled=true;
       b5.disabled=true;
       b6.disabled=true;
       b7.disabled=true;
       b8.disabled=true;
       b9.disabled=true;
       win.textContent="Синий победил";
    }
}




function updateImage(x){

    if(x==1) {
        
        if(round==1){
            img1.setAttribute("src",redX);
            b1.disabled=true;
            round=2;
            
            rab();
        } 
        else if(round==2){
            img1.setAttribute("src",blueO);
            b1.disabled=true;
            round=1;
            
            rab();
        }
    }
    else if(x==2) { 
        if(round==1){
            img2.setAttribute("src",redX);
            b2.disabled=true;
            round=2;
            rab();
        } 
        else if(round==2){
            img2.setAttribute("src",blueO);
            b2.disabled=true;
            round=1;
            
            rab();
        }
    }
    else if(x==3) { 
        if(round==1){
            img3.setAttribute("src",redX);
            b3.disabled=true;
            round=2;
            rab();
        } 
        else if(round==2){
            img3.setAttribute("src",blueO);
            b3.disabled=true;
            round=1;
            rab();
        }
    }
    else if(x==4) { 
        if(round==1){
            img4.setAttribute("src",redX);
            b4.disabled=true;
            round=2;
            rab();
        } 
        else if(round==2){
            img4.setAttribute("src",blueO);
            b4.disabled=true;
            round=1;
            rab();
        }
    }
    else if(x==5) { 
        if(round==1){
            img5.setAttribute("src",redX);
            b5.disabled=true;
            round=2;
            rab();
        } 
        else if(round==2){
            img5.setAttribute("src",blueO);
            b5.disabled=true;
            round=1;
            rab();
        }
    }
    else if(x==6) { 
        if(round==1){
            img6.setAttribute("src",redX);
            b6.disabled=true;
            round=2;
            rab();
        } 
        else if(round==2){
            img6.setAttribute("src",blueO);
            b6.disabled=true;
            round=1;
            rab();
        }
    }
    else if(x==7) { 
        if(round==1){
            img7.setAttribute("src",redX);
            b7.disabled=true;
            round=2;
            rab();
        } 
        else if(round==2){
            img7.setAttribute("src",blueO);
            b7.disabled=true;
            round=1;
            rab();
        }
    }
    else if(x==8) { 
        if(round==1){
            img8.setAttribute("src",redX);
            b8.disabled=true;
            round=2;
            rab();
        } 
        else if(round==2){
            img8.setAttribute("src",blueO);
            b8.disabled=true;
            round=1;
            rab();
        }
    }
    else if(x==9) { 
        if(round==1){
            img9.setAttribute("src",redX);
            b9.disabled=true;
            round=2;
            rab();
        } 
        else if(round==2){
            img9.setAttribute("src",blueO);
            b9.disabled=true;
            round=1;
            rab();
        }
    }

}