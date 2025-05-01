"use strict";
// حق الصفحة الرئيسية تفعيل الترجمة باستخدام Google Translate API
document.querySelector('.language-select').addEventListener('change', function (e) {
    const language = e.target.value;
    if (language === 'ar') {
        translatePage('ar');
    }
    else if (language === 'en') {
        translatePage('en');
    }
});
function translatePage(language) {
    const translations = {
        'ar': {
            'search_placeholder': 'ادخل كلمة البحث',
            'privacy_policy': 'سياسة الاستخدام والخصوصية',
            'return_policy': 'سياسة الاستبدال والاسترجاع',
            'home': 'الرئيسية',
            'products': 'المنتجات',
            'contact': 'تواصل معنا',
            'cart': 'سلة متجر',
            'main_heading': 'متجر متكامل لكل لحظة فارقة: تهنئ أحبابك، ترتب وقتك، تجهز سيرتك، وتلون يومك بتصاميم ملهمة.',
            'latest_products': 'احدث المنتجات',
            'business_designs': 'تصاميم خاصة بالأعمال',
            'greeting_cards': 'بطاقات وتصاميم تهنئة ومناسبات',
            'organizational_products': 'منتجات تنظيمية',
            'digital_backgrounds': 'خلفيات رقمية عبارات',
            'about_us': 'من نحن',
            'important_links': 'روابط مهمة',
            'payment_methods': 'وسائل الدفع المتاحة',
            'about_text': 'متخصصون في مجال التصاميم (خلفيات) (سيرة ذاتية) (تهنئات) (منتجات تنظيمية) للتواصل معنا عبر الواتساب وإرسال إيصال الدفع.',
            'privacy': 'سياسة الخصوصية',
            'return': 'سياسة الاسترجاع',
            'add_to_cart': 'إضافة للسلة 🛒'
        },
        'en': {
            'search_placeholder': 'Enter search word',
            'privacy_policy': 'Privacy Policy',
            'return_policy': 'Return and Exchange Policy',
            'home': 'Home',
            'products': 'Products',
            'contact': 'Contact Us',
            'cart': 'Shopping Cart',
            'main_heading': 'An integrated store for every special moment: greet your loved ones, organize your time, prepare your resume, and brighten your day with inspiring designs.',
            'latest_products': 'Latest Products',
            'business_designs': 'Business Designs',
            'greeting_cards': 'Greeting and Occasion Cards',
            'organizational_products': 'Organizational Products',
            'digital_backgrounds': 'Digital Quote Backgrounds',
            'about_us': 'About Us',
            'important_links': 'Important Links',
            'payment_methods': 'Available Payment Methods',
            'about_text': 'We specialize in designs (backgrounds) (resumes) (greetings) (organizational products). Contact us via WhatsApp and send proof of payment.',
            'privacy': 'Privacy Policy',
            'return': 'Return Policy',
            'add_to_cart': 'Add to Cart 🛒'
        }
    };
    const lang = translations[language];
    // تغيير النصوص
    document.querySelector('input[type="text"]').setAttribute('placeholder', lang.search_placeholder);
    document.querySelector('.right-links a:nth-child(1)').textContent = lang.privacy_policy;
    document.querySelector('.right-links a:nth-child(2)').textContent = lang.return_policy;
    document.querySelector('.center-links a:nth-child(1)').textContent = lang.home;
    document.querySelector('.center-links a:nth-child(2)').textContent = lang.products;
    document.querySelector('.center-links a:nth-child(3)').textContent = lang.contact;
    // تغيير الهيدر الرئيسي
    document.querySelector('h1').textContent = lang.main_heading;
    // تغيير عناوين الأقسام
    const sectionTitles = document.querySelectorAll('h2');
    sectionTitles[0].textContent = lang.latest_products;
    sectionTitles[1].textContent = lang.business_designs;
    sectionTitles[2].textContent = lang.greeting_cards;
    sectionTitles[3].textContent = lang.organizational_products;
    sectionTitles[4].textContent = lang.digital_backgrounds;
    // تغيير المنتجات زر الإضافة للسلة
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.textContent = lang.add_to_cart;
    });
    // تغيير نصوص الفوتر
    document.querySelector('.about h3').textContent = lang.about_us;
    document.querySelector('.about p').textContent = lang.about_text;
    document.querySelector('.links h3').textContent = lang.important_links;
    document.querySelector('.links li:nth-child(1) a').textContent = lang.privacy;
    document.querySelector('.links li:nth-child(2) a').textContent = lang.return;
    document.querySelector('.payments h3').textContent = lang.payment_methods;
}
//حق صفحة تواصل معنا
"use strict";
class ContactForm {
    constructor() {
        this.saveData = () => {
            const { name, email, phone, message } = this.fields;
            if (!name.value || !email.value || !phone.value || !message.value) {
                alert("الرجاء ملء جميع الحقول قبل الإرسال.");
                return;
            }
            const formData = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value,
            };
            localStorage.setItem("contactFormData", JSON.stringify(formData));
            alert("تم حفظ البيانات بنجاح!");
        };
        this.clearForm = () => {
            Object.values(this.fields).forEach(field => field.value = "");
        };
        this.loadData = () => {
            const savedData = localStorage.getItem("contactFormData");
            if (savedData) {
                const formData = JSON.parse(savedData);
                Object.keys(this.fields).forEach(key => {
                    if (formData[key]) {
                        this.fields[key].value = formData[key];
                    }
                });
            }
        };
        this.bindEvents = () => {
            if (this.sendButton) {
                this.sendButton.addEventListener("click", () => {
                    this.saveData();
                    this.clearForm();
                });
            }
        };
        this.form = document.getElementById("contactForm");
        this.fields = {
            name: document.getElementById("name"),
            email: document.getElementById("email"),
            phone: document.getElementById("phone"),
            message: document.getElementById("message"),
        };
        this.sendButton = document.getElementById("send");
        this.bindEvents();
        this.loadData();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    new ContactForm();
});
//حق الصفحة الرئيسية زر اضافة للسلة نحصل على كل الأزرار
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        const productImage = productCard.querySelector('.product-image').getAttribute('src');
        const product = {
            title: productTitle,
            price: productPrice,
            image: productImage
        };
        // نحضر السلة الحالية أو نبدأ بسلة فاضية
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        // نضيف المنتج للسلة
        cart.push(product);
        // نخزن السلة من جديد
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`تمت إضافة "${productTitle}" إلى السلة 🛒`);
    });
});
