Trong hướng dẫn này, chúng ta sẽ xây dựng một Vue.js với ứng dụng Vuex và Vue Router để hỗ trợ CHứng thực JWT,
    Dòng chảy chứng thực JWT cho người dùng đăng ký và đăng nhập
    Cấu trúc dự án cho chứng thực Vue.js với Vuex và Vue Router
    làm thế nào để xác định module chứng thực Vuex
    Khởi tạo các component chứng thực Vue với Vuex store và VeeValidate
    Các component Vue cho truy cập tài nguyên bảo mật 
    làm thế nào để thêm một thanh điều hướng động đến Vue app
Tổng quan của Vue JWT Authentication 
Chúng ta sẽ xây dựng một Vue application để:
    Có các trang Login/logout, Signup 
    mẫu dữ liệu sẽ được xác nhận bởi Front-end trước khi được gửi tới back-end
    Dựa vào quyền của User (admin, moderator, user ) các thanh điều hướng thay đổi các item của nó tự động
Dòng chảy cho User đăng ký và user đăng nhập 
Để JWT chứng thực, chúng ta gọi ra 2 endpoints:
    POST api/auth/signup để người dùng đăng ký
    POST api/auth/signin để người dùng đăng nhập
Vue Client nên thêm một JWT đến đầu đề HTTP Authorization trước khi gửi yêu cầu cho tài nguyên bảo mật
VUE APP COMPONENT DIAGRAM VỚI VUEX VÀ VUE-Router
-Component App là một chổ chứa với Router. Nó lấy state app từ Vuex store/auth. Sau đó navbar hiện tại có thể hiển thị dựa trên
state. App component cũng truyền state đến các component con của nó.
- các component Login và Register có mẫu cho dữ liệu nộp (với hỗ trợ vee-validate). Chúng ta gọi Vuex store function dispatch()
để thực hiện các hành động đăng ký/đăng nhập 
- Các hành động Vuex của chúng ta gọi các phương thức auth.service nó sử dụng axios để làm các yêu cầu HTTP. Chúng ta cũng lưu trữ 
hoặc lấy JWT từ trình duyệt bộ nhớ Local bên trong các phương thức này
- Home component là public cho tất cả mọi người truy câp
-Profile component lất dữ liệu user từ component parent của nó, chúng ta sử dụng user.service để lấy tài nguyên bảo mật từ api
- user.service sử dụng function trợ giúp auth-header() để thêm JWT đến đầu đề chứng thực HTTP. auth-header() trả về một đối 
tượng đang chứa JWT của đã đăng nhập hiện tại trong user từ bộ nhớ Local 