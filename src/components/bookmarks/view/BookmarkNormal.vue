<template>
  <div>
	  	<p>Normal</p>
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

</style>
