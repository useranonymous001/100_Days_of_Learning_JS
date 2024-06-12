class githubUserFinder {
  // creating a constructor for all the necessary items
  constructor() {
    this.appUri = "https://api.github.com/users/";
    this.searchBtn = document.getElementById("searchBtn");
    this.username = document.getElementById("username");
    this.profileDiv = document.getElementById("profile");
    this.reposDiv = document.getElementById("repositories");

    this.searchBtn.addEventListener("click", () => {
      this.searchUser();
    });
  }

  // let's search the user
  async searchUser() {
    const username = this.username.value;
    if (!username) {
      this.showError("USERNAME NOT FOUND");
      return;
    }
    try {
      const userData = await this.fetchData(this.appUri + username);
      const reposData = await this.fetchData(this.appUri + username + "/repos");

      this.displayUserProfiles(userData);
      this.displayRepos(reposData);
    } catch (error) {
      this.showError("Network error or any other issue occured");
    }
  }

  // fetching the url data
  async fetchData(url) {
    const response = await fetch(url);
    if (!response) {
      throw new Error("Check you internet connection");
    }
    return response.json();
  }

  async displayUserProfiles(user) {
    this.profileDiv.innerHTML += `
<div class="user-profile">
  <img src="${user.avatar_url}" alt="user profile" />
  <h2>${user.login} || ${user.name}</h2>
  <p>Bio: ${user.bio}</p>
  <p>Followers: ${user.followers} || Following : ${user.following}</p>
  <p>Email: ${user.email}</p>
  <p>Twitter: ${user.twitter_username}</p>
  <p>Blog: ${user.blog}</p>
  <p>Company: ${user.company}</p>
  <h5>Repos : ${user.public_repos}</h5>

  <br />

  <a href="${user.url}">Visit User</a>
</div>
    `;
  }

  async displayRepos(repos) {
    this.reposDiv.innerHTML = `<h3> Repositories </h3>`;
    repos.forEach((repo) => {
      this.reposDiv.innerHTML += `
            <div class="repositories">
  <h4><a href="repo.html_url" target="_blank">${repo.name}</a></h4>
</div>
        `;
    });
  }

  async showError(message) {
    this.profileDiv.innerHTML = `<p class="error">${message}</p>`;
    this.reposDiv.innerHTML = "";
  }
}

// calling the class when all the DOM Elements are loaded
document.addEventListener("DOMContentLoaded", () => {
  new githubUserFinder();
});
