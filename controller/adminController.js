// exports.login = (req, res) => {
// 	let message = "";
// 	res.render("login", { message : message})
// }

// exports.proses = (req, res) => {
// 	let data = req.body
// 	console.log(data)
// 	res.send(data)
// }

// exports.kalkulator = (req, res) => {
// 	let message = "";
// 	res.render("kalkulator", {message : message})
// }

// exports.proses = (req, res) => {
// 	let nilai1 = parseInt(req.body.nilai1)
// 	let nilai2 = parseInt(req.body.nilai2)
// 	let operator = req.body.operator

// 	switch (operator) {
// 		case '+':
// 		hasil = nilai1 + nilai2;
// 		break;
// 		case '-':
// 		hasil = nilai1 - nilai2;
// 		break;
// 		case 'x':
// 		hasil = nilai1 * nilai2;
// 		break;
// 		case '/':
// 		hasil = nilai1 / nilai2;
// 		break;
// 	}
// 	console.log(hasil)
// 	res.send(`hasil dari ${nilai1} ${operator} ${nilai2} adalah ${hasil}`)
// }

/*codingan baru*/
const Murid = require('../models/murid')

exports.addMurid = async (req,res) => {
	res.render('add_murid')
}

exports.saveMurid = async (req,res) => {
	const murid = new Murid(req.body);
	await murid.save();
	res.redirect('/data-murid');
} 

exports.deleteMurid = async(req,res) => {
	let { id } = req.params;
	await Murid.remove({_id: id});
	res.redirect('/data-murid');
}

exports.updateMurid = async(req,res) => {
	const { id } = req.params;
	await Murid.update({_id: id}, req.body);
	res.redirect('/data-murid');
}

exports.editMurid = async (req,res) => {
	const data = await Murid.findById(req.params.id);
	res.render('edit_murid', {
		data
	})
}

exports.index = (req,res) => {
	res.render("index")
}

exports.dataMurid = async (req,res) => {
	const data = await Murid.find();
	res.render('data_murid', {
		data
	})
	console.log(data)
}

exports.login = (req,res) => {
	let message = "";
	res.render("login", { message : message })
}

exports.proses = (req,res) => {
	let data = req.body
	console.log(data)
	res.send(data)
}