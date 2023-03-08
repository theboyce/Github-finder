class Github {
  constructor() {
    this.client_id = '907c12fedb0848f8cc9b';
    this.client_secret = '310c2d648cd67189d5cf7faad5b3756b34ebddef';
    this.repos_count =5;
    this.repos_sort = 'created:asc';;
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id =${this.client_id}& client_secret= ${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id =${this.client_id}& client_secret= ${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
