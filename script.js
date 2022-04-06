const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

    for(let i = 0; i < bills.length; i++){
       
    const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

        tips.push(calcTip(bills[i]));

        totals.push(bills[i] + tips[i]);
        alert(`The bill was $${bills[i]}, the tip should be $${tips[i]}, which makes the grand total $${totals[i]}.`);
    }
