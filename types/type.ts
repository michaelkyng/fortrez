interface subItems {
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

type Link = {
  name: string;
} & (normalLink | subnavLink | button);

// Base interface for common fields
export interface BaseSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}


// Enums
enum DonationStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

// Donation interface
interface Donation extends BaseSchema {
  txHash: string;
  amount: number;
  donor: string; // User ID reference
  campaign: string; // Campaign ID reference
  status: DonationStatus;
}

// Populated versions (when references are populated)
interface PopulatedDonation extends Omit<Donation, 'donor' | 'campaign'> {
  donor: User;
  campaign: Campaign;
}


export type {
  User,
  Blog,
  Donation,
  Campaign,
  PopulatedUser,
  PopulatedBlog,
  PopulatedDonation,
  PopulatedCampaign,
  DonationStatus,
  Link,
  subItems,
};