export interface Session {
    id?: string;
    title: string;
    sessionCreationDate: string | Date;
    sessionDate: string | Date;
    notes: string;
    status: string;
    psychologist: string;
    patiente: string;
    psychologistName: string;
    patienteName: string;
}