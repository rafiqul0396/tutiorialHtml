//const sum = require("./tut1");

//const tut1=require('./tut1')
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('tut1',(num1,num2)=>{
console.log(num1+num2)
});
eventEmitter.emit('tut1',1,4);


class Person extends EventEmitter{
   constructor(name) {
    super();
    this._name=name;
   }
   get name(){
       return this._name;
   }
}


let pedro =new  Person('pedro');
pedro.on('name',()=>{
    console.log('my name is'+pedro.name);
});
pedro.emit('name');

