import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../models/session";
import {API_CONFIG} from "../config/api.config";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    constructor(private http: HttpClient) { }

    findById(id: any): Observable<Session> {
        return this.http.get<Session>(`${API_CONFIG.baseUrl}/sessions/${id}`);
    }

    findAll(): Observable<Session[]> {
        return this.http.get<Session[]>(`${API_CONFIG.baseUrl}/sessions`);
    }

    create(session: Session): Observable<Session> {
        return this.http.post<Session>(`${API_CONFIG.baseUrl}/sessions`, session);
    }

    update(session: Session): Observable<Session> {
        return this.http.put<Session>(`${API_CONFIG.baseUrl}/sessions/${session.id}`, session);
    }
}
