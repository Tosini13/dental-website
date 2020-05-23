let adminImgSrc;
let mainImgSrc = "images/";

// var a = '5';
// var b = 4;
// var sum = a + a*1 + b;
// console.log('!!!!!!!!!!!!!!!!!!!!!');
// console.log(sum);
// console.log(typeof sum);
// sum="554";
// console.log(sum);
// console.log(typeof sum);
// sum=554;
// console.log(sum);
// console.log(typeof sum);

var message = 'abc'; 
console.log(message); 
function print(){ 
    console.log(message); 
    var message = 'def'; 
} 
print();

console.log('!!!!!!!!!!!!!!!!!!!!!');

class Manager {
    constructor() {
        this.clinic;
        this.team = [];
        this.services = [];
        this.contact;
        this.style;
    }

    createClinic() {
        let descr = document.querySelector("#workplace .clinicDescription");
        descr.innerHTML = this.clinic.descr;
        for (let photo of this.clinic.photos[0]) {
            $('#slideClinic').slick('slickAdd',
                '<div><img src="' + mainImgSrc + this.clinic.src + photo + '"></div>');
        }
    }

    createTeam() {
        createTeamReact(this.team);
    }

    createService() {
        createServiceReact(this.services);
    }

    createPrice() {
        let table = document.querySelector("#price table tbody");
        table.innerHTML = "";
        let row = document.createElement("tr");
        let name = document.createElement("th");
        name.innerHTML = "service";
        let price = document.createElement("th");
        price.innerHTML = "price";
        row.appendChild(name);
        row.appendChild(price);
        table.appendChild(row);
        for (let service of this.services) {
            let row = document.createElement("tr");
            let name = document.createElement("td");
            name.innerHTML = service.name;
            let price = document.createElement("td");
            price.innerHTML = service.price + " €";
            row.appendChild(name);
            row.appendChild(price);
            table.appendChild(row);
        }

    }

    createStyle() {
        let sections = document.querySelectorAll("section");
        let photos = this.style.getPhotos();
        let i = 0, iEnd = sections.length;
        for (let photo of photos) {
            if (i >= iEnd) {
                break;
            }
            let img = document.createElement("img");
            img.src = photo;
            img.alt = "photo break";
            img.classList.add("break");
            sections[i++].after(img);
        }
    }

}

class Main {
    constructor() {
        this.logo;
        this.name;
    }

    setName(arg) {
        if (arg.length > 80) {
            console.log("źle");
        } else {
            this.name = arg;
            console.log("dobrze");
        }
    }

    //not checked
    setPhoto(arg) {
        this.photo = arg;
    }
}

class Clinic {
    //desc and photos
    constructor(...arg) {
        this.descr;
        this.photos = [];
        this.setDescr(arg.shift());
        this.setPhoto(arg);
        this.src = "clinic/";
    }

    //not checked
    setDescr(arg) {
        this.descr = arg;
    }

    //not checked
    setPhoto(...arg) {
        for (let photo of arg) {
            this.photos.push(photo);
        }
    }
}

class Member {
    constructor(title, name, descr, photo) {
        this.title;
        this.name;
        this.descr;
        this.photo;
        this.setTitle(title);
        this.setName(name);
        this.setDescr(descr);
        this.setPhoto(photo);
        this.src = "team/";
    }

    setTitle(arg) {
        if (arg.length > 20) {
            console.log("źle");
        } else {
            this.title = arg;
            console.log("dobrze");
        }
    }

    setName(arg) {
        if (arg.length > 80) {
            console.log("źle");
        } else {
            this.name = arg;
            console.log("dobrze");
        }
    }

    //not checked
    setDescr(arg) {
        this.descr = arg;
    }

    //not checked
    setPhoto(arg) {
        this.photo = arg;
    }

    getPhoto() {
        return mainImgSrc + this.src + this.photo;
    }
}

class Service {
    constructor(name, descr, photo, price) {
        this.name;
        this.descr;
        this.photo;
        this.price;
        this.setName(name);
        this.setDescr(descr);
        this.setPhoto(photo);
        this.setPrice(price);
        this.src = "services/";
    }

    setName(arg) {
        if (arg.length > 30) {
            console.log("źle");
        } else {
            this.name = arg;
            console.log("dobrze");
        }
    }

    //not checked
    setDescr(arg) {
        this.descr = arg;
    }

    //not checked
    setPhoto(arg) {
        this.photo = arg;
    }

    setPrice(arg) {
        if (isNaN(arg)) {
            console.log("źle");
        } else {
            this.price = parseFloat(arg).toFixed(2);
            console.log("dobrze");
        }
    }

    getPhoto() {
        return mainImgSrc + this.src + this.photo;
    }
}

class Contact {
    constructor() {
        this.address;
        this.tel;
    }

    setTel(arg) {
        let test = arg.replace('+', '');
        if (isNaN(test)) {
            console.log("źle");
        } else {
            this.tel = arg;
            console.log("dobrze");
        }
    }

    //not checked
    setAddress(arg) {
        this.address = arg;
    }

}

class Style {
    constructor(...arg) {
        this.colors = []; //3
        this.fonts = []; //2
        this.backgroundPhotos = []; //3
        this.setBackgroundPhotos(arg);
        this.src = "background/";
    }

    setBackgroundPhotos(...photos) {
        //they have to be in good size;
        console.log(photos);
        this.backgroundPhotos = [];
        this.backgroundPhotos.push(photos[0]);
        this.backgroundPhotos.push(photos[1]);
        this.backgroundPhotos.push(photos[2]);
    }

    getPhotos() {
        let photos = [];
        console.log(this.backgroundPhotos);
        for (let photo of this.backgroundPhotos[0]) {
            photos.push(mainImgSrc + this.src + photo);
        }
        console.log(photos);
        return photos;
    }
}