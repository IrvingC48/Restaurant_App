import axios from 'axios';

const sendDataForm = async (data) => {
    return axios.post(process.env.URL_SERVER, data)
        .then(response => {
            return response;
        });
};

export default sendDataForm;
