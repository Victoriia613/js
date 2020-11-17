export default class ApiService {
    _url = 'https://jsonplaceholder.typicode.com/users';
 
 async getUsers() {
     return (await fetch(this._url)).json();
 }
    // async getUsers() {
    //     let users = await fetch(this._url);
    //     let result = users.json();
    //    return result; 
    // }
    async getUsersById(id) {
        return (await fetch(`${this._url}/${id}`)).json();
    }
}

