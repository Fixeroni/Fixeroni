export type Session = {
  artisan: Artisan;
  expiresAt: string;
};

export type Artisan = {
  id: string;
  email: string;
  password: string;
  fixeroni_tag: string;
  yearsOfExperience: number;
  category: string;
  linkToPortfolio: string;
  address: string;
  categoryOfService: string;
  governmentIdLink: string;
  profilePicture: string;
  confirmationCode?: {
    expires: string | Date;
    code: string;
  };
  accountType: string;
};

export type Feature = {
  image: string;
  title: string;
  distance: string;
  // description: string;
  // side: "left" | "right";
  // ctaText: string;
  // cta: string;
  Margintop: string;
};
