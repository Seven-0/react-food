import axios from "axios";

const axiosIntrceptor = axios.create();

axiosIntrceptor.interceptors.request.use( req => {
    req.headers = {
            signature: "midasfooddelivery",
            request_not_encrypted: true 
        }
        return req 
    })

export default axiosIntrceptor;