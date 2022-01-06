let user_cal = document.getElementById('cal-field');
let user_food = document.getElementById('food-field');
let calorie_limit = document.getElementById('cal_limit');
let progress = document.getElementById('progress-bar');

function subCals() {
    if(user_cal.value!='') {
        calorie_limit.innerHTML -= parseInt(user_cal.value);
        progress.value += parseInt(user_cal.value);
        user_cal.value='';
        user_food.value='';
        if(parseInt(calorie_limit.innerHTML)<0) {
            calorie_limit.innerHTML=0;
        }
    }
}
function init() {
    let daily_cal = sessionStorage.calories;
    calorie_limit.innerHTML = daily_cal;
    progress.value='0';
    progress.max=daily_cal;
}

init();