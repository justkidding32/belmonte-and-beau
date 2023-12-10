function toggleLanguage(language) {
    var elementsEn = document.querySelectorAll('.language-en');
    var elementsEs = document.querySelectorAll('.language-es');

    if (language === 'english') {
        elementsEn.forEach(function(elem) {
            elem.style.display = 'block';
        });
        elementsEs.forEach(function(elem) {
            elem.style.display = 'none';
        });
    } else if (language === 'spanish') {
        elementsEn.forEach(function(elem) {
            elem.style.display = 'none';
        });
        elementsEs.forEach(function(elem) {
            elem.style.display = 'block';
        });
    }
}

// Event listeners for language toggle buttons
document.addEventListener('DOMContentLoaded', function() {
    var btnEnglish = document.querySelector('.toggle-english');
    var btnSpanish = document.querySelector('.toggle-spanish');

    btnEnglish.addEventListener('click', function() {
        toggleLanguage('english');
    });

    btnSpanish.addEventListener('click', function() {
        toggleLanguage('spanish');
    });
});
