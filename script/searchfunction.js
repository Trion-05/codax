document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const contentList = document.getElementById('contentList');
  const dropdown = document.getElementById('dropdown');
  const dropdownList = document.getElementById('dropdownList');
  const searchButton = document.getElementById('searchButton');
  const homeButton = document.getElementById('homeButton');
  const searchedWordDisplay = document.getElementById('searchedWordDisplay'); // New element for displaying searched word

  function collectContent() {
    const links = document.querySelectorAll('a');
    contentList.innerHTML = '';
    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent; // Set link text
      a.target = '_blank';
      li.appendChild(a);
      contentList.appendChild(li);
    });
  }

  function filterContent() {
    const filter = searchInput.value.toLowerCase();
    const items = contentList.getElementsByTagName('li');
    dropdownList.innerHTML = ''; // Clear dropdown

    if (filter.trim() === '') {
      dropdown.style.display = 'none'; // Hide if empty
      return;
    }

    Array.from(items).forEach(item => {
      const text = item.textContent || item.innerText;
      if (text.toLowerCase().includes(filter)) {
        const dropdownItem = item.cloneNode(true);
        dropdownList.appendChild(dropdownItem);
      }
    });

    dropdown.style.display = dropdownList.childElementCount > 0 ? 'block' : 'none'; // Show/hide
  }

  function performSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      searchedWordDisplay.textContent = `Searched for: ${searchTerm}`;

      // Display the actual <a> elements
      filterContent(); // Filter content
      dropdown.style.display = 'block'; // Show dropdown
    } else {
      searchedWordDisplay.textContent = `Looking for: ${searchTerm}`,''; // Clear the display if no search term
      dropdown.style.display = 'none'; // Hide dropdown if no search term
    }
  }

  function goHome() {
    window.location.href = '../index.html'; // Redirect to home
  }

  collectContent();

  searchInput.addEventListener('input', filterContent); // Update dropdown
  searchButton.addEventListener('click', performSearch); // Search button
  homeButton.addEventListener('click', goHome); // Home button
});