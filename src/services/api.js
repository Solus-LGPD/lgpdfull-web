const BASE_URL = "http://localhost:3000"

const request = async (method, endpoint, params, token=null) => {
    method = method.toLowerCase();
    let fullUrl = `${BASE_URL}${endpoint}`;
    let body = null;
    body = JSON.stringify(params);
    let headers = {'Content-Type': 'application/json'};
    if(token){
        headers.Authorization = `Bearer ${token}`
    }
    let req = await fetch(fullUrl, {method, headers, body});
    let json = await req.json();
    return json;
}

export default () => {
    return {
        gettoken: () => {
            return sessionStorage.getItem('token');
        },
        login: async (email, pass) => {
            let json = await request('post', '/login', { email, pass });
            return json;
        },
        logout: () => {
            sessionStorage.clear();
        },
        getInventario: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('post', '/mapping/all', {userId: user.id }, token);
            return json;
        },/*
        postInventario: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('post', '/inventory/register', );
            return null;
        }*/
    }
}