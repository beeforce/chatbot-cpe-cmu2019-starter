const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const Client = require('@line/bot-sdk').Client;
const app = express()

const config = {
  channelAccessToken: 'dvcA+3nvknRV7eb3EaDWvsffsblnW2NCUT4qAkpzQPQyNw+qKFgkT/KHSVTXkNcRD8giEif/iRzgHfnUeBJLC0QpBKQ+cm8uhI3DT0aJrEp/Lbf0TSmwEyUfMUNvAjjx/DeT3sssKqx9T2JylmmzSQdB04t89/1O/w1cDnyilFU=',
  channelSecret: '69981d1a3c07289d11da287c59703651'
}

const client = new Client(config)

app.get('/', function (req, res) {
    res.send('Hello World!!')
})

app.post('/webhook', middleware(config), (req, res) => {
  const event = req.body.events[0];

  if (event.type === 'message') {
    const message = event.message;
    console.log(message)
    // client.replyMessage(event.replyToken, {
    //   type: 'text',
    //   text: message.type // change from message to message.text
    // });
    client.replyMessage(event.replyToken, 
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
            "type": "buttons",
            "thumbnailImageUrl": "https://www.igeargeek.com/wp-content/uploads/2018/10/ED9AD8D7-06FA-478A-8F2A-1F4BB62157AA.jpg",
            "imageAspectRatio": "rectangle",
            "imageSize": "cover",
            "imageBackgroundColor": "#FFFFFF",
            "title": "Menu",
            "text": "Please select",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://google.com/"
            },
            "actions": [
                {
                  "type": "postback",
                  "label": "Buy",
                  "data": "action=buy&itemid=123"
                },
                {
                  "type": "message",
                  "label": "Add to cart",
                  "text": "no no no"
                },
                {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://google.com"
                }
            ]
        }
      })
  }
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})