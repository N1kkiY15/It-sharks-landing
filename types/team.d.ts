export interface Author {
    name: string;
    description: string;
}

export interface Card {
    header: string;
    authors: Author[];
}