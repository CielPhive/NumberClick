/*
 2021/03/21
 --202103/26
 */
'user strict';


/*配列の並びをランダムで入れ替える*/
function ranAry() {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    len = numbers.length;

    while (len) {
        let i = Math.floor(Math.random() * len);
        let tmp = numbers[--len];
        numbers[len] = numbers[i];
        numbers[i] = tmp;
    }
}
ranAry();

/*1~25のボタンを表示*/
function button_display() {
    for (let j = 1; j <= numbers.length; j++) {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.id = 'btn' + j;
        btn.textContent = numbers[j - 1];
        btn.addEventListener("click", { name: btn, handleEvent: count_check }, false);


        document.body.appendChild(btn);
        if (j % 5 === 0) {
            const br = document.createElement('br');
            document.body.appendChild(br);
        }
    }
}




let current = 1;

/* 1から順にクリックすると黒く塗りつぶす */
function count_check() {
    let btn = this.name;
    let btn_num = btn.textContent;
   
    if (parseInt(btn_num) === current) {
        btn.classList.add('success');
         //next表示
        const next = document.getElementById('start');
        next.value = current+1;
        if (current++ === numbers.length) {
            console.log('Clear!');
            const next = document.getElementById('start');
            next.value = 'Clear!';
        }       
    } else {
        btn.classList.add('miss');
    }
}


