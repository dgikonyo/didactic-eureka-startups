class CampaignDto {
  title;
  tagLine;
  startDate;
  endDate;
  duration;
  targetAmount;
  videoUrl;
  videoOverlayUrl;
  story;
  supportEmail;
  fundingModel;
  user_id;
  campaignStatus;

  constructor(
    title,
    tagLine,
    startDate,
    endDate,
    duration,
    targetAmount,
    videoUrl,
    videoOverlayUrl,
    story,
    supportEmail,
    fundingModel,
    user_id,
    campaignStatus
  ) {
    this.title = title;
    this.tagLine = tagLine;
    this.startDate = startDate;
    this.endDate - endDate;
    this.duration = duration;
    this.targetAmount = targetAmount;
    this.videoUrl = videoUrl;
    this.videoOverlayUrl = videoOverlayUrl;
    this.story = story;
    this.supportEmail = supportEmail;
    this.fundingModel = fundingModel;
    this.user_id = user_id;
    this.campaignStatus = campaignStatus;
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
    return this.timestamp;
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
  
}

module.exports = CampaignDto;
