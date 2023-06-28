let chose = document.querySelector('.number');

chose = Array.from(chose.children);

// for (let i = 0; i < chose.length;i++){
//     chose[i].
// }
// chose.addEventListener('click',function () {
    
// })

document.addEventListener('click', function(eve) {
    if (eve.target.classList.contains('span')) {
    eve.target.classList.toggle('custom-class');
    }
    });


    let sub = document.querySelector('button');

    let span = document.querySelector('.selected');

    let pagetwo = document.querySelector('.holder-two');

    let times = 0;

    sub.addEventListener('click',move)

    function move() {
        text()
        pagetwo.style.position = 'absolute'
    }

    function text() {
        for (let i = 0; i < chose.length;i++){
            if(chose[i].classList.contains('custom-class')){
                times += 1
            }
        }
        span.innerHTML = `You selected ${times} out of 5`;
    }