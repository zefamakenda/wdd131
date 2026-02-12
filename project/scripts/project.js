const yearSpan = document.getElementById("currentyear");
const lastModifiedPara = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedPara.textContent = `Last modified: ${document.lastModified}`;

// Products data
const departments = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product dropdown
const productSelect = document.getElementById("product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Review counter
const form = document.querySelector("form");
const counterDisplay = document.getElementById("counter");

if (form && counterDisplay) {
    form.addEventListener("submit", () => {
        let count = Number(localStorage.getItem("reviewCount")) || 0;
        count++;
        localStorage.setItem("reviewCount", count);
        counterDisplay.textContent = `Total reviews submitted: ${count}`;
    });
}

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    // Toggle menu
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Close menu on resize to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("show");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });

    const departments = [
        { id: "maintenance", name: "Maintenance" },
        { id: "admin", name: "Admin" },
        { id: "sales", name: "Sales" },
        { id: "frontdesk", name: "Front Desk" }
    ];

    // Populate department dropdown
    const departmentSelect = document.getElementById("departments");

    if (departmentSelect) {
        departments.forEach(department => {
            const option = document.createElement("option");
            option.value = department.id;
            option.textContent = department.name;
            departmentSelect.appendChild(option);
        });
    }
}

