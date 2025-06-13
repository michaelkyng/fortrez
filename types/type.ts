import type { Project, Transaction, MediaFiles, Admin } from "@prisma/client";

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

// Projects

export type ProjectWithRelations = Project & {
  author?: Admin;
  transactions?: Transaction[];
  mediaFiles?: MediaFiles[];
};
