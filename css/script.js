// JavaScript bắt buộc - Thực hành 1

// 1. Hiển thị năm hiện tại vào footer
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// 2. Cập nhật nội dung giới thiệu khi trang load (nếu cần)
document.addEventListener('DOMContentLoaded', function () {
  const introText = document.getElementById('intro-text');
  if (introText && !introText.textContent.trim()) {
    introText.textContent =
      'Sinh viên CNTT, đam mê học hỏi công nghệ mới và phát triển kỹ năng chuyên môn.';
  }
});

// 3. Tương tác khi click avatar (phóng to / thu nhỏ)
const avatar = document.getElementById('avatar');
if (avatar) {
  avatar.addEventListener('click', function () {
    this.classList.toggle('avatar-zoomed');
  });
}
