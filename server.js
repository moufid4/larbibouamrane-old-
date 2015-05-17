var express = require('express');
var app = express();
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'moufid4@gmail.com',
        pass: 'test'
    }
});

	app.post('/email', function(req, res) {
		var mailOptions = {
		    from: 'Moufid Larbi ✔ <moufid4@gmail.com>', // sender address
		    to: 'moufid4@gmail.com', // list of receivers
		    subject: 'Success! ✔', // Subject line
		    text: 'Hello world ✔', // plaintext body
		    html: '<b>Hello world ✔</b>' // html body
		};

		transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }

		
		
		
		});

	});





app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000);