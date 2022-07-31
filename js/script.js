/* 배너*/
const slideWrapper = document.getElementById('banner');
const slides = document.querySelectorAll('.banner_wrap li');
const sliderWidth = slideWrapper.clientWidth;

let slideIndex = 0;
let totalSlides = slides.length;

slides.forEach(function (element) {
    element.style.width = sliderWidth + 'px';
})

const slider = document.querySelector('.banner_wrap');
slider.style.width = sliderWidth * totalSlides + 'px';

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});


// hover
slideWrapper.addEventListener('mouseover', function () {
    clearInterval(autoSlider);
});
slideWrapper.addEventListener('mouseleave', function () {
    autoSlider = setInterval(function () {
        plusSlides(1);
    }, 3000);
});


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }

    slider.style.left = -(sliderWidth * slideIndex) + 'px';
    pagination();
}

// play-stop btn
/* let stop = document.querySelector('.paly_btn li');
let stopbtn = 1;
stop.addEventListener('click',function () {

    if(stopbtn == 1){
        stop.classList.add('play')
        stopbtn = 2;
    }else if(stopbtn == 2){
        stop.classList.remove('play')
        stopbtn = 1;
    }
    
}) */

//pagination
slides.forEach(function () {
    let li = document.createElement('li');
    document.querySelector('#banner_btn .index_btn').appendChild(li);
})

function pagination() {
    let dots = document.querySelectorAll('#banner_btn .index_btn li');
    dots.forEach(function (element) {
      element.classList.remove('active')
    }); 
    dots[slideIndex].classList.add('active');
} 

pagination();
let autoSlider = setInterval(function () {
    plusSlides(1);
}, 3000);


//card
const choice = document.querySelectorAll('#card table tr td');
choice.forEach(el => {
    el.addEventListener('mouseover',()=>{
        el.classList.add('hover');
    })
    el.addEventListener('mouseleave',()=>{
        el.classList.remove('hover');
    })
})

//festival
const swiper = new Swiper('.swiper-container', {
    //기본 셋팅
    //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
    direction: 'horizontal',
    //한번에 보여지는 페이지 숫자
    slidesPerView: 6.5,
    //페이지와 페이지 사이의 간격
    spaceBetween: 30,
    //드레그 기능 true 사용가능 false 사용불가
    debugger: false,
    //마우스 휠기능 true 사용가능 false 사용불가
    mousewheel: true,
    //반복 기능 true 사용가능 false 사용불가
    loop: true,
    //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가
    centeredSlides: true,
    // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
    // effect: 'fade',
    loopedSlides: 4,
    
    
    //자동 스크를링
    autoplay: {
      //시간 1000 이 1초
      delay: 2500,
      disableOnInteraction: false,
     }
     
})


//attraction
/* const $tabBtns = document.querySelectorAll('.tab_btn li a');
const $tab_cont = document.querySelectorAll('.tab_cont ul');

$tab_cont.forEach(cont=>{
    cont.style.display='none';
})
$tabBtns.forEach(btn=>{
    btn.addEventListener('click',e=>{
        e.preventDefault();

        let orgTg = btn.getAttribute('href');
        console.log(orgTg)
        let tabTg = orgTg.replace('#','');

        $tab_cont.forEach(cont=>{
            cont.style.display='none';
        })

        document.getElementById(tabTg).style.display='grid'

        for(let i = 0; i<$tabBtns.length; i++){
            $tabBtns[i].parentNode.classList.remove('select');
            e.target.parentNode.classList.add('select')
        }
    })
    document.getElementById('tab_cont1').style.display='grid'
}) */

const $tabBtns = document.querySelectorAll('.tab_btn li');
const $tab_cont = document.querySelectorAll('.tab_cont');
$tabBtns.forEach((li,i)=>{

    li.addEventListener('click',()=>{
        if(i == 0){
            $tabBtns[1].classList.remove('select');
            $tabBtns[2].classList.remove('select');
            $tabBtns[0].classList.add('select');
            $tab_cont[1].classList.remove('show');
            $tab_cont[2].classList.remove('show');
            $tab_cont[0].classList.add('show');
        }else if(i==1){
            $tabBtns[0].classList.remove('select');
            $tabBtns[2].classList.remove('select');
            $tabBtns[1].classList.add('select');
            $tab_cont[0].classList.remove('show');
            $tab_cont[2].classList.remove('show');
            $tab_cont[1].classList.add('show');
        }else if(i==2){
            $tabBtns[0].classList.remove('select');
            $tabBtns[1].classList.remove('select');
            $tabBtns[2].classList.add('select');
            $tab_cont[0].classList.remove('show');
            $tab_cont[1].classList.remove('show');
            $tab_cont[2].classList.add('show');
        }
    })
})

//special
const special = document.querySelectorAll('#specail .photo_info li');
special.forEach(el => {
    el.addEventListener('mouseover',()=>{
        el.classList.add('hover')
    })
    el.addEventListener('mouseleave',()=>{
        el.classList.remove('hover')
    })
})