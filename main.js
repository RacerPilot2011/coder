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
      var rturn = re_array.join()
      var code = rturn.replaceAll('a', 'h')
      var code_2 = code.replaceAll(' ', '$')
      var code_3 = code_2.replaceAll('w', 'u')
      var code_4 = code_3.replaceAll('!', '%')
      var code_5 = code_4.replaceAll(',', '')
      var code_6 = code_5.replaceAll('I', 'a')
      var code_7 = code_6.replaceAll('A', 'z')
      var code_8 = code_7.replaceAll('k', 'g')
      var code_10 = code_8.replaceAll('l', 'j')
      var code_11 = code_10.replaceAll('q', ']')
      var code_12 = code_11.replaceAll('.', '[')
      var code_13 = code_12.replaceAll('l', 'f')
      var code_14 = code_13.replaceAll('o', 'K')
      var code_15 = code_14.replaceAll('W', 'c')
      var code_16 = code_15.replaceAll('e', 'F')
      var ff = document.createElement("INPUT")
      ff.setAttribute("id", "text")
      ff.value = code_16;
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
