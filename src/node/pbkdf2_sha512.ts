import crypto from 'crypto';

export function pbkdf2_sha512(key: string | Buffer, salt: string | Buffer, iterations: number, keyLen: number): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => crypto.pbkdf2(key, salt, iterations, keyLen, 'sha512', (error, derivedKey) => {
        if (error) {
            reject(error);
        } else {
            resolve(derivedKey);
        }
    }));
}