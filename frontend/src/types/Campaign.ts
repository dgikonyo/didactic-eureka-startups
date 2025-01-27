export interface Campaign {
  _id?: string;
  category: string;
  sub_category: string;
  country: string;
  currency: string;
  title: string;
  tagLine: string;
  cardImage: string;
  videoUrl: string;
  videoOverlayUrl: string;
  location: string;
  tags: string;
  startDate: Date;
  endDate: Date;
  duration: Number;
  targetAmount: Number;
  story: string;
  supportEmail: string;
  fundingModel: string;
  user_id: string;
  campaignStatus: string;
  countryId: Number;
};
