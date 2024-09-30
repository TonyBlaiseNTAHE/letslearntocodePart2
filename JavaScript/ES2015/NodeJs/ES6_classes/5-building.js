export default class Building{
    constructor(sqrt){
        if (typeof sqrt !== 'number'){
            throw new TypeError('Sqrt must be a number');
        }
        this._sqrt = sqrt;
    }
    get sqrt(){
        return this._sqrt;
    }
    set sqrt(sqrt){
        if (typeof sqrt !== 'number'){
            throw new TypeError('Sqrt must be a number');
        }
        this._sqrt = sqrt;
    }
    
}