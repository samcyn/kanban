<script setup lang="ts">
import AppLabel from '@/components/shared/AppLabel.vue';
withDefaults(
	defineProps<{
		title: string;
		color?: string;
	}>(),
	{
		color: 'orange',
		title: 'Column Title',
	}
);
</script>
<template>
	<div
		class="columns__header bg-grey-300 dark:bg-black-200 flex gap-3 font-bold sticky top-0 text-grey-100 z-10 pb-6 uppercase"
	>
		<app-label :color="color" />
		<span>{{ title }}</span>
	</div>
</template>
<style lang="css" scoped>
.columns__header {
	font-size: 12px;
	font-style: normal;
	line-height: 15px;
	letter-spacing: 2.4px;
}
</style>
