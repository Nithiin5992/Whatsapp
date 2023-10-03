const username=document.getElementById('username').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

function submit(){
const obj={
    username,
    email,
    password
}
    axios.post('http://localhost:8080/signup',obj)
}