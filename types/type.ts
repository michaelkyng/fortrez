import type { Project, Transaction, MediaFiles } from "@prisma/client";

type normalLink = {
  state: "normal";
  path: string;
};

type button = {
  state: "button";
  path: string;
};

export type Link = {
  name: string;
} & (normalLink | button);

// Projects

export type ProjectWithRelations = Project & {
  transactions: Transaction[];
  mediaFiles: MediaFiles[];
};
