<script setup lang="ts">
import useCheckbox, {
	Props,
} from '@/hooks/useCheckbox';

defineOptions({ inheritAttrs: false });

const props = withDefaults(
	defineProps<Props>(),
	{}
);

const emit = defineEmits<{
	(
		event: 'update:modelValue',
		val: boolean | string[]
	): void;
}>();

const { name, value, checked, onChange } =
	useCheckbox<Props>(props, emit);
</script>
<template>
	<label
		class="
			switch
			m-0 p-0 text-black-100 text-sm 
			tabular-nums leading-5 list-none 
			relative inline-block 
			h-5 align-middle bg-purple border-0 
			rounded-full cursor-pointer 
			transition-all select-none
		"
	>
		<input
			class="sr-only"
			type="checkbox"
			aria-label="hello"
			:name="name"
			:value="value"
			:checked="checked"
			@change="onChange"
		/>
		<div
			class="
				absolute top-[3px] w-[14px] 
				h-[14px] transition ease-in-out 
				duration-200 before:absolute 
				before:top-0 before:right-0 
				before:left-0 before:bottom-0 
				before:bg-white before:rounded-[9px] 
				before:transition before:ease-in-out 
				before:duration-200 before:content-[''] 
				before:shadow-[0_2px_4px_0px_rgba(0,35,11,0.2)]
			"
			:class="checked ? 'right-[3px]' : 'left-[3px]'"
		></div>
		<span
			class="
				block mr-[7px] ml-[25px] 
				text-white text-xs transition
				duration-200
			"
			:class="{
				'mr-[25px] ml-[7px]': checked,
			}"
		>
		</span>
	</label>
</template>
<style lang="css" scoped>
.switch {
	min-width: 40px;
}
</style>