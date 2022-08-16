import axios from 'axios'
export default async (data) => {
    console.log(data)
    const options = {
        method: 'GET',
        url: 'https://easyway22.herokuapp.com/api/admin/login',
        params: data
    };

    const res = axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        alert("some error occured");
    });
    return res;
}