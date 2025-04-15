import { Injectable, Inject } from '@angular/core';
import { AuthenticationCredentials } from './authenticationCredentials';
import { DateTimeUtil } from '../shared/config/date-time-util';
import { GeneralService } from '../services/general/general.service';
import { LookupList, LOOKUP_LIST } from '../app.config';
import { EncryptDecryptService } from './encrypt-decrypt-service';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    constructor(
        private dateTime: DateTimeUtil,
        @Inject(LOOKUP_LIST) public lookupList: LookupList,
        public generalService: GeneralService,
        private encryptDecryptService: EncryptDecryptService
    ) {}

    private jwt_token: string | null = "";
    public userId!: number;
    public jwt_token_expiry: any;
    public jwt_token_creation_time: any;

    public setToken(token: string) {
        this.jwt_token = token;
    }

    public getAuthorizationHeader(): string {
        return "Bearer " + this.jwt_token;
    }

    public chkIsTokenExpire(currentDate: any): boolean {
        let diff = currentDate.getTime() - this.jwt_token_creation_time.getTime();
        if ((diff * 0.001) < this.jwt_token_expiry) {
            return true;
        } else {
            this.jwt_token = null;
            this.jwt_token_creation_time = null;
            this.jwt_token_expiry = null;
            return false;
        }
    }

    private urlBase64Decode(str: string) {
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw new Error('Illegal base64url string!');
        }
        return decodeURIComponent((<any>window).escape(window.atob(output)));
    }

    public decodeEncryptedToken(tokenEncrypted: string = '') {
        if (!tokenEncrypted) {
            return { 'upn': '' };
        }

        let key = this.encryptDecryptService.getBasehKey() + "aNdRgUkXp2s5v8y/B?E(H+MbQeShVmYq";
        let tokenDecrypted = this.encryptDecryptService.decryptUsingAES256(key, tokenEncrypted);

        const parts = tokenDecrypted.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }

        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    }
}
