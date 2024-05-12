// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

class CounterFunctions{
    constructor(initial){
        this.current = initial;
        this.start = initial;
    }
    
    increment(){
        return ++this.current;
    }
    
    decrement(){
        return --this.current;
    }
    
    reset(){
        this.current = this.start;
        return this.start;
    }
}

var createCounter = function(init) {
    return new CounterFunctions(init);
};
