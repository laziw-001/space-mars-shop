document.getElementById("button").addEventListener("click", filterItems);
document.getElementById("input").addEventListener("keyup", filterItems);

function filterItems() {
    let query = document.getElementById("input").value.toLowerCase().trim();
    let items = Array.from(document.querySelectorAll(".card-parent .card")); // NodeList → Array

    items.filter(item => {
        let nameElement = item.querySelector(".card__name");
        if (!nameElement) return false; // Agar nom bo‘lmasa, false qaytaramiz
        
        let name = nameElement.textContent.toLowerCase().trim();
        return query === "" || name.includes(query); // Qidiruv natijasiga mos bo‘lsa true
    }).forEach(item => item.style.display = "flex"); // Mos kelganlarni ko‘rsatamiz

    items.filter(item => {
        let nameElement = item.querySelector(".card__name");
        if (!nameElement) return true;
        
        let name = nameElement.textContent.toLowerCase().trim();
        return query !== "" && !name.includes(query); // Mos kelmaganlarni yashiramiz
    }).forEach(item => item.style.display = "none");
}
