class CampaignStatusDto {
  id;
  statusName;

  constructor(id, statusName) {
    this.id = id;
    this.statusName = statusName;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getStatusName() {
    return this.statusName;
  }

  setStatusName(statusName) {
    this.statusName = statusName;
  }
}

module.exports = CampaignStatusDto;
