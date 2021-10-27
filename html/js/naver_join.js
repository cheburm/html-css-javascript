const join_id = document.querySelector('#id');
const join_submit = document.querySelector('.join_submit');
const warning_reauireds = document.querySelectorAll('.text_required');
const idCheck_false = document.querySelector('.idCheck_false');

join_id.onblur = () => {
    let test_id = 'junil1234';

    if(join_id.value.length == 0){
        warning_reauireds[0].style.display = 'block';
    }else{
        warning_reauireds[0].style.display = 'none';
        if(join_id.value == test_id){
            idCheck_false.style.display = 'block';
        }else{
            idCheck_false.style.display = 'none';
        }
    }
}

join_submit.onclick = () => {
    alert(join_id.value + ' 계정을 생성하였습니다.')
    print();
}

const long_text = document.getElementsByClassName('long_text');
console.log(long_text[0].value);
console.log(long_text[1].value);
console.log(long_text[2].value);
console.log(long_text[3].value);
long_text[4].style.display = 'none';

const id_text = document.getElementById('id');
id_text.style.display = 'block';
id_text.value = 'junil1234';

const inputs = document.getElementsByTagName('input');
console.log(inputs);

const long_text2 = document.querySelectorAll('.long_text');
const id_text2 = document.querySelector('#id');
const inputs2 = document.querySelectorAll('input');

console.log(long_text2);
console.log(id_text2);
console.log(inputs2);