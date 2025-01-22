document.querySelector('button').addEventListener('click',  function() {
    var issued_date = document.querySelector('#i-date').value.split('-')
    var received_date = document.querySelector('#r-date').value.split('-')
    var issued_date = new Date(issued_date[2], issued_date[1]-1, issued_date[0])
    var received_date = new Date(received_date[2], received_date[1]-1, received_date[0])
    let time = received_date.getTime() - issued_date.getTime();
    let days = Math.round(time/(1000*3600*24))
    var amount = Number(document.querySelector('#amount').value)
    var intrest = 0
    while(days>366) {
        if(amount >= 20000) {
            intrest += Math.round((amount + intrest) * 0.02 / 30 * 366);
            days -= 366;
        } else {
            intrest += Math.round((amount + intrest) * 0.03 / 30 * 366);
            days -= 366;
        }
    }
    if(amount >= 20000) {
        intrest += Math.round((amount + intrest) * 0.02 / 30 * days);
    } else {
        intrest += Math.round((amount + intrest) * 0.03 / 30 * days);
    }
    var total_amount = amount + intrest;
    document.querySelector('.amount').textContent = `Amount: ${amount}`;
    document.querySelector('#intrest').textContent = `Intrest: ${intrest}`;
    document.querySelector('#total-amount').textContent = `Total Amount: ${total_amount}`;
});