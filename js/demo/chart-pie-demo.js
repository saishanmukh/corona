function drawpie(data){// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["infectedTotal", "totalCured", "deathTotal"],
    datasets: [{
      data: [data['infectedTotal'],data['totalCured'],data['deathTotal']],
      backgroundColor: ['#f6c23e', '#36b9cc', '#e74a3b'],
      hoverBackgroundColor: ['#f6c23e', '#36b9cc', '##e74a3b'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
}

$(document).ready(function () {

  $.ajax({
      url: "https://v1.api.covindia.com/general",
      method: "GET"
  }).done(function (response) {
      drawpie(response);
  }).fail(function (err) {
      console.log(err);
  });
});