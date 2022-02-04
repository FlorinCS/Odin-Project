
let sapte;
let opt;
let total=[];

function adunare(a,b){

    return a+b;
}
let numar=0;
let arr=[[],[],[]];

function operator(){

  if(arr[1]==="-"){
    +arr[0];
    arr[0]=document.getElementById("h2").innerHTML= +arr[0]-arr[2];
    arr[2]=[];
    arr[1]=[];
    
   
    arr.push(arr[0]);
 }

if(arr[1]==="+"){
  arr[0]= document.getElementById("h2").innerHTML= +arr[0]+ +arr[2];
   arr[2]=[];
   arr[1]=[];
  
   arr.push(arr[0]);

}


 if(arr[1]==="*"){
   arr[0]= document.getElementById("h2").innerHTML= +arr[0]* +arr[2];
   arr[2]=[];
   arr[1]=[];
  
   arr.push(arr[0]);
 }
 if(arr[1]==="/"){
   arr[0]= document.getElementById("h2").innerHTML= Math.round(+arr[0]/ +arr[2])*100/100;
   
   arr[2]=[];
   arr[1]=[];
  
 
   arr.push(arr[0]);
 }
}
let i=0;
box21.onclick=function(){
  i=0;
   arr=[[],[],[]];
  
  document.getElementById("h2").innerHTML="";
 
}
box16.onclick=function(){
  
  arr[1]="+";
  i=2;
}
box12.onclick=function(){
  arr[1]="-";
  i=2;
}
box1.onclick=function(){
  
  
  arr[i]=arr[i]+"7";
   document.getElementById("h2").innerHTML=arr[i];
   
   
    
}


box8.onclick=function(){

    arr[1]="*";
    i=2;
    
}
box4.onclick=function(){
    arr[1]="/";
    i=2;
}

box2.onclick=function(){
  arr[i]=arr[i]+"8";
   document.getElementById("h2").innerHTML=arr[i];
  }
  box3.onclick=function(){
    arr[i]=arr[i]+"9";
   document.getElementById("h2").innerHTML=arr[i];
  }
  box5.onclick=function(){
    arr[i]=arr[i]+"4";
   document.getElementById("h2").innerHTML=arr[i];
  }
  box6.onclick=function(){
    arr[i]=arr[i]+"5";
    document.getElementById("h2").innerHTML=arr[i];
  }
  box7.onclick=function(){
    arr[i]=arr[i]+"6";
   document.getElementById("h2").innerHTML=arr[i];
  }
  box9.onclick=function(){
    arr[i]=arr[i]+"1";
    document.getElementById("h2").innerHTML=arr[i];
  }
  box10.onclick=function(){
    arr[i]=arr[i]+"2";
    document.getElementById("h2").innerHTML=arr[i];
  }
  box11.onclick=function(){
    arr[i]=arr[i]+"3";
   document.getElementById("h2").innerHTML=arr[i];
  }
  box13.onclick=function(){
    arr[i]=arr[i]+"0";
   document.getElementById("h2").innerHTML=arr[i];
  }
  box14.onclick=function(){
    arr[i]=arr[i]+".";
   document.getElementById("h2").innerHTML=arr[i];
  }
  box15.onclick=function(){
  operator();
   
  }
  red.onclick=function(){
    document.getElementById("boss").style.background="red";
    document.getElementById("tit").style.color="white";
  }
  yellow.onclick=function(){
    document.getElementById("boss").style.background="yellow";
    document.getElementById("tit").style.color="black";
  }
  blue.onclick=function(){
    document.getElementById("boss").style.background="blue";
  }
   