const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

mongoose.plugin(slug)
const Course = new Schema({
    name: { type: String },
    description: {type:String},
    image: {type:String},
    videoId: {type:String},
    level: {type:String},
    slug: { type: String, slug: "name" , unique:true},
  },{
    timestamps: true
  });

  Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true ,deleted: true});

  module.exports = mongoose.model('Course',Course);