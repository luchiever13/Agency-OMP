(function() {
    // Pengaturan Akses
    const VALID_USER = "admin";
    const VALID_PASS = "momo123";

    // MENGGUNAKAN localStorage agar tetap login saat pindah halaman (navigasi)
    if (localStorage.getItem("isLoggedIn") !== "true") {
        document.documentElement.style.display = 'none';

        window.addEventListener('DOMContentLoaded', () => {
            const overlay = document.createElement('div');
            overlay.id = "loginOverlay";
            
            // ... (Kode StyleTag dan innerHTML sama seperti sebelumnya) ...
            const styleTag = document.createElement('style');
            styleTag.innerHTML = `
                @keyframes fadeInBox { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes starsFalling { from { transform: translateY(0); } to { transform: translateY(1000px); } }
                @keyframes moveText { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
                .bg-stars { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #ff007f, rgba(0,0,0,0)); background-size: 300px 300px; animation: starsFalling 20s linear infinite; opacity: 0.2; z-index: 1; }
                .bg-marquee-auth { position: absolute; top: 50%; width: 100%; white-space: nowrap; font-size: 80px; font-weight: bold; color: rgba(255, 0, 127, 0.03); font-family: serif; pointer-events: none; z-index: 0; animation: moveText 30s linear infinite; }
            `;
            document.head.appendChild(styleTag);

            overlay.innerHTML = `
                <div class="bg-stars"></div>
                <div class="bg-marquee-auth">RESTRICTED ACCESS • OMP AGENCY • SYSTEM SECURED</div>
                <div style="background:rgba(10, 10, 10, 0.95); padding:40px 30px; border:2px solid #ff007f; border-radius:15px; text-align:center; width:340px; color:#fff; font-family: 'EB Garamond', serif; box-shadow: 0 0 30px rgba(255, 0, 127, 0.4); backdrop-filter: blur(10px); z-index: 10; animation: fadeInBox 0.8s ease-out;">
                    <img src="logo.png" alt="Logo OMP" style="height: 120px; width: auto; margin-bottom: 20px; filter: drop-shadow(0 0 15px #ff007f);">
                    <h2 style="color:#ff007f; margin-bottom:25px; font-family:'Playfair Display', serif; letter-spacing:4px; text-shadow: 0 0 10px #ff007f; font-size: 22px;">OMP SYSTEM</h2>
                    <div style="margin-bottom: 15px; text-align: left;">
                        <label style="color: #ff007f; font-size: 11px; text-transform: uppercase; font-weight: bold; letter-spacing: 2px;">Username</label>
                        <input type="text" id="u" placeholder="Admin Name" style="width:100%; padding:14px; margin-top:8px; background:rgba(0,0,0,0.5); border:1px solid #333; color:#fff; border-radius:6px; box-sizing: border-box; outline: none; border-left: 3px solid #ff007f;">
                    </div>
                    <div style="margin-bottom: 25px; text-align: left;">
                        <label style="color: #ff007f; font-size: 11px; text-transform: uppercase; font-weight: bold; letter-spacing: 2px;">Password</label>
                        <input type="password" id="p" placeholder="••••••••" style="width:100%; padding:14px; margin-top:8px; background:rgba(0,0,0,0.5); border:1px solid #333; color:#fff; border-radius:6px; box-sizing: border-box; outline: none; border-left: 3px solid #ff007f;">
                    </div>
                    <button id="loginBtn" style="width:100%; padding:16px; background:#ff007f; color:#000; border:none; font-weight:bold; cursor:pointer; text-transform:uppercase; border-radius:6px; box-shadow: 0 0 15px rgba(255, 0, 127, 0.5); letter-spacing: 2px;">Enter System</button>
                    <p id="err" style="color:#ff007f; display:none; margin-top:20px; font-size:12px; font-weight:bold; text-transform: uppercase;">Access Denied!</p>
                </div>
            `;

            Object.assign(overlay.style, { position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: '#030303', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999999', overflow: 'hidden' });
            document.body.appendChild(overlay);
            document.documentElement.style.display = 'block';

            document.getElementById('loginBtn').addEventListener('click', () => {
                const user = document.getElementById('u').value;
                const pass = document.getElementById('p').value;

                if (user === VALID_USER && pass === VALID_PASS) {
                    // Simpan status login permanen di browser ini
                    localStorage.setItem("isLoggedIn", "true");
                    overlay.remove();
                } else {
                    document.getElementById('err').style.display = 'block';
                }
            });
        });
    }
})();
