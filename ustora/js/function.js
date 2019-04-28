
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// phần code của Hà


var idpr = document.getElementById("showsp");
var sp = document.getElementById("cacsp");

        
        function showProduct (index){
            var dssp = "";
            if(data.length != 0){
                for(var i = (index-1)*10; i < index*10; i++ ){
                  // console.log(data[i].TT);
                  // console.log(data[i].category);
                    dssp += `
                        <div class="col-md-3 col-sm-6 product" id - ${data[i].id}>
                            <div class="single-shop-product">
                                <div class="product-upper">
                                    <img style= "width = "src="${data[i].img}" alt="">
                                </div>
                                <h2><a href="">${data[i].tenSP}</a></h2>
                                <div class="product-carousel-price">
                                    <ins>${data[i].sale} đ</ins> <del>${data[i].gia} đ</del>
                                </div>  `;
                                if(data[i].TT == true){
                               dssp +=` <div class="product-option-shop ">
                                    <button id = "myBtn" href = "#" class="btn btn-outline-secondary bynow btn-block changecolor " data-idpr="${data[i].id}" onclick = "addElement('${data[i].tenSP}')">Mua Ngay</button>
                                </div>  ` ;
                            }   
                                 else {
                                     dssp += ` <div class="product-option-shop">
                                    <button href = "#" class="btn btn-outline-secondary disabled btn-block">Hết Hàng</button>
                                </div>  `;
                                 }
                                 dssp +=   `
                            </div>
                        </div>

                    `;
                }
            }
           //console.log(data);
           sp.innerHTML = dssp;
           //console.log(dssp + "hh");
           //alert(dssp);
        }
       
   // chuyển array thành JSON
   //     var jsonProduct = JSON.stringify(data);
   //     var originArray = JSON.parse(jsonProduct);
   //    // console.log(jsonProduct);
   //     for(let originObject of originArray){
   //       console.log(originObject.tenSP);
   //     }


   
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// phần code của Duy

var idpr = document.getElementById("showsp");
var sp = document.getElementById("cacsp");

function MoneyShow(val) {
  return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

function showLike (index, cnt = 4){
    var dssp = "";
    if(data.length != 0){
        for(var i = 0; i < data.length && cnt > 0; i++ ){
          if (data[i].TT  == true){
            cnt--;
            dssp += `
                <div class="col-md-3 col-sm-6 product" style="width: 200px" id - ${data[i].id}>
                    <div class="single-shop-product">
                        <div class="product-upper">
                            <img style= "width = "src="${data[i].img}" alt="">
                        </div>
                        <h2><a href="">${data[i].tenSP}</a></h2>
                        <div class="product-carousel-price">
                            <ins>${MoneyShow(data[i].sale)} đ</ins> <del>${MoneyShow(data[i].gia)} đ</del>
                        </div>  `;
                        if(data[i].TT == true){
                       dssp +=` <div class="product-option-shop ">
                            <button id = "myBtn" href = "#" class="btn btn-outline-secondary bynow btn-block changecolor " data-idpr="${data[i].id}" onclick = "addElement('${data[i].tenSP}')">Mua Ngay</button>
                        </div>  ` ;
                    }   
                         else {
                             dssp += ` <div class="product-option-shop">
                            <button href = "#" class="btn btn-outline-secondary disabled btn-block">Hết Hàng</button>
                        </div>  `;
                         }
                         dssp +=   `
                    </div>
                </div>

            `;
          }
        }
    }
   sp.innerHTML = dssp;
}

function productLeft (index = 0, cnt = 4) {
  var ans = "";
  for(var i = index; i < index+cnt; i++)
  {
    ans += `
            <div class="thubmnail-recent">
              <img src="${data[i].img}" class="recent-thumb" alt="">
              <h2><a href="">${data[i].tenSP}</a></h2>
              <div class="product-sidebar-price">
                  <ins>${MoneyShow(data[i].gia)} VNĐ</ins> <del>${MoneyShow(data[i].sale)} VNĐ</del>
              </div>                             
            </div>
          `;
  }
  ListLeft.innerHTML=ans;
}
function recemtPost (cnt = 4) {
  var ans = "<ul>";
  for(var i = 0; i < data.length && cnt > 0; i++)
  {
    cnt--;
    ans += `
        <li><a href="">${data[i].tenSP}</a></li>
    `
  }
  ans+="</ul>"
  RecentPost.innerHTML=ans;
}

function showBill (user = "duynm619") {
  var current = Bills.find(function (bill) {return bill.user == user && bill.deal == false;});
  flag = false;
  for (var i = +flag; i < localStorage.length; i++)
      if (localStorage[localStorage.key(i)] != -1){ flag = true; break;}
  if (typeof current === "undefined" || (!flag && localStorage.length != 0)){
    document.getElementById("NumProduct").innerHTML = +flag;
    document.getElementById("TotalMoney").innerHTML = +flag+" VNĐ";
    CartShow.innerHTML = `<tr><td colspan = 6><h2>Bạn chưa thêm gì vào giỏ hàng cả.<br><a href="shop.html">Mua hàng nào</a><br><a href="#">Xem lịch sử giao dịch</a></h2></td></tr>`;
    return;
  }
  var ans = "";
  var Total = 0;
  if (localStorage.length == 0)
    for(var i = 0; i < current.products.length; i++)
      if (localStorage.getItem(current.products[i]) === null)
        localStorage.setItem(current.products[i],current.number[i]);

  for(var i = 0; i < localStorage.length; i++)
  {
    if(localStorage[localStorage.key(i)] == -1) continue;
    var val = data.find(function (book) {return book.tenSP == localStorage.key(i)});
    Total+=Math.min(val.sale,val.gia)*localStorage[localStorage.key(i)];
    ans+=`
            <tr class="cart_item">
              <td class="product-remove">
                  <input type="button" title="Remove this item" value="X" onclick='delElement("${val.tenSP}")'>
              </td>
              <td class="product-thumbnail">
                  <a href="#"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="${val.img}"></a>
              </td>

              <td class="product-name" width="30%" id - ${val.tenSP}.replace(' ','')>
                  <a href="#">${val.tenSP}</a> 
              </td>

              <td class="product-price">
                  <span class="amount">${MoneyShow(Math.min(val.sale,val.gia))} VNĐ</span> 
              </td>

              <td class="product-quantity">
                  <div class="quantity buttons_added">
                      <input type="button" class="minus" value="-" onclick='minusNumberElement("${val.tenSP}")'>
                      <input type="number" size="4" class="input-text qty text" title="Số lượng sản phẩm" value="${localStorage[localStorage.key(i)]}" min="0" step="1">
                      <input type="button" class="plus" value="+" onclick='plusNumberElement("${val.tenSP}")'>
                  </div>
              </td>

              <td class="product-subtotal">
                  <span class="amount">${MoneyShow(localStorage[localStorage.key(i)]*Math.min(val.sale,val.gia))} VND</span> 
              </td>
            </tr>
         `;
  }

  // console.log(MoneyShow(Total));
  CartShow.innerHTML = ans;
  STotal.innerHTML = MoneyShow(Total)+" VNĐ";
  document.getElementById("TotalMoney").innerHTML = MoneyShow(Total)+" VNĐ";
  document.getElementById("NumProduct").innerHTML = Object.values(localStorage).reduce((a,b) => (-~+a?+a:-~+a)+(-~+b?+b:-~+b));
}

function plusNumberElement (val, user = "duynm619") {
  // var val = "5 Centimet Trên giây", user = "duynm619";
  var currentBill = Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false });
  var currentProduct =  Bills[currentBill].products.findIndex(function (valid) { return valid == val; });
  localStorage.setItem(val, Math.max(+localStorage.getItem(val)+1,1));
  Bills[currentBill].number[currentProduct] = localStorage.getItem(val);
  // Bills[Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false })].number[Bills[Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false })].products.findIndex(function (valid) { return valid == val; })]++;
  showBill(user);
}

function minusNumberElement (val, user = "duynm619") {
  var currentBill = Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false });
  var currentProduct =  Bills[currentBill].products.findIndex(function (valid) { return valid == val; });
  localStorage.setItem(val, Math.max(+localStorage.getItem(val)-1,1));
  Bills[currentBill].number[currentProduct] = Math.max(Bills[currentBill].number[currentProduct]-1,0);
  // Bills[currentBill].number[currentProduct] = Math.max(Bills[currentBill].number[currentProduct]-1, 0);
  // Bills[Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false })].number[Bills[Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false })].products.findIndex(function (valid) { return valid == val; })] = Math.max(Bills[Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false })].number[Bills[Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false })].products.findIndex(function (valid) { return valid == val; })]-1, 0);
  showBill(user);
}

function delElement (val, user = "duynm619") {
  var currentBill = Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false });
  var currentProduct =  Bills[currentBill].products.findIndex(function (valid) { return valid == val; });
  localStorage.setItem(val, -1);
  Bills[currentBill].number[currentProduct] = -1;
  Bills[currentBill].products.splice(currentProduct, 1);
  // localStorage.setItem(val,-1);
  // localStorage.removeItem(val);

  // console.log(val,currentBill,currentProduct);
  showBill(user);
}

function addElement (val, user = "duynm619") {
  var currentBill = Bills.findIndex(function (valid) { return valid.user == user && valid.deal == false });
  var currentProduct =  Bills[currentBill].products.findIndex(function (valid) { return valid == val; });
  if (currentProduct != -1)
    plusNumberElement(val,user);
  else
  {
    localStorage.setItem(val, 1);
    Bills[currentBill].products.push(val);
    Bills[currentBill].number.push(1);
  }
  showBill(user);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// phần code của Đạt

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// phần code của Lộc
