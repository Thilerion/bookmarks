<template>
  <div>
	  	<p>Compact</p>
		<p>{{bookmark.title}}</p>

		<button class="options-button">
			<slot class="options-icon" name="options"/>
		</button>	
  </div>
</template>

<script>
export default {
	props: {
		bookmark: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
p {
	margin: 0.25em 0;
	padding: 0;
	padding-left: 0.5em;
	font-size: 0.9em;
}
</style>
