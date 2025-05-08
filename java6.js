document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");
    const logoutBtn = document.getElementById("logout");
    const forgotPasswordBtn = document.getElementById("forgot-password");

    if (!form || !passwordInput || !emailInput || !logoutBtn || !forgotPasswordBtn) {
        console.error("بعض العناصر مفقودة من الصفحة");
        return;
    }

    // عند تسجيل الدخول
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert(`✅ مرحبًا ${user.firstName} ${user.secondName}، تم تسجيل الدخول بنجاح!`);
            // هنا اقدر انقل المستخدم لصفحة أخرى مثلاً:
            window.location.href = "index.html"; //هنا 
        } else {
            alert("❌ البريد الإلكتروني أو كلمة المرور غير صحيحة.");
        }
    });

    // زر تسجيل الخروج
    logoutBtn.addEventListener("click", function () {
        if (confirm("⚠️ هل أنت متأكد من تسجيل الخروج؟")) {
            alert("✅ تم تسجيل الخروج.");
            window.location.href = "index.html";
        }
    });

    // نسيت كلمة المرور
    forgotPasswordBtn.addEventListener("click", function () {
        const email = prompt("📧 أدخل بريدك الإلكتروني:");
        if (!email) return;

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === email);

        if (user) {
            alert(`🔑 كلمة المرور الخاصة بك: ${user.password}`);
        } else {
            alert("🚫 البريد الإلكتروني غير موجود.");
        }
    });
});
