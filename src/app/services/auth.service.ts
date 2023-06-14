import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private readonly httpClient: HttpClient){}
    
    public login(email: string, password: string) {
        return this.httpClient.post<{access_token: string}>(`${environment.api}/auth`, {email, password})
    }
}