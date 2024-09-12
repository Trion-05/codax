document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const dropdown = document.getElementById('dropdown');
  const dropdownList = document.getElementById('dropdownList');
  const searchButton = document.getElementById('searchButton');
  const homeButton = document.getElementById('homeButton');

  function collectContent() {
    const links = document.querySelectorAll('a');
    dropdownList.innerHTML = ''; // Clear previous results
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

  function filterContent() {
    const filter = searchInput.value.toLowerCase();
    const items = dropdownList.getElementsByTagName('li');
    dropdownList.innerHTML = ''; // Clear previous results

    if (filter.trim() === '') {
      dropdown.style.display = 'none'; // Hide if empty
      return;
    }

    Array.from(items).forEach(item => {
      const text = item.textContent || item.innerText;
      if (text.toLowerCase().includes(filter)) {
        dropdownList.appendChild(item.cloneNode(true)); // Clone matching item
      }
    });

    dropdown.style.display = dropdownList.childElementCount > 0 ? 'block' : 'none'; // Show/hide dropdown
  }

  function performSearch() {
    filterContent(); // Filter content
    dropdown.style.display = 'none'; // Hide dropdown
  }

  function goHome() {
    window.location.href = 'index.html'; // Redirect to home
  }

  collectContent();

  searchInput.addEventListener('input', filterContent); // Update dropdown
  searchButton.addEventListener('click', performSearch); // Search button
  homeButton.addEventListener('click', goHome); // Home button
});
