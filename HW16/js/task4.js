function User() {
    this.name = 'Alexandr';
    this.registerDate = '01.01.2019';
}

User.prototype.getInfo = function() {
    return {
        name: this.name,
        registerDate: this.registerDate
    } 
}

function Admin(data) {
    User.call(this);
    this.superAdmin = data;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.getInfo = function() {
    return {
        name: this.name,
        registerDate: this.registerDate,
        superAdmin: this.superAdmin
    } 
}

function Guest(validDate) {
    User.call(this);
    this.validDate = validDate;
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Admin;
Guest.prototype.getInfo = function() {
    return {
        name: this.name,
        registerDate: this.registerDate,
        validDate: this.validDate
    } 
}

console.log(new Guest('08.01.2019').getInfo())
console.log(new Admin(true).getInfo())
console.log(new User().getInfo())

