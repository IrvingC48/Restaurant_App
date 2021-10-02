import axios from 'axios';

const sendDataForm = async (data) => {
    return axios.post(process.env.REACT_APP_BASE_URL, data)
        .then(response => {
            return response;
        });
};

export default sendDataForm;
