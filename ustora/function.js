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
                                    <button id = "myBtn" href = "#" class="btn btn-outline-secondary bynow btn-block changecolor " data-idpr="${data[i].id}" onclick = "getDataIdpr(${data[i].id})">Mua Ngay</button>
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
       
   // }
   // // biết được sự kiện click, khi click vô sẽ lấy được nội dung của button đó
   // document.body.addEventListener("click", function(){
   //     if(event.target.nodeName == "BUTTON")
   //         // console.log(event.target.textContent);
            // console.log(button.getAttribute("data-idpr"));
   // });    
    // console.log(document.querySelector("data-idpr"));
            
       // ...onclick = "add_to_cart(${data[i].id})"...
       
       function getDataIdpr(x){
           // var bynows= document.querySelectorAll('.bynow');
           // for (var i = 0; i < bynows.length; i++) {
           //     bynows[i].addEventListener('click',function(){
           //         console.log(document.getElementById("myBtn").getAttribute('data-idpr'));
           //       // Todo...
           //     });
               console.log(x);
           // };
        
            // console.log(document.getElementsById("myBtn").getAttribute("data-idpr"));
             
          // console.log(getDataIdpr());
       }

       

       function getProductById(idproduct){
           for (var i = 0; i < data.length; i++) {
              if(data[i].id == idproduct){
                  return data[i];
              }
           }
           return 0;
       }
       // lay data
       function addProduct(product){
           data.push(product);
       }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// phần code của Duy

var idpr = document.getElementById("showsp");
var sp = document.getElementById("cacsp");

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
                            <ins>${data[i].sale} đ</ins> <del>${data[i].gia} đ</del>
                        </div>  `;
                        if(data[i].TT == true){
                       dssp +=` <div class="product-option-shop ">
                            <button id = "myBtn" href = "#" class="btn btn-outline-secondary bynow btn-block changecolor " data-idpr="${data[i].id}" onclick = "getDataIdpr(${data[i].id})">Mua Ngay</button>
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
                  <ins>${data[i].gia} VNĐ</ins> <del>${data[i].sale} VNĐ</del>
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
      if (data[i].TT == true)
      {
        cnt--;
        ans += `
            <li><a href="">${data[i].tenSP}</a></li>
        `
      }
    }
    ans+="</ul>"
    RecentPost.innerHTML=ans;
  }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// phần code của Đạt

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// phần code của Lộc