class Gadget{
    constructor(name, brand, price){
        this.name=name;
        this.brand=brand;
        this.price=price;
    }

    showDetails(){
        console.log('name:$(this.name), brand:$(this.brand), price:(this.price)');
    }
}

class Laptop extends Gadget{
    constructor(name, brand, price, ram, storage){
        super(name, brand, price);
        this.ram=ram;
        this.storage=storage;
    }
    showLaptopDetails(){
        this.showDetails();
        console.log('RAM:${this.ram}GB, Storage:${this.brand}GB');
    }
}
class Mobile extends Gadget{
    constructor(name, brand, price, camera, battery){
        super(name, brand, price);
        this.camera=camera;
        this.battery=battery;
    }
    showDetails(){
        this.showDetails();
        console.log('Camera:${this.camera}MP, Battery:${this.battery}mah');
    }
}