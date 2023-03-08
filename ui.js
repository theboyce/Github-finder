class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  //Display profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class= "row">
    <div class="col-md-3">
    <image class= "img-fluid mb-2" src = "${user.avatar_url}">
    <a href= "${user.html_url}" tarhet= "_blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
    </div>
    <div class="col-md-9">
       <span class= "badge alert-primary ">Public Repos:${user.public_repos}</span>
       <span class= "badge alert-secondary bg-dark ">Public Gists: ${user.public_gists}</span>
       <span class= "badge alert-success">Followers: ${user.followers}</span>
       <span class= "badge alert-info ">Following: ${user.following}</span>
       <br><br>
       <ul class = "list-group">
       <li class = "list-group-item">Company: ${user.company}</li>
       <li class = "list-group-item">Website/Blog: ${user.blog}</li>
       <li class = "list-group-item">Location: ${user.location}</li>
       <li class = "list-group-item">Member Since: ${user.created_at}</li>
       </ul>
       </div>
    </div>
    </div>
</div>

    <h3 class= "page-heading mb-3">Latest Repos </h3>
    <div id="repos"></div>
         `;
  }

  //show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
      <div class= "card card-body mb-2">
      <div class= "row">
      <div class= "col-md-6">
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>
      <div class= "col-md-6">
      <span class= "badge alert-primary ">Stars:${repo.stargazers_count}</span>
       <span class= "badge alert-secondary bg-dark ">Watchers: ${repo.watchers_count}</span>
       <span class= "badge alert-success">Forks:${repo.forks_count}
      </div>
      </div>
      `;
    });

    //output repos
    document.getElementById('repos').innerHTML = output;
  }

  //Show alert
  showAlert(message, className) {
    this.clearAlert();
    //create div
    const div = document.createElement('div');
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector('.searchContainer');
    //get search box
    const search = document.querySelector('.search');
    //Iinsert alert
    container.insertBefore(div, search);

    //Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //Clear profile
  clearProfile() {
    this.profile.innerHTML = ' ';
  }
}
