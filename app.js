const knapp1 = document.querySelector(".btn-primary");
const knapp2 = document.querySelector(".btn-secondary");
const varukorg = document.querySelector(".varukorg");
const orderBox = document.querySelector(".order-box");
const closeOrder = document.querySelector(".close-order");




knapp1.addEventListener("click", function () {
    alert("köp lyckades");
});

knapp2.addEventListener("click", function () {
    
    varukorg.scrollIntoView({
        behavior: "smooth"
    });

    orderBox.classList.add("active");

}); 

closeOrder.addEventListener("click", function () {

    orderBox.classList.remove("active");

});




const kategorier = document.querySelectorAll(".category-item");
const overlay = document.querySelector(".menu-overlay");
const stangKnappar = document.querySelectorAll(".close-panel");

function stangMeny() {

    kategorier.forEach((kategori) => {
        kategori.classList.remove("open");
    });

    overlay.classList.remove("active");
}

kategorier.forEach((kategori) => {

    const lank = kategori.querySelector("a");

    lank.addEventListener("click", (event) => {

        if (window.innerWidth <= 768) {

            event.preventDefault();

            stangMeny();

            kategori.classList.add("open");
            overlay.classList.add("active");

        }

    });

});

stangKnappar.forEach((knapp) => {

    knapp.addEventListener("click", stangMeny);

});

overlay.addEventListener("click", stangMeny);