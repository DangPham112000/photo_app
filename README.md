## Mục tiêu

Xây dựng một mini project đơn giản sử dụng kiến thưucs Redux vào project ReactJS

- Tập trung nhiều vào `Redux` với `Redux Toolkit`
- Sử dụng toàn bộ là `hooks`
- Học sử dụng UI lib: `Reactstrap`
- Học sử dụng form: `Formik`
- Học cách tổ chức API (optional)

## Mô tả App

- App quản lý hình ảnh yêu thích, được chọn lựa từ https://picsum.photos/
- CRUD operators
- Gồm có 2 trang:
 - `Home`: listing + view + delete
 - `AddEdit`: dùng để tạo mới + sửa thông tin của một photo
- Mỗi photo gồm: `title` + `categoryId` + `imageUrl`
- Các chức năng:
 - Render danh sách photo yêu thích
 - Lọc photo theo category
 - Thêm mới một photo
 - Chỉnh sửa một photo
 - Persist dữ liệu khi reload browser
 - Random photo ngẫu nhiên từ https://picsum.photos/
 - Hiển thị danh sách photo https://picsum.photos/ để lựa chọn

## Công nghệ sử dụng

- ReactJS (CRA)
- Redux (Redux Toolkit)
- Form management: Formik
- Routings: React Router
- UI lib: Reactstrap
- Redux-Persist
