class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }

        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },

    }

    session = {}
    // session={"user:1000"}
    validateAccountNumber(acno) {
        return acno in this.accounts ? true : false
    }
    authenticate(acno, password) {
        if (this.validateAccountNumber(acno)) {
            let pwd = this.accounts[acno].password
            if (this.password == pwd) {
                console.log("access granted");
                this.session["user"] = acno

            }
            else {
                console.log("invalid password");
            }

        }
        else {
            console.log("invalid account number");
        }

    }
    getBalance(acno) {
        return this.accounts[acno].balance

    }
    balanceEnquiry() {
        if ("user" in this.session) {
            let loggeduser = this.session["user"]
            console.log(this.getBalance(loggeduser));
        }
        else {
            console.log("invalid session u must login");

        }
    }
    loginRequired(){
        return "user" in this.session? true:false
    }

    fundTransfer(to_acno, amount) {
        if (this.loginRequired()) {
            let loggeduser = this.session["user"]
            if (this.validateAccountNumber(to_acno)) {
                let currBal = this.getBalance(loggeduser)
                if (amount > currBal) {
                    console.log("insufficient balance");
                }
                else {
                    console.log("transaction completed");
                }
            }
            else {
                console.log("invalid to account number");
            }
        }
            else{
                console.log("invalid account number");
            }

        }

    }

var bank = new Bank
bank.authenticate(1000, "userone")
bank.balanceEnquiry();
bank.fundTransfer(1001,100)
