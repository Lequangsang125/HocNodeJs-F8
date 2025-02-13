// 🏆 Tóm tắt ngắn gọn
// 1. ----------------------Server-Side Rendering (SSR) - (Nhanh hơn lúc đầu, tốt cho SEO)---------------------------------

// 📌 Dùng khi nào?
// Cần SEO (báo chí, eCommerce, blog).
// Cần tải nhanh ngay từ lần đầu.

// ✅ Ưu điểm:
// 🚀 Nhanh hơn lần tải đầu (HTML sẵn có, trình duyệt hiển thị ngay).
// 🔍 SEO tốt (Google, Facebook đọc được nội dung ngay).

// ❌ Nhược điểm:
// 🔄 Mỗi request tải lại toàn bộ trang (không tối ưu nếu trang có nhiều tương tác).
// 💻 Tải nặng cho server (mỗi request cần xử lý HTML).


// 2.------------------------ Client-Side Rendering (CSR) - (Chậm hơn lúc đầu, UI nhanh hơn)----------------------------------

// 📌 Dùng khi nào
// Không cần SEO (app nội bộ, dashboard, SPA).
// Cần UI động, nhiều tương tác, không muốn reload trang.

// ✅ Ưu điểm:
// 🔄 Gửi ít request hơn (chỉ fetch API khi cần, không load lại cả trang).
// ⚡ UI nhanh hơn sau khi tải xong (chỉ cập nhật phần thay đổi).

// ❌ Nhược điểm:
// 🐢 Lần tải đầu chậm hơn (phải tải JS và chờ React/Vue render).
// 🔍 SEO kém (Google thấy trang trắng nếu không có pre-render).


// 3. ------------------------Kết hợp SSR + CSR (Hydration) - (SEO tốt + UI nhanh)----------------------------------------------

// 📌 Dùng khi nào?
// Cần SEO nhưng vẫn muốn UI nhanh và tương tác tốt.
// Ví dụ: Shopee, Lazada, TikTok Shop (SEO sản phẩm, UI động cho giỏ hàng).

// ✅ Ưu điểm:
// 🔍 SEO tốt với nội dung quan trọng (quảng cáo, sản phẩm).
// ⚡ UI nhanh với phần không cần SEO (bình luận, giỏ hàng, đề xuất).

// ❌ Nhược điểm:
// 🤖 Phức tạp hơn (phải quyết định phần nào SSR, phần nào CSR).
// 🔥 Bổ sung chi tiết cho mô hình "1 nửa SSR + 1 nửa CSR"

// ----------------------------Bạn có thể thêm chi tiết này để rõ hơn:----------------------------------------------------------
// ✔ SEO những phần quan trọng (SSR):
// Tiêu đề, mô tả, hình ảnh sản phẩm, bài viết, quảng cáo.
// Render HTML sẵn từ server để Google có thể index ngay.
// ✔ Dùng CSR cho phần không cần SEO:

// Bình luận, giỏ hàng, đề xuất sản phẩm liên quan, đánh giá.
// Render sau bằng JavaScript để tăng hiệu suất.