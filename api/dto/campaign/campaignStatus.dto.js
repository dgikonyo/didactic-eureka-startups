class CampaignStatusDto {
  statusName;

  constructor(statusName) {
    this.statusName = statusName;
  }

  getStatusName() {
    return this.statusName;
  }

  setStatusName(statusName) {
    this.statusName = statusName;
  }
}

module.exports = CampaignStatusDto;
