const currency = document.getElementById("currency");

currency.addEventListener("change", () => {
    localStorage.setItem("currency", currency.value);
});

const savedCurrency = localStorage.getItem("currency");

if(savedCurrency){
    currency.value = savedCurrency;
}
