const bcrypt = require('bcryptjs');
const fs = require('fs');

// Provided arguments parser.
function parseArgs(args) {
	const parsedArgs = {};
	let currentKey = null;

	for (const arg of args) {
		if (arg.startsWith('--')) {
			const [key, value] = arg.slice(2).split('=');
			if (value) {
				parsedArgs[key] = value;
			} else {
				currentKey = key;
			}
		} else if (currentKey) {
			parsedArgs[currentKey] = arg;
			currentKey = null;
		}
	}

	return parsedArgs;
}

// Password hashing function.
async function hashPassword(password) {
	return await bcrypt.hash(password, 10);
}

// Main script for password hash and output.
async function main() {
	const args = parseArgs(process.argv.slice(2));
	const { password, 'output-file': outputFile } = args;

	if (!password || !outputFile) {
		console.error('Usage: node password-hasher.js --password=<password> --output-file=<output-file>');
		console.error('   or: node password-hasher.js --password <password> --output-file <output-file>');
		process.exit(1);
	}

	console.log('Hashing password...');
	const hashedPassword = await hashPassword(password);

	const output = `Hashed password:\n${hashedPassword}\n`;
	fs.writeFileSync(outputFile, output);

	console.log(`Password was hashed and written to ${outputFile}`);
}


// Run the script and catch errors properly.
main().catch(error => {
	console.error('An error occurred:', error);
	process.exit(1);
});