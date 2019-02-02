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
    // client.replyMessage(event.replyToken, 
    //   {
    //     "type": "template",
    //     "altText": "This is a buttons template",
    //     "template": {
    //         "type": "buttons",
    //         "thumbnailImageUrl": "https://www.igeargeek.com/wp-content/uploads/2018/10/ED9AD8D7-06FA-478A-8F2A-1F4BB62157AA.jpg",
    //         "imageAspectRatio": "rectangle",
    //         "imageSize": "cover",
    //         "imageBackgroundColor": "#FFFFFF",
    //         "title": "Menu",
    //         "text": "Please select",
    //         "defaultAction": {
    //             "type": "uri",
    //             "label": "View detail",
    //             "uri": "http://google.com/"
    //         },
    //         "actions": [
    //             {
    //               "type": "uri",
    //               "label": "facebook",
    //               "uri": "https://fb.me"
    //             },
    //             {
    //               "type": "uri",
    //               "label": "cpe",
    //               "uri": "https://fb.me"
    //             }
    //         ]
    //     }
    //   })

    client.replyMessage(event.replyToken, {
        "type": "template",
        "altText": "this is a carousel template",
        "template": {
            "type": "carousel",
            "columns": [
                {
                  "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png/revision/latest?cb=20150808131630",
                  "imageBackgroundColor": "#FFFFFF",
                  "title": "this is menu",
                  "text": "description",
                  "actions": [
                      {  
                          "type":"cameraRoll",
                          "label":"Camera roll"
                      },
                      {  
                        "type":"location",
                        "label":"Location"
                     }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://c.76.my/Malaysia/line-brown-bear-cute-pencil-case-ubiyo-1802-02-Ubiyo@6.jpg",
                  "imageBackgroundColor": "#000000",
                  "title": "this is menu",
                  "text": "description",
                  "actions": [
                    {
                      "type":"datetimepicker",
                      "label":"Select date",
                      "data":"storeId=12345",
                      "mode":"datetime",
                      "initial":"2017-12-25t00:00",
                      "max":"2018-01-24t23:59",
                      "min":"2017-12-25t00:00"
                    },
                    {  
                      "type":"camera",
                      "label":"Camera"
                   }
                ]
                }
            ],
            "imageAspectRatio": "rectangle",
            "imageSize": "cover"
        }
    })
  }
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})