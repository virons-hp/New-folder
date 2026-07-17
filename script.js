const practiceHeading = document.getElementById('practice');

// practiceHeading.addEventListener('click', function() {
//     alert('Practice heading clicked!');
// });

practiceHeading.style.color = 'blue';

practiceHeading.addEventListener('mouseenter', function() {
    practiceHeading.style.color = 'red';
});
 practiceHeading.addEventListener('mouseout', function() {
    practiceHeading.style.color = 'blue';
});

practiceHeading.addEventListener('dblclick', function() {
    practiceHeading.style.fontSize = '30px';
    document.body.style.backgroundColor = 'red';
});

const btn = document.getElementById('bt');

btn.addEventListener('mouseover', function() {
    // add desired mouseover behavior here
btn.style.display='none';
    // btn.style.screenLeft='123px';
});


let num1= 10;
let 