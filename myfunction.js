/*
In this file i am tring to make a function logic in my own thoughts and it actually the part of practice.


*/



function buyButton(productBtn, productId){
    document.getElementById(productBtn).addEventListener('click', function(){
      const productQuantity = document.getElementById(productId).value;
      if(productBtn == 'kitkat-buy-btn'){
        const kitkatCost = productQuantity * 200;
    document.getElementById('chocolate').innerText = kitkatCost;
      }
      else if(productBtn == 'rose-buy-btn' ){     
      const roseCost = productQuantity * 100;
      document.getElementById('rose').innerText = roseCost;
      }
      else if(productBtn == 'diary-buy-btn' ){     
        const diaryCost = productQuantity * 100;
        document.getElementById('diary').innerText = diaryCost;
        }
      
  
      document.getElementById(productId).value = '';
    })
  }
  
  buyButton('kitkat-buy-btn', 'kitkat-quantity')
  buyButton('rose-buy-btn', 'rose-quantity')
  buyButton('diary-buy-btn', 'diary-quantity')
  