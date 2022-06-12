class Product {
    constructor(img, title, desc) {
        this.img = img;
        this.title = title;
        this.desc = desc;
    }

    print() {
        console.log(this.img);
        console.log(this.title);
        console.log(this.desc);
    }
}

class Products {
    constructor() {
        this.products = [];
    }

    addProduct(img, title, desc) {
        let p = new Product(img, title, desc);
        this.products.push(p);
        return p;
    }

    get allProducts() {
        return this.products;
    }
}

let chocolates = new Products();
chocolates.addProduct("../assets/choc2.jpg", "Great Eden", "Not every chocolate is bitter, this one might just be the one to sweeten your day.");
chocolates.addProduct("../assets/choc3.jpg", "Dark Remembrance",  "All about refined taste in dark chocolates.");
chocolates.addProduct("../assets/choc4.jpg", "Maple Story",  "Sweet, salty, maplelly goodness!");
chocolates.addProduct("../assets/choc5.jpg", "Hedgehogs",  "Hedgehog shaped goodness, ready to spike a love of chocolate.");
chocolates.addProduct("../assets/choc6.jpg", "Sweet Browns",  "For those sweet light chocolate lover, this will be a great pick!");
chocolates.addProduct("../assets/choc7.jpg", "Himalayan Pink",  "The saltiness of himalayan salt combined with the taste of pink.");
chocolates.addProduct("../assets/choc8.jpg", "Love Train",  "A great gift for those loved ones, containing a wide variety of chocolates.");
chocolates.addProduct("../assets/choc9.jpg", "Rodeo",  "Just like its name, you must be crazy to not like this one.");


console.log(chocolates.allProducts);

function build() {
    var container = document.getElementById("section-content");
    var el = document.getElementById("product");
    chocolates.allProducts.forEach(function (p) {
        var temp = el.cloneNode(true);
        temp.style.background = 'linear-gradient(rgba(0, 0, 0, 0.808), rgba(0, 0, 0, 0.342)), url("'+ p.img +'") no-repeat center bottom / cover';
        temp.querySelector(".card__title").innerText = p.title;
        temp.querySelector(".card__desc").innerText = p.desc;
        container.appendChild(temp);
    });
}

build();