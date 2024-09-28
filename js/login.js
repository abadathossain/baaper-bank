document.getElementById('btn-submit').addEventListener('click', function(){
    console.log('Yes')
    const emailField =document.getElementById('exampleInputEmail1')
    const email = emailField.value
    console.log(email)

    const passlField =document.getElementById('exampleInputPassword1')
    const pass =passlField.value

    if(email == 'add@gmail.com' && pass == 'abc'){
        console.log('Hello')
        window.location.href = 'index.html'

    }else{
        console.log('invalid')
    }
})