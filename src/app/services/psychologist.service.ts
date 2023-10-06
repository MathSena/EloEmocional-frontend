import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Psychologist } from '../models/psychologist';

@Injectable({
    providedIn: 'root'
})
export class PsychologistService {

    constructor(private http: HttpClient) { }

    findById(id: any): Observable<Psychologist> {
        return this.http.get<Psychologist>(`${API_CONFIG.baseUrl}/psychologists/${id}`);
    }

    findAll(): Observable<Psychologist[]> {
        return this.http.get<Psychologist[]>(`${API_CONFIG.baseUrl}/psychologists`);
    }

    create(psychologist: Psychologist): Observable<Psychologist> {
        return this.http.post<Psychologist>(`${API_CONFIG.baseUrl}/psychologists`, psychologist);
    }

    update(psychologist: Psychologist): Observable<Psychologist> {
        return this.http.put<Psychologist>(`${API_CONFIG.baseUrl}/psychologists/${psychologist.id}`, psychologist);
    }

    delete(id: any): Observable<Psychologist> {
        return this.http.delete<Psychologist>(`${API_CONFIG.baseUrl}/psychologists/${id}`);
    }
}