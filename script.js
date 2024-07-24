document.addEventListener('DOMContentLoaded', function () {
    const data = document.querySelector('.bmi-form');

    data.addEventListener('submit', (e) => {
        e.preventDefault();

        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;
        const age = document.getElementById('age').value;
        const sex = document.getElementById('sex').value;
        const active = document.getElementById('active').value;

        const showResult = document.getElementById('result');

        if (isNaN(height) || isNaN(weight) || isNaN(age) || height === '' || weight === '' || age === '') {
            alert('Please put valid numbers');
            return;
        } else if (height === '0' || weight === '0' || age === '0') {
            alert('Values cannot be 0');
            return;
        } else if (sex === '' || active === '') {
            alert('Please select all the fields');
            return;
        }

        const result = height;

        showResult.innerHTML = 'Your BMI is: ' + result;

        let td = document.querySelectorAll('td');

        td.forEach((e) => {
            e.style.background = 'transparent';
            e.style.color = 'white';
            e.style.opacity = '.5';
        });

        let underweight = document.querySelectorAll('#underweight td');
        let healthy = document.querySelectorAll('#healthy td');
        let overweight = document.querySelectorAll('#overweight td');
        let obese = document.querySelectorAll('#obese td');

        if (result < 18.5) {
            underweight.forEach((e) => {
                e.style.background = 'white';
                e.style.color = 'black';
                e.style.opacity = '1';
            });
        }
        if (result >= 18.5 && result <= 24.9) {
            healthy.forEach(function (e) {
                e.style.background = 'white';
                e.style.color = 'black';
                e.style.opacity = '1';
            });
        }
        if (result >= 25 && result <= 29.9) {
            overweight.forEach(function (e) {
                e.style.background = 'white';
                e.style.color = 'black';
                e.style.opacity = '1';
            });
        }
        if (result >= 30) {
            obese.forEach(function (e) {
                e.style.background = 'white';
                e.style.color = 'black';
                e.style.opacity = '1';
            });
        }
    });
});
