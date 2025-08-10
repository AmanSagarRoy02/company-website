function toggleAccordion(element) {
    let content = element.nextElementSibling;

    // Close all other accordions
    document.querySelectorAll('.accordion-content').forEach(item => {
        if (item !== content) item.style.display = 'none';
    });

    // Toggle current accordion
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

document.getElementById("file-upload").addEventListener("change", function() {
    let fileInfo = document.getElementById("file-info");
    if (this.files.length > 0) {
        fileInfo.textContent = this.files[0].name;
    } else {
        fileInfo.textContent = "No file selected";
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your request has been submitted!");
});
