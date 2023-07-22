<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		id: string
		title: string;
		subtitle?: string;
	}>(),
	{
		subtitle: '',
	}
);
const emit = defineEmits<{
  (event: 'onViewTask', id: string): void
}>();

const onClick = () => emit('onViewTask', props.id);
</script>
<template>
	<div
		class="py-6 px-4 bg-white dark:bg-black-300 rounded-lg cursor-cell"
		@click="onClick"
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
