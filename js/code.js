var cssCode = window.cssCode = `
/* 先准备一个下代码的地方吧 */
#code {
    position: fixed;
    width: 30%;
    height: 100vh;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color:#fff;
    overflow: auto;
    z-index: 10;
}

/*准备一下画布*/
#paper {
    width: 70%;
    height: 100%;
    text-align: center;
}

/*先来一片蓝天*/
body {
    background-color: #87B9F6;
}

/*爱上一头野猪，要给她画个草原*/
#ground {
    position: relative;
    margin: auto;
    overflow: hidden;
    top: 70%;
    width: 400%;
    height: 30%;
    background-color: #77C76E;
    border-radius: 50% 50% 50% 50% / 3% 9% 0% 0%;
    z-index: -4;
}

/*接下来画佩奇让我们加快一点速度吧！*/ 
`
var cssCode2 = window.cssCode2 = `
#peppa {
    position: relative;
    top: 60%;
    left: 30%;
    width: 300px;
}

#peppa * {
    position: absolute;
}

/*社会猪的社会装*/
.dress {
    top: 4px;
    left: 14px;
    width: 180px;
    height: 154px;
    background-color: #E9565E;
    border: 8px solid #E3353F;
    border-bottom: none;
    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    z-index: -2;
}


.bottom_of_dress {
    top: 164px;
    left: 14px;
    height: 6px;
    width: 196px;
    background-color: #E3353F;
    border-radius: 5px;
    z-index: 5;
}

/*准备脸部工作*/
.top_of_face {
    top: -107px;
    left: 40px;
    height: 150px;
    width: 147px;
    background-color: #FFB0DF;
    border: 7px solid #EB8DC2;
    border-bottom-left-radius: 220px;
    border-top-right-radius: 350px;
    border-bottom-right-radius: 235px;
    border-top-left-radius: 180px;
    transform: rotate(18deg);
}

.bottom_of_face_1, .bottom_of_face_2 {
    top: -69px;
    left: 31px;
    height: 121px;
    width: 149px;
    background-color: #FFB0DF;
    border-radius: 50%;
    transform: rotate(180deg);
}

.bottom_of_face_1 {
    border: 7px solid #EB8DC2;
    border-bottom: 7px solid transparent;
    z-index: 2;
}

.bottom_of_face_2 {
    border: 7px solid #EB8DC2;
    border-bottom: 7px solid transparent;
    z-index: 1;
}

/* 来点腮红 */
.cheek {
    top: -58px;
    left: 121px;
    width: 45px;
    height: 50px;
    background-color: #FF8CD1;
    border: 11px solid #FFB0DF;
    border-radius: 50%;
    transform: rotate(24deg);
    z-index: 3;
}

/*猪鼻要挺拔*/
.bottom_of_nose, .top_of_nose {
    background-color: #FFB0DF;
    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
}

.bottom_of_nose {
    top: -113px;
    left: -11px;
    width: 60px;
    height: 76px;
    border-left: 7px solid #EB8DC2;
    border-top: 7px solid #EB8DC2;
    transform: rotate(-70deg);
}

.top_of_nose {
    top: -149px;
    left: 11px;
    width: 68px;
    height: 105px;
    border-right: 7px solid #EB8DC2;
    border-top: 6px solid #EB8DC2;
    border-left: 2px solid transparent;
    transform: rotate(-73deg);
}

.center_of_nose {
    top: -128px;
    left: -16px;
    height: 58px;
    width: 42px;
    background-color: #FFB0DF;
    border: 7px solid #EB8DC2;
    border-radius: 50%;
    transform: rotate(29deg);
    z-index: 3;
}

.center_of_nose:before, .center_of_nose:after {
    position: absolute;
    content: "";
    width: 11px;
    height: 12px;
    background-color: #D667A9;
    border-radius: 50%;
    transform: rotate(-39deg);
}

.center_of_nose:before {
    top: 24px;
    left: 7px;
}

.center_of_nose:after {
    top: 19px;
    right: 8px;
}

.part_of_nose {
    top: -49px;
    left: 44px;
    width: 1px;
    height: 1px;
    background-color: #FFB0DF;
    border: 9px solid #FFB0DF;
    border-radius: 50px;
    z-index: 2;
}

/*猪眼要有神*/
.eyes:before, .eyes:after {
    position: absolute;
    content: "";
    background-color: #FDFDFD;
    border: 5px solid #FDFDFD;
    border-radius: 47%;
    z-index: 2;
}

.eyes:before {
    top: -105px;
    left: 65px;
    width: 11px;
    height: 12px;
}

.eyes:after {
    top: -92px;
    left: 107px;
    width: 12px;
    height: 13px;
    transform: rotate(-20deg);
}

.right_pupil, .left_pupil {
    height: 11px;
    width: 10px;
    background-color: #000;
    border-radius: 47%;
    transform: rotate(40deg);
    z-index: 3;
}

.left_pupil {
    top: -99px;
    left: 73px;
}

.right_pupil {
    top: -85px;
    left: 116px;
}


.right_eye_socket, .left_eye_socket {
    width: 35px;
    height: 35px;
    background-color: #EB8DC2;
    border-radius: 50%;
}

.right_eye_socket {
    top: -98px;
    left: 100px;
    transform: rotate(-35deg);
    z-index: 2;
}

.left_eye_socket {
    top: -112px;
    left: 58px;
    z-index: 1;
}

/* 猪耳要招风 */
.left_ear, .right_ear {
    height: 44px;
    background-color: #FFB0DF;
    border: 7px solid #EB8DC2;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    z-index: -1;
}

.left_ear {
    top: -154px;
    left: 108px;
    width: 21px;
    transform: rotate(190deg);
}

.right_ear {
    top: -132px;
    left: 149px;
    width: 23px;
    transform: rotate(210deg);
}

/*猪嘴要性感*/
.mouth {
    top: -54px;
    left: 55px;
    width: 64px;
    height: 71px;
    border-radius: 50%;
    background-color: transparent;
    border-bottom: 6px solid #D8468F;
    border-left: 4px solid transparent;
    border-right: 5px solid transparent;
    transform: rotate(24deg);
    z-index: 2;
}

/*猪手要美丽*/
.left_hand, .right_hand {
    top: 72px;
    height: 10px;
    background-color: #FDB6E0;
    border-radius: 5px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
}

.left_hand {
    left: -29px;
    width: 75px;
    transform: rotate(156deg);
    z-index: -3;
}

.right_hand {
    left: 180px;
    width: 70px;
    transform: rotate(204deg);
    z-index: 2;
}

.first_finger, .second_finger, .third_finger, .fourth_finger{
    height: 8px;
    background-color: #FDB6E0;
    border-radius: 5px;
    z-index: 3;
}

.first_finger {
    top: 75px;
    left: -26px;
    width: 22px;
    border-top-left-radius: 50%;
    border-top-right-radius: 35%;
    transform: rotate(16deg);
}

.second_finger {
    top: 87px;
    left: -17px;
    width: 18px;
    border-bottom-right-radius: 50%;
    transform: rotate(105deg);
}


.third_finger {
    top: 78px;
    left: 230px;
    width: 22px;
    border-top-left-radius: 35%;
    border-top-right-radius: 50%;
    transform: rotate(-18deg);
}

.sixth_finger {
    top: 89px;
    left: 224px;
    width: 18px;
    border-top-right-radius: 50%;
    transform: rotate(75deg);
}



/*猪尾巴要灵动*/
.left_of_tail, .right_of_tail {
    width: 19px;
    background-color: transparent;
    border: 8px solid #FDB6E0;
    border-radius: 50%;
    z-index: -3;
}

.left_of_tail {
    top: 100px;
    left: 194px;
    height: 30px;
    border-right: 7px solid transparent;
    transform: rotate(-80deg);
}

.right_of_tail {
    top: 102px;
    left: 215px;
    height: 24px;
    border-left: 7px solid transparent;
    border-top: 9px solid transparent;
    transform: rotate(80deg);
}

.top_of_tail {
    top: 111px;
    left: 212px;
    height: 8px;
    width: 8px;
    background-color: transparent;
    border: 6px solid transparent;
    border-top: 8px solid #FDB6E0;
    border-radius: 50%;
    z-index: -3;
}


/*猪腿要修长*/
.left_leg, .right_leg {
    top: 170px;
    width: 10px;
    height: 42px;
    background-color: #FCB8E1;
    transform: rotate(-1.5deg);
    z-index: -1;
}

.left_leg {
    left: 72px;
}

.right_leg {
    left: 156px;
}

.left_foot, .right_foot {
    top: 185px;
    width: 55px;
    height: 55px;
}

.left_foot {
    left: 32px;
}

.right_foot {
    left: 116px;
}

.bottom_of_foot, .top_of_foot, .left_of_foot, .right_of_foot {
    background-color: #000;
}

.bottom_of_foot {
    top: 24px;
    left: 8px;
    width: 43px;
    height: 7px;
    border-bottom: 1px solid black;
    border-radius: 5px;
    transform: rotate(-1deg);
}


.left_of_foot {
    top: 18px;
    left: 2px;
    width: 22px;
    height: 13px;
    border-bottom: 1px solid black;
    border-radius: 50%;
}

/* 最后来点阴影 */
.shadow {
    top: 196px;
    left: 3px;
    width: 205px;
    height: 31px;
    background-color: #589454;
    border-radius: 50%;
    z-index: -3;
}
/* 大功告成！怎么样？这只佩奇是不是很像你呢？ */

`