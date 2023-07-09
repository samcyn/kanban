<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue';
import AppBoardListCard from '@/components/AppBoardListCard.vue';
defineProps<{
	theme: 'dark' | 'light';
}>();
</script>
<template>
	<aside
		class="
			fixed top-0 left-0 bottom-0 
			h-full bg-white dark:bg-black-300 z-[1] 
			w-75 flex overflow-hidden flex-col
		"
	>
		<div>
			<a href="#" class="flex px-6 pt-8 pb-[38px] text-black-100 dark:text-grey-300">
				<span class="sr-only">logo</span>
				<app-icon icon="logo" width="153" height="26" />
			</a>
		</div>

		<app-board-list-card
			:theme="theme"
			@switch-mode="$emit('switch-mode')"
		/>

		<div class="px-8 pt-[6px] pb-[47px]">
			<button class="outline-none m-0 flex gap-[15px] items-center font-bold text-[15px] leading-[19px] text-grey-100"
			@click="$emit('toggle-nav')"
			>
				<app-icon icon="eye-closed" />
				Hide sidebar
			</button>
		</div>
	</aside>
</template>
