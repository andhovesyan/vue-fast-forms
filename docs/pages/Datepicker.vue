<template>
<div>
  <h1 class="mb-5">Datepicker</h1>
  <doc-section title="Default datepicker">
    <code-block>
      <div slot="result">
        <vf-group>
          <label for="defaultDatepicker">Timepicker:</label>
          <vf-timepicker
            id="defaultDatepicker"
            v-model="defaultDate"
            placeholder="date"
            name="date"
          >
          </vf-timepicker>
        </vf-group>
        <vf-group>
          <label for="defaultDatepicker">Datepicker:</label>
          <vf-datepicker
            id="defaultDatepicker"
            v-model="defaultDate"
            placeholder="date"
            name="date"
          >
          </vf-datepicker>
        </vf-group>
      </div>
<div slot="code">&lt;template&gt;
  &lt;vf-group&gt;
    &lt;label for="defaultDatepicker"&gt;Datepicker:&lt;/label&gt;
    &lt;vf-datepicker
      id="defaultDatepicker"
      v-model="date"
      placeholder="date"
    /&gt;
  &lt;/vf-group&gt;
&lt;/template&gt;

&lt;script&gt;
export default {

  name: 'default_datepicker',

  data () {
    return {
      date: new Date(),
    };
  }
};
&lt;/script&gt;</div>
    </code-block>
  </doc-section>
  <doc-section title="Datepicker with icon">
    <p>You can use <code>vf-addon</code> component to get icon before or after datepicker input, like on basic inputs.</p>
    <p>Vue-fontawesome library was used to get calendar icon.</p>
    <code-block>
      <div slot="result">
        <vf-group>
          <label for="iconedDatepicker">Datepicker:</label>
          <vf-datepicker
            id="iconedDatepicker"
            v-model="iconedDate"
            placeholder="Select date"
            name="date"
          >
            <vf-addon slot="before">
              <vf-icon icon="calendar" fixed />
            </vf-addon>
          </vf-datepicker>
        </vf-group>
      </div>
<div slot="code">&lt;vf-group&gt;
  &lt;label for="iconedDatepicker"&gt;Datepicker:&lt;/label&gt;
  &lt;vf-datepicker
    id="iconedDatepicker"
    v-model="date"
    placeholder="Select date"
  &gt;
    &lt;vf-addon slot="before"&gt;
      &lt;vf-icon icon="calendar" fixed /&gt;
    &lt;/vf-addon&gt;
  &lt;/vf-datepicker&gt;
&lt;/vf-group&gt;</div>
    </code-block>
  </doc-section>
  <doc-section title="Inline datepicker">
    <code-block>
      <div slot="result">
        <p>Date selected: {{inlineDate.format('MM/DD/YYYY')}}</p>
        <vf-group>
          <vf-datepicker v-model="inlineDate" name="date" inline return-object />
        </vf-group>
      </div>
<div slot="code">&lt;template&gt;
  &lt;p&gt;Date selected: {{'&#123;&#123;'}}date.format('MM/DD/YYYY')}}&lt;/p&gt;
  &lt;vf-group&gt;
    &lt;vf-datepicker v-model="date" inline /&gt;
  &lt;/vf-group&gt;
&lt;/template&gt;

&lt;script&gt;
import moment from 'moment';

export default {

  name: 'inline_datepicker',

  data () {
    return {
      date: moment(),
    };
  }
};
&lt;/script&gt;</div>
    </code-block>
  </doc-section>
</div>

</template>

<script>
import moment from 'moment';

export default {

  name: 'Datepicker',

  data() {
    return {
      defaultDate: new Date(),
      inlineDate: moment(),
      iconedDate: null,
    };
  },
};
</script>
