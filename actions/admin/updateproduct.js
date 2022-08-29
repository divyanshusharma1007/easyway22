import axios from "axios";
import Cookies from "js-cookie";
import serverurl from "../../serverurl";
export default async (data) => {
    console.log(Cookies.get('auth'))
    const options = {
        method: 'POST',
        url: `${serverurl}/admin/updateproduct`,
        headers: {
            'auth-token': await (JSON.parse(Cookies.get('auth'))).authtoken
        },
        data:data
    };
    return await axios.request(options).then(function (response) {
        alert("update successfull")
        return response.data;
    }).catch(function (error) {
        alert("some error occured")
        console.error(error);
    });
}