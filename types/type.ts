export interface subItems {
  name: string;
  path: string;
}

type normalLink = {
  state: "normal";
  path: string;
};

type subnavLink = {
  state: "subnavLink";
  subItems: subItems[];
};

type button = {
  state: "button";
  path: string;
};

export type Link = {
  name: string;
} & (normalLink | subnavLink | button);

// Types for Admin, Project, Transaction, and MediaFiles
export interface Admin {
  id: string;
  name: string;
  email: string;
  // Add other admin properties as needed
}

export interface MediaFiles {
  id: string;
  url: string;
  type: 'image' | 'video' | 'document';
  // Add other media file properties as needed
}

export interface Transaction {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  // Add other transaction properties as needed
}

export interface Project {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  // Add other project properties as needed
}

// Projects
export type ProjectWithRelations = Project & {
  author: Admin;
  transactions: Transaction[];
  mediaFiles: MediaFiles[];
};
