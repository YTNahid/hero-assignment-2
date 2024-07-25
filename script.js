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

        if ([height, weight, age].some(isNaN)) {
            alert('Please put valid numbers');
            return;
        } else if ([height, weight, age].some((val) => !val)) {
            alert('Fields Cannot be empty');
            return;
        } else if ([height, weight, age].some((val) => val <= 0)) {
            alert('Values cannot be less than or equal to 0');
            return;
        } else if (!sex || !active) {
            alert('Please select your sex and activity');
            return;
        }

        const BMI = weight / (height / 100) ** 2;
        const BMR = sex === 'male' ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

        const activityMultipliers = {
            'not-active': 1.2,
            'lightly-active': 1.375,
            'moderately-active': 1.55,
            'very-active': 1.72,
            'super-active': 1.9,
        };

        const caloriesNeeded = BMR * activityMultipliers[active];

        const messageBMI = `Your BMI is: ${BMI.toFixed(2)}`;
        const messageBMR = `Your BMR is: ${BMR.toFixed(0)}, You Need ${caloriesNeeded.toFixed(0)} calories/day`;

        showResult.innerHTML = `${messageBMI} <br> ${messageBMR}`;

        const row = document.querySelectorAll('tr');
        row.forEach((el) => el.classList.remove('highlight'));

        const underweight = document.querySelector('#underweight');
        const healthy = document.querySelector('#healthy');
        const overweight = document.querySelector('#overweight');
        const obese = document.querySelector('#obese');

        if (BMI < 18.5) underweight.classList.add('highlight');
        else if (BMI >= 18.5 && BMI <= 24.9) healthy.classList.add('highlight');
        else if (BMI >= 25 && BMI <= 29.9) overweight.classList.add('highlight');
        else if (BMI >= 30) obese.classList.add('highlight');
    });
});
