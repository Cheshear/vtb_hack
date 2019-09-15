const API_URL = "/api";
const API_VOTE_URL = `${API_URL}/vote`;

export class REST_API_URLS {
  public static get VOTES_LIST(): string {
    return `${API_VOTE_URL}/votes_list`;
  }

  public static get ALL_VOTERS_LIST(): string {
    return `${API_VOTE_URL}/voters_list`;
  }

  public static get VOTERS_LIST(): Function {
    return (voteId: number) => `${API_VOTE_URL}/${voteId}/vouters`;
  }

  public static get SAVE_VOTE(): string {
    return `${API_VOTE_URL}/save_vote`;
  }

  public static get GET_VOTE(): string {
    return `${API_VOTE_URL}/get_vote`;
  }
}
