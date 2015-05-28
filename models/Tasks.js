var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

// export!
module.exports = mongoose.model('Task', TaskSchema);
