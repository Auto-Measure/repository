const fitcraftProSquare = document.getElementById('fitcraftProSquare');

//
fitcraftProSquare.addEventListener('mouseover', () => {
    fitcraftProSquare.style.animationPlayState = 'running'; // Starts the glow effect
});

fitcraftProSquare.addEventListener('mouseout', () => {
    fitcraftProSquare.style.animationPlayState = 'paused'; // Pauses the glow effect
});
