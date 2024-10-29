

const sidebar = () => {
    // Get the button and sidebar elements
    const toggleButton = document.querySelector('[data-drawer-toggle="drawer-navigation"]');
    const sidebar = document.getElementById('drawer-navigation');

// Add click event listener to the button
    toggleButton.addEventListener('click', () => {
        // Toggle the -translate-x-full class to show/hide sidebar
        sidebar.classList.toggle('-translate-x-full');
    });
}

const getTime = () => {
    // Get the current time
 setInterval(() => {
     const currentTime = new Date();
     const hours = document.querySelector('.hours').innerHTML = `${currentTime.getHours()}`;
     const minutes = document.querySelector('.minutes').innerHTML = `${currentTime.getMinutes()}`;
     const seconds = document.querySelector('.seconds').innerHTML = `${currentTime.getSeconds()}`;
     const miliseconds = document.querySelector('.milliseconds').innerHTML = `${currentTime.getMilliseconds()}`;
 }, 1000)}



//Execute the functions
sidebar();
getTime();

//function to generate soal agama
const generateSoalAgama = () => {
    const button = document.querySelector('.generate-agama');
    button.addEventListener('click', () => {
        fetch('http://localhost:3000/api/soal-agama.mjs')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('quizData', JSON.stringify(data));
                window.location.href = './page/soal-agama.html';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
}




generateSoalAgama();