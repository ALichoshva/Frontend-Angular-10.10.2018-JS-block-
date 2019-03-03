function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatelite(name, sateliteName) {
    Planet.call(this, name)
    this.planet = this.getName();
    this.getName = function () {
        return this.planet + '. ' + 'The satelite is ' + sateliteName;
    }
}



const earth = new PlanetWithSatelite('earth', 'moon');
console.log(earth.getName());