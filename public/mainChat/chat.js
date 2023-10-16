var messageBox=document.getElementById('messageBox');
var newgroup=document.getElementById('newgroup');

function sendMessage(){
    const message = document.getElementById('message').value
    const token=localStorage.getItem('token')
    const obj={
        message
    }
    axios.post("http://localhost:8080/message",obj,{ headers: { 'authorization': token } })
    .then((responce)=>console.log(responce))
    .catch((err)=>console.log(err))
}

window.addEventListener('DOMContentLoaded',()=>{
    console.log("nithin");
    var x=0;
     
        axios.get("http://localhost:8080/getMessages")
        .then((responce)=>{
            if(x<responce.data.getMessages.length){
        for(let i=x; i<responce.data.getMessages.length; i++){
            showMessagesOnScreen(responce.data.getMessages[i])
            x=i+1
        }
        
    }
    })
        .catch((err)=>console.log(err))
        const token = localStorage.getItem('token')
        const groupnames=document.getElementById('groupnames')
    axios.get("http://localhost:8080/group", { headers: { 'authorization': token } })
        .then((responce)=>{
            
        for(let i=0; i<responce.data.data.length; i++){
           var button= document.createElement('button')
           var li=document.createElement('li')
           button.appendChild(document.createTextNode(responce.data.data[i].groupname))
          li.appendChild(button)
           groupnames.appendChild(li)
           button.onclick=function(){
            localStorage.setItem('groupId',responce.data.data[i].id)
            localStorage.setItem('groupName',responce.data.data[i].groupname)
              window.location.href="file:///C:/Users/Nithin%20kumar/Desktop/Nithin/.vscode/Whatsapp/public/Groups/groupchat.html"
           }
        }
        
    
    })
        .catch((err)=>console.log(err))
     
       
    
})


function showMessagesOnScreen(messages){
let li = document.createElement('li')
li.appendChild(document.createTextNode(messages.name+':'+messages.message))
messageBox.appendChild(li)
}


function createbutton(Name,Parent){
    var button= document.createElement('button')
    var li=document.createElement('li')
    button.appendChild(document.createTextNode(Name))
   li.appendChild(button)
    Parent.appendChild(li)
    
}

