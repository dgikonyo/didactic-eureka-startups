export default class CampaignDto {
  id;
  title;
  tagLine;
  startDate;
  endDate;
  duration;
  cardImage;
  targetAmount;
  videoUrl;
  videoOverlayUrl;
  story;
  supportEmail;
  fundingModel;
  user_id;
  campaignStatus;
  countryId;
  category;
  sub_category;

  constructor(
    id,title,tagLine,startDate,endDate,duration,
    targetAmount,videoUrl,videoOverlayUrl,story,supportEmail,
    fundingModel,
    user_id,
    campaignStatus,
    countryId,
    category,
    sub_category,
    cardImage
  ) {
    this.id = id;
    this.title = title;
    this.tagLine = tagLine;
    this.startDate = startDate;
    this.endDate = endDate;
    this.duration = duration;
    this.targetAmount = targetAmount;
    this.videoUrl = videoUrl;
    this.videoOverlayUrl = videoOverlayUrl;
    this.story = story;
    this.supportEmail = supportEmail;
    this.fundingModel = fundingModel;
    this.user_id = user_id;
    this.campaignStatus = campaignStatus;
    this.countryId = countryId;
    this.category = category;
    this.sub_category = sub_category;
    this.cardImage = cardImage;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getTagLine() {
    return this.tagLine;
  }

  setTagLine(tagLine) {
    this.tagLine = tagLine;
  }

  getStartDate() {
    return this.startDate;
  }

  setStartDate(startDate) {
    this.startDate = startDate;
  }

  getEndDate() {
    return this.endDate;
  }

  setEndDate(endDate) {
    this.endDate = endDate;
  }

  getDuration() {
    return this.duration;
  }

  setDuration(duration) {
    this.duration = duration;
  }

  getTargetAmount() {
    return this.targetAmount;
  }

  setTargetAmount(targetAmount) {
    this.targetAmount = targetAmount;
  }

  getVideoUrl() {
    return this.videoUrl;
  }

  setVideoUrl(videoUrl) {
    this.videoUrl = videoUrl;
  }

  getVideoOverlayUrl() {
    return this.videoOverlayUrl;
  }

  setVideoOverlayUrl(videoOverlayUrl) {
    this.videoOverlayUrl = videoOverlayUrl;
  }

  getStory() {
    return this.story;
  }

  setStory(story) {
    this.story = story;
  }

  getSupportEmail() {
    return this.supportEmail;
  }

  setSupportEmail(supportEmail) {
    this.supportEmail = supportEmail;
  }

  getFundingModel() {
    return this.fundingModel;
  }

  setFundingModel(fundingModel) {
    this.fundingModel = fundingModel;
  }

  getUserId() {
    return this.user_id;
  }

  setUserId(user_id) {
    this.user_id = user_id;
  }

  getCampaignStatus() {
    return this.campaignStatus;
  }

  setCampaignStatus(campaignStatus) {
    this.campaignStatus = campaignStatus;
  }

  getCountryId() {
    return this.countryId;
  }

  setCountryId(countryId) {
    this.countryId = countryId;
  }

  getCategory() {
    return this.category;
  }

  setCategory(category) {
    this.category = category;
  }

  getSubCategory() {
    return this.sub_category;
  }

  setSubCategory(sub_category) {
    this.sub_category = sub_category;
  }

  getCardImage() {
    return this.cardImage;
  }

  setCardImage(cardImage) {
    this.cardImage = cardImage;
  }
}
