function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => { return `Say Hi to ${name}`}
}

var Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi to Hindi'

var English = new language('English','Uk')
undefined
English
language {name: 'English', country: 'Uk', greet: ƒ}