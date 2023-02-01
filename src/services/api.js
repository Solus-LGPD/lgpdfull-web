const BASE_URL = "http://localhost:3000"

const request = async (method, endpoint, params, token=null) => {
    method = method.toLowerCase();

    let headers = {'Content-Type': 'application/json'};
    let fullUrl = `${BASE_URL}${endpoint}`;
    let body = null;

    body = JSON.stringify(params);

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
        updateUser: async (raw) => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('post', '/user/update', {userId: user.id, ...raw  }, token);
            return json;
        },
        getDpos: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('post', '/dpo/all', {userId: user.id }, token);
            return json;
        },
        getActualDpo: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('post', '/dpo/actual', {userId: user.id }, token);
            return json;
        },
        postDpo: async (raw) => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('post', '/dpo/register', {userId: user.id, ...raw }, token);
            return json;
        },
        updateDpo: async (id ,raw) => {
            const token = sessionStorage.getItem('token');
            let json = await request('put', '/dpo/update', {id, ...raw }, token);
            return json;
        },
        getInventories: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('post', '/mapping/all', {userId: user.id }, token);
            return json;
        },
        getOneInventory: async (id) => {
            const token = sessionStorage.getItem('token');
            let json = await request ('post', '/mapping/one', { id }, token);
            return json;
        },
        postInventory: async ( raw ) => {
            const token = sessionStorage.getItem('token');
            let json = await request('post', '/mapping/register', raw,token);
            return json;
        },
        updateInventory: async ( raw ) => {
            const token = sessionStorage.getItem('token');
            let json = await request('put', '/mapping/update', raw,token);
            return json;
        },
        deleteInventory: async (id) => {
            const token = sessionStorage.getItem('token');
            let json = await request('delete', '/mapping/remove', { id }, token);
            return json
        },
        getSectors: async () => {
            const token =  sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request ('post', '/sector/all', { user_id: user.id }, token)
            return json;
        },
    }
}