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
    </section>
</template>
<style scoped></style>