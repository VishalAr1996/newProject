let ulTasks=$('#ulTasks')
let btnAdd=$('#btnAdd')
let btnReset=$('#btnReset')
let inpNewTask=$('#inpNewTask')
let btncleanup=$('#btnCleanup')
let btnSort=$('#btnSort')



function addItem(){
    //creating a new element in jquery
    let ListItem=$('<li>',{
        'class' :'list-group-item',
        text : inpNewTask.val()
        })
     /* to toggle the items
      ListItem.click(()=>ListItem.toggleClass('disabled'))-we can also do this
      ListItem.click((event)=>{
      $(event.target).toggleClass('disabled')
      })*/
       // to toggle and to set done or not done
      ListItem.click(()=>ListItem.toggleClass('done'))

      // to append item in list
    ulTasks.append(ListItem)
    toggleInputBtns()
}

//to using enter button to add elements or handling the enter button
inpNewTask.keypress((e)=>{
  if(e.which == 13)
  addItem()
})

// to delete all completed tasks
function clearDone(){
 $('#ulTasks .done').remove() // any done task inside ultask will we removed
toggleInputBtns()
}

//to sort the task
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)  
    toggleInputBtns()
}

//all function calls
btnAdd.click(addItem)

btnReset.click(()=>{ 
    inpNewTask.val('')
    toggleInputBtns()
})

btncleanup.click(clearDone)

btnSort.click(sortTasks)


//to make button enable/disabled
function toggleInputBtns(){
        btnReset.prop('disabled',inpNewTask.val()=='')
        btnAdd.prop('disabled',inpNewTask.val()=='')
        btnSort.prop('disabled',ulTasks.children().length < 1)
        btncleanup.prop('disabled',ulTasks.children().length < 1)
    }


inpNewTask.on('input',toggleInputBtns)