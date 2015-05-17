var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies




var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'moufid4@gmail.com',
        pass: ''
    }
});

	app.post('/email', function(req, res) {
		var nom = req.body.nom;
		var date = req.body.date;
		var telephone = req.body.telephone;
		var email = req.body.email;
		var user_choice = req.body.endroit;

		var mailOptions = {
		    from: 'Me Larbi Bouamrane <moufid4@gmail.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Confirmation: Rendez-vous avec Me Larbi Bouamrane', // Subject line
		    html: '<p>Bonjour '+ nom + ',' +'<br />Ceci est une confirmation de votre rendez-vous avec Me Larbi Bouamrane le ' + '<span style="color:red">' + date + '</span>' + '.</p>' + '<p>Au plaisir de vous rencontrer.</p>' + '<p>Me Larbi Bouamrane<br />10, Bd Taleb Abderrahmane, Bab-El-Oued - Alger | Algérie<br />' + 'Tel: 021-96-21-96<br />' + '<a href="http://larbibouamrane.com">larbibouamrane.com</a></p>' + nom + telephone + email + user_choice// html body
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