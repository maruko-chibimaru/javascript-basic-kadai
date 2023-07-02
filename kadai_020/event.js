const outputBtn = document.getElementById('btn');
const textText = document.getElementById('text');

outputBtn.addEventListener('click', () =>{

    setTimeout(() =>{
        textText.textContent = 'ボタンをクリックしました';
    }, 2000);
});