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
    getCommentsById(id) {
        return new Promise ((resolve, reject) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
                method: 'GET',
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then(response => response.json())
                .then(comments => resolve(comments))
                .catch(error => reject(error));
        });
    }
}