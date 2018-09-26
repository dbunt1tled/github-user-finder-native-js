class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.searchContainer = document.querySelector('.searchContainer')
    }
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row mb-3"><div class="col-md-12"><h1>${user.name}</h1></div></div>
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2" alt="${user.name}" title="${user.name}"/>
                        <a href="${user.html_url}" target="_blank" class="btn btn-default btn-block" title="View profile ${user.name}">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <div class="user-info-header mb-3">
                            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-success">Followers: ${user.followers}</span>
                            <span class="badge badge-info">Following: ${user.following}</span>
                        </div>
                        <ul class="list-group mb-3">
                            <li class="list-group-item">Company: ${user.company ? user.company : 'N/A' }</li>
                            <li class="list-group-item">Website/Blog: ${user.blog ? user.blog : 'N/A' }</li>
                            <li class="list-group-item">Location: ${user.location ? user.location : 'N/A' }</li>
                            <li class="list-group-item">Member Since: ${user.create_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-headding mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }
    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                       <div class="col-md-6"><a href="${repo.html_url}" target="_blank" title="${repo.name}">${repo.name}</a></div>
                       <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                       </div>
                    </div>
                </div>          
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }
    showAlert(message = '', classNames = ['alert', 'alert-info']) {
        this.clearAlert();
        let classAlert = classNames;
        if(Array.isArray(classAlert)) {
            classAlert = classAlert.join(' ');
        }
        const alert = `<div class="${classAlert}">${message}</div>`;
        this.searchContainer.insertAdjacentHTML('afterbegin', alert);
        setTimeout(() => this.clearAlert(),3000);
    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove()
        }
    }
    clearProfile() {
        this.profile.innerHTML = '';
    }
}