// alert('HELLO JS')

'use strict'
// console.log(a)

// ''

$('button[type="submit"]')[0].addEventListener('click', addToMyList)


function addToMyList() {
    let newListInputValue = $('.todo-input')[0].value;
    if (newListInputValue.length > 0) {
        let newli = document.createElement("li");
        $('.Unordered_list')[0].appendChild(newli)
        var newH2 = document.createElement("h2");
        newli.appendChild(newH2)

        newH2.innerText = newListInputValue;
        // $('[class="Unordered_list"]>li')[$('[class="Unordered_list"]>li').length-1].innerText = newListInputValue
        // .value = newListInputValue;
        // newH2.innerText = newListInputValue;
        console.log(newH2);
        $('.todo-input')[0].value = ''
    } else {
        alert('please enter some infomration')
    }
}
// alert('cvjhabsca')