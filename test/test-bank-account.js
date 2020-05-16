const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('Bank Account Test', ()=>{
    describe('#current', ()=>{
      let bankAccount = new BankAccount();
      it('should have the amount given', ()=>{
        assert.equal(0, bankAccount.current());
      })
    });

    describe('#append', ()=>{
      let bankAccount = new BankAccount();
      let appendValue = 500;
      let appendNegativeValue = -100;
      it('should append money and return the total amount', ()=>{
        assert.equal(500, bankAccount.append(appendValue));
      })
      it('should not append negative values', ()=>{
        assert.equal(500, bankAccount.append(appendNegativeValue));
      })
    });

    describe('#substract', ()=>{
      let bankAccount = new BankAccount();
      bankAccount.append(100);
      let substractValue = 50; 
      let negativeSubstractValue = -300;

      it('should substract money and return the total amount', ()=>{
        assert.equal(50, bankAccount.substract(substractValue));
      })
      it('should not substract money when total amount is negative', ()=>{
        assert.equal(50, bankAccount.substract(negativeSubstractValue));
      })
    });

    describe('#merge', ()=>{
      let bankAccount = new BankAccount();
      let bankAccount2 = new BankAccount();

      bankAccount.append(100);
      bankAccount2.append(50);
      
      let data = [{operation: 'append', amount: 100}, 
                  {operation: 'append', amount: 50}];

      bankAccount.merge(bankAccount2);

      it('should merge two accounts with all the history and amounts', ()=>{
        assert.deepEqual(data, bankAccount.history());
      })
      it('should add amount if positive to original account', ()=>{
        assert.equal(150, bankAccount.current());
      })

      let bankAccount3 = new BankAccount();
      let bankAccount4 = new BankAccount();

      bankAccount3.append(100);
      bankAccount4.substract(50);
      console.log("MONEEEY", bankAccount4.moneyinAccount);
      bankAccount3.merge(bankAccount4);

      it('should substract amount if negative to original account', ()=>{
        assert.equal(50, bankAccount3.current());
      })
    });

    describe('#history', ()=>{
      let bankAccount = new BankAccount();
      bankAccount.append(100);
      bankAccount.substract(100);
      bankAccount.substract(500);

      let data = [{operation: 'append', amount: 100}, 
                  {operation: 'substract', amount: 100},
                  {operation: 'substract', amount: 500}];

      it('should return an array of objects with the history', ()=>{
        assert.deepEqual(data, bankAccount.history());
      })
  
    });

});