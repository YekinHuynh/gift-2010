# Thiệp Online 20/10 - Next.js

Dự án Next.js thiết kế thiệp Online dành tặng người yêu ngày 20/10.

## 📁 Cấu trúc thư mục

```
gift/
├── app/
│   ├── globals.css      # Style giao diện & hiệu ứng lật trang
│   ├── layout.tsx       # Cấu hình font & metadata
│   └── page.tsx         # Component thiệp chính
├── content.ts           # NƠI CHỈNH SỬA NỘI DUNG VÀ ĐƯỜNG DẪN ẢNH
├── public/
│   └── photos/          # NƠI ĐẶT CÁC FILE ẢNH
├── package.json
└── README.md
```

## 📝 Hướng dẫn chỉnh sửa nội dung & Thêm ảnh

### 1. Thêm hình ảnh
1. Chép tất cả file ảnh của bạn vào thư mục `public/photos/` (ví dụ: `1.jpg`, `2.jpg`, `3.jpg`...).
2. Mở file `content.ts` và chỉnh sửa thuộc tính `photos`:
   ```typescript
   photos: {
     dedication: "photos/1.jpg",      // Ảnh dành tặng (Trang 2)
     detailsPhoto: "photos/2.jpg",    // Ảnh kỷ niệm (Trang 4)
     momentOverview: "photos/3.jpg",  // Ảnh khoảnh khắc (Trang 5)
     moments: [
       "photos/4.jpg",
       "photos/5.jpg",
       "photos/6.jpg",
       "photos/7.jpg"
     ]
   }
   ```

### 2. Chỉnh sửa chữ và lời chúc
Mở file `content.ts` để thay đổi:
* `her`: Tên người yêu (ví dụ: `"Phương Anh"`)
* `him`: Tên của bạn (ví dụ: `"Phú Tiến"`)
* `letter`: Lời chúc tâm thư 20/10
* `profile`: Thông tin hồ sơ chi tiết
* `moments`: Thông tin các khoảnh khắc (Nơi chốn, Ngày tháng, Tiêu đề, Ghi chú)

---

## 🚀 Chạy thử ở môi trường Local
```bash
npm install
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3000`

---

## 🌐 Upload thành Website (Deploy Vercel)
1. Đẩy dự án này lên **GitHub**.
2. Truy cập [Vercel](https://vercel.com) và chọn **Add New Project**.
3. Import repo GitHub của bạn và nhấn **Deploy**.
4. Sau 1 phút, bạn sẽ nhận được link website công khai để gửi cho người yêu!
