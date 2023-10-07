var messageBox=document.getElementById('messageBox')
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
    console.log("nithin")
    axios.get("http://localhost:8080/getMessages")
    .then((responce)=>{
    for(let i=0; i<responce.data.getMessages.length; i++){
        showMessagesOnScreen(responce.data.getMessages[i])
    }
    
})
    .catch((err)=>console.log(err))
   
})
function showMessagesOnScreen(messages){
let li = document.createElement('li')
console.log(messages)
li.appendChild(document.createTextNode(messages.name+':'+messages.message))
messageBox.appendChild(li)
}