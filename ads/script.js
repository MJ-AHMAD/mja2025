// ব্যবহারকারীর অবস্থান নির্ধারণ
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("content").innerHTML = "Geolocation is not supported by this browser.";
    }
}

// অবস্থান প্রদর্শন
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // টার্গেট লোকেশন চেক
    if (isTargetLocation(lat, lon)) {
        showContent();
    } else {
        document.getElementById("content").innerHTML = "This content is not available in your location.";
    }
}

// টার্গেট লোকেশন চেক করা
function isTargetLocation(lat, lon) {
    var targetLat = 23.7808875; // Gulshan, Dhaka এর Latitude
    var targetLon = 90.4196014; // Gulshan, Dhaka এর Longitude
    // নির্দিষ্ট একটি রেঞ্জ চেক (1 কিমি রেডিয়াস ধরে)
    var distance = Math.sqrt(Math.pow(targetLat - lat, 2) + Math.pow(targetLon - lon, 2));
    return distance < 0.01;
}

// কন্টেন্ট প্রদর্শন
function showContent() {
    var currentTime = new Date();
    var targetDate = new Date('2025-03-03T10:30:00');
    var endDate = new Date('2025-03-03T23:59:59');

    // নির্দিষ্ট সময়ে চেক
    if (currentTime >= targetDate && currentTime <= endDate) {
        document.getElementById("content").innerHTML = `
            <h1>Special Offer: Buy the Latest T-Shirt Now!</h1>
            <img src="https://mj-ahmad.github.io/mja2025/img/tshart.png" alt="T-Shirt">
            <p>Don't miss out on our exclusive offer. Click the button below to buy now.</p>
            <button onclick="window.location.href='https://yourwebsite.com/buy-now'">Buy Now</button>
        `;
    } else {
        document.getElementById("content").innerHTML = "This offer is not available at this time.";
    }
}

// ত্রুটি প্রদর্শন
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("content").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("content").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("content").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("content").innerHTML = "An unknown error occurred.";
            break;
    }
}

// অবস্থান ফাংশন কল করা
getLocation();
