function searchContent() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const items = document.querySelectorAll('#contentList li');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? '' : 'none';
  });
}
