document.addEventListener('DOMContentLoaded', function () {
    const data = document.querySelector('.bmi-form');

    data.addEventListener('submit', (e) => {
        e.preventDefault();

        let height = document.getElementById('height').value;
        let weight = document.getElementById('weight').value;
        let age = document.getElementById('age').value;
        let sex = document.getElementById('sex').value;
        let active = document.getElementById('active').value;

        let showResult = document.getElementById('result');

        if (isNaN(height) || isNaN(weight) || isNaN(age) || height === '' || weight === '' || age === '') {
            alert('Please put valid numbers');
            return;
        } else if (height === '0' || weight === '0' || age === '0') {
            alert('Values cannot be 0');
            return;
        } else if (sex === '' || active === '') {
            alert('Please select your sex and activity');
            return;
        }

        let BMI = weight / ((height / 100) * (height / 100));
        let BMR = null;
        let TDEE = null; //Total Daily Energy Expenditure
        let message = null;

        if (sex === 'male') BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        if (sex === 'female') BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

        if (active === 'not-active') {
            TDEE = BMR * 1.2;
            message = 'Your BMR is: ' + BMR.toFixed(0) + ', You Need ' + TDEE.toFixed(0) + ' calories/day';
        }
        if (active === 'lightly-active') {
            TDEE = BMR * 1.375;
            message = 'Your BMR is: ' + BMR.toFixed(0) + ', You Need ' + TDEE.toFixed(0) + ' calories/day';
        }
        if (active === 'moderately-active') {
            TDEE = BMR * 1.55;
            message = 'Your BMR is: ' + BMR.toFixed(0) + ', You Need ' + TDEE.toFixed(0) + ' calories/day';
        }
        if (active === 'very-active') {
            TDEE = BMR * 1.72;
            message = 'Your BMR is: ' + BMR.toFixed(0) + ', You Need ' + TDEE.toFixed(0) + ' calories/day';
        }
        if (active === 'super-active') {
            TDEE = BMR * 1.9;
            message = 'Your BMR is: ' + BMR.toFixed(0) + ', You Need ' + TDEE.toFixed(0) + ' calories/day';
        }

        showResult.innerHTML = 'Your BMI is: ' + BMI.toFixed(2) + '<br>' + message;

        let row = document.querySelectorAll('tr');
        row.forEach((e) => e.classList.remove('highlight'));

        let underweight = document.querySelector('#underweight');
        let healthy = document.querySelector('#healthy');
        let overweight = document.querySelector('#overweight');
        let obese = document.querySelector('#obese');

        if (BMI < 18.5) underweight.classList.add('highlight');
        if (BMI >= 18.5 && BMI <= 24.9) healthy.classList.add('highlight');
        if (BMI >= 25 && BMI <= 29.9) overweight.classList.add('highlight');
        if (BMI >= 30) obese.classList.add('highlight');
    });
});
