import axios from "axios";
import Cookies from "js-cookie";
export default (data)=>{

    const options = {
        method: 'POST',
        url: `${serverurl}/admin/addproduct`,
        headers: {
            'auth-token': JSON.parse(Cookies.get('auth')).authtoken
        },
        data: data
    };
    
    axios.request(options).then(function (response) {
        alert("product added successfully")
        return response.data;
    }).catch(function (error) {
        alert("some error occured")
        console.error(error);
    });
}