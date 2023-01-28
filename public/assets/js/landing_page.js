


    const dragArea2 =document.querySelector('#landing1');

dragArea2.addEventListener('dragover' , (e) => {
    e.preventDefault();

    console.log('file is inside the drag area');
})

dragArea2.addEventListener('dragleave' , () => {
    console.log('file left the drag area');
})

dragArea2.addEventListener('drop' , (e) => {
    e.preventDefault();
    console.log('file is droped');
})
  