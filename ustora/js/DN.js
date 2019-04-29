$(function(){
	$('#LogOut').click(function(event) {
		localStorage.removeItem('user');
		LoadUser(); 
		location.reload();
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
			alert("Bạn chưa nhập tài khoản hoặc mật khẩu.");
		else
		{
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
			alert("Bạn chưa nhập đủ thông tin.");
		else
		{
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