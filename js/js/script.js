/* 배너*/
const $bannerWrap = document.querySelector('.banner_wrap');
let slideWidth = $bannerWrap.clientWidth;
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
let bannerItem = document.querySelectorAll('.banner_wrap > li');
const bannerCount = bannerItem.length;
let bannerIdx = 1;
const btn = document.querySelector('.paly_btn li');

const pager = document.querySelector('.index_btn');
for(let i = 0; i<bannerCount; i++){
    if(i === 0) pager.innerHTML += `<li class="active"></li>`
    else pager.innerHTML += `<li></li>`
}
let pagerBtn = document.querySelectorAll('.index_btn > li');

const startSlide = bannerItem[0];
const endSlide = bannerItem[bannerCount-1];
const startEl = document.createElement(startSlide.tagName);
const endEl = document.createElement(endSlide.tagName);

startSlide.classList.forEach(c => startEl.classList.add(c));
endSlide.classList.forEach(c => endEl.classList.add(c));

bannerItem[0].before(endEl);
bannerItem[bannerCount-1].after(startEl);

bannerItem = document.querySelectorAll('.banner_wrap > li');
let offset = slideWidth * bannerIdx;
bannerItem.forEach(item => item.setAttribute('style', `left:${-offset}px`));

function nextMove(){
    bannerIdx++;
    if(bannerIdx <= bannerCount){
        const offset = slideWidth * bannerIdx;
        bannerItem.forEach(item => item.setAttribute('style', `left:${-offset}px`));

        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[bannerIdx-1].classList.add('active');
    }else{
        bannerIdx = 0;
        let offset = slideWidth * bannerIdx;
        bannerItem.forEach(item => item.setAttribute('style', `transition:${0}s; left:${-offset}px`));
        
        bannerIdx++;
        offset = slideWidth + bannerIdx;
        setTimeout(()=>{
            bannerItem.forEach(item => item.setAttribute('style', `transition:${.4}s; left:${-offset}px`));
        })

        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[bannerIdx-1].classList.add('active');
    }
}

function prevMove(){
    bannerIdx--;
    if(bannerIdx > 0){
        const offset = slideWidth * bannerIdx;
        bannerItem.forEach(item => item.setAttribute('style', `left:${-offset}px`));

        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[bannerIdx-1].classList.add('active');
    }else{
        bannerIdx = bannerCount+1;
        let offset = slideWidth * bannerIdx;
        bannerItem.forEach(item => item.setAttribute('style', `transition:${0}s; left:${-offset}px`));
        
        bannerIdx--;
        offset = slideWidth * bannerIdx;
        setTimeout(()=>{
            bannerItem.forEach(item => item.setAttribute('style', `transition: ${.4}s; left: ${-offset}px`));
        },0)

        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[bannerIdx-1].classList.add('active');
    }
}

$prev.addEventListener('click', prevMove);
$next.addEventListener('click', nextMove);

for(let i=0; i<bannerCount; i++){
    pagerBtn[i].addEventListener('click', ()=>{
        bannerIdx = i+1;
        const offset = slideWidth * bannerIdx;
        bannerItem.forEach(item => item.setAttribute('style', `left: ${-offset}px`));

        pagerBtn.forEach(btn => btn.classList.remove('active'));
        pagerBtn[bannerIdx-1].classList.add('active');
    })
}

let startPoint = 0;
let endPoint = 0;

$bannerWrap.addEventListener('mousedown', e => {
    startPoint = e.pageX;
})
$bannerWrap.addEventListener('mouseup', e => {
    endPoint = e.pageX;
    console.log(startPoint)
    console.log(endPoint)
    if(startPoint < endPoint){
        prevMove();
    }else{
        nextMove();
    }
})

let Interval = setInterval(()=>{
    nextMove();
}, 3000)

$bannerWrap.addEventListener('mouseenter', ()=>{
    clearInterval(Interval);
})
$bannerWrap.addEventListener('mouseleave', ()=>{
    Interval = setInterval(()=>{
        nextMove();
    }, 3000)
})



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