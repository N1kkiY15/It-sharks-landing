export interface Author {
  name: string
  description: string
}

export interface TeamCard {
  header: string
  authors: Author[]
}

export interface GradesCard {
  grade: string
  description: string
}
