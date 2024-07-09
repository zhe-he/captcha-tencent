import fs from "node:fs";
import { fileURLToPath } from 'node:url';
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json'), 'utf8'));

export default {
		input: 'src/index.js',
		output: [
			{ file: pkg.main, format: 'cjs',  },
			{ file: pkg.module, format: 'es', }
		],
}
