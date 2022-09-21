var btn=document.getElementById('add-item');
var list=document.getElementById('todo-list');
var input_box=document.getElementById('input-box');
var style=document.querySelector('li');

var currentInputValue='' ;
input_box.addEventListener('input',function(e){
 currentInputValue = e.target.value;
});

btn.addEventListener('click',function()
{
    var newListElement=document.createElement('li');
    var textNode=document.createTextNode(currentInputValue);
    newListElement.appendChild(textNode);
    newListElement.id="item3" + list.childElementCount + 1;
    list.appendChild(newListElement);
    newListElement.classList.add('list-item')
})