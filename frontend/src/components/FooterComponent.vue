<template>
    <div class="footer-section container-fluid">
        <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4">
                <p class="footer-site-title">Konnect</p>
                <p>We have been connecting inventors with investors since 2021</p>
                <p class="footer-title">Follow us</p>
                <ul class="social-list">
                    <li>
                        <a href="https://www.twitter.com" target="_blank" class="social-link"><span><font-awesome-icon
                                    :icon="['fab', 'x-twitter']" size="lg" class="social-icon" /></span></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" class="social-link"><span><font-awesome-icon
                                    :icon="['fab', 'facebook']" size="lg" class="social-icon" /></span></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" class="social-link"><span><font-awesome-icon
                                    :icon="['fab', 'instagram']" size="lg" class="social-icon" /></span></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" class="social-link">
                            <span><font-awesome-icon :icon="['fab', 'linkedin']" size="lg" class="social-icon" /></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
                <p class="footer-title">Let us Help You</p>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Career</li>
                </ul>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
                <p class="footer-title">Policies</p>
                <ul>
                    <li>Cookies Policy</li>
                    <li>Privacy Notice</li>
                    <li>Terms and Conditions</li>
                    <li>Report</li>
                    <li>How do we use your data</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.footer-section {
    padding: 2rem;
    max-width: 1280px;
}

a {
    text-decoration: none;
    color: black;
}

ul {
    list-style-type: none;
    padding: 0;
}

.footer-site-title {
    font-family: 'Merriweather Sans', sFans-serif;
    color: #e40066;
    font-weight: 600;
    font-size: 20px;
}

.footer-title {
    font-family: 'Merriweather Sans', sans-serif;
    color: #e40066;
    font-weight: 500;
    font-size: 16px;
}

.social-list {
    display: flex;
    list-style-type: none;
    padding: 0;
}

.social-list li {
    margin-right: 20px;
}
</style>
