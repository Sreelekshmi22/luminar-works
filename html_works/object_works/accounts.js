var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

  // total no of accounts
 // console.log(accounts.length);

  // print all account noswhose ac-typesavings
 //  accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno))
 
 // printbal of acno=1000
 // let bal=accounts.find(data=>data.acno==1000).balance

 // print all gpay transaction details
 // var trans=accounts.map(data=>data.transactions)
 // console.log(trans);

 // print credit transactions of 1002
 // accounts.map(data=>data.transactions).flat().filter(t=>to==1002).forEach(t=>console.log(t));

 // print highest balance account details
  var maxbal= accounts.sort((a1,a2)=>a2.balance-a1.balance)
  console.log(maxbal);
