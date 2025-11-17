// пример данных: [{"nik": "Player1", "points": 1500}, ...]
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector('#ratingTable tbody');
    data.sort((a, b) => b.points - a.points); // сортировка по баллам по убыванию
    data.forEach(player => {
      const row = document.createElement('tr');
      const cellNik = document.createElement('td');
      cellNik.textContent = player.nik;
      const cellPoints = document.createElement('td');
      cellPoints.textContent = player.points;
      row.appendChild(cellNik);
      row.appendChild(cellPoints);
      tbody.appendChild(row);
    });
  });