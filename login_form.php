<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8">
<title>PHP 프로그래밍</title>
<link rel="stylesheet" type="text/css" href="./css/common.css">
<link rel="stylesheet" type="text/css" href="./css/login.css">

<!-- 자신의 프로젝트에 포함시켜야할 파일! -->
<!-- 로그인 페이지의 아이디와 비밀번호 입력창에 데이터가 있는지 검사 후 경고 창 출력 -->
<!-- 데이터가 제대로 입력되었다면 login.php로 이동. -->
<script type="text/javascript" src="./js/login.js"></script>


</head>
<body> 
	<header>
    	<?php include "header.php";?>
    </header>
	<section>
		<div id="main_img_bar">

        </div>
        <div id="main_content">
      		<div id="login_box">
	    		<div id="login_title">
		    		<h1>로그인</h1>
	    		</div>
	    		<div id="login_form">
					<div class="lPoint"><img src="./img2/login_lpoint.png" width="80" height="20" alt="L-Point"><p>회원 아이디와 비밀번호로 로그인하세요.</p></div>
          			<form  name="login_form" method="post" action="login.php"> 	       	
						<ul>
						<li><input type="text" name="id" placeholder="아이디"></li>
						<li><input type="password" id="pass" name="pass" placeholder="비밀번호"></li> <!-- pass -->
						<li>
							<div class="check">
								<div class="checkID">
									<input type="checkbox" id="checkID">
									<label for="checkID">아이디 저장</label>
								</div>
								<div>
									<button>아이디찾기</button>
									<button>비밀번호찾기</button>
								</div>
							</div>
						</li>
						</ul>
						<div id="login_btn">
							<!-- ekkkk1230 ra1031420116! -->
						<!-- <a href="#"><img src="./img/login.png" onclick="check_input()"></a>  -->
						<!-- 로그인 페이지 입력창에 아이디와 비번을 입력하여 버튼을 클릭하면 함수 실행. 아이디 입력창에 데이터가 비어있으면 경고창 띄움. -->
						<button>로그인</button>
						</div>		  	
					</form>
					<div class="join">
						<p>
							<span class="img">L-point</span>회원으로 가입하시면 동일한 아이디와 비밀번호로 모든<span class="img">L-point</span>사이트의 서비스를 안전하게 이용하실 수 있습니다.
						</p>

						<a href="member_form.php">회원가입</a>
					</div>  
					<div class="contact">
						<p>회원정보와 관련된 문의사항이 있으시면 고객만족센터에 연락하세요.</p>
						<p>고객만족센터 : 18899-8900</p>
					</div>
        		</div>
    		</div>
        </div> 
	</section> 
	<footer>
    	<?php include "footer.php";?>
    </footer>
	<script src="./js/common.js"></script>
</body>
</html>
