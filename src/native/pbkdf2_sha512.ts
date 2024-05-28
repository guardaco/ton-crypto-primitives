/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const { pbkdf2 } = require("react-native-quick-crypto");

export async function pbkdf2_sha512(key: string | Buffer, salt: string | Buffer, iterations: number, keyLen: number): Promise<Buffer> {
    return new Promise((resolve, reject) => pbkdf2(key, salt, iterations, keyLen, 'sha512', (error: string, derivedKey: Buffer) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(derivedKey);
        }
    }));
}
