/* -------------------------------------------- File code của Duy -------------------------------------------- */
/* Phần JQuery - Minh Duy */

$(function(){
	$('#ToTop').click(function(event) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
	$('#BtnDKmail').click(function(event) {
		if ($('#DKMail').val() == "" || /.+@.+\.com/.exec($('#DKMail').val()) == null)
		{
			event.preventDefault();
			alert('Mail không hợp lệ (vd: xyz@gmail.com)');
		}
		else
		{
			event.preventDefault();
			alert('Bạn đã đăng ký thành công.\nNhững tin tức mới nhất của chúng tôi sẽ luôn được gửi đến '+$('#DKMail').val());
			$('#DKMail').val("");
		}
	});
	$('#UpdateShip').click(function(event) {
		localStorage.setItem('Ship', JSON.stringify([{"country":$('#calc_shipping_country').val()},{"state":$('#calc_shipping_state').val()},{"postcode":$('#calc_shipping_postcode').val()}]));
	});
	$('#calc_shipping_country').change(function(event) {
		localStorage.setItem('Ship', JSON.stringify([{"country":$('#calc_shipping_country').val()},{"state":$('#calc_shipping_state').val()},{"postcode":$('#calc_shipping_postcode').val()}]));
		showBill(localStorage.user);
	});
	$('#LogOut').click(function(event) {
		localStorage.removeItem('user');
		LoadUser(); 
		location.reload();
		if (document.URL.substring(document.URL.lastIndexOf('?')).toString().search('myaccount.html') != -1)
			document.location = "index.html";
	});
	$('.QPw').click(function(event) {
		var mail = prompt("Hãy nhập mail đăng ký của bạn, chúng tôi sẽ gửi link khôi phục mật khẩu cho bạn", "xyz@gmail.com");
		if (mail != null) {
		    alert('Thông tin khôi phục đã được gửi đến: ' + mail);
		}
	});
	$('.DK').click(function(event) {
		$('#dangKy').css('display', 'block');
		$('#dangNhap').css('display', 'none');

	});
	$('.DN').click(function(event) {
		$('#dangKy').css('display', 'none');
		$('#dangNhap').css('display', 'block');
	});
	$('.DNn').click(function(event) {
		if ($('#DN_Name').val() == "" || $('#DN_Pw').val() == "")
		{
			alert("Bạn chưa nhập tài khoản hoặc mật khẩu.");
			if ($('#DN_Name').val() == "")
				$('#DN_Name').css('border', 'solid 2px red');
			else
				$('#DN_Name').css('border', '0');

			if ($('#DN_Pw').val() == "")
				$('#DN_Pw').css('border', 'solid 2px red');
			else
				$('#DN_Pw').css('border', '0');
		}
		else
		{
			$('#DN_Name').css('border', '0');
			$('#DN_Pw').css('border', '0');
			var index = accounts.findIndex(function (valid) {return valid["username"] == $('#DN_Name').val();});
			if (index == -1)
				alert('Tài khoản không tồn tại.');
			else
			{
				if (accounts[index]["password"] != $('#DN_Pw').val())
					alert('Mật khẩu không chính xác.')
				else
				{
					alert('Đăng nhập thành công.')
					document.getElementById('UserLog').innerHTML = `<a href="#"  class="btn-lg" data-toggle="modal" data-target="#myModal"><i class="fa fa-user"></i> Đăng xuất(`+$('#DN_Name').val()+")</a>";
					localStorage.setItem('user',  $('#DN_Name').val());
					location.reload();
				}
			}
		}
	});
	$('.DKk').click(function(event) {
		if ($('#DK_Name').val() == "" || $('#DK_Pw').val() == "" || $('#DK_RPw').val() == "" || $('#DK_Email').val() == "" || $('#DK_Mobile').val() == "" || $('#DK_Birth').val() == "" || $('[type="radio"]:checked').val() == undefined)
		{
			alert("Bạn chưa nhập đủ thông tin.");
			if ($('#DK_Name').val() == "")
				$('#DK_Name').css('border', 'solid 2px red');
			else
				$('#DK_Name').css('border', '0');

			if ($('#DK_Pw').val() == "")
				$('#DK_Pw').css('border', 'solid 2px red');
			else
				$('#DK_Pw').css('border', '0');


			if ($('#DK_RPw').val() == "")
				$('#DK_RPw').css('border', 'solid 2px red');
			else
				$('#DK_RPw').css('border', '0');


			if ($('#DK_Email').val() == "")
				$('#DK_Email').css('border', 'solid 2px red');
			else
				$('#DK_Email').css('border', '0');


			if ($('#DK_Mobile').val() == "")
				$('#DK_Mobile').css('border', 'solid 2px red');
			else
				$('#DK_Mobile').css('border', '0');


			if ($('#DK_Birth').val() == "")
				$('#DK_Birth').css('border', 'solid 2px red');
			else
				$('#DK_Birth').css('border', '0');

		}
		else
		{
			$('#DK_Name').css('border', '0');
			$('#DK_Pw').css('border', '0');
			$('#DK_RPw').css('border', '0');
			$('#DK_Email').css('border', '0');
			$('#DK_Mobile').css('border', '0');
			$('#DK_Birth').css('border', '0');
			if (/(\d[a-zA-Z])|([a-zA-Z]\d)/.exec($('#DK_Pw').val()) == null || $('#DK_Pw').val().length < 8)
			{
				alert('Mật khẩu tối đa phải có 8 ký tự gồm số và chữ.');
				return;
			}
			if($('#DK_Pw').val() != $('#DK_RPw').val())
			{
				alert('Mật khẩu nhập lại không đúng.');
				return;
			}
			if(/.+@.+\.com/.exec($('#DK_Email').val()) == null)
			{
				alert('Email không hợp lệ.\n (vd: xyz@gmail.com)');
				return;
			}
			if(/0[\d]{9,13}/.exec($('#DK_Mobile').val()) == null || $('#DK_Mobile').val().length > 12)
			{
				alert('Số điện thoại không hợp lệ.');
				return;
			}
			alert('Đăng ký tài khoản thành công.');
		}
	});
});

/* Normal - Minh Duy*/

function MyProfileType () {
	var val = "", page = new URLSearchParams(window.location.search).get('tab');
	var CurrentUser = accounts.find(function (valid) { return valid.username == localStorage.user; });
	var CurrentBills = [];
	var TotalMoney = 0;
	// console.log(CurrentUser);
	for(var i = 0; i < Bills.length; i++)
		if (Bills[i].user == CurrentUser.username)
			CurrentBills.push(i);
	// console.log(CurrentBills)
	if (page == 'OldBills')
	{
		var ans = "";
		ans+=`<div id="left">
            <h1>Quản lý tài khoản</h1>
            <div>
                <ul>
                    <li class="accType"><a href="myaccount.html?tab=MyProfile">Thông tin tài khoản</a></li>
                    <li class="accType SelectedLi"><a href="myaccount.html?tab=OldBills">Lịch sử mua hàng</a></li>
                </ul>
            </div>
        </div>
        
        <div id="HistoryBills">
            <div id="right">
                <form class="ProHeight">
                    <h1>Lịch sử mua hàng</h1>
                    <hr class="bold"><br>`;
                    
        for(var i = 0; i < CurrentBills.length; i++)
        {
        	ans+=`<div>
                        <div class="AutoWidth container">
                            <div class="row">
                                <div class="LabelBillCode col-md-2">Mã đơn hàng: </div>
                                <div class="BillCode col-md-2">${Bills[i].id}</div>
                                <div class="col-md-3"></div>
                                <div class="col-md-2">Trạng thái: </div>
                                <div class="BillCode col-md-2">${Bills[i].deal?'Đã giao hàng':'Đang giao hàng'}</div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="TextAlign BoderLeft BoderTop Border col-md-2">Hình ảnh</div>
                                <div style="" class="BoderTop Border col-md-4">Tên sản phẩm</div>
                                <div class="width12 BoderTop Border col-md-2">số lượng</div>
                                <div class="width18 BoderTop Border col-md-2">đơn giá</div>
                                <div class="width20 BoderTop Border col-md-2">Tổng</div>
                            </div>`;
                  	for(var j = 0; j < Bills[i].products.length; j++)
                  	{
                  		console.log(Bills[i].products[j]+1)
                  		ans += `<div class="row">
                                <a href="single-product.html?id=${Bills[i].products[j]}"><div class="TextAlign OldBill BoderLeft Border col-md-2">
                                    <img src="${data[+Bills[i].products[j]-1].img}" alt="">
                                </div></a>
                                <a href="#"><div class="OldBill Border col-md-4">${data[+Bills[i].products[j]-1].tenSP}</div></a>
                                <div class="width12 OldBill Border col-md-2">${Bills[i].number[j]}</div>
                                <div class="width18 OldBill Border col-md-2">${MoneyShow(data[+Bills[i].products[j]-1].gia)}</div>
                                <div class="width20 OldBill Border col-md-2">${MoneyShow(data[+Bills[i].products[j]-1].gia*Bills[i].number[j])}</div>
                            </div>`;
                        TotalMoney += data[+Bills[i].products[j]-1].gia*Bills[i].number[j];
                  	}
                    ans+=`
                            <div class="row">
                                <div class="BoderLeft Border col-md-6">
                                    Đã áp dụng mã giảm giá ${Bills[i].coupon.slice(-1)=='%'?Bills[i].coupon:MoneyShow(Bills[i].coupon)}
                                </div>
                                <div class="Border col-md-6">
                                    Tổng đơn hàng: ${MoneyShow(Bills[i].coupon.slice(-1)=='%'?TotalMoney = (TotalMoney/100) * (+Bills[i].coupon.slice(0,-1)):TotalMoney-+Bills[i].coupon)}
                                </div>
                            </div>
                        </div>
                        <br><hr class="half"><br>
                    </div>`;
        }            
        

        ans+=   `</form>
            </div>
        </div>`;
        MyAccountPage.innerHTML = ans;
	}

	else
		MyAccountPage.innerHTML = `<div id="left">
            <h1>Quản lý tài khoản</h1>
            <div>
                <ul>
                    <li class="accType SelectedLi"><a href="myaccount.html?tab=MyProfile">Thông tin tài khoản</a></li>
                    <li class="accType"><a href="myaccount.html?tab=OldBills">Lịch sử mua hàng</a></li>
                </ul>
            </div>
        </div>
        <div id="ProfileInfo">
        	<div id="right">
        		<form class="height650">
        			<h1>Thông tin tài khoản</h1>
        			<hr class="bold"><br>
                    <div class="avataProfileForm">
                        <img src="${CurrentUser.img}" class="imgAva" alt="">
                        <br>
                        <a href="#" class="UndLine">Thay đổi ảnh đại diện.</a>
                    </div>
                    
                    <div class="ProfileInfo container">
                        <div class="height50 row">
                            <div class="col-md-3">Họ và tên:</div> 
                            <div class="col-md-3">
                                <input type="text" size="45" placeholder="Nhập tên mới" class="Profile" value="${CurrentUser.name}">
                            </div>
                        </div> 
                        <div class="height50 row">
                            <div class="col-md-3">Số điện thoại:</div> 
                            <div class="col-md-3">
                                <input type="text" size="45" placeholder="Nhập số điện thoại mới" class="Profile" value="${CurrentUser.phone}">
                            </div>
                        </div> 
                        <div class="height50 row">
                            <div class="col-md-3">Email:</div> 
                            <div class="col-md-3">
                                <input type="text" size="45" placeholder="Nhập email mới" class="Profile" value="${CurrentUser.email}">
                            </div>
                        </div> 
                        <div class="height50 row"> 
                            <div class="col-md-3">Ngày sinh:</div> 
                            <div class="col-md-3">
                                <input type="date" class="Profile width350" value="${CurrentUser.born.split('/').reverse().join("-")}">
                            </div>
                        </div> 
                        <div class="height50 row">
                            <div class="col-md-3">Giới tính:</div> 
                            <div class="col-md-2">
                                <input type="radio" name='gender' ${CurrentUser.gender=='Nam'?'checked':''}> Nam
                            </div>
                            <div class="col-md-2">
                                <input type="radio" name='gender' ${CurrentUser.gender=='Nữ'?'checked':''}> Nữ 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 width570">
                                <form method="post" action="#" class="shipping_calculator">
                                    <h2><a class="UndLine shipping-calculator-button" data-toggle="collapse" href="#calcalute-shipping-wrap" aria-expanded="false" aria-controls="calcalute-shipping-wrap">Thay đổi mật khẩu</a></h2>

                                    <section id="calcalute-shipping-wrap" class="shipping-calculator-form collapse">
                                    <div class="height50 row">
                                        <div class="col-md-4">Mật khẩu hiện tại:</div> 
                                        <div class="col-md-8">
                                            <input type="password" placeholder="Nhập mật khẩu hiệu tại" size="45" class="Profile">
                                        </div>
                                    </div>
                                    <div class="height50 row">
                                        <div class="col-md-4">Mật khẩu mới:</div> 
                                        <div class="col-md-8">
                                            <input type="password" placeholder="Nhập mật khẩu mới" size="45" class="Profile">
                                        </div>
                                    </div>
                                    <div class="height50 row"> 
                                        <div class="col-md-4">Nhập lại mật khẩu:</div> 
                                        <div class="col-md-8">
                                            <input type="password" placeholder="Nhập lại mật khẩu mới" size="45" class="Profile">
                                        </div>
                                    </div>
                                    </section>
                                </form>
                            </div>
                            <div class="LineBtnUpdate height50 row">
                                <div class="col-md-5"></div>
                                <div style="" class="col-md-2">
                                    <input type="button" class="BtnUpdate" value="Cập nhật">
                                </div>
                                <div class="col-md-5"></div>
                            </div> 
                        </div>
                    </div>
                    
        		</form>
        	</div>
        </div>`;
}