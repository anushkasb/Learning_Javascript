var btn=document.getElementById('new-task-submit');
var input_box=document.getElementById('new-task-input');
var list=document.getElementById('task-list');
var style=document.querySelector('div');

var currentInputValue='' ;

input_box.addEventListener('input',function(e){
 currentInputValue = e.target.value;
});


btn.addEventListener('click',function()
    {   


        if(!currentInputValue){
            alert('please enter task')
        }
        else
        {
        var newListElement=document.createElement('div');
        var textNode=document.createTextNode(currentInputValue);
        newListElement.appendChild(textNode);

     
        list.appendChild(newListElement);
        newListElement.classList.add('task')

        var actionElement=document.createElement('div');
       
        actionElement.classList.add('actions')

         var editElement=document.createElement('button');
         editElement.innerHTML='Edit'
         editElement.classList.add('edit')

         var delElement=document.createElement('button');
        delElement.innerHTML='Delete'
         delElement.classList.add('delete')

         actionElement.appendChild(editElement)
         actionElement.appendChild(delElement)

         newListElement.appendChild(actionElement)

      
        

    
        input_box.value=''
        currentInputValue=''
        
        editElement.addEventListener('click', function()
        {
            if(editElement.innerText.toLowerCase()=='edit'){
                newListElement.removeAttribute('readonly')
                newListElement.focus();
                
                editElement.innerText='SAVE';
            }
            else{
                newListElement.setAttribute('readonly','readonly')
                editElement.innerText='Edit';
            }
         })
         delElement.addEventListener('click',function(){
              list.removeChild(newListElement);
         })

       


        }
        
    })

    
