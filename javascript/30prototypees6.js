class geo {
    constructor(){
        this.lat = 67.32;
        this.long = 87.23
    }
}

class language1 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi To ${this.name}`
    }
}

var French = new language1('French','France')

console.log(French)