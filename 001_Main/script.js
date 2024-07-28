const slides=document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
    (slide,index)=>{
    slide.style.left=`${index*100}%`
    }
);

const gonext=()=>{
    // alert("hello");
    counter++;
    console.log(counter);
    slideimg();
}

const goprev=()=>{
    // alert("hello");
    counter--;
    console.log(counter);
    slideimg();
}

const slideimg=()=>{
    slides.forEach(
        (slide)=>{
            if(counter<=2){
                slide.style.transition = 'transform 1s ease-in-out';
                slide.style.transform=`translateX(-${counter*100}%)`
            }else{
                slide.style.transition = 'transform 0.5s ease-in-out';;
                slide.style.transform = `translateX(0)`;
                counter = 0;
            }
        }
    )
}
//   < -----------------    second slider      -------------->

const riview=document.querySelectorAll(".client_riview");
var counter=0;
riview.forEach(
    (riview,index)=>{
        riview.style.left=`${index*100}%`
    }
);


const gonext2=()=>{
    // alert("hello");
    counter++;
    slideimg2();
}

const goprev2=()=>{
    // alert("hello");
    counter--;
    slideimg2();
}

const slideimg2=()=>{
    riview.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}

    //   number count

    let count = 0;
    let limit = 1000;
    let intervalId = null;
    const counterElement = document.getElementById('para23');
  
    function startCount() {
      count = 0;
      counterElement.innerText = count;
      intervalId = setInterval(incrementCounter, 10);
    }
  
    function incrementCounter() {
      count++;
      counterElement.innerText = count;
      if (count >= limit) {
        clearInterval(intervalId);
      }
    }
  
    // Start counting when the page loads
    window.onload = function() {
      startCount();
    }; 























