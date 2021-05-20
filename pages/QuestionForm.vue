<template>
	<div class="caret-wrapper">
      <div class="section-full-screen " >
      <div class="container"><Questionaire /></div>


      </div>

  </div>

</template>

<script>
import Questionaire from "@/components/questionaire";
export default {
  name: "QuestionForm",
  layout:'white-nav',
  components: {Questionaire}
}
</script>

<style scoped>
@import '../node_modules/@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
@import '../node_modules/@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';


</style>
