

/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 
require('./config/database.cjs')

const { createTweet, getTweets, updateTweet, deleteTweet } = require('./controllers/tweets.cjs')

const User = require('./models/User.cjs');
const app = express();
app.use(express.json());

// CRUD - Create, Read, Update, Delete

// C
app.post('/tweets', createTweet)

// R
app.get('/tweets', getTweets)

// U send ID in params. Send update stuff in req.body
app.put('/tweets/:tweetId/:newTitle', updateTweet)

// D
app.delete('/tweets/:tweetId', deleteTweet)

app.post('/signup', async (req,res) =>{
    const userDetail = await User.create(req.body)
    res.send(userDetail)

})


app.listen(4002, () => {
    console.log("listening on 4002")
})
