const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const app = express()

const config = {
  channelAccessToken: 'dvcA+3nvknRV7eb3EaDWvsffsblnW2NCUT4qAkpzQPQyNw+qKFgkT/KHSVTXkNcRD8giEif/iRzgHfnUeBJLC0QpBKQ+cm8uhI3DT0aJrEp/Lbf0TSmwEyUfMUNvAjjx/DeT3sssKqx9T2JylmmzSQdB04t89/1O/w1cDnyilFU=',
  channelSecret: '69981d1a3c07289d11da287c59703651'
}

app.get('/', function (req, res) {
    res.send('Hello World!!')
})

app.post('/webhook', middleware(config), (req, res) => {
  console.log('webhook success')
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})