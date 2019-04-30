$(function(){
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