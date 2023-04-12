function tinhTongSoNguyenTo() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let tong = 0;
  
    for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        tong += i;
      }
    }
  
    document.getElementById("result").innerHTML = "Tổng số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + tong;
  }
  
  function isPrime(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
  
    return true;
  }

  function resetForm() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("result").innerHTML = "";
  }