import axios from "axios";
import serverurl from "../../serverurl";
export default async(data) => {
    const options = {
        method: 'POST',
        url: `${serverurl}user/login`,
        data: data
    };

    const res = axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
        alert("some error occured")
    });
    return res
}