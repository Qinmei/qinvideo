const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const DataSchema = new mongoose.Schema({
    target: String,
    type: {
        type:String,
        enum:[
            'register',
            'login',
            'visit',
            'commentSend',
            'commentLike',
            'commentUnlike',
            'postLike',
            'postUnlike',
            'postSend',
            'animateSend',
            'animateLike',
            'animateUnlike',
            'comicSend',
            'comicLike',
            'comicUnlike',
            'danmu',
            'order',
            'play',
            'search',
            'other'],
        default:'other',
        required:true
    },
    author:String,
    ip: String,
    referer: String,
    addons:Schema.Types.Mixed
    },{
        timestamps: true
    }
);

module.exports=mongoose.model('Data', DataSchema);
