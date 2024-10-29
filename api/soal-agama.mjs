import run from '../src/module/gemini.mjs'
import http from 'http'
import {model1} from "../src/models/soal-agama.mjs";

const server = http.createServer(async (req, res) => {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    try {
        const soal = await run(`berikan aku 4 soal tentang agama islam menggunakan model ${model1}`);
        console.log(soal);
        const jsonResponse = JSON.stringify({
            status: 'success',
            data: soal
        })
        res.end(jsonResponse);
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal server error' }));
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})
