<script setup lang="ts">
import { Events, defineComponent, h, InputHTMLAttributes} from 'vue';

interface Props extends InputHTMLAttributes {
	label?: string;
	errorMessage?: string;
	hasError?: boolean;
	variant?: "default" | "custom";
	type?: 'input'|'textarea';
	rows?: number;
	modelValue?: string
}

const props = withDefaults(
	defineProps<Props>(),
	{
		hasError: false,
		errorMessage: "can't be empty",
		variant: "default",
		type: "input",
		required: false,
	}
);

const emit = defineEmits<{
	(event: 'update:modelValue', val: string): void
}>()

const InputElem = defineComponent({
	render() {
		return h(props.type);
	},
});

const onInput = (e: Events['onInput']) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value);
}

</script>
<template>
	<div>
		<label></label>
		<InputElem
			:aria-label="props['aria-label'] || label"
			:required="required"
			class="ring ring-blue-300 hover:ring-blue-500"
			:name="name"
			:placeholder="placeholder"
			:rows="rows"
			:value="modelValue"
			@input="onInput"
		/>
	</div>
</template>
<style scoped lang="css">
</style>