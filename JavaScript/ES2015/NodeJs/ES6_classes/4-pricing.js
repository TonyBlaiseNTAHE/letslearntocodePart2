import Currency from "./3-currency.js";

export default class Pricing{
    constructor(amount, currency){
        if(typeof amount !== 'number'){
            throw new TypeError('Amount must be a number');
        }
        this._amount = amount;
        this._currency = currency;
    }
    get amount(){
        return this._amount;
    }
    set amount(amount){
        if(typeof amount !== 'number'){
            throw new TypeError('Amount must be a number');
        }
        this._amount = amount;
    }
    displayFullPrice(){
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }
    static convertPrice(amount, conversionRate){
        return amount * conversionRate;
    }
}