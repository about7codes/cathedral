// Home page main slider js -----------------------------------

// Documentation - https://nickpiscitelli.github.io/Glider.js/

window._ = new Glider (document.querySelector ('.glider'), {

    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: false,
    rewind: true,
    scrollLock: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        // breakpoint: 700,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
        //   slidesToShow: 2,
        //   slidesToScroll: 1,
          // itemWidth: 150,
          // duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        // breakpoint: 1024,
        settings: {
        //   slidesToShow: 3,
        //   slidesToScroll: 1,
          // itemWidth: 150,
          // duration: 0.25
        }
      }
    ]
});



var glider = new Glider(document.getElementById('nxmob-slider'));

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(glider, 5000);

