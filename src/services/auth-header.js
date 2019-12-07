
/**Chúng ta cũng có các phương thức cho dữ liện đang nhận từ máy chủ, trong trường hợp chúng ta truy cập tài nguyên bão mật, yêu
 * cầu cần chứng thực tiêu đề.
 * hãy khởi tạo function trợ giúp được gọi authHeader() bên trong auth-header.js
 */
export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {Authorization: 'Bearer ' + user.accessToken};
    } else {
        return {};
    }
}
/**Nó kiểm tra Local Storage cho item user
 * Nếu có một người dùng đã đăng nhập với accessToken (JWT), trả về đầu đề HTTP Authorization. Nếu khôn thì, trả về một đối
 * tượng rỗng
 */