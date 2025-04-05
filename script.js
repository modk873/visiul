document.querySelectorAll('.pronounce-btn').forEach(button => {
    button.addEventListener('click', function() {
        const word = this.textContent;
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'fr-FR';
        window.speechSynthesis.speak(utterance);
    });
});
