document.getElementById("mycontact").addEventListener("submit",function(event){
    var name = document.getElementById("c_name").value;
    var email = Document.getElementById("c_email").value;
    var pnumber = document.getElementById("c_te").value;
    var address = document.getElementById("c_add").value;
  
    if (name ===" " && email == " " && pnumber == " " && address == " "){
      alert("Please fill all these details!!");
      event.preventDefault();
    }
  });
  
  
  document.getElementById("mycontact").addEventListener("click",function() {
      
    var name = document.getElementById('c_name').value;
    email = document.getElementById('c_email').value;
    tel = document.getElementById('c_tel').value;
    add = document.getElementById('c_add').value;
  
  
    var yourNumber = "+94741474583";
  
  var yourMessage = `${name}%0a${email}%0a${tel}%0a${add}`;
  
  
  number = yourNumber;
  message = yourMessage.split(' ').join('%20');
  
  window.open('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message);
    
  });
  
   
  
  
  