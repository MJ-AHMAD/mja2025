// ব্যবহারকারীর অবস্থান নির্ধারণ
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("content").innerHTML = "আপনার ব্রাউজারে জিওলোকেশন সমর্থিত নয়।";
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
        document.getElementById("content").innerHTML = "এই কন্টেন্ট আপনার লোকেশনে উপলব্ধ নয়।";
    }
}

// টার্গেট লোকেশন চেক করা (ঢাকা সিটি)
function isTargetLocation(lat, lon) {
    // ঢাকা সিটির বাউন্ডারি নির্ধারণ
    var dhakaBounds = {
        north: 23.900002,
        south: 23.661270,
        east: 90.513275,
        west: 90.334999
    };

    // চেক করুন ব্যবহারকারীর লোকেশন ঢাকা সিটির মধ্যে পড়ে কিনা
    var withinLat = lat >= dhakaBounds.south && lat <= dhakaBounds.north;
    var withinLon = lon >= dhakaBounds.west && lon <= dhakaBounds.east;

    return withinLat && withinLon;
}

// কন্টেন্ট প্রদর্শন
function showContent() {
    var currentTime = new Date();
    var targetDate = new Date('2025-03-03T11:30:00');
    var endDate = new Date('2025-03-03T23:59:59');

    // নির্দিষ্ট সময়ে চেক
    if (currentTime >= targetDate && currentTime <= endDate) {
        document.getElementById("content").innerHTML = `
            <h1>Looking a Personal Assistant</h1>
            <img src="https://mj-ahmad.github.io/mja2025/img/pa.png" alt="T-Shirt">
            <p>Join Our Team as a Personal Assistant</p>
            <button onclick="window.location.href='https://v0-next-js-recruitment-page.vercel.app'">Apply Now</button>
        `;
    } else {
        document.getElementById("content").innerHTML = "এই অফারটি বর্তমানে উপলব্ধ নয়।";
    }
}

// ত্রুটি প্রদর্শন
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("content").innerHTML = "ব্যবহারকারী জিওলোকেশন অনুরোধটি অস্বীকার করেছেন।";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("content").innerHTML = "লোকেশন তথ্য উপলব্ধ নয়।";
            break;
        case error.TIMEOUT:
            document.getElementById("content").innerHTML = "লোকেশন তথ্য গ্রহণ করার সময় শেষ হয়েছে।";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("content").innerHTML = "একটি অজানা ত্রুটি ঘটেছে।";
            break;
    }
}

// অবস্থান ফাংশন কল করা
getLocation();
