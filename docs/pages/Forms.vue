<template>
<div>
  <h1 class="mb-5">VueJS Fast Forms</h1>

  <doc-section title="Forms">
    <code-block>
      <div slot="result">
      <div class="row">
        <div class="col-8">
          <vf-form ref="form" v-model="formData" @submit="onSubmit">
            <vf-group>
              <label>Username (text):</label>
              <vf-input
                name="username"
                type="text"
                placeholder="username"
                block
              />
            </vf-group>
            <vf-group>
              <label>Email address (email):</label>
              <vf-input
                name="email"
                type="email"
                placeholder="example@mail.com"
                block
              />
            </vf-group>
            <vf-group>
              <label>Password (password):</label>
              <vf-input
                name="password"
                type="password"
                placeholder="password"
                block
              />
            </vf-group>
            <vf-group>
              <label>Date of birth:</label>
              <vf-datepicker name="dob" placeholder="MM/DD/YYYY"/>
            </vf-group>
            <vf-group>
              <vf-radio name="gender" :values="['Male', 'Female']" />
            </vf-group>
            <vf-group label="Product count (number):">
              <vf-input
                name="count"
                id="countInput"
                type="number"
                placeholder="1"
                block
              />
            </vf-group>
            <vf-group label="Product type:">
              <vf-select
                name="product.name.test"
                placeholder="Select product"
                :options="['Product 1', 'Product 2', 'Product 3']"
                block
              />
            </vf-group>
            <vf-group>
              <vf-checkbox name="remember">
                Remember me
              </vf-checkbox>
            </vf-group>
            <vf-group>
              <vf-btn vf-color="secondary" vf-type="reset">
                Reset
              </vf-btn>
              <vf-btn vf-color="primary" vf-type="submit">
                Submit
              </vf-btn>
            </vf-group>
          </vf-form>
        </div>
        <div class="col-4 py-1 col-code">
          <pre class="m-0">{{formData}}</pre>
        </div>
      </div>
      </div>
      <span slot="code">&lt;vf-form ref="form" v-model="formData" @submit="onSubmit"&gt;
&lt;vf-group&gt;
  &lt;label&gt;Username (text):&lt;/label&gt;
  &lt;vf-input
    name="username"
    type="text"
    placeholder="username"
    block
  /&gt;
&lt;/vf-group&gt;
&lt;vf-group&gt;
  &lt;label&gt;Email address (email):&lt;/label&gt;
  &lt;vf-input
    name="email"
    type="email"
    placeholder="example@mail.com"
    block
  /&gt;
&lt;/vf-group&gt;
&lt;vf-group&gt;
  &lt;label&gt;Password (password):&lt;/label&gt;
  &lt;vf-input
    name="password"
    type="password"
    placeholder="password"
    block
  /&gt;
&lt;/vf-group&gt;
&lt;vf-group&gt;
  &lt;label&gt;Date of birth:&lt;/label&gt;
  &lt;vf-datepicker name="dob" placeholder="MM/DD/YYYY"/&gt;
&lt;/vf-group&gt;
&lt;vf-group&gt;
  &lt;vf-radio name="gender" :values="['Male', 'Female']" /&gt;
&lt;/vf-group&gt;
&lt;vf-group label="Product count (number):"&gt;
  &lt;vf-input
    name="count"
    id="countInput"
    type="number"
    placeholder="1"
    block
  /&gt;
&lt;/vf-group&gt;
&lt;vf-group label="Product type:"&gt;
  &lt;vf-select
    name="product"
    placeholder="Select product"
    :options="['Product 1', 'Product 2', 'Product 3']"
    block
  /&gt;
&lt;/vf-group&gt;
&lt;vf-group&gt;
  &lt;vf-checkbox name="remember"&gt;
    Remember me
  &lt;/vf-checkbox&gt;
&lt;/vf-group&gt;
&lt;vf-group&gt;
  &lt;vf-btn vf-color="secondary" vf-type="reset"&gt;
    Reset
  &lt;/vf-btn&gt;
  &lt;vf-btn vf-color="primary" vf-type="submit"&gt;
    Submit
  &lt;/vf-btn&gt;
&lt;/vf-group&gt;
&lt;/vf-form&gt;</span>
    </code-block>
  </doc-section>
</div>
</template>

<script>
export default {

  name: 'Inputs',

  data() {
    return {
      formData: {
        username: null,
        email: null,
        password: null,
        dob: null,
        gender: 'male',
        product: null,
        count: null,
        remember: true,
      },
    };
  },
  methods: {
    onSubmit(data) {
      this.formData = data;
    },
  },
};
</script>

<style lang="css">

input[type='number'] {
  -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.col-code {
  border-left: .2rem solid #F7F7F9;
  margin: -1.5rem -1.5rem -1.25rem 0;
}
</style>
