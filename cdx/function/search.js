document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('dropdown');
    const dropdownList = document.getElementById('dropdownList');
    const searchButton = document.getElementById('searchButton');
    const homeButton = document.getElementById('homeButton');

    // Function to collect all <a> tags from <details> and <summary> elements
    function collectContent() {
        const links = Array.from(document.querySelectorAll('details a, summary a'));
        dropdownList.innerHTML = '';
        links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.textContent; // Set link text
            a.target = '_blank';
            li.appendChild(a);
            dropdownList.appendChild(li);
        });
    }

    // Function to filter links based on the search input
    function filterContent() {
        const filter = searchInput.value.toLowerCase();
        const items = dropdownList.getElementsByTagName('li');
        dropdownList.innerHTML = ''; // Clear dropdown

        if (filter.trim() === '') {
            dropdown.style.display = 'none'; // Hide if empty
            return;
        }

        Array.from(items).forEach(item => {
            const text = item.textContent || item.innerText;
            if (text.toLowerCase().includes(filter)) {
                dropdownList.appendChild(item.cloneNode(true));
            }
        });

        dropdown.style.display = dropdownList.childElementCount > 0 ? 'block' : 'none'; // Show/hide
    }

    // Function to perform search and hide dropdown after search
    function performSearch() {
        filterContent(); // Filter content
        // No need to hide dropdown here since `filterContent` handles it
    }

    // Function to go to the home page
    function goHome() {
        window.location.href = 'index.html'; // Redirect to home
    }

    collectContent(); // Collect all content on load

    searchInput.addEventListener('input', filterContent); // Update dropdown on input
    searchButton.addEventListener('click', performSearch); // Search button
    homeButton.addEventListener('click', goHome); // Home button
});
