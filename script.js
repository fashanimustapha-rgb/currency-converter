const fromCurrency = document.getElementById('from_currency');
const toCurrency = document.getElementById('to_currency');
const convertButton = document.getElementById('convert_button');
const amountInput = document.getElementById('amount');
const resultSpan = document.querySelector('#result span');
const swapButton = document.getElementById('swap_button');
const favoriteButtons = document.querySelectorAll('.favorite-currency'); // متغير جديد لأزرار العملات المفضلة

const API_KEY = 'f03b0ea4644e7185abb6dab4';
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

// دالة لجلب العملات من الـ API
async function fetchCurrencies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);

        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });

        fromCurrency.value = 'USD';
        toCurrency.value = 'MAD';
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }
}

// دالة للتحويل
async function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = amountInput.value;

    if (amount <= 0) {
        resultSpan.textContent = 'أدخل مبلغًا صحيحًا';
        return;
    }

    const conversionUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;

    try {
        const response = await fetch(conversionUrl);
        const data = await response.json();
        const rate = data.conversion_rates[to];
        const result = (amount * rate).toFixed(2);
        resultSpan.textContent = `${result} ${to}`;
    } catch (error) {
        console.error('Error converting currency:', error);
        resultSpan.textContent = 'خطأ في التحويل';
    }
}

// دالة لتبديل العملات
function swapCurrencies() {
    const fromValue = fromCurrency.value;
    const toValue = toCurrency.value;
    fromCurrency.value = toValue;
    toCurrency.value = fromValue;
    convertCurrency();
}

// دالة لتغيير العملة المفضلة (الدالة الجديدة)
function setFavoriteCurrency(event) {
    const currency = event.target.getAttribute('data-currency');
    toCurrency.value = currency;
    convertCurrency();
}

// استدعاء الدوال عند تحميل الصفحة وعند الضغط على الزر
document.addEventListener('DOMContentLoaded', fetchCurrencies);
convertButton.addEventListener('click', convertCurrency);
swapButton.addEventListener('click', swapCurrencies);

// مستمع الأحداث الجديد لأزرار العملات المفضلة
favoriteButtons.forEach(button => {
    button.addEventListener('click', setFavoriteCurrency);
});