// calculate kitkat chocolate price with quantity
// document
//   .getElementById("kitkat-buy-btn")
//   .addEventListener("click", function () {
//     const kitkatCost = multiplePriceWithQuantity("kitkat-quantity", 200);
//     setInnerText("chocolate", kitkatCost);
//     document.getElementById("kitkat-quantity").value = "";
//     total();
//   });



document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
    const quantity = getInputValue('kitkat-quantity', 200);
    // const quantity = document.getElementById('kitkat-quantity').value;
    // const kitkatCost = quantity * 200;
    setInnerText('chocolate', quantity);
    total()
    // document.getElementById('chocolate').innerText = kitkatCost;
  
  
    document.getElementById('kitkat-quantity').value = '';
  })
  
  
  document.getElementById('rose-buy-btn').addEventListener('click', function(){
    const quantity = getInputValue('rose-quantity', 100);
    // const quantity = document.getElementById('rose-quantity').value;
    // const roseCost = quantity * 100;
    setInnerText('rose', quantity);
    total()
    // document.getElementById('rose').innerText = roseCost;
  
  
    document.getElementById('rose-quantity').value = '';
  })
  
  document.getElementById('diary-buy-btn').addEventListener('click', function(){
    const quantity = getInputValue('diary-quantity', 100);
    // const quantity = document.getElementById('diary-quantity').value;
    // const diaryCost = quantity * 100;
    setInnerText('diary', quantity);
    total()
    // document.getElementById('diary').innerText = diaryCost;
  
    document.getElementById('diary-quantity').value = '';
  })
  
  
  
  // 1: Function to set the inner text.
  
  function setInnerText(id, value){
    document.getElementById(id).innerText = value;
  }
  
  
  // 2: Functon to get value from input field by id.
  
  function getInputValue(id, cost){
    const value = document.getElementById(id).value;
    return parseInt(value * cost);
  }
  
  // 3: Function to calculate the total cost
  
  function total(){
    const chocolet = getInnerText('chocolate');
    // const chocolet = document.getElementById('chocolate').innerText;
    const rose = getInnerText('rose');
    // const rose = document.getElementById('rose').innerText;
    const diary = getInnerText('diary');
    // const diary = document.getElementById('diary').innerText;
  
    const totalSum = parseInt(chocolet) + parseInt(rose) + parseInt(diary);
    
    // document.getElementById('total').innerText = totalSum;
    setInnerText('total', totalSum);
  }
  
  
  // 4: Function to get the value from inner text by id. 
  
  function getInnerText(id){
    const product = document.getElementById(id).innerText;
    return product;
  }
  
  
  
  document.getElementById('promo-btn').addEventListener('click', function(){
    const promoCode = getInputValue("promo-code", 1);
    if(promoCode == 101 ){
      const total = document.getElementById('total').innerText;
      const sum = total - parseInt(total) * 0.1;
      // document.getElementById('all-total').innerText = sum;
      setInnerText('all-total', sum)
    }
    else{
      alert("Wrong Promo Code")
    }
    
  })
  
  
  