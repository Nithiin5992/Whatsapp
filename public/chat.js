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
    console.log("nithin");
    var x=0;
     setInterval(() => {
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
     }, 1000);
       
    
})
function showMessagesOnScreen(messages){
let li = document.createElement('li')
console.log(messages)
li.appendChild(document.createTextNode(messages.name+':'+messages.message))
messageBox.appendChild(li)
}