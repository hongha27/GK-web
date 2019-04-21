function onDangKi(){
	//console.log("xl");
	var divDki = document.getElementById("divdk");
	var divDNhap = document.getElementById("divdn");
	divDki.style.display = "block";
	divDNhap.style.display = "none";
}
function onDangNhap(){
	var divDki = document.getElementById("divdk");
	var divDNhap = document.getElementById("divdn");
	divDki.style.display = "none";
	divDNhap.style.display = "block";
}
function checkdk(){
	var job = document.getElementById("job");
	var pthongbao = document.getElementById("pthongbao");
	var nam = document.getElementById("nam");
	var nu = document.getElementById("nu");
		if(frmDangKi.name.value == "" || 
			frmDangKi.pw.value == "" || frmDangKi.email.value=="" ||frmDangKi.tuoi.value =="") {
			frmDangKi.name.style.border = "solid 2px red";
			frmDangKi.pw.style.border = "solid 2px red";
			frmDangKi.email.style.border = "solid 2px red";
			frmDangKi.tuoi.style.border = "solid 2px red";
			pthongbao.style.display ="block";
			
			
			pthongbao.innerHTML = "Bạn cần nhập giữ liệu cho các trường đầy đủ!" + "</br>";
			return false;
		}
		else if(job.selectedIndex == 0){
				pthongbao.style.display ="block";
			
				pthongbao.innerHTML = " Bạn Phải chọn nghề nghiệp </br>";
			return false;
			}
		else if(!nam.checked && !nu.checked){
			pthongbao.style.display ="block";
			pthongbao.innerHTML = " Bạn Phải chọn giới tính </br>";
			return false;
		
		}else {
				pthongbao.style.display= "none";
				return true;
		}
	}
			// if(frmDangKi.name.value == ""){
			// 		frmDangKi.name.style.border = "solid 2px red";
			// 		pthongbao.style.display ="block";
			// 		pthongbao.innerHTML = "Bạn cần nhập giữ liệu cho các trường đầy đủ!";

			// 	return false;}
			// 	else if(frmDangKi.pw.value== ""){
			// 		frmDangKi.pw.style.border = "solid 2px red";
			// 		pthongbao.style.display ="block";
			// 		pthongbao.innerHTML = "Bạn cần nhập giữ liệu cho các trường đầy đủ!";
			// 	return false;}
			// 	else if(frmDangKi.email.value==""){
			// 		frmDangKi.email.style.border = "solid 2px red";
			// 		pthongbao.style.display ="block";
			// 		pthongbao.innerHTML = "Bạn cần nhập giữ liệu cho các trường đầy đủ!";
			// 	return false;}
			// 	else if(frmDangKi.tuoi.value==""){
			// 		frmDangKi.tuoi.style.border = "solid 2px red";
			// 		pthongbao.style.display ="block";
			// 		pthongbao.innerHTML = "Bạn cần nhập giữ liệu cho các trường đầy đủ!";
			// 	return false;}

			// else{
			// 		pthongbao.style.display= "none";
			// 	return true;
			// }
			// }
function ktrahople(){
	return checkdk();
}

function ktraminmax(){
	var inputtext = document.getElementById(name);
	var field = inputtext.value;

}

