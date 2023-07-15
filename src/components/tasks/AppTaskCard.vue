<script setup lang="ts">
withDefaults(
	defineProps<{
		title: string;
		subtitle?: string;
	}>(),
	{
		subtitle: '',
	}
);
</script>
<template>
	<div
		class="py-6 px-4 bg-white dark:bg-black-300 rounded-lg"
	>
		<p
			class="title text-black-100 dark:text-white mb-2"
		>
			{{ title }}
		</p>
		<small class="text-grey-100">{{
			subtitle
		}}</small>
	</div>
</template>
<style lang="css" scoped>
.title {
	font-size: 15px;
	font-weight: 700;
	line-height: 19px;
}

.subtitle {
	font-size: 12px;
	font-weight: 700;
	line-height: 15px;
}
</style>
