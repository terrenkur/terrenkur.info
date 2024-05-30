function openWhatsApp(service) {
    const phoneNumber = '87053528245'; // Введите номер телефона
    const message = `Здравствуйте, я хотел бы записаться на ${service}.`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}