const bcrypt = require('bcrypt');

const generateHash = async (payload, salt = 10) => {
    //const salt = await bcrypt.genSalt(saltRound);
    const result = await bcrypt.hash(payload, salt);
	return result;
};

const hashMatched = async (raw, hash) => {
	const result = await bcrypt.compare(raw, hash);
	return result;
};

module.exports = {
	generateHash,
	hashMatched
};