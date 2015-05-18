var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies




var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'larbibouamrane2@gmail.com',
        pass: 'Anissa95'
    }
});

	app.post('/email', function(req, res) {
		var nom = req.body.nom;
		var date = req.body.date;
		var telephone = req.body.telephone;
		var email = req.body.email;
		var user_choice = req.body.endroit;

		var mailOptions = {
		    from: 'Me Larbi Bouamrane <larbibouamrane2>', // sender address
		    to: email, // list of receivers
		    subject: 'Confirmation: Rendez-vous avec Me Larbi Bouamrane', // Subject line
		    html: '<p>Bonjour '+ nom + ',' +'<br />Ceci est une confirmation de votre rendez-vous avec Me Larbi Bouamrane le ' + '<span style="color:red">' + date + '</span>' + '.</p>' + '<p>Au plaisir de vous rencontrer.</p>' + '<p>Me Larbi Bouamrane<br />10, Bd Taleb Abderrahmane, Bab-El-Oued - Alger | Algérie<br />' + 'Tel: 021-96-21-96<br />' + '<a href="http://larbibouamrane.com">larbibouamrane.com</a></p>'// html body
		};

			var mailLarbi = {
		    from: 'Site Web <larbibouamrane2@gmail.com>', // sender address
		    to: 'larbibouamrane2@gmail.com; larbibouamrane2@gmail.com', // list of receivers
		    subject: 'Confirmation: Rendez-vous avec ' + nom, // Subject line
		    html: '<p>Bonjour Larbi,' +'<br />Ceci est pour vous informer que vous avez un rendez-vous avec ' + nom + ' le ' + '<span style="color:red">' + date + '.</span><br />' + '<br />Nom: ' + nom + '<br />Endroit: ' + user_choice + '<br />' + 'Téléphone: ' + telephone + '<br />' + 'Email: ' + email// html body
		};


		transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }

    	transporter.sendMail(mailLarbi, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});

		
		
		
		});

	});


app.use(express.static(__dirname + '/'));

app.get('/ar', function (req, res) {
  res.send('ar/index.html');
});
app.get('/en', function (req, res) {
  res.send('en/index.html');
});

app.listen(process.env.PORT || 3000);