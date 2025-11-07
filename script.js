// ===== Script cho cửa hàng hoa =====

// Tạo giỏ hàng rỗng
let cart = [];

// Hàm thêm sản phẩm vào giỏ
function addToCart(productName) {
  cart.push(productName);
  alert(productName + " đã được thêm vào giỏ hàng!");
  console.log("Giỏ hàng hiện tại:", cart);
}
