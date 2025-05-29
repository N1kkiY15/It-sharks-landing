export interface Author {
    name: string;
    description: string;
}

export interface Card {
    header: string;
    authors: Author[];
}

export interface gradesArray {
    grade: string;
    description: string;
}