document.addEventListener('DOMContentLoaded', function () {
    const fonts = ['InkLipquid', 'GangwonEduHyeonokT_OTFMediumA', 'Cafe24Shiningstar', 'KCC-eunyoung', 'Middleschool_student', 'Gothic_Goding'];
    const affirmationElement = document.querySelector('.postbody p');

    function loadAffirmation() {
        fetch('affirmations.json')
            .then(response => response.json())
            .then(affirmations => {
                const randomIndex = Math.floor(Math.random() * affirmations.length);
                const affirmation = affirmations[randomIndex];
                affirmationElement.textContent = affirmation;

                // 랜덤 폰트 적용
                const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                affirmationElement.style.fontFamily = randomFont;
            })
            .catch(error => {
                console.error('Error:', error);
                affirmationElement.textContent = "오류가 발생했습니다. 다시 시도해주세요.";
            });
    }

    // 초기 긍정확언 및 폰트 로드
    loadAffirmation();
});