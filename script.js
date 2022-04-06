let question = prompt("how many checks are there?")
for(let i = 0; i < question; i++){

let bill = prompt("check amount?")
let bill4 = Number(bill)
let bills = [bill4]


const tips = [];

const totals = [];
 
    for(let i = 0; i < bills.length; i++){
       
    const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20;

        tips.push(calcTip(bills[i]));

        totals.push(bills[i] + tips[i]);
        console.log(`The bill was $${bills[i]}, the tip should be $${tips[i]}, which makes the grand total $${totals[i]}.`);

        console.log(tips, totals)
    }
    console.log(bill, bills, tips, totals)
}

    // 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52