// Function to highlight bold words in green
function highlight() {
    const boldElements = document.querySelectorAll('strong');
    for (const element of boldElements) {
        element.style.color = 'green';
    }
}

// Function to return the normal black color
function return_normal() {
    const boldElements = document.querySelectorAll('strong');
    for (const element of boldElements) {
        element.style.color = 'black';
    }
}

// Attach event listeners to the link for hover events
const link = document.getElementById('highlightLink');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);
