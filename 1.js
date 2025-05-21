document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Анимация загрузки
        submitButton.innerHTML = '<span class="spinner"></span> Отправка...';
        submitButton.disabled = true;
        
        // Имитация отправки на сервер
        setTimeout(function() {
            submitButton.textContent = '✓ Успешно!';
            setTimeout(function() {
                // Здесь можно отправить форму по-настоящему
                form.submit();
            }, 1000);
        }, 1500);
    });
});


