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

