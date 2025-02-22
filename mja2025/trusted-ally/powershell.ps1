# প্রধান প্রজেক্ট ডিরেক্টরি তৈরি করুন
$baseDir = "C:\Projects\TRUSTED-ALLY"
New-Item -ItemType Directory -Path $baseDir

# সাব-ডিরেক্টরি তৈরি করুন
$subDirs = @("OTA", "E-commerce", "OMP", "HolyBook", "Fundraise")
foreach ($dir in $subDirs) {
    New-Item -ItemType Directory -Path "$baseDir\$dir"
    New-Item -ItemType Directory -Path "$baseDir\$dir\frontend"
    New-Item -ItemType Directory -Path "$baseDir\$dir\frontend\styles"
    New-Item -ItemType Directory -Path "$baseDir\$dir\frontend\scripts"
    New-Item -ItemType Directory -Path "$baseDir\$dir\backend"
    New-Item -ItemType Directory -Path "$baseDir\$dir\backend\routes"
    New-Item -ItemType Directory -Path "$baseDir\$dir\backend\models"
    New-Item -ItemType File -Path "$baseDir\$dir\README.md"
    New-Item -ItemType File -Path "$baseDir\$dir\frontend\index.html"
    New-Item -ItemType File -Path "$baseDir\$dir\frontend\styles\main.css"
    New-Item -ItemType File -Path "$baseDir\$dir\frontend\scripts\main.js"
    New-Item -ItemType File -Path "$baseDir\$dir\backend\app.js"
    New-Item -ItemType File -Path "$baseDir\$dir\backend\routes\api.js"
    New-Item -ItemType File -Path "$baseDir\$dir\backend\models\database.js"
}

# মূল প্রজেক্টের জন্য ফ্রন্টএন্ড সেটআপ তৈরি করুন
New-Item -ItemType Directory -Path "$baseDir\frontend"
New-Item -ItemType Directory -Path "$baseDir\frontend\styles"
New-Item -ItemType Directory -Path "$baseDir\frontend\scripts"
New-Item -ItemType File -Path "$baseDir\frontend\index.html"
New-Item -ItemType File -Path "$baseDir\frontend\styles\main.css"
New-Item -ItemType File -Path "$baseDir\frontend\scripts\main.js"

# প্রজেক্ট স্ট্রাকচারের সম্পূর্ণ README ফাইল তৈরি করুন
$readmeContent = @"
# TRUSTED-ALLY
TRUSTED-ALLY প্রজেক্টের আওতায় পাঁচটি ভিন্ন ভিন্ন প্রজেক্ট নিয়ে কাজ করা হচ্ছে:
1. OTA অর্থাৎ অনলাইন ট্রাভেল এজেন্সি 
2. E-commerce অর্থাৎ ই-কমার্স সাইট 
3. OMP অর্থাৎ অনলাইন মার্কেটিং প্রজেক্ট
4. HolyBook অর্থাৎ আল কোরআন মুদ্রন ও সরবরাহকারি প্রজেক্ট 
5. Fundraise অর্থাৎ বিনামূল্যে কোরআন মাজিদ বিতরণ কার্যক্রম এর জন্য ফান্ড সংগ্রহ ও অন্যান্য প্রজেক্টের জন্য বিনিয়োগ সংগ্রহ করার জন্য এই প্রজেক্ট ।
"@
Set-Content -Path "$baseDir\README.md" -Value $readmeContent

# index.html কনটেন্ট
$htmlContent = @"
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>TRUSTED-ALLY</title>
    <link rel='stylesheet' href='styles/main.css'>
</head>
<body>
    <header>
        <h1>Welcome to TRUSTED-ALLY</h1>
        <nav>
            <ul>
                <li><a href='#ota'>OTA</a></li>
                <li><a href='#ecommerce'>E-commerce</a></li>
                <li><a href='#omp'>OMP</a></li>
                <li><a href='#holybook'>HolyBook</a></li>
                <li><a href='#fundraise'>Fundraise</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id='ota'>
            <h2>Online Travel Agency (OTA)</h2>
            <p>Details about the OTA project...</p>
        </section>
        <section id='ecommerce'>
            <h2>E-commerce</h2>
            <p>Details about the E-commerce project...</p>
        </section>
        <section id='omp'>
            <h2>Online Marketing Project (OMP)</h2>
            <p>Details about the OMP project...</p>
        </section>
        <section id='holybook'>
            <h2>HolyBook</h2>
            <p>Details about the HolyBook project...</p>
        </section>
        <section id='fundraise'>
            <h2>Fundraise</h2>
            <p>Details about the Fundraise project...</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 TRUSTED-ALLY. All rights reserved.</p>
    </footer>
    <script src='scripts/main.js'></script>
</body>
</html>
"@
Set-Content -Path "$baseDir\frontend\index.html" -Value $htmlContent

# main.css কনটেন্ট
$cssContent = @"
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}
header {
    background-color: #4CAF50;
    padding: 20px;
    color: white;
    text-align: center;
}
nav ul {
    list-style-type: none;
    padding: 0;
}
nav ul li {
    display: inline;
    margin-right: 15px;
}
nav ul li a {
    color: white;
    text-decoration: none;
}
main {
    padding: 20px;
}
section {
    margin-bottom: 20px;
}
footer {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
"@
Set-Content -Path "$baseDir\frontend\styles\main.css" -Value $cssContent

# main.js কনটেন্ট
$jsContent = @"
// JavaScript code for interactivity if needed
"@
Set-Content -Path "$baseDir\frontend\scripts\main.js" -Value $jsContent
