<template>
	<div>
		<input type="text" placeholder="String Data" v-model="dataInput" />
		<button @click="sendReq">Insert Mongo Doc!</button>
		<p v-if="err">{{ err }}</p>
	</div>
</template>

<script>
import { ref } from "vue";
import UseMongo from "@/utils/UseMongo";
export default {
	name: "SampleComponent",
	setup() {
		const dataInput = ref();
		const err = ref();
		function sendReq() {
			if (dataInput.value != "") {
				UseMongo.put(dataInput.value);
			} else {
				err.value = "Empty Data ERR!";
			}
		}
		return {
			sendReq,
			dataInput,
			err,
		};
	},
};
</script>
