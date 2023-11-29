const History = require("../models/history.model")

exports.addHistory = async (req, res) => {
	try {
		const record = await History.create(req.body)
		res.status(200).json(record)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}

exports.getHistory = async (req, res) => {
	try {
		const records = await History.find({username: req.query.user}).sort({"createdAt":-1}).limit(5)
		res.status(200).json(records)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}

exports.deleteHistory = async (req, res) => {
	try {
		console.log(req.body)
		await History.deleteOne({_id : req.body.id})
		console.log(req.body.id)
		res.status(200)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({message: error.message})
	}
}

