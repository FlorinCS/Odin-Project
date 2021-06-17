//let scorPlayer=0;
//let scorComputer=0;
let scor1;
let scor2;
let player;
let i;


function game(){
    


    document.getElementById("frage").innerHTML="Alege din piatra ,foarfeca sau hartie!";
    document.getElementById("piatra").style.visibility="visible";
document.getElementById("hartie").style.visibility="visible";
document.getElementById("foarfeca").style.visibility="visible";

    let player;
    
    let scor1=document.getElementById("sp").innerHTML=0;
    
let scor2=document.getElementById("sc").innerHTML=0;
 
    piatra.onclick=function(){
        
        let player="piatra";
       
        
   
       //getElementById("ask1").value="piatra";
let computer=Math.random();
if(computer<0.50){
    computer="piatra";
}else if(computer<0.80 && computer>=0.50){
    computer="foarfeca";
}else{
    computer="hartie";
}
if(player==="piatra" && computer==="piatra"){
    
    document.getElementById("frage").innerHTML="Este egalitate";
    
    
}if(player==="foarfeca" && computer==="foarfeca"){
    
   
    document.getElementById("frage").innerHTML="Este egalitate";   
    
}if(player==="hartie" && computer==="hartie"){
    
    document.getElementById("frage").innerHTML="Este egalitate";
   
    
}if(player==="piatra" && computer==="hartie"){
   
   document.getElementById("sc").innerHTML=++scor2;
    document.getElementById("frage").innerHTML="Hartia a castigat";
  
}if(player==="piatra" && computer==="foarfeca"){
  
   document.getElementById("sp").innerHTML=++scor1;
    document.getElementById("frage").innerHTML="Piatra a castigat";
     
}if(player==="foarfeca" && computer==="piatra"){
   
   document.getElementById("sc").innerHTML=++scor2;
    document.getElementById("frage").innerHTML="Piatra a castigat";
   
}if(player==="foarfeca" && computer==="hartie"){
    document.getElementById("sp").innerHTML=++scor1;
    document.getElementById("frage").innerHTML="Foarfeca a castigat";
  
}if(player==="hartie" && computer==="piatra"){
    
    document.getElementById("sp").innerHTML=++scor1;
    document.getElementById("frage").innerHTML="Hartia a castigat";
   
}if(player==="hartia" && computer==="foarfeca"){
   
    document.getElementById("sc").innerHTML=++scor2;
    document.getElementById("frage").innerHTML="Foarfeca a castigat";
     
} 
        
if(scor1===3 && scor2===2 ){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



    
    
    
    



   
    game();
    






    };
    
}else if(scor1===4 && scor2===1 ){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";

    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
    
    
    
    
    
    



   
    game();
    






    };
} else if(scor1===5 && scor2===0){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";

    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}else if(scor2===3 && scor1===2){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";

    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



    
    
    



   
    game();
    






    };
}else if(scor2===4 && scor1===1){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";

    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



    
    
    


   
    game();
    






    };
}else if(scor2===5 && scor1===0){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";

    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";




    
    
    



   
    game();
    






    };
}

    
    }; //prima parte



    hartie.onclick=function(){
        let player="hartie";
       
    
    
   
       //getElementById("ask1").value="piatra";
let computer=Math.random();
if(computer<0.50){
    computer="piatra";
}else if(computer<0.80 && computer>=0.50){
    computer="foarfeca";
}else{
    computer="hartie";
}
if(player==="hartie" && computer==="piatra"){
    document.getElementById("sp").innerHTML=++scor1;
    document.getElementById("frage").innerHTML="Hartia a castigat";
   
   
}if(player==="hartie" && computer==="foarfeca"){
    
    document.getElementById("frage").innerHTML="Foarfeca a castigat";
    document.getElementById("sc").innerHTML=++scor2;
  
} 
if(player==="piatra" && computer==="piatra"){
    
    document.getElementById("frage").innerHTML="Este egalitate";
    
    
}if(player==="foarfeca" && computer==="foarfeca"){
    
   
    document.getElementById("frage").innerHTML="Este egalitate";
    
    
}if(player==="hartie" && computer==="hartie"){
    
    document.getElementById("frage").innerHTML="Este egalitate";
   
    
}if(player==="piatra" && computer==="hartie"){
    
    document.getElementById("frage").innerHTML="Hartia a castigat";
    document.getElementById("sc").innerHTML=++scor2;
    
}if(player==="piatra" && computer==="foarfeca"){
   
    document.getElementById("frage").innerHTML="Piatra a castigat";
    document.getElementById("sp").innerHTML=++scor1;
 
}if(player==="foarfeca" && computer==="piatra"){
   
    document.getElementById("frage").innerHTML="Piatra a castigat";
    document.getElementById("sc").innerHTML=++scor2;
  
}if(player==="foarfeca" && computer==="hartie"){
   
    document.getElementById("frage").innerHTML="Foarfeca a castigat";
   
    document.getElementById("sp").innerHTML=++scor1;
}
        

if(scor1===3 && scor2===2 ){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
    
}else if(scor1===4 && scor2===1 ){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
} else if(scor1===5 && scor2===0){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}else if(scor2===3 && scor1===2){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}else if(scor2===4 && scor1===1){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}else if(scor2===5 && scor1===0){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}
    
    };//a doua parte

    foarfeca.onclick=function(){
        let player="foarfeca";
       
    
    
   
       //getElementById("ask1").value="piatra";
let computer=Math.random();
if(computer<0.50){
    computer="piatra";
}else if(computer<0.80 && computer>=0.50){
    computer="foarfeca";
}else{
    computer="hartie";
}
if(player==="piatra" && computer==="piatra"){
    
    document.getElementById("frage").innerHTML="Este egalitate";
    
    
}if(player==="foarfeca" && computer==="foarfeca"){
    
   
    document.getElementById("frage").innerHTML="Este egalitate";
    
    
}if(player==="hartie" && computer==="hartie"){
    
    document.getElementById("frage").innerHTML="Este egalitate";
   
    
}if(player==="piatra" && computer==="hartie"){
    
    document.getElementById("frage").innerHTML="Hartia a castigat";
   
    document.getElementById("sc").innerHTML=++scor2;
}if(player==="piatra" && computer==="foarfeca"){
   
    document.getElementById("frage").innerHTML="Piatra a castigat";
    
    document.getElementById("sp").innerHTML=++scor1;
}if(player==="foarfeca" && computer==="piatra"){
   
    document.getElementById("frage").innerHTML="Piatra a castigat";
   
    document.getElementById("sc").innerHTML=++scor2;
}if(player==="foarfeca" && computer==="hartie"){
   
    document.getElementById("frage").innerHTML="Foarfeca a castigat";
   
    document.getElementById("sp").innerHTML=++scor1;
}if(player==="hartie" && computer==="piatra"){
   
    document.getElementById("frage").innerHTML="Hartia a castigat";
   
    document.getElementById("sp").innerHTML=++scor1;
}if(player==="hartia" && computer==="foarfeca"){
    
    document.getElementById("frage").innerHTML="Foarfeca a castigat";
    
    document.getElementById("sc").innerHTML=++scor2;
} 
        
if(scor1===3 && scor2===2 ){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
    
}else if(scor1===4 && scor2===1 ){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
} else if(scor1===5 && scor2===0){
    document.getElementById("frage").innerHTML="Player 1 has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}else if(scor2===3 && scor1===2){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}else if(scor2===5 && scor1===0){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}else if(scor2===4 && scor1===1){
    document.getElementById("frage").innerHTML="The Computer has won!";
    document.getElementById("piatra").style.visibility="hidden";
    document.getElementById("hartie").style.visibility="hidden";
    document.getElementById("foarfeca").style.visibility="hidden";
    document.getElementById("again").style.visibility="visible";
    again.onclick=function(){
        document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";



   
   
    
    
    
    
    



   
    game();
    






    };
}
    
    };

}


document.getElementById("play").style.visibility="hidden";
document.getElementById("comp").style.visibility="hidden";
document.getElementById("again").style.visibility="hidden";
document.getElementById("piatra").style.visibility="hidden";
document.getElementById("hartie").style.visibility="hidden";
document.getElementById("foarfeca").style.visibility="hidden";


link.onclick=function(){
   
    document.getElementById("button").style.display="none";
    
    
    
    document.getElementById("play").style.visibility="visible";
document.getElementById("comp").style.visibility="visible";
    



   
    game();
    




};


/*for(i=0;i<=5;i++){

  
   
}
if(scorPlayer>scorComputer){
    alert("You won the game");
}else if(scorPlayer<scorComputer){
    alert("The Computer won the game");
}else{
    alert("Its a draw");
}


 third.onclick=function(){
        game()
    


da.onclick=function(){


*/