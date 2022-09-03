import axios from "axios";
import Cookies from 'js-cookie';
import serverurl from "../../serverurl";
export default async (data) => {
    try {
        console.log(Cookies.get('auth'),"it is your auth token")
        const options = {
            method: 'POST',
            url: `${serverurl}/user/buy`,
            headers: {
                'auth-token': await JSON.parse(Cookies.get('auth'))
            },
            data: { products: data }
        };
        axios.request(options).then(function (response) {
            alert("your order is successfully placed ")
            console.log(response.data);
        }).catch(function (error) {
            alert("your order is not placed , some error occured")
            console.error(error);
        });
    } catch (e) {
        console.log(e);
        alert("there is a errror ")
    }
}