import axios from 'axios'
import serverurl from '../../serverurl';
export default async (data) => {
    const options = {
        method: 'GET',
        url: `${serverurl}/admin/login`,
        params: data
    };

    const res = axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        alert("some error occured");
    });
    return res;
}