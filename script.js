const fromCurrency = document.getElementById('from_currency');
const toCurrency = document.getElementById('to_currency');
const convertButton = document.getElementById('convert_button');
const amountInput = document.getElementById('amount');
const resultSpan = document.querySelector('#result span');
const swapButton = document.getElementById('swap_button');
const favoriteButtons = document.querySelectorAll('.favorite-currency');

// قائمة بأسماء الدول والعملات
const countries = {
    "USD": "الولايات المتحدة الأمريكية",
    "EUR": "الاتحاد الأوروبي",
    "MAD": "المغرب",
    "SAR": "المملكة العربية السعودية",
    "AED": "الإمارات العربية المتحدة",
    "KWD": "الكويت",
    "BHD": "البحرين",
    "QAR": "قطر",
    "OMR": "سلطنة عُمان",
    "JOD": "الأردن",
    "EGP": "مصر",
    "DZD": "الجزائر",
    "TND": "تونس",
    "GBP": "المملكة المتحدة",
    "JPY": "اليابان",
    "CAD": "كندا",
    "AUD": "أستراليا",
    "CHF": "سويسرا",
    "CNY": "الصين",
    "INR": "الهند",
    "RUB": "روسيا",
    "TRY": "تركيا",
    "SEK": "السويد",
    "NOK": "النرويج",
    "DKK": "الدنمارك",
    "AFN": "أفغانستان",
    "ALL": "ألبانيا",
    "AMD": "أرمينيا",
    "ANG": "جزر الأنتيل الهولندية",
    "AOA": "أنغولا",
    "ARS": "الأرجنتين",
    "AWG": "أروبا",
    "AZN": "أذربيجان",
    "BAM": "البوسنة والهرسك",
    "BBD": "باربادوس",
    "BDT": "بنغلاديش",
    "BGN": "بلغاريا",
    "BIF": "بوروندي",
    "BMD": "برمودا",
    "BND": "بروناي",
    "BOB": "بوليفيا",
    "BRL": "البرازيل",
    "BSD": "جزر البهاما",
    "BTN": "بوتان",
    "BWP": "بوتسوانا",
    "BYN": "بيلاروسيا",
    "BZD": "بليز",
    "CDF": "الكونغو الديمقراطية",
    "CLP": "تشيلي",
    "COP": "كولومبيا",
    "CRC": "كوستاريكا",
    "CUP": "كوبا",
    "CVE": "الرأس الأخضر",
    "CZK": "جمهورية التشيك",
    "DJF": "جيبوتي",
    "DOP": "جمهورية الدومينيكان",
    "ETB": "إثيوبيا",
    "FJD": "فيجي",
    "FKP": "جزر فوكلاند",
    "GEL": "جورجيا",
    "GHS": "غانا",
    "GIP": "جبل طارق",
    "GMD": "غامبيا",
    "GNF": "غينيا",
    "GTQ": "غواتيمالا",
    "GYD": "غيانا",
    "HKD": "هونغ كونغ",
    "HNL": "هندوراس",
    "HRK": "كرواتيا",
    "HTG": "هايتي",
    "HUF": "المجر",
    "IDR": "إندونيسيا",
    "ILS": "إسرائيل",
    "ISK": "آيسلندا",
    "JMD": "جامايكا",
    "KES": "كينيا",
    "KGS": "قيرغيزستان",
    "KHR": "كمبوديا",
    "KMF": "جزر القمر",
    "KRW": "كوريا الجنوبية",
    "KZT": "كازاخستان",
    "LAK": "لاوس",
    "LBP": "لبنان",
    "LKR": "سريلانكا",
    "LRD": "ليبيريا",
    "LSL": "ليسوتو",
    "LYD": "ليبيا",
    "MDL": "مولدوفا",
    "MGA": "مدغشقر",
    "MKD": "مقدونيا",
    "MMK": "ميانمار",
    "MNT": "منغوليا",
    "MOP": "ماكاو",
    "MRO": "موريتانيا",
    "MUR": "موريشيوس",
    "MVR": "المالديف",
    "MWK": "مالاوي",
    "MXN": "المكسيك",
    "MYR": "ماليزيا",
    "MZN": "موزمبيق",
    "NAD": "ناميبيا",
    "NGN": "نيجيريا",
    "NIO": "نيكاراغوا",
    "NPR": "نيبال",
    "NZD": "نيوزيلندا",
    "PAB": "بنما",
    "PEN": "بيرو",
    "PGK": "بابوا غينيا الجديدة",
    "PHP": "الفلبين",
    "PKR": "باكستان",
    "PLN": "بولندا",
    "PYG": "باراغواي",
    "RON": "رومانيا",
    "RSD": "صربيا",
    "RWF": "رواندا",
    "SBD": "جزر سليمان",
    "SCR": "سيشل",
    "SDG": "السودان",
    "SGD": "سنغافورة",
    "SHP": "سانت هيلانة",
    "SLL": "سيراليون",
    "SOS": "الصومال",
    "SRD": "سورينام",
    "SSP": "جنوب السودان",
    "STD": "ساو تومي وبرينسيب",
    "SVC": "السلفادور",
    "SYP": "سوريا",
    "SZL": "سوازيلاند",
    "THB": "تايلاند",
    "TJS": "طاجيكستان",
    "TMT": "تركمانستان",
    "TOP": "تونغا",
    "TTD": "ترينيداد وتوباغو",
    "TWD": "تايوان",
    "TZS": "تنزانيا",
    "UAH": "أوكرانيا",
    "UGX": "أوغندا",
    "UYU": "أوروغواي",
    "UZS": "أوزبكستان",
    "VES": "فنزويلا",
    "VND": "فيتنام",
    "VUV": "فانواتو",
    "WST": "ساموا",
    "XAF": "فرنك وسط أفريقيا",
    "XCD": "دولار شرق الكاريبي",
    "XOF": "فرنك غرب أفريقيا",
    "XPF": "فرنك المحيط الهادئ",
    "YER": "اليمن",
    "ZAR": "جنوب أفريقيا",
    "ZMW": "زامبيا"
};

const API_KEY = 'f03b0ea4644e7185abb6dab4';
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

// دالة لجلب العملات من الـ API
async function fetchCurrencies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);

        currencies.sort((a, b) => {
            const countryA = countries[a] || '';
            const countryB = countries[b] || '';
            return countryA.localeCompare(countryB, 'ar', { sensitivity: 'base' });
        });

        currencies.forEach(currency => {
            const optionText = countries[currency] ? `${countries[currency]} (${currency})` : currency;

            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = optionText;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = optionText;
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