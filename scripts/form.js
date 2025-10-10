const products = [
    { id: "p100", name: "Book Holder" },
    { id: "p200", name: "Reading Lamp" },
    { id: "p300", name: "E-Book Reader" },
    { id: "p400", name: "Desk Organizer" },
    { id: "p500", name: "Notebook" }
];

const productSelect = document.querySelector("#productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
