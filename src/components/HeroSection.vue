<template>
    <section class="hero-section">
        <div class="hero-section-text">
            <h1 class="hero-title">HandBage</h1>
            <p class="hero-subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea at veritatis minus architecto temporibus molestiae architecto nobis hic.
            </p>
            <button class="hero-btn">
                Shop Now →
            </button>
        </div>
        <div class="hero-section-img">
            <img src="../assets/img/hero-section.png" alt="hero-section">
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
:root {
    --main-color: #B00F21;
}

.hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    padding: 2.5rem 15%;
}
.hero-section-text {
    width: 30%;
}
.hero-section-text h1 {
    font-size: 50px;
    font-weight: bold;
}
.hero-section-text p { 
    color: #6d6d6d;
}
.hero-section-text button.hero-btn { 
    margin-block: 20px; /* Margin => Top And Bottom */
    width: 120px;
    height: 40px;
    color: #fff;
    font-size: 16px;
    background-color: var(--main-color);
    border: 1px solid var(--main-color);
    transition: .5s;
    cursor: pointer;
}
.hero-section-text button.hero-btn:hover { 
    background-color: transparent;
    border: 1px solid var(--main-color);
    color: var(--main-color);
} 
.hero-section-img {
    height: 100%;
    background-position: right;
}

@media screen and (max-width: 1024px) {
    .hero-section-text {
        width: auto;
        text-align: center;
    }
    .hero-section-img {
        display: block;
        margin: auto;
    }
}

</style>