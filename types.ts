export interface Author {
    name: string;
    description: string;
}

export interface TeamCard {
    header: string;
    authors: Author[];
}

export interface StoriesCard {
    id: number;
    first: string;
    second: string;
    name: string;
    age: string;
}

export interface GradesCard {
    grade: string;
    description: string;
}

export interface TariffCard {
    id: number;
    subtitle: string;
    title: string;
    description: string;
    button: string;
}
