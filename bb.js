let isPlaying = false; // Variable para controlar el estado del sonido

function toggleSound() {
    const sound = document.getElementById('quoteSound');
    const audioButton = document.getElementById('audioButton');

    if (isPlaying) {
        sound.pause(); 
        audioButton.textContent = '🎶 Click here for a better experience'; 
    } else {
        sound.play(); 
        audioButton.textContent = '🔇 Click here to stop the music'; 
    }
    
    isPlaying = !isPlaying; // Alterna el estado
}


function fetchQuote() {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes/1') // 1 para pedir solo una frase
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                document.getElementById('quote').textContent = `"${data[0].quote}"`;
                document.getElementById('author').textContent = `- ${data[0].author}`;
            }
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById('quote').textContent = "Oops! Something went wrong.";
            document.getElementById('author').textContent = "";
        });
}
