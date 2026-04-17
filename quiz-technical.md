# Technical Quiz — Portfolio Projects

**Hướng dẫn:** 15 câu trắc nghiệm | Đánh dấu [x] vào đáp án bạn chọn | Gửi lại file để chấm điểm

---

## Phần 1: Database Design

### Q1. MOS — quản lý tủ lạnh Coca-Cola tại điểm bán. Bạn cần ánh xạ: tủ lạnh → điểm bán → nhân sự phụ trách. Cấu trúc relationship nào phù hợp nhất?

- [ ] A) Fridge 1—N Store 1—N Staff
- [x] B) Fridge N—1 Store 1—N StaffStore (junction table)
- [ ] C) Fridge 1—1 Store N—M Staff
- [ ] D) Fridge N—1 Store M—N Staff (qua junction table)

---

### Q2. FIELD CHECK cho phép admin tự định nghĩa tiêu chí chấm scoring động (dynamic attributes) mà không cần đổi code. Pattern database nào bạn dùng?

- [ ] A) Thêm column mới mỗi khi có attribute mới
- [x] B) EAV (Entity-Attribute-Value) pattern
- [ ] C) JSON column lưu attributes
- [ ] D) Tạo bảng riêng cho mỗi loại attribute

---

### Q3. SP FESTIVE 2022 xử lý đồng thời: nhân sự, khách hàng, giao dịch, tồn kho quà tặng. Khi khách đổi quà, cần đảm bảo cả 3 thao tác (verify hóa đơn, trừ tồn kho, ghi giao dịch) đều thành công hoặc đều thất bại. Database mechanism nào giải quyết?

- [ ] A) Stored Procedure
- [x] B) Database Transaction (ACID)
- [ ] C) Database Trigger
- [ ] D) Event Queue

---

### Q4. SITE CHECK — hệ thống làm sạch Master Data cho hàng nghìn cửa hàng. Khi đối soát dữ liệu Mobile gửi về, bạn phát hiện trùng lặp. Strategy nào hiệu quả nhất để detect duplicate?

- [ ] A) SELECT DISTINCT mỗi lần query
- [x] B) Unique constraint + UPSERT (INSERT ... ON DUPLICATE KEY UPDATE)
- [ ] C) Xóa hết rồi INSERT lại
- [ ] D) Check bằng code application layer trước khi INSERT

---

### Q5. FMS phục vụ nhiều chiến dịch cùng lúc (Sabeco, Sting, Rockstar...). Cách thiết kế DB nào cho phép tái sử dụng hệ thống cho nhiều chiến dịch mà không conflict data?

- [ ] A) Tạo database riêng cho mỗi chiến dịch
- [ ] B) Tạo schema riêng cho mỗi chiến dịch trong cùng DB
- [x] C) Dùng column campaign_id làm tenant discriminator trong các bảng chung
- [ ] D) Hardcode logic riêng cho từng chiến dịch

---

## Phần 2: Backend Architecture

### Q6. Bonito (Social Listening) cần hiển thị reactions từ internet theo thời gian thực. Architecture nào phù hợp nhất cho data pipeline Backend → Frontend?

- [ ] A) Polling: Frontend gọi API mỗi 5 giây
- [ ] B) WebSocket: Server push data khi có reaction mới
- [x] C) Server-Sent Events (SSE): One-way real-time stream
- [ ] D) Cron job ghi vào DB, Frontend đọc periodic

---

### Q7. SP FESTIVE 2022 dùng GraphQL thay vì REST. Lợi ích chính trong bối cảnh Mobile App quản lý sự kiện?

- [ ] A) GraphQL nhanh hơn REST
- [x] B) Client query chính xác data cần → tránh over-fetching trên mobile
- [ ] C) GraphQL dễ cache hơn REST
- [ ] D) GraphQL thay thế hoàn toàn database

---

### Q8. OMO đồng bộ dữ liệu online-offline. Khi conflict — tồn kho online ghi 50 nhưng offline chỉ còn 30 — bạn xử lý theo strategy nào?

- [ ] A) Luôn ưu tiên data online
- [ ] B) Luôn ưu tiên data offline
- [ ] C) Last-write-wins dựa trên timestamp
- [x] D) Queue events, log conflict, cho admin review và resolve

---

### Q9. FMS — API phục vụ Mobile cho PG/PB chấm công và báo cáo hiện trường. Khi nhân viên ở khu vực mạng yếu, kỹ thuật nào đảm bảo không mất dữ liệu?

- [ ] A) Bắt nhân viên tìm wifi
- [x] B) Offline-first: lưu local → sync khi có mạng (local DB + retry queue)
- [ ] C) Giảm kích thước payload xuống tối thiểu
- [ ] D) Tăng timeout của API

---

### Q10. Bạn chuyển từ PHP/Yii2 sang NestJS. Ưu điểm chính của NestJS cho loại hệ thống bạn xây dựng?

- [ ] A) NestJS dùng TypeScript → type safety + better IDE support
- [ ] B) NestJS có modular architecture, DI container, built-in GraphQL support
- [ ] C) NestJS chạy nhanh hơn PHP
- [x] D) Cả A và B

---

## Phần 3: System Design

### Q11. Bonito — Web gửi nội dung cho AI phân tích sentiment, AI trả kết quả. Communication pattern nào phù hợp?

- [ ] A) Synchronous HTTP: Web gọi AI API và đợi response
- [x] B) Message Queue: Web publish, AI consume → async
- [ ] C) Share chung 1 database để trao đổi data
- [ ] D) AI polling Web để lấy data mới

---

### Q12. OMO nhận webhook từ Shopify báo "đơn hàng mới". Vấn đề gì có thể xảy ra nếu không có mechanism protection?

- [ ] A) Duplicate webhook → xử lý 2 lần cùng 1 đơn hàng
- [ ] B) Webhook đến quá nhanh → server overload
- [ ] C) Webhook payload có thể bị alter
- [x] D) Cả A và B

---

### Q13. SP FESTIVE 2022 có "khung giờ cao điểm" — hàng nghìn giao dịch đổi quà cùng lúc. Database optimization nào quan trọng nhất?

- [ ] A) Thêm index cho các column thường query
- [ ] B) Dùng database connection pooling
- [ ] C) Read replica cho reporting queries
- [x] D) Cả A, B và C

---

### Q14. FIELD CHECK có dynamic attributes. Mobile cần load form đánh giá cho chiến dịch cụ thể. API response structure nào linh hoạt nhất?

- [ ] A) Fixed response với tất cả field → frontend ẩn/hiện
- [x] B) Dynamic response: trả về schema (field definitions + types) + values
- [ ] C) Return raw HTML form string
- [ ] D) Hardcode từng form trong Mobile app

---

### Q15. MOS — nhân viên chụp ảnh tủ lạnh upload. Yêu cầu "chống gian lận": ảnh phải thật, đúng địa điểm, đúng thời gian. Technical solution nào khả thi?

- [ ] A) Watermark timestamp + GPS location vào ảnh khi chụp
- [ ] B) Check EXIF data của ảnh (GPS, timestamp)
- [ ] C) Upload progressive — gửi metadata trước, ảnh sau
- [x] D) Cả A và B

---

**Đáp án của bạn:** Đánh dấu [x] rồi gửi lại file này để chấm điểm!
