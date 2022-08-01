<head>
<link rel="stylesheet" type="text/css" href="./css/common.css">
</head>
<?php
    include "define.php"; 
    
    session_start(); //세션의 시작. 세션을 저장하거나 저장된 세션을 사용할 대 미리 선언해야 함.

    if (isset($_SESSION["userid"])) $userid = $_SESSION["userid"];
    //isset()함수는 id값이 있는지 검사하여 값이 있으면 true, 없다면 false를 반환

    else $userid = ""; //값을 null로 설정.

    if (isset($_SESSION["username"])) $username = $_SESSION["username"];
    
    else $username = ""; 

    if (isset($_SESSION["userlevel"])) $userlevel = $_SESSION["userlevel"];
    else $userlevel = "";

    if (isset($_SESSION["userpoint"])) $userpoint = $_SESSION["userpoint"];
    else $userpoint = "";

?>		
        <div id="gnb">
            <div class="gnb_width">
                <ul class="sub_site_link">
                    <li><a href="#none">SEOUL SKY</a></li>
                    <li><a href="#none">롯데월드 아쿠아리움</a></li>
                    <li><a href="#none">김해롯데워터파크</a></li>
                    <li><a href="#none">롯데월드 어드벤처 부산</a></li>
                </ul>
                <ul class="sub_site_link2">
                    <li><a href="#none">민속박물관</a></li>
                    <li><a href="#none">아이스링크</a></li>
                </ul>
                <ul class="gnb_menu">
                <?php
                    if(!$userid) { //로그인 되지 않은 상태.
                    
                ?>           

                    <li><a href="login_form.php">Login</a></li>
                    <li><a href="member_form.php">회원가입</a></li>

                <?php
                    } else { //로그인 상태. 사용자이름,아이디,레벨,포인트가 출력됨.
                    

                        $logged = $username."님";
                        /* $logged = $username."님 [Level:".$userlevel.", Point:".$userpoint."]"; */
                        

                        ?>
                        <li><?=$logged?> </li>
                        <li> | </li>
                        <li><a href="logout.php">로그아웃</a> </li>
                        <li> | </li>
                        <li><a href="member_modify_form.php">마이페이지</a></li>
                        
                <?php
                    }
                ?>

                <?php
                    if($userlevel==1) { //관리자모드버튼. 로그인한 사용자가 관리자인지 확인.
                                        //하여 관리자라면 관리자 페이지 접속할 메뉴가 생성됨.
                ?>
                                        <li> | </li>
                                        <li><a href="admin.php">관리자 모드</a></li>
                <?php
                    }
                ?>

                </ul>
            </div>
        </div>
        <div id="top">
            <div class="top_inner">
                <h1>
                    <a href="index.php"><span class="hidden">롯데월드</span><img src="./img2/logo.png" width="120"></a>
                </h1>
    
                <div id="menu_bar">
                    <ul>  
                        <li class="show_mn depth1"><a href="#">즐길거리</a>
                            <div class="sub_wrap">
                                <div class="subMenuBg">
                                </div>
                                <div class="subMenu_wrap">
                                    <div class="subMenu_inner">
                                        <div class="time">
                                            <div class="img"></div>
                                            <p><span class="month"></span>.<span class="date"></span> (<span class="day"></span>)</p>
                                            <p>오늘의 파크 <br><span>운영시간</span></p>
                                            <p>10:00 ~ 21:00</p>
                                        </div>
                                        <ul class="depth2">
                                            <li><a href="#none">어트랙션</a></li>
                                            <li><a href="#none">페스티벌</a></li>
                                            <li><a href="#none">공연</a>
                                                <ul class="depth3">
                                                    <li><a href="#none">금주의 공연</a></li>
                                                    <li><a href="#none">캐릭터 소개</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#none">다이닝/쇼핑</a>
                                                <ul class="depth3">
                                                    <li><a href="#none">레스토랑</a></li>
                                                    <li><a href="#none">기프트샵</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#none">다시만난월드 : <br>캐릭터 전시회</a></li>
                                        </ul>
                                        <div class="app">
                                            <a href="#none">
                                                <p><span>앱 다운로드</span>로<br>더 스마트하게!</p>
                                                <div class="app_contents">
                                                    <ul>
                                                        <li>모바일 예매</li>
                                                        <li>모바일 티켓발권</li>
                                                        <li>매직패스 예약</li>
                                                    </ul>
                                                    <div class="img"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="depth1"><a href="#">요금/우대혜택</a>
                            <div class="sub_wrap">
                                <div class="subMenuBg">
                                </div>
                                <div class="subMenu_wrap">
                                    <div class="subMenu_inner">
                                        <div class="time">
                                            <div class="img"></div>
                                            <p><span class="month"></span>.<span class="date"></span> (<span class="day"></span>)</p>
                                            <p>오늘의 파크 <br><span>운영시간</span></p>
                                            <p>10:00 ~ 21:00</p>
                                        </div>
                                        <ul class="depth2">
                                            <li><a href="#none">이용요금</a>
                                                <ul class="depth3">
                                                    <li><a href="#none">티켓요금</a></li>
                                                    <li><a href="#none">매직패스 프리미엄</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#none">이달의 혜택</a>
                                                <ul class="depth3">
                                                    <li><a href="#none">혜택 정보</a></li>
                                                    <li><a href="#none">제휴카드 조회</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#none">연간이용</a>
                                                <ul class="depth3">
                                                    <li><a href="#none">권종별 기본가격</a></li>
                                                    <li><a href="#none">할인정보</a></li>
                                                    <li><a href="#none">특별혜택</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#none">롯데월드카드</a>
                                                <ul class="depth3">
                                                    <li><a href="#none">롯데월드 혜택</a></li>
                                                    <li><a href="#none">카드 혜택</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="app">
                                            <a href="#none">
                                                <p><span>앱 다운로드</span>로<br>더 스마트하게!</p>
                                                <div class="app_contents">
                                                    <ul>
                                                        <li>모바일 예매</li>
                                                        <li>모바일 티켓발권</li>
                                                        <li>매직패스 예약</li>
                                                    </ul>
                                                    <div class="img"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="depth1"><a href="#">참여프로그램</a>
                            <div class="sub_wrap">
                                <div class="subMenuBg">
                                </div>
                                <div class="subMenu_wrap">
                                    <div class="subMenu_inner">
                                        <div class="time">
                                            <div class="img"></div>
                                            <p><span class="month"></span>.<span class="date"></span> (<span class="day"></span>)</p>
                                            <p>오늘의 파크 <br><span>운영시간</span></p>
                                            <p>10:00 ~ 21:00</p>
                                        </div>
                                        <ul class="depth2">
                                            <li><a href="#none">공연 참여</a></li>
                                            <li><a href="#none">가든스테이지 좌석예약</a></li>
                                        </ul>
                                        <div class="app">
                                            <a href="#none">
                                                <p><span>앱 다운로드</span>로<br>더 스마트하게!</p>
                                                <div class="app_contents">
                                                    <ul>
                                                        <li>모바일 예매</li>
                                                        <li>모바일 티켓발권</li>
                                                        <li>매직패스 예약</li>
                                                    </ul>
                                                    <div class="img"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="depth1"><a href="#">이용가이드</a>
                            <div class="sub_wrap">
                                <div class="subMenuBg">
                                </div>
                                <div class="subMenu_wrap">
                                    <div class="subMenu_inner">
                                        <div class="time">
                                            <div class="img"></div>
                                            <p><span class="month"></span>.<span class="date"></span> (<span class="day"></span>)</p>
                                            <p>오늘의 파크 <br><span>운영시간</span></p>
                                            <p>10:00 ~ 21:00</p>
                                        </div>
                                        <ul class="depth2">
                                            <li><a href="#none">운영/운휴</a></li>
                                            <li><a href="#none">파크 이용안내</a></li>
                                            <li><a href="#none">편의시설/제도</a>
                                                <ul class="depth3">
                                                    <li><a href="#none">모바일APP</a></li>
                                                    <li><a href="#none">편의시설</a></li>
                                                    <li><a href="#none">매직패스 제도</a></li>
                                                    <li><a href="#none">장애인 편의제도</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#none">오시는 길</a></li>
                                            <li><a href="#none">가이드맵</a></li>
                                        </ul>
                                        <div class="app">
                                            <a href="#none">
                                                <p><span>앱 다운로드</span>로<br>더 스마트하게!</p>
                                                <div class="app_contents">
                                                    <ul>
                                                        <li>모바일 예매</li>
                                                        <li>모바일 티켓발권</li>
                                                        <li>매직패스 예약</li>
                                                    </ul>
                                                    <div class="img"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="depth1"><a href="#">소통서비스</a>
                            <div class="sub_wrap">
                                <div class="subMenuBg">
                                </div>
                                <div class="subMenu_wrap">
                                    <div class="subMenu_inner">
                                        <div class="time">
                                            <div class="img"></div>
                                            <p><span class="month"></span>.<span class="date"></span> (<span class="day"></span>)</p>
                                            <p>오늘의 파크 <br><span>운영시간</span></p>
                                            <p>10:00 ~ 21:00</p>
                                        </div>
                                        <ul class="depth2">
                                            <li><a href="#none">공지사항</a></li>
                                            <li><a href="#none">FAQ</a></li>
                                            <li><a href="board_list.php">고객소리함</a>
                                                <ul class="depth3">
                                                    <li><a href="board_list.php">이용문의</a></li>
                                                    <li><a href="#none">칭찬/불편/건의</a></li>
                                                    <li><a href="#none">분실물 센터</a></li>
                                                    <li><a href="#none">촬영문의</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div class="app">
                                            <a href="#none">
                                                <p><span>앱 다운로드</span>로<br>더 스마트하게!</p>
                                                <div class="app_contents">
                                                    <ul>
                                                        <li>모바일 예매</li>
                                                        <li>모바일 티켓발권</li>
                                                        <li>매직패스 예약</li>
                                                    </ul>
                                                    <div class="img"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
    
    
                <ul id="icon_list">
                    <li><a href="#none">검색</a></li>
                    <li><a href="#none">예매</a></li>
                    <li><a href="#none">단체</a></li>
                    <li><a href="#none">기업체</a></li>
                    <li><a href="#none">상품몰</a></li>
                </ul>
            </div>

        </div>
        
        
      
