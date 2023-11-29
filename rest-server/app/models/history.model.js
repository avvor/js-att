const mongoose = require('mongoose')

const querySchema = mongoose.Schema(
    {
        name: String, 
        description: String, 
        latitude: Number, 
        longitude: Number,
        time: [String],
		pm10: [Number],
		pm2_5: [Number], 
        username: String,
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('HistoryData', querySchema)