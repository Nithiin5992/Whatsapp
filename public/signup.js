

function submit(){
const username=document.getElementById('username').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
const obj={
    username,
    email,
    password
}
console.log(obj)
    axios.post('http://localhost:8080/signup',obj)
    .then(responce=>{
       alert(responce.data.message)
    })
    .catch(err=>{
        console.log(err)
        alert(err.message)
    })
}