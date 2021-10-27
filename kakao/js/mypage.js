const item_ips = document.querySelectorAll('.item_ip');
const user_email = document.querySelector('#user_email');
const user_name = document.querySelector('#user_name');
const msg1 = document.querySelectorAll('.msg1');


item_ips[0].onblur = () => {
    if(item_ips[0].value.length != 0){
        checkPassword(user_email.value, item_ips[0].value);
    }
}

item_ips[1].onblur = () => {
    if(item_ips[0].value.length != 0 && item_ips[0].value != item_ips[1].value){
        msg1[1].style.display = 'block';
    }else{
        msg1[1].style.display = 'none';
    }
}

function checkPassword(id,password){
	
	while(msg1[0].hasChildNodes()){
		msg1[0].removeChild(msg1[0].firstChild);
	}
	
	
    if(!/^[a-zA-Z0-9]{10,15}$/.test(password)){
        let msg = document.createTextNode('숫자와 영문자 조합으로 10~15자리를 사용해야 합니다.');
        msg1[0].appendChild(msg);
        msg1[0].style.display = 'block';
        return false;
    }
    
    var checkNumber = password.search(/[0-9]/g);
    var checkEnglish = password.search(/[a-z]/ig);
    
    if(checkNumber <0 || checkEnglish <0){
        let msg = document.createTextNode("숫자와 영문자를 혼용하여야 합니다.");
        msg1[0].appendChild(msg);
        msg1[0].style.display = 'block';
        return false;
    }
    
    if(/(\w)\1\1\1/.test(password)){
        let msg = document.createTextNode('444같은 문자를 4번 이상 사용하실 수 없습니다.');
        msg1[0].appendChild(msg);
        msg1[0].style.display = 'block';
        return false;
    }
    
    if(password.search(id) > -1){
        let msg = document.createTextNode("비밀번호에 아이디가 포함되었습니다.");
        msg1[0].appendChild(msg);
        msg1[0].style.display = 'block';
        return false;
    }
    
    msg1[0].style.display = 'none';
    return true;
    
}