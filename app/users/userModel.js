const mongoose = require('mongoose');
const validateUsername = require('./userValidator');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { 
    type: String, 
    unique: true,
    validate: [{ validator: validateUsername, msg: 'Invalid username' }],
  },
}, { timestamps: true });

userSchema.pre('save', async next => {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

userSchema.methods.isValidPassword = async password => {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;