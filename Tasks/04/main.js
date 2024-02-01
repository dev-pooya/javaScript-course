console.log('task 4')

// task constructor  (use this function to create new task)
 
function Task(title){
    
    // we get title from input
    this.title = title

    // status 0 is not-finish and 1 is finish
    this.status = 0

    this.completeTask  = function (){
        this.status = 1
    }
}

// list of tasks 
const tasks = []

// create elements again each time tasks has been changed
function reRenderPage(){

    if(tasks.length){

        //  clear the container
        const container = document.querySelector('#tasks-container')
        container.innerHTML = ''

        tasks.forEach(task =>{
            createTaskElement(task, container)
        })
    }
}

// this function gets task object and create an element, then insert it into the DOM
function createTaskElement (task, containerElement){

    const li = document.createElement('li')
    li.innerHTML = `<span> ${task.title}</span><button>&check;</button> `;
    if (task.status  === 1){
        li.classList.add('done')
    }
    containerElement.appendChild(li)
    // select button inside task li and addEventlistener to handle task finishing
    li.querySelector('button').addEventListener('click' , ()=>{ task.completeTask(); reRenderPage();})
}


// input submit part and adding task 

const input = document.querySelector('#title-input')
const submitBtn = document.querySelector('#add-task')

// eventListenter to button 
submitBtn.addEventListener('click', addTaskHandler)
// eventListener to press Enter
input.addEventListener('keyup', addTaskHandler)

function addTaskHandler(event){

    if(input.value.trim().length === 0 ){
        return
    }
    if(event.type === 'keyup' && event.code !== 'Enter'){
        return;
        // get out of function if key is not "Enter" key
    }
    // create task object 
    const newTask = new Task(input.value)
    // add task toi tasks array
    tasks.push(newTask);
    // reRender page to see the changes
    reRenderPage();

}

