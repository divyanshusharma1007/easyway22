import axios from 'axios'
export const login = async (data) => {
    const options = {
        method: 'GET',
        url: 'http://localhost:3000/api/admin/login',
        params: data
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}