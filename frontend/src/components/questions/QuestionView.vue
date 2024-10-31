<script setup lang="ts">
import NavbarComponent from '../NavbarComponent.vue';
</script>
<template>
  <!-- https://codepen.io/thomasMM/pen/jOWxOpV?editors=1000 -->

  <NavbarComponent></NavbarComponent>

  <section class="questions">
    <div class="question-stepper"></div>

    <div class="question-1 container">
      <div class="question-body">
        <div class="question-header row">
          <div class="col-12">
            <h2 class="question-text">
              Select a primary category and subcategory for your new project.
            </h2>
          </div>
          <div class="col-12">
            <p class="question-guide">
              These will help backers find your project, and you can change them
              later if you need to.
            </p>
          </div>
        </div>
        <div class="categories row">
          <div class="main-category col-xs-12 col-md-6 col-lg-6">
            <div class="col-12">
              <p>Category</p>
            </div>

            <div class="col-12">
              <select class="category-choices" placeholder="Select">
                <option value="choice">FinTech</option>
                <option value="choice">Saab</option>
                <option value="choice">Mercedes</option>
                <option value="choice">Audi</option>
              </select>
            </div>
          </div>

          <div class="sub-category col-xs-12 col-md-6 col-lg-6">
            <div class="col-12">
              <p>Sub Category</p>
            </div>
            <div class="col-12">
              <select class="category-choices" placeholder="Select">
                <option value="choice">FinTech</option>
                <option value="choice">Saab</option>
                <option value="choice">Mercedes</option>
                <option value="choice">Audi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div class="next row">
        <div class="col-xs-12">
          <button class="btn-next">Next: Location</button>
        </div>
      </div>
    </div>
    <div class="question-2 container">
      <div class="question-body">
        <div class="question-header row">
          <div class="col-12">
            <h2 class="question-text">
              Almost there - set a location for your project
            </h2>
          </div>
          <div class="col-12">
            <p class="question-guide">
              Pick your country of legal residence if you are raising funds as
              an individual. If you are raising funds for a business or
              nonprofit, select the country where the entity is registered
            </p>
          </div>
        </div>
        <div class="categories row">
          <select class="category-choices" placeholder="Select your country">
            <option value="choice">Kenya</option>
            <option value="choice">Uganda</option>
            <option value="choice">Tanzania</option>
            <option value="choice">Rwanda</option>
          </select>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div class="next row">
        <div class="col-xs-12">
          <button class="btn-next">Next: Currency</button>
        </div>
      </div>
    </div>

    <div class="question-3 container">
      <div class="question-body">
        <div class="question-header row">
          <div class="col-12">
            <h2 class="question-text">
              Last one—choose the currency you are using for the project.
            </h2>
          </div>
          <div class="col-12">
            <p class="question-guide">
              Pick your country of legal residence if you are raising funds as
              an individual. If you are raising funds for a business or
              nonprofit, select the country where the entity is registered
            </p>
          </div>
        </div>
        <div class="categories row">
          <select
            class="category-choices col-xs-12"
            placeholder="Select the currency"
          >
            <option value="choice">KSH</option>
            <option value="choice">UG</option>
            <option value="choice">TSH</option>
            <option value="choice">RW</option>
          </select>
        </div>

        <div class="horizontal-line"></div>
        <div class="next row">
          <div class="col-xs-12">
            <button class="btn-next">Next:Campaign Details</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
}

.question-header > div {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.question-body {
  text-align: center;
}

.question-text {
  font-size: 24px;
  font-weight: 500;
  width: 80%;
}

.question-guide {
  font-weight: 400;
  font-size: 16px;
  width: 70%;
}

.categories {
  width: 80%;
  margin-bottom: 10%;

  select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
  }
}

.categories > div > div > p {
  font-weight: 600;
  font-size: 16px;
}

.horizontal-line {
  background-color: #ccd1d1;
  width: 100%;
  height: 1px;
  line-height: 80%;
}

.next {
  width: 100%;
  flex-wrap: wrap;
  margin: 30px 10px 20px 0px;
}

.next > div {
  display: flex;
  justify-content: flex-end;
  /* Aligns content to the right */
}

.btn-next {
  font-size: 20px;
  color: white;
  background-color: rgb(44, 62, 80);
  border: none;
  padding: 10px 30px;
}
</style>
