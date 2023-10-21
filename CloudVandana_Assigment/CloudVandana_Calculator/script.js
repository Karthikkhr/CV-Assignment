let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');
let string = "";
let arr = Array.from(button);

arr.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
