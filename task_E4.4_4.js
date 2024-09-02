//определили родительскую функцию с методом включения и выключения
function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

Appliance.prototype.plugIn = function() {
    this.isPlugged = true;
    console.log(`${this.name} is plugged in.`);
};

Appliance.prototype.unplug = function() {
    this.isPlugged = false;
    console.log(`${this.name} is unplugged.`);
};
//создаем делегирующую связь для двух приборов
function TV(name, power, brand) {
    Appliance.call(this, name, power);
    this.brand = brand;
}

TV.prototype = Object.create(Appliance.prototype);
TV.prototype.constructor = TV;

TV.prototype.installSoft = function(newSoft) {
    console.log(`${newSoft} has been installed on the ${this.name}.`);
};

function Computer(name, power, brand) {
    Appliance.call(this, name, power);
    this.brand = brand;
}

Computer.prototype = Object.create(Appliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.installSoftware = function(software) {
    console.log(`${software} has been installed on the ${this.name}.`);
};
// Создаем экземпляры каждого прибора
const xiaomi = new TV('Xiaomi mi 4 TV', 100, 'Xiaomi');
const gamingComputer = new Computer('Gaming Computer', 500, 'Alienware');
// используем метод включения прибора
xiaomi.plugIn();
gamingComputer.plugIn();
// используем метод - установка ПО - Soft/software
xiaomi.installSoft('RADIO');
gamingComputer.installSoftware('Rutube');
// используем метод выключения приборов
xiaomi.unplug();
gamingComputer.unplug();
// Расчет потребляемой мощности. Для того чтобы посчитать мощность нужно оставить приборы включенными.
// Удалить unplug()
function calculateTotalPower(appliances) {
    return appliances.reduce((total, appliance) => {
        return total + (appliance.isPlugged ? appliance.power : 0);
    }, 0);
}

const appliances = [xiaomi, gamingComputer];
const totalPower = calculateTotalPower(appliances);

console.log(`Total power consumption: ${totalPower} watts`);