var i = 0
var qw = 0
var s = ''
var start = document.createTextNode(s)
var code_16 = ""
var abc =  "!#$%&'()*+,-./:;<=>?@[^_`{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var abc = abc.split("")
var key = ['j', 'i', 'k', '(', 'n', 'V', '5', '"', '+', 'x', '=', 'l', 't', 'b', 'N', '7', '*', 'Q', 'm', 'M', 'a', 'T', '<', 'D', '3', 'r', '!', 'A', ' ', '.', 'L', 'q', "'", 'h', 's', ':', '&', 'I', '-', 'X', ';', '8', '#', 'W', '/', 'z', '9', 'S', 'U', 'c', 'f', 'O', 'u', ')', '$', 'G', 'v', 'K', '}', 'e', 'B', '^', 'o', '?', '~', '6', 'w', '0', '_', '[', 'Y', 'J', '>', '{', 'H', 'Z', 'F', '2', 'g', 'R', 'y', '|', 'E', '%', ',', '@', 'd', 'p', 'C', 'P', '4']
function encode(){
  if (i == 0){
    var x = document.createElement("INPUT");
    x.setAttribute("id", "encode");
    sa = "You have chosen to encode a message."
    document.getElementById("dddd").innerHTML = sa;
    var bob = document.getElementById("box")
    bob.appendChild(x)
    var button = document.createElement("button");
    button.style.backgroundColor = "red";
    button.innerHTML = "Encode!";
    var bob_2 = document.getElementById("e/dbu")
    bob_2.appendChild(button)
    button.addEventListener("click", function(){
              var s = document.getElementById("encode").value;
      var array = s.split('')
      var re_array = array.reverse()
      var map = re_array 
      const replacedArr = re_array.map((letter) => {
        const index = map.indexOf(letter);
        return index !== -1 ? key[index] : letter;
      });
      var d = replacedArr.join()
      var g = d.replaceAll(',', '')
      var bob = document.getElementById("copy")
      var bob_2 = document.getElementById("p1")
      bob_2.appendChild(start)
      bob.appendChild(start)
     
      var ff = document.createElement("INPUT") 
      ff.setAttribute("id", "text")
      ff.value = g;
      bob_2.appendChild(ff)
      var buuton_2 = document.createElement("button");
      buuton_2.innerHTML = "Copy";
      bob.appendChild(buuton_2)
      buuton_2.addEventListener("click", function(){
        copy()
      })
      function copy() {
        // Get the text field
        var copyText = document.getElementById("text");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      }
    });
}
}
function decode(){
    if (i == 0){
    var y = document.createElement("INPUT");
    y.setAttribute("id", "decode");
    sa = "You have chosen to decode a message."
    document.getElementById("dddd").innerHTML = sa;
    var bob = document.getElementById("box")
    bob.appendChild(y)
    var button = document.createElement("button");
    button.innerHTML = "Decode!";
    button.style.backgroundColor = "blue";
    var bob_2 = document.getElementById("e/dbu")
    bob_2.appendChild(button)
    button.addEventListener("click", function(){
      var bob = document.getElementById("copy")
      var bob_2 = document.getElementById("p1")
      bob_2.appendChild(start)
      bob.appendChild(start)
      var s = document.getElementById("decode").value;
      var array = s.split('')
      var re_array = array.reverse()

      
      var map = re_array 
      const fda = re_array.map((letter) => {
        const index = map.indexOf(letter);
        return index !== -1 ? abc[index] : letter;
      });
      var rturn = fda.join()
      var n = rturn.replaceAll(',', '')

      var ff = document.createElement("INPUT")
      ff.setAttribute("id","t")
      ff.value = n
      bob_2.appendChild(ff)
      var buuton_2 = document.createElement("button");
      buuton_2.innerHTML = "Copy";
      bob.appendChild(buuton_2)
      buuton_2.addEventListener("click", function(){
        copy()
      })
      function copy() {
        // Get the text field
        var copyText = document.getElementById("t");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      }
    });
    i = 1;
    }
}


