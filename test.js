class Person{
    constructor(name,age){
        //super();
        this._name=name;
        this._age=age;
    }
   /* get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    */

}
let rafik=new Person("rafik",23);
console.log(rafik.name+"\n "+rafik.age);