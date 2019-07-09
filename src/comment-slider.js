export function commentSlider() {
    const btn_up = document.querySelector('.btn-up');
    const btn_down = document.querySelector('.btn-down');

    let step = 0;
    const marginBottom = 60;
    const shadowBox = 10;

    const comment = document.querySelectorAll('.comment');
    let stepHeightDown = comment[step + 1].offsetHeight + marginBottom;
    let stepHeightUp = comment[step].offsetHeight + marginBottom;

    let commentHeight = [];
    comment.forEach((item) => {
        commentHeight.push(item.offsetHeight);
    })





    const containerComment = document.querySelector('.comment-container');

    const slider = document.querySelector('.slider');

    slider.style.height = commentHeight[step] + commentHeight[step + 1] + marginBottom + shadowBox + 'px';

    let timerBtnUp = 0;
    let timerBtnDown = 0;

    btn_up.addEventListener('click', () => {

        if (timerBtnUp === 0) {
            step--;
            slider.style.height = commentHeight[step] + commentHeight[step + 1] + marginBottom + shadowBox + 'px';

            let computedStyle = getComputedStyle(containerComment);

            containerComment.style.top = (parseInt(computedStyle.top) + stepHeightUp) + 'px';
            timerBtnUp = setTimeout(() => {
                test();
                timerBtnUp = 0;

            }, 350);

        }
    })

    btn_down.addEventListener('click', () => {

        if (timerBtnDown === 0) {
            step++;
            slider.style.height = commentHeight[step] + commentHeight[step + 1] + marginBottom + shadowBox + 'px';

            let computedStyle = getComputedStyle(containerComment);

            containerComment.style.top = (parseInt(computedStyle.top) - stepHeightDown) + 'px';
            timerBtnDown = setTimeout(() => {
                test();
                timerBtnDown = 0;
            }, 350);
        }
    })
    const test = () => {
        if (step === 0) {
            btn_up.disabled = true;
            btn_up.style.backgroundImage = "url(img/keyboard_arrow_up_grey.png)";
        }
        else {
            btn_up.disabled = false;
            btn_up.style.backgroundImage = "url(img/keyboard_arrow_up.png)";
        }
        if (step === comment.length - 2) {
            btn_down.disabled = true;
            btn_down.style.backgroundImage = "url(img/keyboard_arrow_down_grey.png)";
        }
        else {
            btn_down.disabled = false;
            btn_down.style.backgroundImage = "url(img/keyboard_arrow_down.png)";
        }
    }

    window.addEventListener('resize', () => {
        containerComment.style.top = 0;
        step = 0;
        test();

        stepHeightDown = comment[step + 1].offsetHeight + marginBottom;
        stepHeightUp = comment[step].offsetHeight + marginBottom;
        commentHeight = [];

        comment.forEach((item) => {
            commentHeight.push(item.offsetHeight);
        })

        slider.style.height = commentHeight[step] + commentHeight[step + 1] + marginBottom + shadowBox + 'px';

    });



}
