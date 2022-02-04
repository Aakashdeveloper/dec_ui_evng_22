///Es6

class geo {
    constructor(){
        this.lat = 67.32;
        this.long = 87.23
    }
}

class language1 {
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi To ${this.name}`
    }
}

var French = new language1('French','France')

French
language1 {name: 'French', country: 'France', greet: ƒ}
French.greet()
'Say Hi To French'