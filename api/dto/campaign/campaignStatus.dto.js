export default class CampaignStatusDto {
  statusName;

  constructor(id, statusName) {
    this.statusName = statusName;
  }

  getStatusName() {
    return this.statusName;
  }

  setStatusName(statusName) {
    this.statusName = statusName;
  }
}
