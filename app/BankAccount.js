class BankAccount {

  moneyinAccount = 0;
  historyAccount = [];
  transaction = {};

  constructor(){}

  current(){
    return this.moneyinAccount;
  }

  append(money){
    if(money>=0){
      this.moneyinAccount += money;
      this.transaction = {operation: 'append', amount: money};
      this.historyAccount.push(this.transaction);
    }
    return this.moneyinAccount;
  }

  substract(money){
    if(money>=0){
      this.moneyinAccount -= money;
      this.transaction = {operation: 'substract', amount: money};
      this.historyAccount.push(this.transaction);
    }
    return this.moneyinAccount;
  }

  merge(bankAccount){
    for(var i = 0 ;i<bankAccount.historyAccount.length; i++){
      this.historyAccount.push(bankAccount.historyAccount[i]);
    }
    
    this.moneyinAccount += bankAccount.moneyinAccount;
    
  
    console.log(this.historyAccount);
  }

  history(){
    return this.historyAccount;
  }


}

module.exports = BankAccount;