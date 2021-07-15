import { HttpClient } from "@angular/common/http"

export class BaseService {
    /** Test only */
    readonly BASE_URL = 'http://127.0.0.1:8080/api/';

    constructor(public http: HttpClient) { }

    get(url: string, options?: any) {
        return this.http.get(this.BASE_URL + url, options);
    }

    post(url: string, body: any, options?: any) {
        return this.http.post(this.BASE_URL + url, body, options);
    }
}
