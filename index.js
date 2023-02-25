require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")


const configuration = new Configuration({
    apiKey: process.env.GPT_TOKEN,
});
const openai = new OpenAIApi(configuration);


const app = express();
app.use(bodyParser.json())
app.use(cors())

app.post("/", async (req,res) => {
    const { message } = req.body;
    console.log(message, "message")

    try {
       const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        temperature: 0,
        max_tokens: 1000,
        // top_p: 1,
        // frequency_penalty: 2,
        // presence_penalty: 2,
        // best_of: 1
        })
        res.json({
            message: response.data.choices[0].text
        })
    } catch (error) {
        res.json({
            message: "Ошибка, сервера Chatgpt не отвечают, попробуйте написать позже"
        })
    }
})



const server = app.listen(process.env.APP_PORT, process.env.APP_IP, function () {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});
