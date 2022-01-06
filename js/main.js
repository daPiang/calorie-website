//Gender Radio Button Stuff
const male_rad = document.getElementById('m-radio');
const fem_rad = document.getElementById('f-radio');
const height = document.getElementById('height-field');
const weight = document.getElementById('weight-field');
const age = document.getElementById('age-field');
const sed = document.getElementById('sedentary');
const lig = document.getElementById('light');
const mod = document.getElementById('moderate');
const act = document.getElementById('active');
const vac = document.getElementById('very-active');
const eac = document.getElementById('extra-active');
const submit = document.getElementById('submit-button1');

let activityState = 0;
let genderState = 0;
let cal_limit = '';
let loss = 0;

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
function init() {
    male_rad.checked=true;
    sed.checked=true;
}
function setSed() {
    activityState=0;
    loss=129.5;
    activity();
}
function setLig() {
    activityState=1;
    loss=-194.5;
    activity();
}
function setMod() {
    activityState=2;
    loss=-361.5;
    activity();
}
function setAct() {
    activityState=3;
    loss=-518.5;
    activity();
}
function setVac() {
    activityState=4;
    loss=-843.5;
    activity();
}
function setEac() {
    activityState=5;
    loss=-1167.5;
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
function useFormula() {
    const cal_scope = {
        W: weight.value,
        H: height.value,
        A: age.value,
        L: loss
    }
    switch(genderState) {
        case 0:
            cal_limit = math.evaluate('10W+6.25H-5A+5-L', cal_scope);
            break;
        case 1:
            cal_limit = math.evaluate('10W+6.25H-5A-161-L', cal_scope);
            break;
    }
    sessionStorage.calories = cal_limit;
}

init();