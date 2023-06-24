
class Phone {
    constructor(name, company, operatingSystem, screen, price, battery, color){
        this.name = name;
        this.company = company;
        this.operatingSystem = operatingSystem;
        this.screen = screen;
        this.price = price;
        this.battery = battery;
        this.color = color;
    }
    displayTitle(){
        return `${this.company} ${this.name} ${this.color}`
    }
    credit_4_month(){
        let month_additional_cost = this.price*(4/100)
        let month_total = 4;
        let total_price = month_additional_cost * month_total + this.price;
        return `Загальна ціна телефону після 4 місяців - ${total_price}`
    }
    credit_6_month(){
        let month_additional_cost = this.price*(5/100)
        let month_total = 6;
        let total_price = month_additional_cost * month_total + this.price;
        return `Загальна ціна телефону після 6 місяців - ${total_price}`
    }
    credit_12_month(){
        let month_additional_cost = this.price*(6/100)
        let month_total = 12;
        let total_price = month_additional_cost * month_total + this.price;
        return `Загальна ціна телефону після 12 місяців - ${total_price}`
    }
}
let phone_1 = new Phone('Сяомі', 'Сяомі', 'андроїд', '6.8', 10000, 3050, 'червоний')

let all_phones = [phone_1]

function addNewPhone(){
    let new_phone = new Phone(
        document.getElementById('name').value,
        document.getElementById('company').value,
        document.getElementById('operating_system').value,
        Number(document.getElementById('screen').value),
        Number(document.getElementById('price').value),
        Number(document.getElementById('battery').value),
        document.getElementById('color').value
    )
    all_phones.push(new_phone)
    
console.log(new_phone)
drawPhones()
db.collection('phones').add(Phone).then(function(){
    console.log('успіх, додано')
})
}

function drawPhones(){
    let phones_table = document.getElementById('phones_table');
    phones_table.innerHTML = ''
    all_phones.forEach((phone,idx) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope='row'>${idx+1}</th>
            <td>${phone.name}</td>
            <td>${phone.company}</td>
            <td>${phone.operatingSystem}</td>
            <td>${phone.screen}</td>
            <td>${phone.price}</td>
            <td>${phone.battery}</td>
            <td>${phone.color}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.displayTitle()}')">
                Головна інформація
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.credit_4_month}')">
                4 місяці
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.credit_6_month}')">
                6 місяців
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.credit_12_month}')">
                12 місяців
                </button>
            </td>
        `
        phones_table.appendChild(tr)
    })
}
drawPhones()