//определили родительский класс с методом включения и выключения
class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        this.isPlugged = true;
        console.log(`${this.name} is plugged in.`);
    }

    unplug() {
        this.isPlugged = false;
        console.log(`${this.name} is unplugged.`);
    }
}
//создаем делегирующую связь для двух приборов
class TV extends Appliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    installSoft(newSoft) {
        console.log(`${newSoft} has been installed on the ${this.name}.`);
    }
}

class Computer extends Appliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    installSoftware(software) {
        console.log(`${software} has been installed on the ${this.name}.`);
    }
}
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