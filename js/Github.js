class Github {
    constructor (clientId, clientSecret) {
        this.baseUrl = 'https://api.github.com';
        this.addParams = '?';
        this.headers = {
            "Content-type": "application/json; charset=UTF-8",
        };
        this.clientId = clientId || '';
        this.clientSecret = clientSecret || '';
        if(this.clientId.length && this.clientSecret.length) {
            this.addParams = '?client_id='+this.clientId+'&client_secret='+this.clientSecret+'&';
        }
    }
    getUser(name) {
        return new Promise ((resolve, reject) => {
            fetch(`${this.baseUrl}/users/${name}${this.addParams}`,{
                //method: 'GET', // on default
                headers: this.headers,
            })
                .then(response => response.json())
                .then(user => resolve(user))
                .catch(error => reject(error));
        });
    }
    getRepos(name) {
        return new Promise ((resolve, reject) => {
            fetch(`${this.baseUrl}/users/${name}/repos${this.addParams}per_page=${'5'}&sort=${'created:asc'}`,{
                //method: 'GET', // on default
                headers: this.headers,
            })
                .then(response => response.json())
                .then(repo => resolve(repo))
                .catch(error => reject(error));
        });
    }
}