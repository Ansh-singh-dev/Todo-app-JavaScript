const input = document.querySelector(`#taskInput`);
const addBtn = document.querySelector(`#addBtn`);
const taskList = document.querySelector(`#taskList`);

addBtn.addEventListener(`click`, () => {
    
     if (input.value === "") {
        return;
    }

    const li = document.createElement("li");
li.textContent = "Task: " + input.value;

li.addEventListener("click", () => {
    li.classList.toggle("completed");
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "✖";
deleteBtn.classList.add("delete-btn");

deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
});

li.appendChild(deleteBtn);
taskList.appendChild(li);
input.value = "";
});