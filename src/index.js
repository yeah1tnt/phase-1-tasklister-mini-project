document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const description = document.getElementById(`new-task-description`);
  const form = document.getElementById(`create-task-form`);
  const tasks = document.getElementById(`tasks`);
  const priority = document.getElementById(`priority`);

  form.addEventListener(`submit`,function(e){
    e.preventDefault();
    
    const taskList = document.createElement(`li`);
    taskList.innerText = priority.value+ `. ` + description.value;
    
    const remove_btn = document.createElement(`button`);
    remove_btn.innerText = `x`;

    remove_btn.addEventListener(`click`,function(e){
      e.target.parentNode.remove(taskList);
    });
    taskList.appendChild(remove_btn);
    tasks.appendChild(taskList);
    priority.value =``;
    description.value=``;
  });
});
