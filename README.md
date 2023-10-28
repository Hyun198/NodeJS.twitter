# NodeJS.twitter
nodejs twitter clone and execute service 


## SQL 서버로 연결 (sequelize)


## 구현 목표

    user 회원가입, post 처리 / user 로그인시 local, kakao / websoket 을 활용해서 채팅 가능하게

### 현재 진행 내역

    현재 데이터베이스 연결까지 (user, post)  로그인 구현(passport , kakao-passport) 
    
    (controller/auth/ join, login, logout) , model/user, passport/localstrategy. route/auth

    localstrategy 완료 

    post route 연결 완료

    프로필 정보 변경 완료

    프로필 페이지 완료

    kakao 로그인 완료 --> kakao api에서 로그아웃 하는 법 구현 중


### 구현해야할것

    실시간 채팅, 프론트,   게시글 삭제, 사용자 이름 누르면 그 사용자의 게시글만 보여주기, 매번 데이터베이스 조회하지 않도록 deserializeUser 캐싱 , google-passport, 회원가입 시 이메일 인증
