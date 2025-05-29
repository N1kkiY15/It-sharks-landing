export interface Author {
    name: string;
    description: string;
}

export interface TeamCard {
    header: string;
    authors: Author[];
}