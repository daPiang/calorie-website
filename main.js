let male_rad = document.getElementById('m-radio');
let fem_rad = document.getElementById('f-radio');
let genderState = 0;

function genderRadioMale() {
    genderState = 0;
    genderRadio();
}
function genderRadioFem() {
    genderState = 1;
    genderRadio();
}
function genderRadio() {
    if(genderState==0) {
        fem_rad.checked = false;
    } else if (genderState==1) {
        male_rad.checked = false;
    }
}

let sed = document.getElementById('sedentary');
let lig = document.getElementById('light');
let mod = document.getElementById('moderate');
let act = document.getElementById('active');
let vac = document.getElementById('very-active');
let eac = document.getElementById('extra-active');
let activityState = 0;

function setSed() {
    activityState=0;
    activity();
}
function setLig() {
    activityState=1;
    activity();
}
function setMod() {
    activityState=2;
    activity();
}
function setAct() {
    activityState=3;
    activity();
}
function setVac() {
    activityState=4;
    activity();
}
function setEac() {
    activityState=5;
    activity();
}
function activity() {
    switch(activityState) {
        case 0:
            lig.checked = false;
            mod.checked = false;
            act.checked = false;
            vac.checked = false;
            eac.checked = false;
            break;
        case 1:
            sed.checked = false;
            mod.checked = false;
            act.checked = false;
            vac.checked = false;
            eac.checked = false;
            break;
        case 2:
            lig.checked = false;
            sed.checked = false;
            act.checked = false;
            vac.checked = false;
            eac.checked = false;
            break;
        case 3:
            lig.checked = false;
            mod.checked = false;
            sed.checked = false;
            vac.checked = false;
            eac.checked = false;
            break;
        case 4:
            lig.checked = false;
            mod.checked = false;
            act.checked = false;
            sed.checked = false;
            eac.checked = false;
            break;
        case 5:
            lig.checked = false;
            mod.checked = false;
            act.checked = false;
            vac.checked = false;
            sed.checked = false;
            break;
    }
}

let height = document.getElementById('height-field').value;
let weight = document.getElementById('weight-field').value;
let age = document.getElementById('age-field').value;

let cal_limit = document.getElementById('cal_limit');

//BUG IN CODE FIX LATER
function useFormula() {
    switch(genderState) {
        case 0:
            cal_limit.innerHTML = Number.parseInt(cal_limit.innerHTML) + Number(10*weight+6.25*height-5*age+5);
            progress.max = Number.parseInt(cal_limit.innerHTML);
            progress.value = 0;
            break;
        case 1:
            cal_limit.innerHTML = Number.parseInt(cal_limit.innerHTML) + Number(10*weight+6.25*height-5*age-161);
            progress.max = Number.parseInt(cal_limit.innerHTML);
            progress.value = 0;
            break;
    }
}

let user_cal = document.getElementById('cal-field').value;

function subCals() {
    cal_limit.innerHTML = Number.parseInt(cal_limit.innerHTML) - user_cal;
    progress.value += user_cal;
}

let progress = document.getElementById('progress-bar');