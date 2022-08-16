import axios from "axios";
import serverurl from "../../serverurl";
export default async (data) => {
    const options = {
        method: 'POST',
        url: `${serverurl}/user/create`,
        data: data
    };
    const res = axios.request(options).then(function (response) {
        console.log(response.data, "data in action")
        return response.data;
    }).catch(function (error) {
        console.error(error);
        alert("some error occured")
    });
    console.log(res, "response from backend")
    return res;
}