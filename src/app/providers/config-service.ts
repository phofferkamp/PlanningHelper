import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConfigService {
    private config: any;

    constructor(private http: Http) { }

    loadConfiguration(): Promise<any> {
        return this.http
            .get('assets/config.json')
            .toPromise()
            .then(res => this.config = res.json());
    }

    public getConfig() {
        return this.config;
    }
}