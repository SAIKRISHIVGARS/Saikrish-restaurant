document.getElementById('search').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll('#menu li');
    items.forEach(function(item) {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });