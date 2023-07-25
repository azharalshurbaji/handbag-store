<template>
    <header class="header">
        <div class="logo">
            <h1 class="logo-item title">HandBag</h1>
        </div>
        <nav class="navbar-sec">
            <ul class="navbar-items ">
                <li><RouterLink to="/">Home</RouterLink> </li>
                <li><RouterLink to="/about"> About</RouterLink> </li>
                <li><RouterLink to="/cart" >Cart</RouterLink> </li>
            </ul>
            <div class="icons-link">
                <div class="navbar-burger-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul class="navbar-burger-links">
                    <li><RouterLink to="/">Home</RouterLink> </li>
                    <li><RouterLink to="/about"> About</RouterLink> </li>
                    <li><RouterLink to="/cart" >Cart</RouterLink> </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script> 
import { RouterLink } from 'vue-router';

export default {
    components: {
      RouterLink,
    },
}
</script>

<style>

header.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 15%;
}
header nav.navbar-sec ul {
    display: flex;
    margin-top: 15px;
    list-style: none;
}
header nav.navbar-sec ul li{ 
    padding: 8px 15px;
    transition: background-color .5s;
    cursor: pointer;
    font-size: 18px;
} 
header nav.navbar-sec ul li a{ 
    padding: 8px 15px;
    text-decoration: none;
    color: #000;
    transition: .5s;
} 
header nav.navbar-sec ul li a:hover {
    background-color: #F03A5F !important;
    color: #fff !important;
 } 

    /* NavBar Burger */
header nav.navbar-sec .icons-link { 
    position: relative;
}
header nav.navbar-sec .icons-link {
    cursor: pointer;
    transition: .5s;
    visibility: hidden;
    direction: rtl;
}
header nav.navbar-sec .icons-link .navbar-burger-icon div {
    width: 50px;
    height: 1px;
    display: block;
    margin: 10px 0;
    background-color: #000;
}

header nav.navbar-sec .icons-link .navbar-burger-links {
    position: absolute;
        top: 50%;
        left: 50%;
    transform: translate(-90% , 10%);
    z-index: 1;
    background-color: #fcfafa;
    text-align: center;
    font-size: 20px;
    padding: 50px;
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: .5s;
}
header nav.navbar-sec .icons-link:hover .navbar-burger-links {
    visibility: visible;
    opacity: 1;
}


@media screen and (max-width: 1024px) {

    header nav.navbar-sec ul.navbar-items{
        display: none;
    }
    header nav.navbar-sec .icons-link {
        visibility: visible;
        opacity: 1;
    }
}

</style>