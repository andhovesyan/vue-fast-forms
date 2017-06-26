<template>
<div>
  <h1 class="mb-5">Custom Inputs</h1>
  <doc-section title="Select">
    <code-block>
      <div slot="result">
        <vf-group>
          <vf-select
            v-model="select"
            :options="['One', 'Two', 'Three']"
            name="select"
          />
        </vf-group>
        Selected: {{select}}
      </div>
<pre slot="code">&lt;vf-group&gt;
  &lt;vf-select v-model="select" :options="['One', 'Two', 'Three']" /&gt;
&lt;/vf-group&gt;
Selected: {{'&#123;&#123;'}}select}}</pre>
    </code-block>
  </doc-section>
  <doc-section title="Checkboxes">
    <code-block>
      <div slot="result">
        <vf-group>
          <label>Boolean <code>v-model</code>:</label>
          <div class="clearfix"></div>
          <vf-checkbox name="boolean_checkbox"  v-model="isCheckedBool">
            Checked
          </vf-checkbox>
        </vf-group>
          Checked: {{isCheckedBool}}
        <hr>
        <vf-group>
          <label>String <code>v-model</code>:</label>
          <div class="clearfix"></div>
          <vf-checkbox
            name="string_checkbox"
            v-model="isCheckedString"
            value-checked="YES"
            value-unchecked="NO"
          >
            Checked
          </vf-checkbox>
        </vf-group>
        Checked: {{isCheckedString}}
        <hr>
        <vf-group>
          <label>Array <code>v-model</code>:</label>
          <div class="clearfix"></div>
          <vf-checkbox name="ar_checkbox" v-model="arChecked" :vf-value="1">
            One
          </vf-checkbox>
          <vf-checkbox name="ar_checkbox" v-model="arChecked" :vf-value="2">
            Two
          </vf-checkbox>
          <vf-checkbox name="ar_checkbox" v-model="arChecked" :vf-value="3">
            Three
          </vf-checkbox>
        </vf-group>
        <input type="checkbox" @change="arChecked = [1,2,3]" name="">
        Checked values: {{arChecked}}
      </div>
<pre slot="code">&lt;vf-group&gt;
  &lt;label&gt;Boolean &lt;code&gt;v-model&lt;/code&gt;:&lt;/label&gt;
  &lt;div class="clearfix"&gt;&lt;/div&gt;
  &lt;vf-checkbox v-model="isCheckedBool"&gt;Checked&lt;/vf-checkbox&gt;
&lt;/vf-group&gt;
  Checked: {{'&#123;&#123;'}}isCheckedBool}}
&lt;hr&gt;
&lt;vf-group&gt;
  &lt;label&gt;String &lt;code&gt;v-model&lt;/code&gt;:&lt;/label&gt;
  &lt;div class="clearfix"&gt;&lt;/div&gt;
  &lt;vf-checkbox v-model="isCheckedString" value-checked="YES" value-unchecked="NO"&gt;
    Checked
  &lt;/vf-checkbox&gt;
&lt;/vf-group&gt;
Checked: {{'&#123;&#123;'}}isCheckedString}}
&lt;hr&gt;
&lt;vf-group&gt;
  &lt;label&gt;Array &lt;code&gt;v-model&lt;/code&gt;:&lt;/label&gt;
  &lt;div class="clearfix"&gt;&lt;/div&gt;
  &lt;vf-checkbox v-model="arChecked" :vf-value="1"&gt;One&lt;/vf-checkbox&gt;
  &lt;vf-checkbox v-model="arChecked" :vf-value="2"&gt;Two&lt;/vf-checkbox&gt;
  &lt;vf-checkbox v-model="arChecked" :vf-value="3"&gt;Three&lt;/vf-checkbox&gt;
&lt;/vf-group&gt;
Checked values: {{'&#123;&#123;'}}arChecked}}</pre>
    </code-block>
  </doc-section>
  <doc-section title="Radios">
    <code-block>
      <div slot="result">
        <vf-group>
          <vf-radio
            name="radio_horizontal"
            v-model="radioHorizontal"
            :values="['One', 'Two', 'Three']"
          />
        </vf-group>
        Selected: {{radioHorizontal}}
        <hr>
        <vf-group>
          <vf-radio
            name="radio_vertical"
            v-model="radioVertical"
            :values="['One', 'Two', 'Three']"
            vertical
          />
        </vf-group>
        Selected: {{radioVertical}}
      </div>
<pre slot="code">&lt;vf-group&gt;
  &lt;vf-radio v-model="radioHorizontal" :values="['One', 'Two', 'Three']" /&gt;
&lt;/vf-group&gt;
Selected: {{'&#123;&#123;'}}radioHorizontal}}
&lt;hr&gt;
&lt;vf-group&gt;
  &lt;vf-radio v-model="radioVertical" :values="['One', 'Two', 'Three']" vertical /&gt;
&lt;/vf-group&gt;
Selected: {{'&#123;&#123;'}}radioVertical}}</pre>
    </code-block>
  </doc-section>
</div>
</template>

<script>
export default {

  name: 'SelectMenus',

  data() {
    return {
      select: 'one',
      isCheckedBool: false,
      isCheckedString: 'NO',
      arChecked: [],
      radioHorizontal: 'one',
      radioVertical: 'one',
    };
  },
};
</script>
