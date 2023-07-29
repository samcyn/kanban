<script lang="ts" setup>
import { ref } from 'vue';

import AppIcon from '@/components/shared/AppIcon.vue';
import AppBoardForm from "@/components/boards/AppBoardForm.vue";

const visible = ref(false);

const onAddBoard = () => visible.value = true;

const onHide = () => {
	visible.value = !visible.value;
}
</script>
<template>
	<ul class="boards pr-6 md:flex-1 bg-white dark:bg-black-300 md:bg-transparent">
		<li>
			<a
				href="#"
				class="boards__link flex gap-3 items-center px-6 rounded-tr-full rounded-br-full text-grey-100 capitalize font-bold"
				:class="
					true
						? 'bg-purple text-white'
						: 'hover:bg-purple/10 dark:hover:bg-white hover:text-purple'
				"
			>
				<app-icon
					icon="board"
					width="16"
					height="16"
				/>
				Platform Launch
			</a>
		</li>
		<li>
			<a
				href="#"
				class="boards__link flex gap-3 items-center px-6 rounded-tr-full rounded-br-full text-grey-100 capitalize font-bold hover:bg-purple/10 dark:hover:bg-white hover:text-purple"
			>
				<app-icon
					icon="board"
					width="16"
					height="16"
				/>
				Marketing Plan
			</a>
		</li>
		<li>
			<a
				href="#"
				class="boards__link flex gap-3 items-center px-6 rounded-tr-full rounded-br-full text-grey-100 capitalize font-bold hover:bg-purple/10 dark:hover:bg-white hover:text-purple"
			>
				<app-icon
					icon="board"
					width="16"
					height="16"
				/>
				Marketing Plan
			</a>
		</li>
		<li>
			<a
				href="#"
				class="boards__link flex gap-3 items-center px-6 rounded-tr-full rounded-br-full text-purple capitalize font-bold"
				@click="onAddBoard"
			>
				<app-icon
					icon="board"
					width="16"
					height="16"
				/>
				+ Create New Board
			</a>
		</li>
	</ul>
	<app-board-form :visible="visible" mode="add" @hide="onHide" />
</template>
<style lang="css" scoped>
.boards {
  background: inherit;
}
.boards__link {
	padding-top: 14px;
	padding-bottom: 15px;
	font-size: 15px;
	line-height: 19px;
}
</style>