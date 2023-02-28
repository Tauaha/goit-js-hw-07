
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let visibleValueEl = 0;


decrementEl.addEventListener("click", ()=> {
    console.log(( visibleValueEl -= 1));
    valueEl.textContent = visibleValueEl;
});
incrementEl.addEventListener('click', ()=> {
    console.log(( visibleValueEl += 1));
    valueEl.textContent = visibleValueEl;
});


// const CounterValue = function ( {
// rootSelector,
// inValue = 0,
// step = 1,
//  }={}){
//     this._value = inValue;
//     this._step = step;

//    this._refs = this._getRefs(rootSelector);
//    this._bindEvents();
//    this.updatevisibleValue();

// };
// CounterValue.prototype._getRefs = function (rootSelector){
//     const refs = {};
//     refs.counter = document.querySelector(rootSelector);
//    refs.decrementBtn = refs.counter.querySelector('[data-decrement]');
//    refs.incrementBtn = refs.counter.querySelector('[data-increment]');
//    refs.value = refs.counter.querySelector('#value');

//    return refs;
// }
// CounterValue.prototype._bindEvents = function(){
//     this._refs.decrementBtn.addEventListener('click', ()=>{
//         console.log('CounterPlugin.prototype._bindEvents -> this',this);
//         this.decrement();
//         this.updatevisibleValue();
//     });
//     this._refs.incrementBtn.addEventListener('click', ()=>{
//         console.log(this);
//         this.increment();
//         this.updatevisibleValue();
//     });
// };
// CounterValue.prototype.updatevisibleValue = function (){
//    this._refs.value.textContent = this._value; 
// }
// CounterValue.prototype.increment = function (){
//     this._value += this._step;
// }
// CounterValue.prototype.decrement = function (){
//     this._value -= this._step;
// }
//  new CounterValue({rootSelector: '#counter', step: 1, inValue: 100});

