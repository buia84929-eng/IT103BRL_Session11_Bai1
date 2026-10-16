1. Phân tích lỗi
- Lỗi: `if (updatedData.isActive)` và `if (updatedData.powerWatts)`
- Nguyên nhân: `false` và `0` là giá trị Falsy nên bị bỏ qua
- Hậu quả: Không tắt được điều hòa và không giảm công suất đèn về 0W
- Cách sửa: Dùng `!== undefined` để kiểm tra dữ liệu

2. Test Cases
-Trường hợp 1: Tắt điều hòa**
  - Đầu vào: `{isActive: false}`
  - Kết quả sai: Điều hòa vẫn bật
  - Kết quả đúng: Điều hòa tắt
-Trường hợp 2: Giảm công suất đèn**
  - Đầu vào: `{powerWatts: 0}`
  - Kết quả sai: Công suất vẫn 20W
  - Kết quả đúng: Công suất về 0W

3. Kết quả sau khi sửa
- Cập nhật được giá trị `false` và `0`
- Không bỏ qua giá trị Falsy
- Trả về `false` nếu không tìm thấy thiết bị
- Chương trình hoạt động đúng yêu cầu