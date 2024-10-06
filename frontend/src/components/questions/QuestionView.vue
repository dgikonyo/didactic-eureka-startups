<script setup lang="ts">
import NavbarComponent from '../NavbarComponent.vue';
</script>
<template>
    <NavbarComponent></NavbarComponent>
    <section class="question-1">
        <div class="">
            <h2 class="question-text">Select a primary category and subcategory for your new project.</h2>
            <p>These will help backers find your project, and you can change them later if you need to.</p>
        </div>
        <div class="categories">
            <div class="main-category">
                <p>Category</p>
                <select class="category-choices">
                    <option value="choice">FinTech</option>
                    <option value="choice">Saab</option>
                    <option value="choice">Mercedes</option>
                    <option value="choice">Audi</option>
                </select>
            </div>

            <div class="sub-category">
                <p>Category</p>
                <select class="category-choices">
                    <option value="choice">FinTech</option>
                    <option value="choice">Saab</option>
                    <option value="choice">Mercedes</option>
                    <option value="choice">Audi</option>
                </select>
            </div>u
        </div>

        <div class="next">
            <div class="next-button">
                <button>Next: Location</button>
            </div>
        </div>
    </section>
    <section class="question-2">
        <div class="">
            <h2 class="question-text">Almost there - set a location for your project</h2>
            <p>Pick your country of legal residence if you are raising funds as an individual. If you are raising funds
                for a business or nonprofit, select the country where the entity is registered</p>
        </div>
        <div class="country">
            <select class="category-choices" placeholder="Select your country">
                <option value="choice">Kenya</option>
                <option value="choice">Uganda</option>
                <option value="choice">Tanzania</option>
                <option value="choice">Rwanda</option>
            </select>
        </div>
        <div class="next">
            <div class="next-button">
                <button>Next: Currency</button>
            </div>
        </div>
    </section>
    <section class="question-3">
        <div class="">
            <h2 class="question-text">Last one—choose the currency you are using for the project.</h2>
            <p>Pick your country of legal residence if you are raising funds as an individual. If you are raising funds
                for a business or nonprofit, select the country where the entity is registered</p>
        </div>
        <div class="country">
            <select class="category-choices" placeholder="Select the currency">
                <option value="choice">KSH</option>
                <option value="choice">UG</option>
                <option value="choice">TSH</option>
                <option value="choice">RW</option>
            </select>
        </div>
        <div class="next">
            <div class="next-button">
                <button>Next:Campaign Details</button>
            </div>
        </div>
    </section>
</template>
<style scoped>

</style>