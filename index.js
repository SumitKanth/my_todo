let todoParent = document.getElementById("todoParent"); 
let input = document.getElementById("todoText");
let del_btn = document.getElementById("del_btn");


const add = () => {
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
    let todo = document.createElement("p");
    todo.className = "todo_content";
    todo.innerHTML = val[i];
    todoParent.appendChild(todo);
};

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