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
  address: string,
  categoryOfService: string,
  governmentIdLink: string;
  profilePicture: string;
  confirmationCode?: {
    expires: string | Date,
    code: string
  }
  accountType: string;
};


type LogContent =  "Client" | "ArtisantA" | "ArtisantB" | "Login/RegCode";

export interface Feature{
  image: string;
  title: string;
  description: string;
  side: "left" | "right";
  ctaText: string;
  content: LogContent;
 
};

export interface FeatureProps extends Feature {
  handleClick: () => void;
}

export type DashboarFeatureprops= {
  image: string;
  title: string;
  Margintop: string;
}


export type ProfileButtonProps = {
  name: string;
  icon: string;

};

export type ProfileDetailsProps = {
  name: string;
  icon: string;
  date: string;
  amount: string;
  amountColor: string;
};

export type NotificationDetailsProps = {
  title: string;
  date: string;
  time: string;
  padding: string,
};

