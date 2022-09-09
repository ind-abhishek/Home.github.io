@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto+Mono:wght@300;500&family=Poppins:wght@600&display=swap');


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
}

body {
    overflow-x: hidden;
}

html {
    font-size: 62.5%;
    /* 1rem = 10px */
    overflow-x: hidden;
    scroll-behavior: smooth;
}


.main-width {
    width: 1280px;
    max-width: 95%;
    margin: 0 auto;
    padding: 0 14px;
}

.hero {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img-13.jpg);
    background-size: cover;
    background-position: center;
    position: relative;
}

/* ---------NAVBAR---------- */

/* ===========================================
 Headar and Navbar Styling 
======================================= */

body {
    overflow-x: hidden;
}

/* 
html {
  background-color: #0B0B0E;
  background-color: #358781;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/img-13.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
                /* overflow: hidden; */
*/ html {
    /* font-size: 62.5%; */
    /* 1rem = 10px */
    overflow-x: hidden;
    scroll-behavior: smooth;
}


.main-width {
    width: 1280px;
    max-width: 95%;
    margin: 0 auto;
    padding: 0 14px;
}


.header {
    padding: 33px 0 30px;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}

.logo i {
    height: 55px;
    width: 55px;
    background: transparent;
    border: 2px solid #6FEDD6;
    color: #6FEDD6;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    margin-top: -6px;
}

.nav-btn {
    white-space: nowrap;
    margin-top: -7px;
}

.nav-btn a {
    color: #eee;
    text-decoration: none;
}

.nav-btn a:hover {
    color: #eee;
}

.nav-btn {
    color: #eee;
    background: transparent;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 8px 30px;
    border: 3px solid #04DB9F;
    border-radius: 30px;
    cursor: pointer;
    white-space: nowrap;
}

.nav-btn:hover {
    background-color: #FF9551;
    border: 3px solid #FF9551;
    color: #eee;
    transition: .4s;
}


.navbar-list {
    display: flex;
    margin-top: -2px;
    gap: 51px;
    list-style: none;
    font-family: 'Poppins', sans-serif;
}

.navbar-list .btn {
    display: inline-block;
    background: transparent;
    border: 2px solid #6FEDD6;
    padding: 9px 28px;
    border-radius: 30px;
    line-height: 1.3;
    color: #6FEDD6;
    font-weight: 500;
    margin-top: -7px;

}

.navbar-list .btn:hover {
    background: #FF9551;
    color: white;
    border: 2px solid transparent;
    transition: .4s;
}

.navbar-link:link,
.navbar-link:visited {
    display: inline-block;
    /* text-transform: uppercase; */
    text-decoration: none;
    font-size: 19px;
    font-weight: 500;
    color: #eee;
    transition: all 0.3s;
}

.navbar-link:hover,
.navbar-link:active {
    color: #6FEDD6;
}

.mobile-navbar-btn {
    display: none;
    background: transparent;
    cursor: pointer;
}

.mobile-nav-icon {
    width: 4rem;
    height: 4rem;
    color: #6FEDD6;
}

.mobile-nav-icon[name="close-outline"] {
    display: none;
}


.btn-col:hover {
    color: #eee;
}

.nav-and-main-btn:hover {
    color: #eee;
}

/* ------NAV RESPONSIV------ */

/* ---Tablat */


@media screen and (max-width: 768px) {

    html {
            font-size: 40%;
        }

    .mobile-navbar-btn {
        display: block;
        z-index: 4;
        border: 2px solid #64CBBA;
        color: #212529;
        position: absolute;
        margin-left: 615px;
    }

    .header {
        position: relative;
    }

    .logo i {
        margin-top: 20px;
    }


    .navbar {
        /* display: none; */
        width: 100vw;
        height: 100vh;
        background: black !important;
        position: absolute;
        top: 0;
        left: 0;
        /* margin-left: px; */
        display: flex;
        justify-content: center;
        align-items: center;

        /* to get the tranisition  */
        transform: translateX(100%);
        transition: all 0.5s linear;

        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        z-index: 2;
        position: fixed;
    }

    .navbar-list {
        flex-direction: column;
        align-items: center;
    }

    .navbar-link:hover,
    .navbar-link:active {
        color: #2ecc71;
    }

    .navbar-list .btn {
        display: none;
    }

    .active .navbar {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .active .mobile-navbar-btn .mobile-nav-icon[name="close-outline"] {
        display: block;
        position: fixed;
        /* overflow: hidden; */
        z-index: 3;
        /* margin-left: 674px; */
        margin-top: -29px;
    }

    .active .mobile-navbar-btn .mobile-nav-icon[name="menu-outline"] {
        display: none;
        position: fixed;
    }
}


/* ---phone */

@media screen and (max-width: 420px) {
    .mobile-navbar-btn {

        margin-left: 285px;

    }
}

/* ===========================================
 Hero and Main section  
======================================= */

.container {
    padding-top: 190px;
}

.container .hero-text {
    margin-bottom: 40px;
}

.container .hero-text h1 {
    color: white;
    font-size: 48px;
    font-weight: 900;
    line-height: 1.2;
    margin: 20px 0px 20px;
}


.container .hero-text h3 {
    color: #eee;
    font-weight: 400;
    font-size: 19px;
}

.container .hero-text p {
    width: 440px;
    max-width: 100%;
    color: #eee;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 30px;
}

.social a {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: #eee;
    cursor: pointer;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 35px;
}

.social a:hover {
    transform: scale(1.1);
    background: #6FEDD6;
    transition: .4s;
}

button a {
    color: #eee;
}

button a:hover {
    color: #eee;
}

.container .hero-text button {
    color: #eee;
    background: #FF9551;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 8px 30px;
    border: 3px solid #FF9551;
    border-radius: 30px;
    cursor: pointer;
}

.container .hero-text button:hover {
    background-color: transparent;
    border: 3px solid #6FEDD6;
    color: #eee;
    transition: .4s;
}

.bottom {
    color: #eee;
    letter-spacing: 2px;
    font-size: 15px;
    margin-top: 234px;
    padding-bottom: 40px;
}

span {
    color: #6FEDD6;
}

/* ===========================================
Responsive Codes 
======================================= */



/*Container and main page in mobile*/




.container .hero-text h1 {
    color: white;
    font-size: 40px;
    font-weight: 900;
    line-height: 1.2;
    margin: 20px 0px 20px;
}

.container .hero-text p {
    width: 430px;
    max-width: 100%;
    color: #eee;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 30px;
}

.bottom {
    font-size: 14px;
}

.social a {
    width: 29px;
    height: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: #eee;
    cursor: pointer;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 35px;
}


/* Below 560px  */
@media (max-width: 35em) {
    .header {
        padding: 0 2.4rem;
    }

    .header .logo {
        width: 60%;
    }
}
