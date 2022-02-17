"user_strict;"

let input_start_date = document.querySelector('#start_date');
let input_end_date = document.querySelector('#end_date');
let col_nb_day = document.querySelector('#nb_day');
let col_amount = document.querySelector('#amount');
let col_total_amount = document.querySelector('#total_amount');
let table_amount = document.querySelector('#table_amount');
let one_day = 1000 * 60 * 60 * 24;
let invalid_date = document.querySelector('#invalid_date');

input_start_date.addEventListener('change', calculAndDisplayAmount);
input_end_date.addEventListener('change', calculAndDisplayAmount);

function calculAndDisplayAmount() {

    let start_date = new Date(input_start_date.value);
    let end_date = new Date(input_end_date.value);
    let dateDiff = Math.round(end_date.getTime() - start_date.getTime()) / (one_day);

    if (input_start_date.value && input_end_date.value) {
        if (dateDiff > 0) {

            table_amount.classList.remove("d-none");
            invalid_date.style.display = "none";
            col_nb_day.textContent = dateDiff;
            col_amount.textContent = 500 + '€';
            col_total_amount.textContent = parseInt(col_amount.textContent) * parseInt(dateDiff) + '€';
        } else {
            invalid_date.style.display = "block";
            table_amount.classList.add('d-none');
        }
    }
}