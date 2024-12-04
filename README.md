# password-hasher

This simple but helpful project allows you to create hashed passwords with ease right from the command line with `bcryptjs` and `fs` on the `nodejs` platform.

To use this software:

1. Clone this repository into your file-system where Nodejs and git are installed with: `git clone https://github.cm/tuffs/password-hasher.git`

2. Install the project dependecies with `npm i` or your package manager of choices installation command using the references in the package.json file. 

3. Use with `node password-hasher.js --password=<password> --output-file=<output-file>` or: `node password-hasher.js --password <password> --output-file <output-file>` 

Alternatively, you may use the command set `npm run hash -- --password=<password> --output-file=<output-file>` or: `node password-hasher.js --password <password> --output-file <output-file>`.

This project was developed by Devon Kiss Studios to quickly generate hashed passwords for initial administrative accounts using the bcryptjs NPM package. Feel free to use this freely without attribution, this project is protected under the MIT open-source license, as indicated in the package.json file.