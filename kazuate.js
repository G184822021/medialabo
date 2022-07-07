
let answer = Math.floor(Math.random()*10) + 1;
let isGameEnd = false;
let answerCount = 0;
let guess = document.querySelector('#print');
console.log('答え(デバッグ用) ' + answer);
guess.addEventListener('click',hantei);

function hantei(){
    let print;
    let answerNode;
    let inputNode = document.querySelector('input[name="yoso"]');
    let guess     = parseInt(inputNode.value);
    answerCount++;
    answerNode = document.querySelector('span#answerCount');
    answerNode.textContent = answerCount;
    answerNode = document.querySelector('span#yoso');
    answerNode.textContent = guess;
    if(isGameEnd) {
        print = '答えは ' + answer + ' でした.すでにゲームは終わっています.';
    } else if(guess === answer){
        print = '正解です.おめでとう！';
        isGameEnd = true;
    } else if(answerCount === 3){
        print = '間違い.残念でした.答えは' + answer + 'です.';
        isGameEnd = true;
    } else if(guess < answer){
        print = '間違い.答えはもっと大きいですよ';
    } else if(guess > answer) {
        print = '間違い.答えはもっと小さいですよ';
    } 
    let resultNode = document.querySelector('p#result') ;
    resultNode.textContent = print;
}