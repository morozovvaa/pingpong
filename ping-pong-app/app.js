const express = require('express');
const app = express();

// Получаем порт и ответ из переменных окружения
const PORT = process.env.PORT || 3000;
const PONG_MESSAGE = process.env.PONG_MESSAGE || 'Pong!';

app.get('/ping', (req, res) => {
    res.json({
        message: PONG_MESSAGE,
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', port: PORT });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT} with message: ${PONG_MESSAGE}`);
});