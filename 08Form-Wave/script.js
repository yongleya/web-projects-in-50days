const user_input=document.querySelector('#username')
const password_input=document.querySelector('#password')
const user=document.querySelectorAll('.user')[0]
const password=document.querySelectorAll('.pwd')[0]

user_input.addEventListener('focusin',function () {
    user.classList.add('active')
})
user_input.addEventListener('focusout',function () {
    if (user_input.value == ''){
        user.classList.remove('active')
    }

})
password_input.addEventListener('focusin',function () {
    password.classList.add('active')
})
password_input.addEventListener('focusout',function () {
    if (password_input.value==''){
        password.classList.remove('active')
    }

})