import axios from 'axios';
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent(){
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() })
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', {headers: authHeader() })
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', {headers: authHeader() })
    }
}
export default new UserService();
/**Chúng ta có thể thấy chúng ta thêm một đầu dề HTTP với trợ giúp của function authHeader() khi chúng ta yêu cầu tài nguyên đã
 * chúng thực
  */