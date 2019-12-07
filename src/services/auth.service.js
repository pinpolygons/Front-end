import axios from 'axios'
import { Promise } from 'core-js';

/**service cung cấp 3 phương thức quan trọng với giúp đỡ của axios cho yêu cầu và phản hồi HTTP:
 * login(): POST {username, password} và lưu trữ JWT tới Local Storage
 * logout(): loại bỏ JWT từ Local Storage
 * register(): POST {username, email, password}
 */

 const API_URL = 'http://localhost:8080/api/auth/';

 class AuthService{
     login(user) {
         return axios
         .post(API_URL + 'signin', {
             username: user.username,
             password: user.password
         })
         .then(this.handleResponse)
         .then(response => {
             if (response.data.accessToken) {
                 localStorage.setItem('user', JSON.stringify(response.data));
             }
             return response.data;
         });
     }
     logout(){
         localStorage.removeItem('user');
     }

     register(user) {
         return axios.post(API_URL + 'signup', {
             username: user.username,
             email: user.email,
             password: user.password
         });
     }

     handleResponse(response){
         if (response.status === 401) {
             this.logout();
             location.reload(true);

             const error = response.data && response.data.message;
             return Promise.reject(error);
         }

         return Promise.resolve(response)
     }
 }
 export default new AuthService();
 /**Nếu yêu cầu truy cập trả về trạng thái 401 (Không xác thực), điều đó có nghĩa, JWT đã hết hạn hoặc không có giá trị, chú ta 
  * sẽ đăng xuất tài khoản (xoá bỏ JWT từ Local Storage)
  */