<template>
	<div class="home">
		<h1>Example Full Stack Usage</h1>
		<img alt="Vue logo" src="../assets/logo.png" />
		<sample-component class="sample-comp" />

		<button @click="reqBackend">Read Data</button>
		<div v-if="display">
			<p v-for="(data, index) in display.data" :key="index">
				Get value: {{ data }}
			</p>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.sample-comp {
	margin-bottom: 50px;
}
</style>
<script>
import { ref } from "vue";
import UseMongo from "@/utils/UseMongo";
// @ is an alias to /src
import SampleComponent from "@/components/SampleComponent.vue";
export default {
	name: "Home",
	components: {
		SampleComponent,
	},
	setup() {
		const display = ref();
		async function reqBackend() {
			display.value = await UseMongo.get();
		}
		return {
			display,
			reqBackend,
		};
	},
};
</script>
