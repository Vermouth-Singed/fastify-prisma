const crypto = require('crypto');

const secretKey = crypto.createHash('sha256')
    .update('secret-key')
    .digest();

function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}

const text = process.argv[2];

if (!text) {
    console.log('사용법: node encrypt-test.js 암호화할값');
    process.exit(1);
}

console.log('암호화 결과:', encrypt(text));