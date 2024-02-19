const User = require("../models/user.model");

exports.addUser = async (req, res) => {
	try {
		if (!req.body.name) {
			return res.status(400).send({
				message: "Наименование события не может быть пустым",
				success: false,
			});
		}
		const user = await User.create(req.body)
		res.status(200).json(user.name)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}

exports.loginUser = async (req, res) => {
	try {
		const user = await User.findOne({name: req.body.name})
		console.log(user)
		res.status(200).json(user)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}

