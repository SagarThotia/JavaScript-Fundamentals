class Wallet{
    #balance = 0;
    #transactions = [];

    deposit(amount){
        this.#processDeposit(amount);
        this.#balance += amount;
    }

    withdraw(amount){
        this.#processWithdrawn(amount);
        this.#balance -= amount;
    }

    #processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this.#transactions.push({ type: 'deposit', amount,});
    }

    #processWithdrawn(amount){
        if(amount > this.#balance){
            console.log('Not enough funds');
            return;
        }

        console.log(`Withdrawing ${amount}`);
        this.#transactions.push({ type: 'withdraw', amount,});
    }


    get balance(){
        return this.#balance;
    }

    get transactions(){
        return this.#transactions;
    }
}

const wallet = new Wallet();
wallet.deposit(500);
wallet.withdraw(100);
console.log(wallet.balance);