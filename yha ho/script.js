// 초기 점수를 0으로 설정
let score = 0;

// 점수 표시 영역과 버튼을 DOM에서 가져오기
const scoreDisplay = document.getElementById('score-display');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');

// 점수 증가 함수
function increaseScore() {
    score++;
    updateScoreDisplay();
}

// 점수 초기화 함수
function resetScore() {
    score = 0;
    updateScoreDisplay();
}

// 점수 영역 업데이트 함수
function updateScoreDisplay() {
    scoreDisplay.textContent = `점수: ${score}`;
}

// 이벤트 리스너 추가
increaseBtn.addEventListener('click', increaseScore);
resetBtn.addEventListener('click', resetScore);
