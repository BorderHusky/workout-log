// Function to retrieve workout data from local storage
function getWorkoutData() {
    const workoutData = JSON.parse(localStorage.getItem(workoutlog.LOCAL_STORAGE_DATA_KEY)) || [];
    return workoutData;
}

// Function to create a pie chart based on workout data
function createPieChart() {
    const workoutData = getWorkoutData();

    // Example usage of Chart.js to create a pie chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: workoutData.map(entry => entry.workout),
            datasets: [{
                label: 'Workout Types',
                data: workoutData.map(entry => entry.duration),
                backgroundColor: [
                    'red',
                    'orange',
                    'yellow',
                    'green',
                    'blue',
                    'indigo',
                    'violet'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Workout Types',
                fontSize: 18,
                fontColor: 'black',
                fontStyle: 'bold',
                padding: 20
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontColor: 'black',
                    fontSize: 14
                }
            },
            tooltips: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                bodyFontColor: 'white',
                titleFontColor: 'white',
                cornerRadius: 5,
                caretSize: 10,
                displayColors: false
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart',
                animateRotate: true,
                animateScale: true
            }
        }
    });
}

// Call the function to create the pie chart when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    createPieChart();
});