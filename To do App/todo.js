let input=document.querySelector('.list');
let addbtn=document.querySelector('.add-list');
let task=document.querySelector('.task');

//  lets start right funtion for it 

input.addEventListener('keyup',()=>{
    if(input.value.trim() !=0){
        addbtn.classList.add('active')
    }else{
        addbtn.classList.remove('active')
    }
})

// add new item to list

addbtn.addEventListener('click', () => {

    if(input.value.trim() !== 0){
        let newItem=document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML =`
        <p> ${input.value} </p>
        <div class="item-btn">
        <i class="fa-solid fa-pen-to-square"> </i>

        <i class="fa-solid fa-xmark" ></i>
        </div>
        `
        task.appendChild(newItem);
        input.value= '';
    }
    else{
        alert('Please enter a task')
    }
})


task.addEventListener('click', (i)=>{

    if(i.target.classList.contains('fa-xmark')){
        i.target.parentElement.parentElement.remove();
    }
})


task.addEventListener('click', (i)=>{

    if(i.target.classList.contains('fa-pen-to-square')){
        i.target.parentElement.parentElement.classList.toggle('completed');
    }
})