export interface DocumentData {
  title: string;
  author: string;
  date: string;
  abstract: {
    title: string;
    content: string;
  };
  sections: Section[];
}

export type SectionContent = string | UnorderedList | Table | Section | CodeBlock;

export interface Section {
  level: 1 | 2;
  title: string;
  content: SectionContent[];
}

export interface UnorderedList {
  type: 'ul';
  items: string[];
}

export interface Table {
  type: 'table';
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface CodeBlock {
    type: 'code';
    language: string;
    code: string;
}