const mongoose = require('mongoose')

const querySchema = mongoose.Schema(
    {
        name: String, 
        descr: String, 
        latitude: Number, 
        longitude: Number,
        time: [String],
		pm10: [Number],
		pm2_5: [Number]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('HistoryData', querySchema)