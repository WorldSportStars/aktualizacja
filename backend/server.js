const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const BOT_TOKEN = '6926283805:AAG4JvpYqtWixZ2tRxyUOfwj7cs3hgq5IhY';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/`;

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    const { message } = req.body;
    const chatId = message.chat.id;
    const text = message.text;

    if (text === '/start') {
        await axios.post(`${TELEGRAM_API_URL}sendMessage`, {
            chat_id: chatId,
            text: 'Welcome! Please login to your crypto wallet.',
        });
    }

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
