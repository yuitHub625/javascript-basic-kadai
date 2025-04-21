// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    // text要素のinnerTextを更新する
    text.innerText = 'ボタンをクリックしました。';
});