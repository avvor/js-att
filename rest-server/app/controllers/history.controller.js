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
		const records = await History.find({})
		res.status(200).json(records)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}
