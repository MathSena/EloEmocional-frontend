import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import {Patiente} from "../models/patiente";

@Injectable({
    providedIn: 'root'
})
export class PatienteService{

    constructor(private http: HttpClient) { }

    findById(id: any): Observable<Patiente> {
        return this.http.get<Patiente>(`${API_CONFIG.baseUrl}/patientes/${id}`);
    }

    findAll(): Observable<Patiente[]> {
        return this.http.get<Patiente[]>(`${API_CONFIG.baseUrl}/patientes`);
    }

    create(patiente: Patiente): Observable<Patiente> {
        return this.http.post<Patiente>(`${API_CONFIG.baseUrl}/patientes`, patiente);
    }

    update(patiente: Patiente): Observable<Patiente> {
        return this.http.put<Patiente>(`${API_CONFIG.baseUrl}/patientes/${patiente.id}`, patiente);
    }

    delete(id: any): Observable<Patiente> {
        return this.http.delete<Patiente>(`${API_CONFIG.baseUrl}/patiente/${id}`);
    }
}