(function() {
    // Pengaturan Akses
    const VALID_USER = "admin";
    const VALID_PASS = "momo123";

    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        document.documentElement.style.display = 'none';

        window.addEventListener('DOMContentLoaded', () => {
            const overlay = document.createElement('div');
            overlay.id = "loginOverlay";
            
            // Tampilan Box Login dengan tambahan Logo
            overlay.innerHTML = `
                <div style="background:#000000; padding:40px 30px; border:3px solid #ff007f; border-radius:15px; text-align:center; width:320px; color:#fff; font-family: sans-serif; box-shadow: 0 0 25px #ff007f, inset 0 0 10px #ff007f;">
                    
                    <img src="logo.png" alt="Logo OMP" style="height: 180px; width: auto; margin-bottom: 20px; filter: drop-shadow(0 0 10px #ff007f);">
                    
                    <h2 style="color:#ff007f; margin-bottom:25px; font-family:'Playfair Display', serif; letter-spacing:4px; text-shadow: 0 0 10px #ff007f; font-size: 20px;">OMP LOGIN</h2>
                    
                    <div style="margin-bottom: 15px; text-align: left;">
                        <label style="color: #ff007f; font-size: 11px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Username</label>
                        <input type="text" id="u" style="width:100%; padding:12px; margin-top:5px; background:#111; border:1px solid #ff007f; color:#fff; border-radius:4px; box-sizing: border-box; outline: none;">
                    </div>

                    <div style="margin-bottom: 25px; text-align: left;">
                        <label style="color: #ff007f; font-size: 11px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Password</label>
                        <input type="password" id="p" style="width:100%; padding:12px; margin-top:5px; background:#111; border:1px solid #ff007f; color:#fff; border-radius:4px; box-sizing: border-box; outline: none;">
                    </div>

                    <button id="loginBtn" style="width:100%; padding:15px; background:#ff007f; color:#000; border:none; font-weight:bold; cursor:pointer; text-transform:uppercase; border-radius:6px; transition:0.3s; box-shadow: 0 0 15px #ff007f; letter-spacing: 1px;">Enter System</button>
                    
                    <p id="err" style="color:#ff007f; display:none; margin-top:20px; font-size:12px; font-weight:bold; text-transform: uppercase;">Invalid Credentials!</p>
                </div>
            `;

            // Style Latar Belakang
            Object.assign(overlay.style, {
                position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
                background: '#0a0a0a', 
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                zIndex: '999999'
            });

            document.body.appendChild(overlay);
            document.documentElement.style.display = 'block';

            const btn = document.getElementById('loginBtn');
            btn.onmouseover = () => { btn.style.background = '#ff3399'; btn.style.boxShadow = '0 0 25px #ff3399'; };
            btn.onmouseout = () => { btn.style.background = '#ff007f'; btn.style.boxShadow = '0 0 15px #ff007f'; };

            document.getElementById('loginBtn').addEventListener('click', () => {
                const user = document.getElementById('u').value;
                const pass = document.getElementById('p').value;

                if (user === VALID_USER && pass === VALID_PASS) {
                    sessionStorage.setItem("isLoggedIn", "true");
                    overlay.remove();
                } else {
                    document.getElementById('err').style.display = 'block';
                }
            });
        });
    }
})();