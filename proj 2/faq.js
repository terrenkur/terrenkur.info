document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            // Закрыть все ответы
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });

            // Открыть выбранный ответ, если он был закрыт
            if (!isVisible) {
                answer.style.display = 'block';
            }
        });
    });
});