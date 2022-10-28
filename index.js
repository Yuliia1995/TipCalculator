document.querySelector('#tip-form').onchange = function(){
    var subtotal = Number(document.getElementById('billSubtotal').value);
    var tax = Number(document.getElementById('billTax').value);
    var bill = document.getElementById('billTotal');
    var subtotalWithTax = subtotal + (subtotal*tax/100);
    bill.textContent = subtotalWithTax.toFixed(2);
    var tip = document.getElementById('tipInput').value;
    if (tip<15) {
      var choice = prompt("Was your service ok? Please answer Yes or No below:");
      if (choice == "No" || choice == "no" || choice =="N") {
        alert("Sorry to hear this! Understand that servers can control only this much and get reimbursed mostly off your tips. Hopefully your next reastaurant experience will be better :)")
      } else {
        alert("Consider leaving your server a better tip. It is at least 15% for NYC")
      }
    }
    document.getElementById('tipOutput').textContent = tip + "%"; // Fills out Tip  Output with tip variable and a percentage sign
    var tipValue = subtotal * (tip/100)
    var finalBill = subtotalWithTax + tipValue
  var tipAmount = document.querySelector('#tipAmount')
  var totalBillWithTip = document.querySelector('#totalBillWithTip')
  
  tipAmount.textContent = `$ ${tipValue.toFixed(2)}`;
  totalBillWithTip.textContent = `$ ${finalBill.toFixed(2)}`;
  
   //Show Results
  
    document.getElementById('results').style.display='block'
    document.getElementById('filler2').style.display ="none"
  }
  