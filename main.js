var i = 0
var qw = 0
var s = ''
var start = document.createTextNode(s)
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

      var bob = document.getElementById("copy")
      var bob_2 = document.getElementById("p1")
      bob_2.appendChild(start)
      bob.appendChild(start)
      var s = document.getElementById("encode").value;
      var array = s.split('')
      var re_array = array.reverse()
      var d = re_array.join()
      var n = d.replaceAll(',', '')
      async function main() {
        let pyodide = await loadPyodide();
        result = pyodide.runPython(`
           import js
           from js import n
           import string
           chars = " "+string.punctuation + string.digits + string.ascii_letters
           chars = list(chars)
           key = ['j', 'i', 'k', '(', 'n', 'V', '5', '"', '+', 'x', '=', 'l', 't', 'b', 'N', '7', '*', 'Q', 'm', 'M', 'a', 'T', '<', 'D', '3', 'r', '!', 'A', '4', '.', 'L', 'q', "'", 'h', 's', ':', '&', 'I', '-', 'X', ';', '8', '#', 'W', '/', 'z', '9', 'S', 'U', 'c', 'f', 'O', 'u', ')', '$', 'G', 'v', 'K', '}', 'e', 'B', '^', 'o', '?', '~', '6', 'w', '0', '_', '[', 'Y', 'J', '>', '{', 'H', 'Z', 'F', '2', 'g', 'R', 'y', '|', 'E', '%', ',', '@', 'd', 'p', 'C', 'P', ' ']
           b = ""
           for letter in n:
              index = chars.index(letter)
              b += key[index]
           js.code_16 = b
        `);
    }
    main()
      var ff = document.createElement("INPUT") 
      ff.setAttribute("id", "text")
      ff.value = code_16;
      bob_2.appendChild(ff)
      var buuton_2 = document.createElement("button");
      buuton_2.innerHTML = '<img src="pic.jpeg" />';
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
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Replace each letter here
        newStr += char.toUpperCase(); // For examp
      }
      var rturn = re_array.join()
      var code = rturn.replaceAll('h', 'a')
      var code_2 = code.replaceAll('$', ' ')
      var code_3 = code_2.replaceAll('u', 'w')
      var code_4 = code_3.replaceAll('%', '!')
      var code_5 = code_4.replaceAll(',', '')
      var code_6 = code_5.replaceAll('a', 'I')
      var code_7 = code_6.replaceAll('z', 'A')
      var code_8 = code_7.replaceAll('g', 'k')
      var code_10 = code_8.replaceAll('j', 'l')
      var code_11 = code_10.replaceAll(']', '1')
      var code_12 = code_11.replaceAll('[', '.')
      var code_13 = code_12.replaceAll('f', 'l')
      var code_14 = code_13.replaceAll('K', 'o')
      var code_15 = code_14.replaceAll('c', 'W')
      var code_16 = code_15.replaceAll('F', 'e')
      var ff = document.createElement("INPUT")
      ff.setAttribute("id","t")
      ff.value = code_16
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
