class Car{
    constructor(brand){
        this.carname=brand;
    }   

    func1(){
        return "i have a"+this.carname;
    }
}



class Mod extends Car{
constructor(brand, mod){
    super(brand);

    this.mod=mod;
}

func2(){
    return this.func1() +",it is"+this.mod;

}
}

let rv=new Mod("Ford", "Mustang");
console.log(rv.func2());
