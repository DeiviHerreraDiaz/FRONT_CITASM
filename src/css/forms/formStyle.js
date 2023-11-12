import {css} from 'lit-element'


export default css`

body{
    background-size: cover;
    
    }

.form-container {
    display: flex;
}

.header {
    background-color: rgb(56, 172, 205);
}

.form-tab {
    cursor: pointer;
    padding: 10px 20px;
    background-color:rgb(56, 172, 205);
    border-radius: 5px;
    user-select: none;
}

.form-tab:hover {
    background-color: rgb(67, 201, 194);
}

.form-tab.active {
    background-color:rgb(99, 209, 229);
}

#clienteForm {
    display: block;
}

#doctorForm {
    display: none;
}


.card{

margin-top: 100px;
box-shadow: 3px 5px 6px rgba(114, 192, 145, 0.6)    ;

}

.text-center{
color: white;
margin: 0px 0px 8px;
}

.pass {
color: rgb(208, 204, 204);
font: 16px;
text-decoration: none;
}

.login{
margin: 20px;
}

.registro{
    margin: 20px;
    }

body img{
height: 100px;
}

.btn-login{

border-radius: 12px;
border:none;
background-color: rgb(67, 201, 194);
color: white;
height: 40px;
width: 185px;


}

.form-control{


border: none;
border-bottom: 0.5px solid rgb(67, 201, 194);
border-left: 0px;
border-right: 0px;
border-radius: 0px;
}

.date{

padding-left: 10px;

}

.input-group-text{


display: flex;
justify-content: center;
align-items: center;
text-align: center;

}

.footer-class{

position: fixed;
bottom: 0px;

}

.footerOne{

border-radius: 50px !important; 

}

.image-container {
text-align: center;
margin-top: 80px;
}

.image-container img {
max-width: 500px;
height:500px;
}

.navbar-brand{
font-size: 30px !important;
margin-left: 10px;
color: white;
}
.menu-h{
margin-left: 870px;
font-size: 20px;
}

.menu-v{
position: absolute;
display: none;
list-style: none;
width: 200px;
background-color: #e3f2fd;
}

.menu-h li:hover .menu-v{

display: block;
}

.menu-v li  {
display: block;
padding: 5px 5px 5px  10px;

}

.menu-v li a {
text-decoration: none;
color: black;
}

.perfil{

padding-left: 50px;

}

.navbar-collapse a{

color: white;

}




`