export interface User { //This matches the schema.
    UID: string;
    _id ?: string;
    Fname: string;
    Lname: string;
    ClassIDList: string[];
    ClassHistory: string[];
    TransactionHistory: string[];
    Birthday: string;
    Email: string;
    Role: string;
    AdminNotes: string;
}