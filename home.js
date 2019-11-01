var usernameLogin = "Diu";
var passwordLogin = "12345";
var prod1 = {
    img: "./Image/El1.jpg",
    name: "Anh văn giao tiếp cho người hoàn toàn mất gốc",
    price: 249000
}
var prod2 = {
    img: "./Image/El2.jpg",
    name: "5 bí quyết “vàng” để dịch câu tiếng Anh chuẩn xác mà bạn nên biết",
    price: 249000
}
var prod3 = {
    img: "./Image/mar1.jpg",
    name: "Chiến lược Marketing dịch vụ hoàn hảo",
    price: 249000
}
var prod4 = {
    img: "./Image/mar2.png",
    name: "Tuyệt chiêu “hút” khách đỉnh cao từ kỹ năng viết Content Marketing",
    price: 249000
}
var prod5 = {
    img: "./Image/skill1.jpg",
    name: "Bí quyết luyện giọng thành công cho người không mạnh dạn",
    price: 249000
}
var prod6 = {
    img: "./Image/skill2.jpg",
    name: "Quản trị cảm xúc - Đánh bại các tình huống trong cuộc sống",
    price: 249000
}
var prodArr = [prod1, prod2, prod3, prod4, prod5, prod6];
console.log(prodArr);
var registerArr = [];

function login() {
    document.getElementById('main-login').style.display = "block";
    logins();
}
function register() {
    document.getElementById('main-register').style.display = "block";
    registers();
}

function logins() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
        if (user == usernameLogin && pass == passwordLogin) {
            alert('thanh cong');
            document.getElementById('main').style.display = "block";
            displayMain();
            document.getElementById('main-1').style.display = "none";
            document.getElementById('main-login').style.display = "none";
        } 
    }
function registers() {
    var user = document.getElementById('username').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var pass = document.getElementById('password').value;
    // var obj = {
    //     user: user,
    //     age: age,
    //     address: address,
    //     pass: pass
    // };
    // registerArr.push(obj);
    localStorage.setItem('username', user.value);
    localStorage.setItem('age', age.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('password', pass.value);
    console.log(registerArr);
    if (user == '' || age == '' || address == '' || pass == '') {
        return false;
    } else {
        console.log(registerArr);
        document.getElementById('main').style.display = "block";
        displayMain();
        document.getElementById('main-1').style.display = "none";
        document.getElementById('main-register').style.display = "none";
        return true;
    }
}
function displayMain() {
    var main = document.getElementById('main-content');
    for (var i = 0; i < prodArr.length; i++) {
        var divMain = document.createElement('div');
        var imgObj = document.createElement('img');
        imgObj.src = prodArr[i].img;
        var nameObj = document.createElement('h3');
        nameObj.innerText = prodArr[i].name;
        var priceObj = document.createElement('p');
        priceObj.innerText = prodArr[i].price + 'đ';
        var btnDetail = document.createElement("button");
        btnDetail.innerText = "Chi tiết";
        btnDetail.onclick = function(arg) {
            return function() {
                displayDetail(arg);
                document.getElementById('main-content').style.display = "none";
            }
        }(i);
        divMain.className = "div-main-content-list";
        divMain.appendChild(imgObj);
        divMain.appendChild(nameObj);
        divMain.appendChild(priceObj);
        divMain.appendChild(btnDetail);
        main.className = "div-main-content";
        main.appendChild(divMain);
    }
}

function displayDetail(arg) {

    var mainProduct = document.getElementById('product');
    var divDetail = document.createElement('div');
    var imgDetail = document.createElement('img');
    imgDetail.src = prodArr[arg].img;
    var nameDetail = document.createElement('h3');
    nameDetail.innerText = prodArr[arg].name;
    var priceDetail = document.createElement('p');
    priceDetail.innerText = prodArr[arg].price + 'đ';
    var btnBack = document.createElement("button");
    btnBack.innerText = "Trang Chủ";
    btnBack.onclick = function(back) {
        return function() {
            backMain(back);
        }
    }(arg);
    var btnRegister = document.createElement("button");
    btnRegister.innerText = "Tham gia khóa học";

    divDetail.className = "div-main-content-list";
    divDetail.appendChild(imgDetail);
    divDetail.appendChild(nameDetail);
    divDetail.appendChild(priceDetail);
    divDetail.appendChild(btnBack);
    divDetail.appendChild(btnRegister);
    mainProduct.className = "div-main-content";
    mainProduct.appendChild(divDetail);
}

function backMain(back) {
    document.getElementById('product').style.display = "none";
    document.getElementById('main-content').style.display = "grid";
}

