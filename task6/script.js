class Notifications {
    createNotification(type, message) {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('closeBtn');
        closeBtn.textContent = 'X';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(notification);
        });

        notification.appendChild(closeBtn);

        const content = document.createElement('span');
        content.textContent = message;
        notification.appendChild(content);

        document.body.appendChild(notification);
        notification.style.display = 'block';
    }
}

const notifier = new Notifications();