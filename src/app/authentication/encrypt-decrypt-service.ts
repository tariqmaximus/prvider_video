import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptDecryptService {

    private baseSecretKey: any = '27%RSA$#@$^@1R@2';
    constructor() { }

    public getBasehKey(): string {
        return this.baseSecretKey;
    }

    encryptUsingAES256(keys: any, value: any): string {

        let trimmedKey = (keys.slice(0, 8) + keys.slice(keys.length - 8));
        var key = CryptoJS.enc.Utf8.parse(trimmedKey);
        var iv = CryptoJS.enc.Utf8.parse(this.baseSecretKey);

        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(value)), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });


        return encrypted.toString();
    }

    decryptUsingAES256(keys: any, value: any): any {
        
        let trimmedKey = (keys.slice(0, 8) + keys.slice(keys.length - 8));
        var key = CryptoJS.enc.Utf8.parse(trimmedKey);
        var iv = CryptoJS.enc.Utf8.parse(this.baseSecretKey);

        var decrypted = CryptoJS.AES.decrypt(value.toString(), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        
        return decrypted.toString(CryptoJS.enc.Utf8);

    }
}