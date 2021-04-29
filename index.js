

//document.getElementById('input').value;
        
function myfunction()
{
    
   var li = document.createElement("li");
    var x = document.getElementById("input").value;
   var t = document.createTextNode(x);
    li.appendChild(t);
    if(x===""){
        alert("You must write something");

    }

     else
     {
        document.getElementById('myUL').appendChild(li);
    }
        document.getElementById('input').value=" "; 

       
        
       }
        function checked(){
          var y = document.getElementById("check").type;
          document.getElementById("myUL").innerHTML = y;
        }
   
   

         
       

