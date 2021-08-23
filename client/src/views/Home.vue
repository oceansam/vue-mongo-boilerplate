<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<sample-component msg="Vue + Mongo + Express + Node" />
	</div>
</template>

<script>
// @ is an alias to /src
import SampleComponent from "@/components/SampleComponent.vue";

export default {
	name: "Home",
	components: {
		SampleComponent,
	},
};
</script>
