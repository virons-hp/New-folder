// const practiceHeading = document.getElementById('practice');

// // practiceHeading.addEventListener('click', function() {
// //     alert('Practice heading clicked!');
// // });

// practiceHeading.style.color = 'blue';

// practiceHeading.addEventListener('mouseenter', function() {
//     practiceHeading.style.color = 'red';
// });
//  practiceHeading.addEventListener('mouseout', function() {
//     practiceHeading.style.color = 'blue';
// });

// practiceHeading.addEventListener('dblclick', function() {
//     practiceHeading.style.fontSize = '30px';
//     document.body.style.backgroundColor = 'red';
// });


// btn.addEventListener('mouseover', function() {
    //     // add desired mouseover behavior here
    // btn.style.display='none';
    //     // btn.style.screenLeft='123px';
    // });
    
    
    // let num1 = 10;
    // let num2 = 20;
    // let num3 = 30;
    // let num4 = 40;
    
// let sum = num1 + num2 + num3 + num4;
// // console.log(sum);


// btn.addEventListener('click', function() {
    
//     document.getElementById('practice').innerHTML =
//         "Total sum = " + sum + "<b>";
// });


// const form = document.getElementsByClassName('form');
// btn.addEventListener('click', () =>{
    
    // document.getElementsByClassName('form').innerHTML='<p>"this is para"</p>'
    
    // } )
    
    
//     const btn = document.getElementById('bt');





const btn = document.getElementById("bt");
// btn.addEventListener('click',()=>{
  
//     var inputs = document.getElementById('input').value;

//     document.getElementById('practice').innerHTML=(inputs);
//      if (inputs % 2 === 0) {
//         document.getElementById("practice").innerHTML =
//             inputs + " is Even";
//     } else {
//         document.getElementById("practice").innerHTML =
//             inputs + " is Odd";
//     }

// })

function checkPrime(){
let n = parseInt(document.getElementById('input').value);
let i ;

if (n%2===0){
    document.getElementById('practice').innerHTML= n + " is even";
}
else{
    document.getElementById('practice').innerHTML= n + " is odd";

}

}









