 function talk(){
  var x= {

    "hi" : "HELLO!😄",
    "how are you" : "Fine! How can i help you 🙋",
    "what is your name" : "my name is kitty🐱",
    "where are you from" : "SO, turn left from the paanwala and then go straight till you see a banyan tree. JUST KIDDING😃! I live in the cloud",
    "who is your father" : "GOD!",
     "What can i do for you?": "you stole my line😆 ! HOW CAN I HELP YOU?",
     "DO You love me?" : "Today, tomorrow, tomorrow ka tomorrow, tomorrow ke tomorrow ka tomorrow ka tomorrow and forever ❤️😍",
     "I'm bored": "good to know! 🌶️",
     "you are male and female": "I'm all-inclusive😇",
     "jokes":"what did one shark say to the other while eating a clownfish?   <br> This tastes funny🎃",
     "more joke" : "what is the most shocking city in the world? ELECTRICITY",
  }
    var user= document.getElementById('userbox').value;
    document.getElementById('chatlog').innerHTML= user+ "<br>";
      if(user in x)
      {
          document.getElementById('chatlog').innerHTML= x[user] + "<br>"
      }
      else{
          document.getElementById('chatlog').innerHTML="SORRY! I didn't understand <br>";
      }
 }