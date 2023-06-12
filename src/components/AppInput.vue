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
	<div class="relative">
		<label 
			v-if="label" 
			:for="props.id"
			class="label mb-2 font-bold text-grey-100 block"
		>{{label}}</label>
		<InputElem
			v-bind="$attrs"
			class="
				input ring-1 transition outline-none 
				px-4 text-black-100/25 dark:text-white/25 tracking-normal 
				font-medium focus:text-black-100 dark:focus:text-white
				placeholder:text-black-100/25 
			  rounded w-full
			"
			:class="
				hasError
					? 'ring-red-100 pr-30'
					: 'ring-grey-100/25'
			"
			:value="modelValue"
			@input="onInput"
		/>
		<div class="errorMessage text-red-100 absolute bottom-0 right-0 px-4 font-medium w-30">
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
.input, .errorMessage {
	font-size: 13px;
  line-height: 23px;
	padding-top: 8.5px;
	padding-bottom: 8.5px;
}
.input::placeholder {
	font-size: 13px;
  line-height: 23px;
}
</style>
