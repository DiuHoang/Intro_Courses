var product1 = {
    image: "./Image/El1.jpg",
    name: "Anh văn giao tiếp cho người hoàn toàn mất gốc",
    price: 249000
}
var product2 = {
    image: "./Image/El2.jpg",
    name: "5 bí quyết “vàng” để dịch câu tiếng Anh chuẩn xác mà bạn nên biết",
    price: 249000
}
var product3 = {
    image: "./Image/mar1.jpg",
    name: "Chiến lược Marketing dịch vụ hoàn hảo",
    price: 249000
}
var product4 = {
    image: "./Image/mar2.png",
    name: "Tuyệt chiêu “hút” khách đỉnh cao từ kỹ năng viết Content Marketing",
    price: 249000
}
var product5 = {
    image: "./Image/skill1.jpg",
    name: "Bí quyết luyện giọng thành công cho người không mạnh dạn",
    price: 249000
}
var product6 = {
    image: "./Image/skill2.jpg",
    name: "Quản trị cảm xúc - Đánh bại các tình huống trong cuộc sống",
    price: 249000
}
var prodArr = [product1, product2, product3, product4, product5, product6];
var listArr = [];
var arrLocal = new Array();
var localInfo = JSON.parse(localStorage.getItem('localInfo'));
function login() {
    document.getElementById('main-login').style.display = "block";
}
function register() {
    document.getElementById('main-register').style.display = "block";
}
function logins() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var signIn = JSON.parse(localStorage.getItem('localInfo'));
    if (user == "" || pass == "" ){
        alert("Vui lòng nhập đầy đủ thông tin");
    }
    else{
    signIn.forEach(function(e, i){
        console.log(user); console.log(e.userName);
        console.log(pass); console.log(e.pass);
        if (user == e.userName && pass== e.pass){
            alert('Đăng nhập thành công');
            document.getElementById('main').style.display = "block";
            displayMain();
            document.getElementById('main-1').style.display = "none";
            document.getElementById('main-login').style.display = "none";
        }
    })}
}
function registers() {
    var user = document.getElementById('username').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var pass = document.getElementById('password').value;
    arrLocal.push({
        userName: user, 
        age: age,
        address: address,
        pass: pass
    });
    console.log(username);
    console.log(pass);
    localStorage.setItem("localInfo",JSON.stringify(arrLocal));
    arrLocal = localInfo;
    if (username == "" || age == "" || address == "" || pass == "") {
        alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    } 
    else {
        alert('Đăng kí thành công');
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
        imgObj.src = prodArr[i].image;
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
                document.getElementById('list').style.display = "block";
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
    imgDetail.src = prodArr[arg].image;
    var nameDetail = document.createElement('h3');
    nameDetail.innerHTML = prodArr[arg].name;
    var priceDetail = document.createElement('p');
    priceDetail.innerHTML = prodArr[arg].price + 'đ';
    var btnBack = document.createElement("button");
    btnBack.innerText = "Trang Chủ";
    btnBack.onclick = function(back) {
        return function() {
            backMain(back);
        }
    }(arg);
    var btnJoin = document.createElement("button");
    btnJoin.innerText = "Tham gia khóa học";
    btnJoin.onclick = function(){
        return function(){
            alert('Bạn đã thêm khóa học vào danh sách');
            var objArr = {image: prodArr[arg].image, name: prodArr[arg].name, price: prodArr[arg].price + 'đ'};
            listArr.push(objArr);
            console.log(listArr);
        }
    }(arg)
    divDetail.className = "div-main-content-list";
    divDetail.appendChild(imgDetail);
    divDetail.appendChild(nameDetail);
    divDetail.appendChild(priceDetail);
    divDetail.appendChild(btnBack);
    divDetail.appendChild(btnJoin);
    mainProduct.className = "div-main-content";
    mainProduct.appendChild(divDetail);
}
function backMain(back) {
    document.getElementById('product').style.display = "none";
    document.getElementById('main-content').style.display = "grid";
}
function list(){
    alert('Danh sách các khóa học');
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('product').style.display = 'none';
    var mainList = document.getElementById("list");
    var line = document.createElement("h2");
    line.innerHTML = "Danh sách các khóa học bạn đã đăng kí tham gia";
    for(var i = 0; i < listArr.length; i++){
        var divList = document.createElement('div');
        var imgList = document.createElement('img');
        imgList.src = listArr[i].image;
        var nameList = document.createElement('h3');
        nameList.innerText = listArr[i].name;
        var priceList = document.createElement('p');
        priceList.innerText = listArr[i].price + 'đ';
        var btnBackList = document.createElement("button");
        btnBackList.innerText = "Trang Chủ";
        btnBackList.onclick = function(back) {
            return function() {
                backMain(back);
                document.getElementById('main-content').style.display = 'grid';
                document.getElementById('list').innerHTML = '';
                displayDetail(back);
            }
        }(i);
        divList.className = "div-main-content-list";
        divList.appendChild(imgList);
        divList.appendChild(nameList);
        divList.appendChild(priceList);
        divList.appendChild(btnBackList);
        mainList.className = "div-main-content";
        mainList.appendChild(line);
        mainList.appendChild(divList);
    }
}
function home(){
    alert('Quay lại trang chủ');
    document.getElementById('main-content').style.display = "grid";
    document.getElementById('list').style.display = "block";
}
