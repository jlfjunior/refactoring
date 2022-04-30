import { statement } from "./Statement.js";

test('Test of function Statement', () => {
    let plays =  {
        "hamlet" : {name: "Hamlet", type: "tragedy"},
        "as-like": {name: "As You Like It", type: "comedy"},
        "othello": {name: "Othello", type: "tragedy"}
    }
    
    let invoice = {
        customer: "BigCo",
        performances: [
            {playId: "hamlet", audience: 55},
            {playId: "as-like", audience: 35},
            {playId: "othello", audience: 40}
        ]
    }
    let playOneExpected = "Statement for BigCo\n";
    playOneExpected += " Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\n";
    playOneExpected += "Amount owed is $1,730.00\nYou earned 47 credits\n";
    
    const result = statement(invoice, plays);
    
    expect(playOneExpected).toBe(result);
});