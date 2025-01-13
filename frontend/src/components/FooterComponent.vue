<script setup lang="ts"></script>
<template>
    <div class="footer-section container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4">
                <p class="biz-title">Konnect</p>
                <p class="content">We have been connecting inventors with investors since 2021</p>
                <p class="biz-title">Follow us</p>
                <div class="socials">
                    <div><img src="./icons/mdi_twitter.png"></div>
                    <div><img src="./icons/ic_outline-facebook.png"></div>
                    <div><img src="./icons/ri_instagram-line.png"></div>
                    <div><img src="./icons/mdi_linkedin.png"></div>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <p class="biz-title">Let us Help You</p>
                <div class="content">
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Career</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
                <p class="biz-title">Policies</p>
                <div class="content">
                    <p>Cookies Policy</p>
                    <p>Privacy Notice</p>
                    <p>Terms and Conditions</p>
                    <p>Report</p>
                    <p>How do we use your data</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.biz-title{
    font-family: "Merriweather Sans", sans-serif;
    font-size: 18px;
    color: #E40066;
    font-weight: 540;
}
.content{
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #261447;
}
.socials{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.socials>div{
    margin: 10px;
}
</style>