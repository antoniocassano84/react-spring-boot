import httpClient from '../httpCommon'

const getAll = () => {
    return httpClient.get('/employees');
}

export default {getAll};