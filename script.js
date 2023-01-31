const tipBtn = document.querySelectorAll('.js-tip-btn');
const tipText = document.querySelector('.js-tip');
const totalText = document.querySelector('.js-total');
const btn = document.querySelector('.js-reset-btn');


function tipCalc(e) {
    const bill = Number(document.querySelector('.js-bill').value);
    let tip = 0;
    let total = 0;
    for (const el of tipBtn) {
        switch (e.target.value) {
            case '5':
                tip = bill * (Number(e.target.value)/100);
                total = bill + tip;
                tip = tip.toFixed(2);
                total = total.toFixed(2);
                break;
            case '10':
                tip = bill * (Number(e.target.value)/100);
                total = bill + tip;
                tip = tip.toFixed(2);
                total = total.toFixed(2);
                break;
            case '15':
                tip = bill * (Number(e.target.value)/100);
                total = bill + tip;
                tip = tip.toFixed(2);
                total = total.toFixed(2);
                break;
            case '20':
                tip = bill * (Number(e.target.value)/100);
                total = bill + tip;
                tip = tip.toFixed(2);
                total = total.toFixed(2);
                break;
        }
        tipText.textContent = `$` + `${tip}`;
        totalText.textContent = `$` + `${total}`;
    }
}
for (const e of tipBtn) {
    e.addEventListener('click', tipCalc);
}

btn.addEventListener('click', () => {
    tipText.textContent = `$0.00`;
    totalText.textContent = `$0.00`;
    document.querySelector('.js-bill').value = ``;
})