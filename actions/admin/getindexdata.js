import axios from "axios";
import Cookies from "js-cookie";
import serverurl from "../../serverurl";
export default async () => {
    console.log(Cookies.get('auth'))
    const options = {
        method: 'POST',
        url: `${serverurl}/admin/`,
        headers: {
            'auth-token': await (JSON.parse(Cookies.get('auth'))).authtoken
        },
    };

    axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        alert("some error occured")
        console.error(error);
    });
}