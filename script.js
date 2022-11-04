const bill = document.querySelector("#bill");
const btns = document.querySelectorAll(".tip-selection-btns");
const custom_tip = document.querySelector("#custom-tip");
const people = document.querySelector("#people-count");
const tip_per_person = document.querySelector("#tip-per-person");
const total_per_person = document.querySelector("#total-per-person");
const reset_btn = document.querySelector(".reset");
reset_btn.addEventListener("click", ()=>{
    btns.forEach(e => {
        e.classList.remove("active");
    })
})
var tip_ammount = 0.00;
btns.forEach(e => {
    e.addEventListener("click", ()=>{
        if (!e.classList.contains("active")) {
            btns.forEach(f => {
                f.classList.remove("active");
                tip_ammount = 0.00;
            })
            e.classList.add("active");
            tip_ammount = e.textContent;
        }else{
            e.classList.remove("active");
            tip_ammount = 0.00;
        }
    })
    e.addEventListener("click", calculation);
});
bill.addEventListener("keyup", calculation);
custom_tip.addEventListener("keyup", calculation);
people.addEventListener("keyup", calculation);
function calculation() {
    if (!tip_ammount) {
        tip_ammount = custom_tip.value;
    } else if(tip_ammount && custom_tip.value) {
        tip_ammount = custom_tip.value;
    }
    var bill_ammount = parseFloat(bill.value);
    if (!people.value) {
        var people_num = 1;
    } else {
        var people_num = parseFloat(people.value);
    }
    tip_per_person.value = tip_result(tip_ammount, bill_ammount, people_num);
    total_per_person.value = total_result(tip_ammount, bill_ammount, people_num);
}
function tip_result(t, b, n) {
        result = (((t/100)*b)/n);
        result = parseFloat(result).toFixed(2);
        result = "$ ".concat(result.toString());
        return result;
}
function total_result(t, b, n) {
        result = ((((t/100)*b))+b)/n;
        result = parseFloat(result).toFixed(2);
        result = "$ ".concat(result.toString());
        return result;
}