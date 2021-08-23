<template>
	<div class="home">
		<div>
			<h1>Example Full Stack Usage</h1>
			<img
				alt="Pepe dance"
				src="https://c.tenor.com/a_W49uimPs8AAAAM/mer-an-ge-l-pepe.gif"
			/>
			<p>
				Be sure to check out the
				<a href="https://github.com/oceansam/vue-mongo-boilerplate">READ.ME</a>
				for any information you may have missed!
			</p>
		</div>

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
a {
	color: green;
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
