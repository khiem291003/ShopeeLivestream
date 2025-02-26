const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Mở trang đăng nhập Shopee
    await page.goto('https://shopee.vn/buyer/login');

    // Điền username và password
    await page.type('input[name="loginKey"]', 'user123');  // Nhập username
    await page.type('input[name="password"]', 'password123');  // Nhập password
    await page.click('button[type="submit"]');  // Nhấn nút Đăng nhập

    await page.waitForNavigation();  // Chờ trang tải xong

    // Điều hướng đến Shopee Live
    await page.goto('https://shopee.vn/live/streamer');

    console.log("✅ Đã đăng nhập thành công vào Shopee Live!");

    // Tải video lên (giả lập)
    await page.waitForSelector('input[type="file"]'); // Chờ input file xuất hiện
    const inputUploadHandle = await page.$('input[type="file"]');

    // Thay đường dẫn bằng video của bạn
    await inputUploadHandle.uploadFile('C:/Users/User/Videos/video.mp4');

    console.log("📤 Video đã được tải lên!");

    // Thêm mô tả cho livestream
    await page.type('textarea[name="description"]', "🔥 Livestream Flash Sale hôm nay!");
    console.log("📝 Mô tả video đã được thêm!");

    // Bắt đầu livestream
    await page.click('button.start-live-btn');
    console.log("🎥 Đã bắt đầu Livestream!");

    // Đợi 5 phút rồi tự động kết thúc livestream
    setTimeout(async () => {
        await page.click('button.end-live-btn');
        console.log("⏹ Livestream đã kết thúc!");
        await browser.close();
    }, 300000);
})();
