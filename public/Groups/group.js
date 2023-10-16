
function groupmessages(){
    const chatmessage=document.getElementById('chatmessage').value
    const groupId=localStorage.getItem('groupId')
    const token=localStorage.getItem('token')
    var obj={
        groupId,
        chatmessage

      }
      console.log(obj)
      axios.post("http://localhost:8080/postgroupMessages",obj,{ headers: { 'authorization': token } })
      
    }
    


window.addEventListener('DOMContentLoaded',()=>{
    const messageBox=document.getElementById('messageBox');
    const groupId=localStorage.getItem('groupId')
   let x=0;
    axios.get("http://localhost:8080/getgroupMessages",{ headers: { 'authorization': groupId } })
    .then((responce)=>{
        console.log(responce)
        if(x<responce.data.groupmessages.length){
    for(let i=x; i<responce.data.groupmessages.length; i++){
        let li = document.createElement('li')
        console.log(responce.data.groupmessages[i].userName)
li.appendChild(document.createTextNode(responce.data.groupmessages[i].userName+':'+responce.data.groupmessages[i].message))
messageBox.appendChild(li)
        x=i+1
    }
    
}
})
    .catch((err)=>console.log(err))
})