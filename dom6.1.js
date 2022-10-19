var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px #ccc';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'white';


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}