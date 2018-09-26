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
    githubService.getUser(searchText)
        .then(user => {
            console.log(user);
            if(user.message === 'Not Found') {
                console.info('User Not Found');
                uiService.showAlert(`User ${searchText} Not Found`, ['alert', 'alert-danger']);
                return false;
            }
            uiService.showProfile(user);
        })
        .catch(error =>{
           console.warn(error);
        });
});