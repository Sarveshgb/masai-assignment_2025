function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      } else {
        return "Invalid deposit amount.";
      }
    },

    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient funds or invalid amount.";
      }
    },

    getBalance: function () {
      return balance;
    },
  };
}

// Demonstration
const account = createBankAccount(100);

console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());
