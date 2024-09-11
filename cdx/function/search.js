document.addEventListener('DOMContentLoaded', () => {
  const searchContent = document.getElementById('searchContent');
  const contentList = document.getElementById('contentList');

  // Collect all links
  function content() {
    const content = document.querySelectorAll('a');
    linkList.innerHTML = '';
    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent; // Display content
      a.target = '_blank'; // Open in a new tab
      li.appendChild(a);
      linkList.appendChild(li);
    });
  }

  // Search contnet 
  function searchContent() {
    const filter = searchInput.value.toLowerCase();
    const items = linkList.getElementsByTagName('li');
    Array.from(items).forEach(item => {
      const text = item.textContent || item.innerText;
      item.style.display = text.toLowerCase().includes(filter) ? '' : 'none';
    });
  }

  // Collect all content when loaded
  content();
  
  // Add event listener
  searchInput.addEventListener('keyup', search contents);
});
