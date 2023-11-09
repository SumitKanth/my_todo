let todoParent = document.getElementById("todoParent"); 
let input = document.getElementById("todoText");
let del_btn = document.getElementById("del_btn");

// Adding Todo Logic
const add = () => {
    if(localStorage.length == 0){
        let arr = [];
        localStorage.setItem("todo", JSON.stringify(arr));
    } 
    let arr_ = JSON.parse(localStorage.getItem("todo"));
    if(input.value == "") {
        alert("Plz Enter Todo");
    }
    else{
        arr_.push(input.value);
        localStorage.setItem("todo", JSON.stringify(arr_));
        location.reload();
    }
}


// Showing todo web page logic  
let val = JSON.parse(localStorage.getItem("todo"));
for(let i=0; i<val.length; i++){
    del_btn.style.display = "block";
    let todo_con = document.createElement("span");
    let todo = document.createElement("p");
    let todo_del = document.createElement("p");
    let todo_edit = document.createElement("p");
    todo_del.id = "todo_del_btn";
    todo_con.id = "todo_con";
    todo_con.className = "todo_content";
    todo.className = "todo"
    todo_del.className = "todo_del";
    todo_edit.className = "todo_edit";
    todo_edit.id = "todoEdit";
    todo.innerHTML = val[i];
    todo_del.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 5.5L18.5 22H5.5L4.5 5.5" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M2 5.5H8M22 5.5H16M16 5.5L14.5 2H9.5L8 5.5M16 5.5H8" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M9.5 16.5L9.5 10.5" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M14.5 16.5L14.5 10.5" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
    `;
    todo_edit.innerHTML = `<img src="img/edit.png" />`;
    todo_con.appendChild(todo);
    todo_con.appendChild(todo_edit);
    todo_con.appendChild(todo_del);
    todoParent.append(todo_con);
};


// Delete todo_task Logic
const del_todo = (i) => {
    let todo_task = document.getElementsByClassName("todo")[i].innerText;
    console.log(todo_task);

    let todo_arr = JSON.parse(localStorage.getItem("todo"));

    // Finding index of the todo_task from local storage
    let todo_ind;
    for(let i=0; i<todo_arr.length; i++){
        if(todo_arr[i] == todo_task){
            todo_ind = i;
            break;
        }
    }

    // arranging todo_task to last of the array
    for(let i=todo_ind; i<todo_arr.length-1; i++){
        let temp = todo_arr[i+1];
        todo_arr[i+1] = todo_arr[i];
        todo_arr[i] = temp;
    }   

    // deleting the task
    todo_arr.pop();

    localStorage.setItem("todo", JSON.stringify(todo_arr));
    location.reload();    
}


// Edit Todo
let ind;
const edit_todo = (i) => {
    let val = document.getElementsByClassName("todo")[i].innerText;
    input.value = val;
    ind = i;
    let edit_btn = document.getElementById("edit_btn");
    edit_btn.style.display = "inline-block";
    document.getElementById("add_btn").style.display = "none";
}

const edit = () => {
    let todo_val = input.value;
    if(todo_val != "") {
        document.getElementsByClassName("todo")[ind].innerText = todo_val;
        let arr_edit = JSON.parse(localStorage.getItem("todo"));
        arr_edit[ind] = todo_val;
        localStorage.setItem("todo", JSON.stringify(arr_edit));
        input.value = "";
        
        let edit_btn = document.getElementById("edit_btn");
        edit_btn.style.display = "none";
        document.getElementById("add_btn").style.display = "inline-block";
    }
}


// Ye logic smj nii aaya
for(let i=0; i<val.length; i++){
    document.getElementsByTagName("svg")[i].addEventListener("click", function() {
        del_todo(i);
    })

    document.getElementsByClassName("todo_edit")[i].addEventListener("click", () => {
        edit_todo(i);
    })
}


// Delete All Todo Logic
const delete_btn = () => {
    localStorage.removeItem("todo");
    let arr = [];
    localStorage.setItem("todo", JSON.stringify(arr));
    location.reload();
}


// let set = new Set();
// localStorage.setItem("Todos", JSON.stringify(set));
// set.add("HELLO");
// set.add("DONE");
// localStorage.setItem("Todos", JSON.stringify(set));

// let arr_ = [];
// localStorage.setItem("DELETE_ARR", JSON.stringify(arr_));
// arr_.push("DONE");
// arr_.push("WORKED");
// localStorage.setItem("DELETE_ARR", JSON.stringify(arr_));


// const add = () => {
//     let set = JSON.parse(localStorage.getItem("Todo"));
//     console.log(typeof(set));
//     if(input.value == "") {
//         alert("Plz Enter Todo");
//     }
//     else{
//         set.add(input.value);
//         localStorage.setItem("Todo", JSON.stringify(set));
//         location.reload();
//     }
    
// }

// // Showing todo web page logic  
// let val = JSON.parse(localStorage.getItem("Todo"));
// for(let item of val){
//     let todo = document.createElement("p");
//     todo.className = "todo_content";
//     todo.innerHTML = item;
//     todoParent.appendChild(todo);
// };

// const delete_btn = () => {
//     localStorage.removeItem("Todo");
//     let set = new Set();
//     localStorage.setItem("Todo", JSON.stringify(set));
//     location.reload();
// }