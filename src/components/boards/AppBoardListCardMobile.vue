<script lang="ts" setup>
import { ref } from 'vue';

import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppModal from '@/components/shared/AppModal.vue';
import AppBoardListCard from '@/components/boards/AppBoardListCard.vue';

withDefaults(
	defineProps<{ theme: 'light' | 'dark' }>(),
	{
		theme: 'dark',
	}
);

const showBoard = ref(false);

const onShowBoard = () => {
	showBoard.value = true;
};

const onHideBoard = () => {
	showBoard.value = !showBoard.value;
};
</script>
<template>
	<app-icon-button
		class-name="md:hidden text-purple h-[23px] w-[23px] rounded-full inline-flex items-center justify-center"
		icon="cheveron-down"
		width="9"
		height="7"
		viewBox="0 0 9 7"
		@click="onShowBoard"
	/>
	<app-modal
		:show="showBoard"
		@hide="onHideBoard"
		modal-position-class="top-20 left-1/2 -translate-x-1/2 w-full px-4"
	>
		<app-board-list-card
			:theme="theme"
			@switch-mode="$emit('switch-mode')"
		/>
	</app-modal>
</template>
