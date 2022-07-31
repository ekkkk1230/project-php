/* 스크롤 시 메뉴 이동 */
const $gnb = document.querySelector('#gnb');
const $top = document.querySelector('#top');
window.addEventListener('scroll',()=>{
    if(window.scrollY >= 10){
        $gnb.style.position = 'relative';
        $gnb.style.top = '-50px';
        $top.style.top = '0'
    }else if(window.scrollY == 0){
        $gnb.style.position = 'relative';
        $gnb.style.top = '-10px';
        $top.style.top = '35px'
    }
})

/* 메뉴 날짜 */
let now = new Date();
let month = now.getMonth();
month += 1;
if(month<=9){
    month = "0"+month
}
let date = now.getDate();
if(date<=9){
    date = "0"+date
}
let day = now.getDay();
let week = new Array('일','월','화','수','목','금','토');
let today = week[day];

document.querySelectorAll('.month').forEach(month_blank => {
    month_blank.innerText = month;
})
document.querySelectorAll('.date').forEach(date_balnk =>{
    date_balnk.innerText = date;
})
document.querySelectorAll('.day').forEach(day_balnk =>{
    day_balnk.innerText = today;
})

/* 메뉴 활성화 */
const depth1 = document.querySelectorAll('#menu_bar>ul>li');
const depth2 = document.querySelectorAll('.depth2>li');
const depth3 = document.querySelectorAll('.depth3');

window.addEventListener('mousemove', e => {
    
    let now = e.target;
    /* console.log(now) */
    let mstg = now.getAttribute('class')
    /* console.log(mstg) */
    if (mstg == 'subMenuBg'){
       /*  console.log('dd') */
        depth1.forEach(li=>{
            li.classList.remove('show_mn')
        })
    }
})
depth1.forEach(li=>{
    li.classList.remove('show_mn')

    li.addEventListener('mouseover',()=>{
        li.classList.add('show_mn')
    })
    li.addEventListener('mouseleave',()=>{
        li.classList.remove('show_mn')
    })
})
depth2.forEach(li => {
    li.addEventListener('mouseenter', e =>{
       let tg = e.target;
       tg.classList.add('hover');
       tg.querySelector('.depth3').classList.add('on');
       
       depth3.forEach(dep3 => {
            dep3.querySelectorAll('li').forEach(li => {
                li.addEventListener('mouseenter', e => {
                    let dep3tg = e.target;
                    console.log(dep3tg)
                    dep3tg.classList.add('hover');
                })
                li.addEventListener('mouseleave', ()=>{
                    li.classList.remove('hover');
                })
            })
       })
    })
    li.addEventListener('mouseleave', e =>{
        li.classList.remove('hover')
     })
    
})