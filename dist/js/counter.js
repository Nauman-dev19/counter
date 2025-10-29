export function counter() {
    const counterValue = document.querySelector(`.count-value`);
    let counterCurrentValue = 0;
    const add = document.querySelector(`.add`);
    const minus = document.querySelector(`.minus`);
    const zero = document.querySelector(`.zero`);
    function uiUpdate() {
        if (counterValue) {
            counterValue.textContent = String(counterCurrentValue);
        }
    }
    uiUpdate();
    function increament() {
        counterCurrentValue += 1;
        uiUpdate();
        return counterCurrentValue;
    }
    function decreament() {
        counterCurrentValue -= 1;
        uiUpdate();
        return counterCurrentValue;
    }
    function reset() {
        counterCurrentValue = 0;
        uiUpdate();
        return counterCurrentValue;
    }
    add?.addEventListener(`click`, increament);
    minus?.addEventListener(`click`, decreament);
    zero?.addEventListener(`click`, reset);
}
