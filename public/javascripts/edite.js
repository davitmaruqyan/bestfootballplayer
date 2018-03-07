$('form').submit(function (e) {
  e.preventDefault();
    $.post('http://localhost:3000/edite', $(this).serialize(), function (xhr) {
      var data = JSON.parse(xhr);
      console.log(data);
    })
})


var ctx = document.getElementById("bar-chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Cristiano Ronaldo", "Kylian Mbappé", "Gareth Bale", "Harry Kane", "Lionel Messi", "Álvaro Morata", "Neymar", "Ronaldo", "Marco Asensio", "Andrés Iniesta", "Philippe Coutinho", "Henrikh Mkhitaryan", "Paul Pogba", "Luka Modrić", "Ronaldinho", "Zinedine Zidane", "David Luiz", "John Terry", "Marcelo", "Pape", "Gerard Piqué", "Sergio Ramos", "Gianluigi Buffon", "Iker Casillas", "Petr Čech", "David de Gea", "Keylor Navas", "Manuel Neuer"],
        datasets: [{
            label: 'Voting results',
             data: [8,7,4,4,3, 4, 7, 8, 8,7,4,4,3, 4, 1, 7, 8,7,4,4,3, 4, 1, 7, 2,7,4,7,4, 4, 10, 9],
             backgroundColor: ["#003366", "#00cc99","#ff0000","#ff99ff","#ffff00","#ff6600", "#ff80aa","#00ffff","#00b300","#0066ff","#ccff66", "#ff4d4d","#00e673","#9966ff","#b3ff99","#ff80ff", "#ff704d","#cccc00","#00997a","#4d0066","#808000", "#660000","#ff9900", "#55ff00", "#ff3333", "#003380", "#ff1aff", "#0033cc"],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
