
let answer = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用) ' + answer);
let answerCount = 0;

hantei();
hantei();
hantei();
hantei();
hantei();
hantei();
function hantei(){
    let yoso = 4;
    answerCount = answerCount + 1;
    console.log(answerCount + '回目の予想: ' + yoso);
    if(answerCount > 3) {
        console.log('答えは ' + answer + ' でした.すでにゲームは終わっています.');
        return;
    }
    if(yoso === answer){
        console.log('正解です.おめでとう！');
    } else if(answerCount === 3){
        console.log('間違い.残念でした.答えは' + answer + 'です.');
    } else if(yoso < answer){
        console.log('間違い.答えはもっと大きいですよ');
    } else if(yoso > answer) {
        console.log('間違い.答えはもっと小さいですよ');
    } 
}