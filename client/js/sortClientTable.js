export const sortTable = () => {
  const table = document.querySelector('table'),
        headers = table.querySelectorAll('th'),
        tbody = table.querySelector('tbody');

  const directions = Array.from(headers).map(() => '');

  const transform = (type, content) => {
    switch (type) {
        case 'id':
          return parseFloat(content)
        case 'create':
        case 'update':
        return content.split('.').reverse().join('-');
        case 'text':
        default:
          return content;
    }
  }

  const sortColumn = (index) => {
    const type = headers[index].getAttribute('data-type');
    const rows = tbody.querySelectorAll('tr');
    const direction = directions[index] || 'sortUp';
    const multyply = direction === 'sortUp' ? 1 : -1;
    const newRows = Array.from(rows);

    newRows.sort((row1, row2) => {
      const cellA = row1.querySelectorAll('td')[index].textContent;
      const cellB = row2.querySelectorAll('td')[index].textContent;

      const a = transform(type, cellA);
      const b = transform(type, cellB);

      switch (true) {
        case a > b:
          return 1 * multyply;

        case a < b:
          return -1 * multyply ;

        case a === b:
          return 0;

        default:
          break;
      }
    });

    [].forEach.call(rows, (row) => {
      tbody.removeChild(row);
    })

    directions[index] = direction === 'sortUp' ? 'sortDown' : 'sortUp';

    newRows.forEach(newRows => {
      tbody.appendChild(newRows)
    })
  }

  [].forEach.call(headers, (header, index) => {
    header.addEventListener('click', () => {
      sortColumn(index);
    })
  })
}
