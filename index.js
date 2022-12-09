let tasks = [
  {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
  },
  {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
  },
  {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
  },
]
  

const task = tasks.map((task, id)=>{
  return (
  `<div class="task-item" data-task-id="${id+1}">
  <div class="task-item__main-container">
      <div class="task-item__main-content">
          <form class="checkbox-form">
              <input class="checkbox-form__checkbox" type="checkbox" id="${"task"+ id+1}" ${task.completed? checked : ''}>
              <label for="${"task"+ id+1}"></label>
          </form>
          <span class="task-item__text">
              ${task.text}
          </span>
      </div>
      <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
          Удалить
      </button>
  </div>
</div>`
)
})
const main = document.querySelector('.tasks-list')
main.innerHTML = task

const form = document.querySelector('.create-task-block')
form.addEventListener('submit',(event)=>{
  event.preventDefault()
  const{target} = event
//   console.log(target);
  const buildTask = target.taskName
  const inputValue = buildTask.value
    console.log(inputValue); //Получили доступ к значению value
  if(inputValue){
    let newId = Date.now() //создаем переменную Id
    console.log('newId',newId);
    tasks.push({id: newId,
    completed: false,
    text: inputValue})
    console.log(tasks);// Проверка изменился ли масссив

                const main1 = document.querySelector('.tasks-list')
main1.insertAdjacentHTML('afterend',`<div class="task-item" data-task-id="${newId}">
<div class="task-item__main-container">
    <div class="task-item__main-content">
        <form class="checkbox-form">
            <input class="checkbox-form__checkbox" type="checkbox" id="${newId}" ${task.completed? checked : ''}>
            <label for="${newId}"></label>
        </form>
        <span class="task-item__text">
            ${inputValue}
        </span>
    </div>
    <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
        Удалить
    </button>
</div>
</div>`)
  }else{}
})


