<script setup lang="ts">
import AppBoardListCard from '@/components/AppBoardListCard.vue';
defineProps<{
	theme: 'dark' | 'light';
}>();
</script>
<template>
	<aside
		class="fixed top-0 left-0 bottom-0 h-full bg-white dark:bg-black-300 z-[1] w-75"
	>
		<app-board-list-card
			:theme="theme"
			@switch-mode="$emit('switch-mode')"
		/>
	</aside>
</template>
