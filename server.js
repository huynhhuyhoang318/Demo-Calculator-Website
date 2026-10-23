const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value.trim() === '') return;
        // Thực hiện tính toán bằng eval
        const result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Lỗi';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Lỗi';
    }
}