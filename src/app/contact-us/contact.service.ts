import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ContactService{
    // https://mailthis.to/
    private mailApi = 'https://mailthis.to/academicregistrar';

    constructor( private http: HttpClient) {
    
    }

    PostMessages(input: any){
        return this.http.post(this.mailApi, input, {responseType: 'text' })
            .pipe(
                map(
                    (response) =>{
                        if(response){
                        return response;
                    }
                },
                (error: any) =>{
                    return error;
                }
            )
        )
    }
}

