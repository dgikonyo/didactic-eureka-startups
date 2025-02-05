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
  startDate: string;
  endDate: string;
  duration: number;
  targetAmount: number;
  story: string;
  supportEmail: string;
  fundingModel: string;
  user_id: string;
  campaignStatus: string;
  countryId: number;
}
