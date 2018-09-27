// Init UI
const uiService = new UI();
// Init search input
const searchInput =  document.getElementById('searchUser');
// init GitHub
const githubService = new Github('c9e0a3d55cf1ce770319', '2f04b8b32464d3085dee3305dde7d0833299c32f');
searchInput.addEventListener('keyup', e => {
    const searchText = e.target.value;
    if(searchText === '') {
        return false;
    }
    uiService.showLoader();
    // githubService.getUser(searchText)
    //     .then(user => {
    //         if(user.message === 'Not Found') {
    //             console.info('User Not Found');
    //             uiService.showAlert(`User ${searchText} Not Found`, ['alert', 'alert-danger']);
    //             uiService.clearProfile();
    //             uiService.hideLoader();
    //             return false;
    //         }
    //         uiService.clearAlert();
    //         uiService.showProfile(user);
    //         return user.login;
    //     })
    //     //.then(githubService.getRepos.bind(githubService))
    //     .then(user => githubService.getRepos(user)) // If you don't want bind
    //     .then(repos => {
    //         uiService.showRepos(repos);
    //     })
    //     .then(() => uiService.hideLoader())
    //     .catch(error =>{
    //        uiService.clearProfile();
    //        uiService.hideLoader();
    //        console.info(error);
    //     });
    githubService.getUserData(searchText)
        .then(user => {
            if(user.userData.message === 'Not Found') {
                console.info('User Not Found');
                uiService.showAlert(`User ${searchText} Not Found`, ['alert', 'alert-danger']);
                uiService.clearProfile();
                uiService.hideLoader();
                return false;
            }
            uiService.clearAlert();
            uiService.showProfile(user.userData);
            uiService.showRepos(user.reposData);
        })
        .then(() => uiService.hideLoader())
        .catch(er => {
            uiService.clearProfile();
            uiService.hideLoader();
            uiService.showAlert(`You have a problem, maybe wrong request`, ['alert', 'alert-danger']);
            console.log(er);
        })
});