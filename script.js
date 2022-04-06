function calcValues() {

    // One of Two For Loops
    const question = prompt("How many checks are there?");
    for (let i = 0; i < question; i++) {

        // String Bill Data Converted to Numbered Bill Data
        // "${i + 1}" Logs What Check the User is Inputing
        const bill = prompt(`Check #${i + 1} amount?`);
        const whatCheckYoureOn = i + 1;
        const billConversion = Number(bill);
        const bills = [billConversion];

        // Empty Tip and Total Arrays to Be Calculated
        const tips = [];
        const totals = [];

        // Two of Two For Loops
        for (let i = 0; i < bills.length; i++) {

            // Arrow Function with Ternary Operator Equation
            const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20;

            // Takes the Value Generated from the CalcTip Function and Enters it as an Element in the Tip Array
            tips.push(calcTip(bills[i]));

            // Adds Bills and Tips Together and Enters it as an Element in the Totals Array
            totals.push(bills[i] + tips[i]);

            // Alerts the User of What Check they are on, as Well as the Bill Amount, Tip Amount, and Total Amount
            alert(`Check #${whatCheckYoureOn}: The bill was $${bills[i]}, the tip should be $${tips[i]}, which makes the grand total $${totals[i]}.`);
        }
    }
}

// Provided Test Data

// test data = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// corresponding tip amounts = [4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8];

// corresponding grand totals = [26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8];