let box1=document.querySelectorAll(".box1");

let box2=document.querySelectorAll(".box2");
let box3=document.querySelectorAll(".box3");
let box4=document.querySelectorAll(".box4");
let box5=document.querySelectorAll(".box5");
let box6=document.querySelectorAll(".box6");
let pn=document.querySelector("#PN");

let game=document.querySelector("#game");
game.style.cssText="visibility:hidden";

PN.onclick=function(){
    game.style.cssText="visibility:visible";
    pn.style.cssText="visibility:hidden";

red.onclick=function(){


box1.forEach((div) => {

  
  div.addEventListener('mousemove', () => {
    div.style.cssText="background:red";
  });
});
box2.forEach((div) => {

  
    div.addEventListener('mousemove', () => {
      div.style.cssText="background:red";
    });
  });
  box3.forEach((div) => {

  
    div.addEventListener('mousemove', () => {
      div.style.cssText="background:red";
    });
  });
  box4.forEach((div) => {

  
    div.addEventListener('mousemove', () => {
      div.style.cssText="background:red";
    });
  });
  box5.forEach((div) => {

  
    div.addEventListener('mousemove', () => {
      div.style.cssText="background:red";
    });
  });

  box6.forEach((div) => {

  
    div.addEventListener('mousemove', () => {
      div.style.cssText="background:red";
    });
  });
}


blue.onclick=function(){


    box1.forEach((div) => {
    
      
      div.addEventListener('mousemove', () => {
        div.style.cssText="background:blue";
      });
    });
    box2.forEach((div) => {
    
      
        div.addEventListener('mousemove', () => {
          div.style.cssText="background:blue";
        });
      });
      box3.forEach((div) => {
    
      
        div.addEventListener('mousemove', () => {
          div.style.cssText="background:blue";
        });
      });
      box4.forEach((div) => {
    
      
        div.addEventListener('mousemove', () => {
          div.style.cssText="background:blue";
        });
      });
      box5.forEach((div) => {
    
      
        div.addEventListener('mousemove', () => {
          div.style.cssText="background:blue";
        });
      });
    
      box6.forEach((div) => {
    
      
        div.addEventListener('mousemove', () => {
          div.style.cssText="background:blue";
        });
      });
    }


    yellow.onclick=function(){


        box1.forEach((div) => {
        
          
          div.addEventListener('mousemove', () => {
            div.style.cssText="background:yellow";
          });
        });
        box2.forEach((div) => {
        
          
            div.addEventListener('mousemove', () => {
              div.style.cssText="background:yellow";
            });
          });
          box3.forEach((div) => {
        
          
            div.addEventListener('mousemove', () => {
              div.style.cssText="background:yellow";
            });
          });
          box4.forEach((div) => {
        
          
            div.addEventListener('mousemove', () => {
              div.style.cssText="background:yellow";
            });
          });
          box5.forEach((div) => {
        
          
            div.addEventListener('mousemove', () => {
              div.style.cssText="background:yellow";
            });
          });
        
          box6.forEach((div) => {
        
          
            div.addEventListener('mousemove', () => {
              div.style.cssText="background:yellow";
            });
          });
        }
        
}
