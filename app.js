// Mảng chứa các đường dẫn ảnh nền
const backgrounds = [
  './images/checkout.jpg',
  './images/checkout2.jpg',
  './images/checkout3.jpg',
];
let currentBackgroundIndex = 0;
const header = document.querySelector('.header');

// Preload images to prevent delay during background switch
backgrounds.forEach((src) => {
  const img = new Image();
  img.src = src;
});

// Hàm chuyển đổi ảnh nền
function changeBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  header.style.backgroundImage = 
    `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
     url(${backgrounds[currentBackgroundIndex]})`;
}

// Chuyển đổi ảnh sau mỗi 3 giây
setInterval(changeBackground, 3000);




        const navBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const navClose = document.querySelector("#nav-close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});



document.getElementById('explore-btn').addEventListener('click', function(e) {
  e.preventDefault();
  // Cuộn mượt đến phần story
  document.querySelector('#story').style.display = 'block'; // Hiển thị phần story
  document.querySelector('#story').scrollIntoView({ behavior: 'smooth' });
});


 // Hàm reset về trạng thái ban đầu
 function resetToInitial() {
  // Ẩn toàn bộ các trang câu chuyện
  var storyPages = document.querySelectorAll('.story-content');
  storyPages.forEach(function(page) {
    page.classList.remove('active');
  });

  // Ẩn phần câu chuyện và hiện lại nút "Cùng khám phá"
  document.querySelector('.banner-title').style.display = 'block'; // Hiển thị tiêu đề lại
  document.querySelector('.banner-btn').style.display = 'block';  // Hiển thị nút "Cùng khám phá"
  document.querySelector('.story').style.display = 'none'; // Ẩn phần câu chuyện
}

// Hàm hiển thị các phần của câu chuyện
function showStory(pageId) {
  // Ẩn toàn bộ các trang trước khi hiển thị trang mới
  var storyPages = document.querySelectorAll('.story-content');
  storyPages.forEach(function(page) {
    page.classList.remove('active');
  });

  // Hiển thị trang hiện tại
  document.getElementById(pageId).classList.add('active');
  document.querySelector('.story').style.display = 'block'; // Hiển thị phần câu chuyện
}

// Thêm sự kiện cho nút "Cùng khám phá"
document.getElementById('explore-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
  showStory('page1');
  document.querySelector('.banner-title').style.display = 'none'; // Ẩn tiêu đề chính
  document.querySelector('#explore-btn').style.display = 'none'; // Ẩn nút "Cùng khám phá"
});

// Thêm sự kiện cho nút "Khám phá tiếp"
document.getElementById('continue-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
  showStory('page2');
});

// Thêm sự kiện cho nút "Quay lại"
document.getElementById('back-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
  resetToInitial(); // Reset lại trạng thái ban đầu
});

// Khởi động ban đầu
resetToInitial();


//gỡ bỏ lớp active cho thanh menu khi người dùng nhấp vào nút mở hoặc đóng.
document.getElementById('nav-btn').addEventListener('click', function() {
  document.getElementById('navbar').classList.add('active');
});

document.getElementById('nav-close').addEventListener('click', function() {
  document.getElementById('navbar').classList.remove('active');
}); 
/////////////////////////////


function showPage(pageId) {
  // Ẩn tất cả các trang
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // Hiển thị trang được chọn
  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = 'block';
}

// Hiển thị trang A khi trang web được tải
document.addEventListener("DOMContentLoaded", function() {
  showPage('pageA');
});


//ẩn ban đầu các sản phẩm product
function showMoreProducts() {
  var moreProducts = document.getElementById("more-products");
  var viewMoreBtn = document.getElementById("view-more");

  if (moreProducts.style.display === "none") {
    moreProducts.style.display = "block";
    viewMoreBtn.textContent = "Thu gọn"; // Đổi thành "Thu gọn" sau khi hiển thị toàn bộ sản phẩm
  } else {
    moreProducts.style.display = "none";
    viewMoreBtn.textContent = "Xem thêm"; // Đổi lại thành "Xem thêm"
  }
}

document.getElementById("payment-method").addEventListener("change", function() {
  let bankInfo = document.getElementById("bank-info");
  let momoInfo = document.getElementById("momo-info");

  if (this.value === "bank") {
      bankInfo.style.display = "block";
      momoInfo.style.display = "none";
  } else if (this.value === "momo") {
      momoInfo.style.display = "block";
      bankInfo.style.display = "none";
  } else {
      bankInfo.style.display = "none";
      momoInfo.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("payment-method").addEventListener("change", function() {
      let bankInfo = document.getElementById("bank-info");
      bankInfo.style.display = this.value === "bank" ? "block" : "none";
  });

  document.getElementById("payment-form").addEventListener("submit", function(event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let phone = document.getElementById("phone").value;
      let address = document.getElementById("address").value;
      let paymentMethod = document.getElementById("payment-method").value;

      alert(`Cảm ơn bạn ${name}! Đơn hàng của bạn sẽ sớm được xử lý.\nSố điện thoại: ${phone}\nĐịa chỉ: ${address}\nPhương thức thanh toán: ${paymentMethod}`);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let bankInfo = document.getElementById("bank-info");
  let momoInfo = document.getElementById("momo-info");

  // Ẩn tất cả phương thức thanh toán ban đầu
  bankInfo.style.display = "none";
  momoInfo.style.display = "none";

  document.getElementById("payment-method").addEventListener("change", function() {
    if (this.value === "bank") {
        bankInfo.style.display = "flex";  // Hiển thị theo kiểu flex
        momoInfo.style.display = "none";  // Ẩn momo
    } else if (this.value === "momo") {
        momoInfo.style.display = "flex";  // Hiển thị momo
        bankInfo.style.display = "none";  // Ẩn ngân hàng
    } else {
        bankInfo.style.display = "none";  // Ẩn cả hai khi không chọn gì
        momoInfo.style.display = "none";
    }
  });
});