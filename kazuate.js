
let answer = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用) ' + answer);
let answerCount = 0;

hantei();
hantei();
hantei();
hantei();
function hantei(){
    let yoso = 4;
    answerCount = answerCount + 1;
    let print;
    let answerNode = document.querySelector('span#answerCount');
    answerNode.textContent = answerCount;
    answerNode = document.querySelector('span#yoso');
    answerNode.textContent = yoso;
    if(answerCount > 3) {
        print = '答えは ' + answer + ' でした.すでにゲームは終わっています.';
    } else if(yoso === answer){
        print = '正解です.おめでとう！';
    } else if(answerCount === 3){
        print = '間違い.残念でした.答えは' + answer + 'です.';
    } else if(yoso < answer){
        print = '間違い.答えはもっと大きいですよ';
    } else if(yoso > answer) {
        print = '間違い.答えはもっと小さいですよ';
    } 
    let resultNode = document.querySelector('p#result') ;
    // let rp = document.createElement('p');
    // rp.textContent = print;
    // resultNode.insertAdjacentElement('beforeend',rp);
    resultNode.textContent = print;
}