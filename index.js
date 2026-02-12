require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

async function fetchAmazonDeals() {
  try {
    const response = await axios.get('https://webservices.amazon.com/paapi5/searchitems', {
      params: {
        PartnerTag: process.env.AMAZON_TAG,
        PartnerType: 'Associates',
        Keywords: 'computer parts',
        SearchIndex: 'Electronics'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return respon
