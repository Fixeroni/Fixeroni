export type Session = {
  user: any;
  expiresAt: string;
};

export type User = {
  email: string;
  password: string;
  fixeroni_tag: string;
  yearsOfExperience: number;
  category: string;
  linkToPortfolio: string;
  governmentIdLink: string;
  profilePicture: string;
  accountType: string;
};

export type Feature = {
  image: string,
  title: string,
  description: string
}