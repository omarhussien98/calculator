const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";  // مسح محتوى شاشة العرض
}
function calculate() {
    try {
        display.value = eval(display.value); // حساب المعادلة باستخدام eval
    } catch (e) {
        display.value = "Error";  // في حالة حدوث خطأ في المعادلة
    }
}