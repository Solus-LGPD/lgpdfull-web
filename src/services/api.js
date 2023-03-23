const BASE_URL = "http://localhost:3000"
// const BASE_URL = "http://52.67.124.155"

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
        savePass: async (email) => {
            let json = await request('get', `/user/${email}`,undefined);
            return json;
        },
        updateUser: async (raw) => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('patch', `/user/${user.id}`,raw, token);
            return json;
        },
        updatePass: async ( raw ) => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('patch', `/user/update-pass${user.id}`,raw, token);
            return json;
        },
        findAll: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('get', `/dpo/all/${user.id}`,undefined, token);
            return json;
        },
        findOne: async (id) => {
            const token = sessionStorage.getItem('token');
            let json = await request('get', `/dpo/${id}`,undefined, token);
            return json;
        },
        UpdateEmail: async (id) => {
            const token = sessionStorage.getItem('token');
            let json = await request('patch', `/dpo/${id}`,id, token);
            return json;
        },
        remove: async (id) => {
            const token = sessionStorage.getItem('token');
            let json = await request('delete', `/dpo/${id}`, undefined, token);
            return json;
        },
        getInventories: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('get', `/mapping/${user.id}`,undefined, token);
            return json;
        },
        getOneInventory: async (id) => {
            const token = sessionStorage.getItem('token');
            let json = await request ('get', `/mapping/${ id }`, undefined, token);
            return json;
        },
        updateInventory: async ( id ) => {
            const token = sessionStorage.getItem('token');
            let json = await request('patch', `/mapping/${id}`, id,token);
            return json;
        },
        deleteInventory: async (id) => {
            const token = sessionStorage.getItem('token');
            let json = await request('delete', `/mapping/${id}`, id , token);
            return json
        },
        getSectors: async () => {
            const token =  sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request ('get', `/sector/all/${user.id}`, undefined, token)
            return json;
        },
        getOneSector: async (id) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('get', `/sector/${id}`, undefined, token)
            return json;
        },
        updateSector: async (id) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('put', `/sector/${id}`, id, token)
            return json;
        },
        deleteSector:  async (id) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('delete', `/sector/${id}`, undefined, token)
            return json;
        },
        getAllQuizAnswers: async () => {
            const token =  sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request ('get', `/quiz/all/${user.id}`, undefined , token )
            return json;
        },
        getQuizAnswers: async (id) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('get', `/quiz/${id}`, undefined , token )
            return json;
        },
        DeleteQuizAnswers: async (id) => {
            const token =  sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request ('delete', `/quiz/${id}`, undefined , token )
            return json;
        },
        postQuiz: async (raw) => {
            const token =  sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request ('post', '/quiz', {...raw, userId: user.id } , token )
            return json;
        }
    }
}