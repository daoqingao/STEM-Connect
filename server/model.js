const { model, Schema, ObjectId } = require('mongoose');

const programSchema = new Schema(
	{
		_id: {
			type: ObjectId,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		company: {
			type: String,
			required: true
		},
		price: {
			type: String,
			required: true
		},
		URL: {
			type: String,
			required: true
		},
        email: {
			type: String,
			required: true
		},
        phone: {
            type: String,
			required: true
        },
        description: {
            type: String,
			required: true
        }
	}
);

const Program = model('Program', programSchema);
module.exports = Program;