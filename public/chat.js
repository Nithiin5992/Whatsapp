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