const Log = require("../models/log.model");

exports.addLogRecord = async (req, res) => {
	try {
		console.log(req.body)
		const log = await Log.create(req.body)
		res.status(200).json(log)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}

exports.getLogData= async (req, res) => {
	try {
		const records = await Log.find({}).sort({"createdAt":-1})
		res.status(200).json(records)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
}
