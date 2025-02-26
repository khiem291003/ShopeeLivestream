const startBtn = document.getElementById('startLive');
const stopBtn = document.getElementById('stopLive');
const loading = document.getElementById('loading');
const statusText = document.getElementById('statusText');
const livestreamVideo = document.getElementById('livestreamVideo');

let livestreamRunning = false;

// Hàm bắt đầu livestream giả lập
function startLivestream() {
    if (livestreamRunning) return;

    // Hiển thị hiệu ứng tải
    loading.style.display = "block";
    statusText.innerText = "⏳ Đang kết nối...";
    statusText.style.color = "blue";

    setTimeout(() => {
        loading.style.display = "none";
        statusText.innerText = "🟢 Đang Livestream";
        statusText.style.color = "green";
        livestreamVideo.style.display = "block";
        livestreamVideo.play();
        livestreamRunning = true;

        startBtn.style.display = "none";
        stopBtn.style.display = "inline-block";
    }, 3000);
}

// Hàm dừng livestream
function stopLivestream() {
    if (!livestreamRunning) return;

    livestreamVideo.pause();
    livestreamVideo.style.display = "none";
    statusText.innerText = "🔴 Livestream đã dừng";
    statusText.style.color = "red";
    livestreamRunning = false;

    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
}

// Lắng nghe sự kiện
startBtn.addEventListener('click', startLivestream);
stopBtn.addEventListener('click', stopLivestream);
