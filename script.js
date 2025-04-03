// Sayfa yüklendiğinde basit animasyonlar çalışsın
document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        p.style.opacity = 0;
        setTimeout(() => {
            p.style.transition = "opacity 1s";
            p.style.opacity = 1;
        }, index * 500);
    });
});
