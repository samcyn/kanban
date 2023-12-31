<script setup lang="ts">
import {
	Events,
	defineComponent,
	h,
	InputHTMLAttributes,
} from 'vue';

interface Props
	extends /* @vue-ignore */ InputHTMLAttributes {
	label?: string;
	errorMessage?: string;
	hasError?: boolean;
	type?: 'input' | 'textarea';
	rows?: number;
	modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
	hasError: false,
	errorMessage: "can't be empty",
	variant: 'default',
	type: 'input',
	required: false,
});

const emit = defineEmits<{
	(event: 'update:modelValue', val: string): void;
}>();
defineOptions({ inheritAttrs: false });

const InputElem = defineComponent({
	render() {
		return h(props.type);
	},
});

const onInput = (e: Events['onInput']) => {
	emit(
		'update:modelValue',
		(e.target as HTMLInputElement).value
	);
};
</script>
<template>
	<div class="relative flex flex-col">
		<label
			v-if="label"
			:for="props.id"
			class="label mb-2 font-bold text-grey-100 dark:text-white block"
			>{{ label }}</label
		>
		<InputElem
			v-bind="$attrs"
			class="input ring-1 ring-inset 
				transition outline-none px-4 text-black-100
				 dark:text-white tracking-normal font-medium
				  ring-grey-100/25 hover:ring-purple bg-transparent
					 placeholder:text-black-100 dark:placeholder:text-white 
					 placeholder:opacity-25 rounded w-full"
			:class="
				hasError
					? 'ring-red-100 pr-32'
					: 'ring-grey-100/25'
			"
			:value="modelValue"
			@input="onInput"
		/>
		<div
			v-if="hasError"
			class="errorMessage text-red-100 absolute bottom-0 right-0 px-4 font-medium w-32"
		>
			{{ errorMessage }}
		</div>
	</div>
</template>
<style scoped lang="css">
.label {
	font-size: 12px;
	line-height: normal;
	letter-spacing: normal;
}
.input,
.errorMessage {
	font-size: 13px;
	line-height: 23px;
	padding-top: 8.5px;
	padding-bottom: 8.5px;
}
.input::placeholder {
	font-size: 13px;
	line-height: 23px;
}
.input {
	resize: none;
}
</style>
