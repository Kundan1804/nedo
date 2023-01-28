// const dragArea1 =document.querySelector('#manufaturing_login6 .container .row .one_col .login-form-wrap .login-form .process_row .process_col');
const dragArea1 =document.querySelector('#manufaturing_login6 .container .row');

dragArea1.addEventListener('dragover' , (e) => {
    e.preventDefault();

    console.log('file is inside the drag area');
})

dragArea1.addEventListener('dragleave' , () => {
    console.log('file left the drag area');
})

dragArea1.addEventListener('drop' , (e) => {
    e.preventDefault();
    console.log('file is droped');
})







