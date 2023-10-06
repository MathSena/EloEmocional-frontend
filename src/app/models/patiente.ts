export interface Patiente {
    id?: string;
    name: string;
    cpf: string;
    email: string;
    password: string;
    profiles: number[];
    dateCreation: string | Date;
}
