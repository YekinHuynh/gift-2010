export const CFG = {
  her: "Thủy Tiên",
  him: "Phú Tiến",
  date: "20 · 10 · 2026",
  frontSub: "Một tấm thiệp nhỏ, chỉ dành cho em",

  /* 
   * HÌNH ẢNH:
   * Hãy chép các file ảnh của bạn vào thư mục: public/photos/
   * Ví dụ: public/photos/1.jpg -> điền "photos/1.jpg"
   */
  photos: {
    dedication: "photos/9.jpg",      // Ảnh dành tặng (Trang 2)
    detailsPhoto: "photos/3.jpg",    // Ảnh kỷ niệm (Trang 4)
    momentOverview: "photos/1.jpg",  // Ảnh khoảnh khắc (Trang 5)
    moments: [                       // 4 ảnh cho Trang 6 và 7
      "photos/8.jpg",
      "photos/2.jpg",
      "photos/10.jpg",
      "photos/4.jpg"
    ]
  },

  /* DÀNH TẶNG */
  letterKick: "Dành tặng",
  letter: [
    "Chúc em một ngày 20/10 thật nhiều niềm vui, luôn xinh đẹp và hạnh phúc.",
    "Cảm ơn em vì đã luôn ở bên cạnh, mang đến cho anh những điều ấm áp nhất.",
    "Anh hứa sẽ luôn cố gắng mang lại thật nhiều nụ cười cho em mỗi ngày."
  ],
  sign: "Yêu em, Phú Tiến",
  dedicationCaption: "Bức ảnh đẹp nhất của em",

  /* CHI TIẾT VỀ EM (Trang 3) */
  detailTitle: "Chi tiết về em",
  profile: [
    ["Biệt danh", "Chip iu aka Vo Gia"],
    ["Sinh nhật", "18/03/2006"],
    ["Màu yêu thích", "Xanh lá "],
    ["Câu cửa miệng", "thuii, péoo lắmm"],
    ["Siêu năng lực", "Ăn 10 cái bánh bao"],
    ["Điểm yếu", "Ăn ngon là hết giận"]
  ],

  /* TRANG 4: Ảnh kỷ niệm & Ghi chú */
  detailsPhotoKick: "Kỷ niệm",
  detailsPhotoCaption: "Mỗi khoảnh khắc bên em đều là một kỷ niệm vô giá mà anh muốn gìn giữ.",

  /* TRANG 5: Khoảnh khắc & Ghi chú */
  momentOverviewKick: "Khoảnh khắc",
  momentOverviewCaption: "Cùng nhìn lại những chặng đường tuyệt vời mà chúng mình đã đi qua.",

  /* KHOẢNH KHẮC (Trang 6 & 7): [nơi, ngày, tựa, ghi chú] */
 /* KHOẢNH KHẮC (Trang 6 & 7): Chỉ cần điền câu quotes cho từng ảnh */
moments: [
  "Một buổi chiều bình thường, bỗng nhiên mọi chú ý của anh đều dồn về phía em.",
  "Hết chuyện này sang chuyện khác, hóa ra thời gian ở cạnh em chưa bao giờ là đủ.",
  "Biển xanh, cát trắng và có em.",
  "Chỉ cần bên em, ngày bình thường cũng trở thành đặc biệt."
],

  /* BA ĐIỀU ƯỚC */
  wishTitle: "Ba điều ước của em",
  wishIntro: "Hôm nay là ngày của em nên em được ước. Viết ra đây, anh sẽ cam kết cố gắng hết sức.",
  wishPlaceholders: [
    "Một điều mình cùng làm…",
    "Một điều nhỏ xíu cho riêng em…",
    "Một điều em ước cho năm tới…"
  ],
  wishSend: "Gửi cho anh 💚",
  wishOk: "Anh nhận rồi. Anh sẽ cố gắng hết sức!",
  sendTo: "https://www.instagram.com/hnh.phtine", /* Link Zalo/Messenger nếu muốn: e.g. "https://zalo.me/09xxxxxxx" */

  /* TRANG CUỐI */
  question: "Em có đồng ý cùng anh viết tiếp câu chuyện này, thật lâu không?",
  yes: "Em đồng ý 💚",
  no: ["Để em nghĩ đã", "Chắc chưa?", "Nghĩ lại đi mà", "Nút này hỏng rồi", "Không bắt được đâu"],
  answer: "Anh biết mà.",
  answerNote: "Mong là chặng đường phía sau, dù có chuyện gì xảy ra mình vẫn luôn chọn đồng hành cùng nhau.",

  /* MẶT TRÁI MỖI TỜ KHI LẬT (MÁY TÍNH) */
  backs: [
    { quote: "Em không cần hoàn hảo. Em chỉ cần là em." },
    { quote: "Có em, ngày thường cũng thành ngày đặc biệt." },
    { quote: "Anh nhớ em ở những điều nhỏ nhất." },
    { quote: "Mỗi chi tiết về em đều đáng yêu." },
    { quote: "Anh muốn giữ lại tất cả những ngày có em." },
    { quote: "Mỗi khoảnh khắc có em đều đáng nhớ." },
    { quote: "Và sẽ còn thật nhiều khoảnh khắc nữa." },
    { quote: "Em ước đi, anh lo phần còn lại." },
    { quote: "Cảm ơn em vì tất cả." }
  ]
};
