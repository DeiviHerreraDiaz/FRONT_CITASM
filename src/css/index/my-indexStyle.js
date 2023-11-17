import { css } from "lit-element";

export default css `
*{
    margin: 0%;
}

.texto-index{
    text-align: center;
}

.navbar-brand{
    font-size: 30px !important;
    margin-left: 10px;
    color: white;
}

.nav-link{
    color: white;
}

.menu-h{
    margin-left: 650px;
    font-size: 20px;
    color: white;
}

.perfil{

    padding-left: 50px;

}

.carousel-item {
    height: 85vh;
    min-height: 300px;
}

.carousel-caption{
    bottom: 200px;
    z-index: 2;
}

.carousel-caption h5{
    font-size: 45px;
    letter-spacing: 2px;
    margin-top: 25px;
    color: white;
}

.carousel-caption p{
    width: 60%;
    margin: auto;
    font-size: 18px;
    color: white;
}

.carousel-inner::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 30, 82, 0.500);
    z-index: 1;
}

`
