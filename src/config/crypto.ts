import {
    createHash,
    createDecipheriv
} from 'crypto';

const secretKey = createHash('sha256')
    .update(process.env.SECRET_KEY!)
    .digest();

export function decrypt(encryptedText: string): string {
    const [ivHex, encrypted] = encryptedText.split(':');

    const iv = Buffer.from(ivHex, 'hex');

    const decipher = createDecipheriv(
        'aes-256-cbc',
        secretKey,
        iv
    );

    let decrypted = decipher.update(
        encrypted,
        'hex',
        'utf8'
    );

    decrypted += decipher.final('utf8');

    return decrypted;
}
