<script setup lang="ts">
import {  VNodeRef } from 'vue';

import AppIcon from '@/components/shared/AppIcon.vue';

interface Props {
  id?: string
	name?: string;
	placeholder?: string;
	label?: string|number;
  visible?: boolean
  setRef: VNodeRef | undefined
}

defineProps<Props>()
</script>
<template>
	<button
		class="dropdown__btn bg-transparent ring-1 text-black-100 dark:text-white text-tiny font-medium cursor-pointer pt-2 px-4 flex justify-between items-center whitespace-nowrap w-full"
		:class="
			visible
				? 'ring-purple'
				: 'ring-grey-100/25 group-hover:ring-purple'
		"
		:aria-controls="`${name}_id`"
    :id="id"
		data-component="dropdown"
		type="button"
    :ref="setRef"
	>
		<span v-if="label">{{
			label
		}}</span>
		<span
			class="font-medium text-tiny text-black-100 dark:text-white opacity-25"
			v-else
			>{{ placeholder }}</span
		>
		<!-- app icon -->
		<app-icon
			class-name="text-purple"
			width="10"
			height="7"
			:icon="
				visible ? 'cheveron-down' : 'cheveron-up'
			"
		/>
	</button>
</template>
<style scoped lang="css">
.dropdown__btn {
	padding-bottom: 9px;
}
</style>