let view = (() => {
    const btns = document.querySelectorAll('.btn');
    const outputSum = document.querySelector('.calc__sum');
    const outputWork = document.querySelector('.calc__work');
    const clearBtn = document.querySelector('.calc__clear');
    let string = [];
    let numOne;
    let numTwo;

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // selectMath(e.target.dataset.label, string);
            //     string.push(e.target.dataset.label); 
            //     display(string, outputSum)
            numOne += e.target.dataset.label;
        })
    });

    let display = (chars, location) => {
        location.textContent = chars;
    }

    let selectMath = (operation, nums) => {
        if(operation == '/') {
            console.log('divide');
        } else if(operation == '*') {
            console.log('muliply');
        } else if(operation == '-') {
            console.log('subtract');
        } else if(operation == '+') {
            console.log('add');
        }
    }

    let clear = () => {
        clearBtn.addEventListener('click', () => {
            string = [];
            display(string, outputSum);
            display(string, outputWork);
        })
    }

    let add = (a, b) => {
        return a + b;
    }
    let subtract = (a, b) => {
        return a - b;
    }
    let multiply = (a, b) => {
        return a * b;
    }
    let divide = (a, b) => {
        return a / b;
    }

    return { clear };
})();

view.clear();