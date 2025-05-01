"use strict";

// نوع الترجمة
interface Translations {
    [key: string]: { [key: string]: string };
}

// تفعيل الترجمة
const languageSelect = document.querySelector('.language-select') as HTMLSelectElement;
languageSelect.addEventListener('change', function (e: Event) {
    const target = e.target as HTMLSelectElement;
    const language = target.value;
    if (language === 'ar' || language === 'en') {
        translatePage(language);
    }
});

function translatePage(language: string): void {
    const translations: Translations = {
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

    (document.querySelector('input[type="text"]') as HTMLInputElement).placeholder = lang.search_placeholder;
    (document.querySelector('.right-links a:nth-child(1)') as HTMLElement).textContent = lang.privacy_policy;
    (document.querySelector('.right-links a:nth-child(2)') as HTMLElement).textContent = lang.return_policy;
    (document.querySelector('.center-links a:nth-child(1)') as HTMLElement).textContent = lang.home;
    (document.querySelector('.center-links a:nth-child(2)') as HTMLElement).textContent = lang.products;
    (document.querySelector('.center-links a:nth-child(3)') as HTMLElement).textContent = lang.contact;
    (document.querySelector('h1') as HTMLElement).textContent = lang.main_heading;

    const sectionTitles = document.querySelectorAll('h2');
    sectionTitles[0].textContent = lang.latest_products;
    sectionTitles[1].textContent = lang.business_designs;
    sectionTitles[2].textContent = lang.greeting_cards;
    sectionTitles[3].textContent = lang.organizational_products;
    sectionTitles[4].textContent = lang.digital_backgrounds;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        (button as HTMLElement).textContent = lang.add_to_cart;
    });

    (document.querySelector('.about h3') as HTMLElement).textContent = lang.about_us;
    (document.querySelector('.about p') as HTMLElement).textContent = lang.about_text;
    (document.querySelector('.links h3') as HTMLElement).textContent = lang.important_links;
    (document.querySelector('.links li:nth-child(1) a') as HTMLElement).textContent = lang.privacy;
    (document.querySelector('.links li:nth-child(2) a') as HTMLElement).textContent = lang.return;
    (document.querySelector('.payments h3') as HTMLElement).textContent = lang.payment_methods;
}

class ContactForm {
    private form: HTMLFormElement | null;
    private fields: {
        name: HTMLInputElement;
        email: HTMLInputElement;
        phone: HTMLInputElement;
        message: HTMLTextAreaElement;
    };
    private sendButton: HTMLButtonElement | null;

    constructor() {
        this.form = document.getElementById("contactForm") as HTMLFormElement;
        this.fields = {
            name: document.getElementById("name") as HTMLInputElement,
            email: document.getElementById("email") as HTMLInputElement,
            phone: document.getElementById("phone") as HTMLInputElement,
            message: document.getElementById("message") as HTMLTextAreaElement
        };
        this.sendButton = document.getElementById("send") as HTMLButtonElement;
        this.bindEvents();
        this.loadData();
    }

    private saveData = (): void => {
        const { name, email, phone, message } = this.fields;
        if (!name.value || !email.value || !phone.value || !message.value) {
            alert("الرجاء ملء جميع الحقول قبل الإرسال.");
            return;
        }
        const formData = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        };
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        alert("تم حفظ البيانات بنجاح!");
    };

    private clearForm = (): void => {
        Object.values(this.fields).forEach(field => {
            field.value = "";
        });
    };

    private loadData = (): void => {
        const savedData = localStorage.getItem("contactFormData");
        if (savedData) {
            const formData = JSON.parse(savedData);
            Object.keys(this.fields).forEach(key => {
                const fieldKey = key as keyof typeof this.fields;
                if (formData[fieldKey]) {
                    this.fields[fieldKey].value = formData[fieldKey];
                }
            });
        }
    };

    private bindEvents = (): void => {
        if (this.sendButton) {
            this.sendButton.addEventListener("click", () => {
                this.saveData();
                this.clearForm();
            });
        }
    };
}

document.addEventListener("DOMContentLoaded", () => {
    new ContactForm();
});

// إضافة المنتجات إلى السلة
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = (button as HTMLElement).closest('.product-card') as HTMLElement;
        const productTitle = (productCard.querySelector('.product-title') as HTMLElement).textContent || "";
        const productPrice = (productCard.querySelector('.product-price') as HTMLElement).textContent || "";
        const productImage = (productCard.querySelector('.product-image') as HTMLImageElement).src;

        const product = {
            title: productTitle,
            price: productPrice,
            image: productImage
        };

        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`تمت إضافة "${productTitle}" إلى السلة 🛒`);
    });
});

