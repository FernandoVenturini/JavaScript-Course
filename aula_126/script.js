const ctx = document.getElementById('grafico1');

let labelsx = ['Brasil', 'USA', 'Africa', 'Japao'];
let valores = [10, 20, 30, 40];

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelsx,
    datasets: [{
      label: '# of Votes',
      data: valores,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});