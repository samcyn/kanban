<script setup lang="ts">
import { storeToRefs } from 'pinia';

import AppIcon from '@/components/shared/AppIcon.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppSwitch from '@/components/shared/AppSwitch.vue';
import AppBoardForm from '@/components/boards/AppBoardForm.vue';
import AppLink from '@/components/shared/AppLink.vue';

import { useThemeStore } from '@/store/useThemeStore';
import { useBoardStore } from '@/store/useBoardStore';

const ThemeStore = useThemeStore();
const BoardStore = useBoardStore();

const { theme } = storeToRefs(ThemeStore);
const { boards } = storeToRefs(BoardStore);

const { onToggle } = ThemeStore;
</script>

<template>
	<div
		class="boardList bg-white dark:bg-black-300 md:bg-transparent md:dark:bg-transparent rounded-lg md:rounded-none md:flex-1 md:flex md:flex-col"
	>
		<div class="boardList__header pt-4 px-6">
			<p
				class="boardList__title text-grey-100 font-bold uppercase m-0"
			>
				All boards ({{ boards.length }})
			</p>
		</div>

		<ul class="boards pr-6 md:flex-1">
			<li v-for="board in boards" :key="board.id">
				<app-link
					class="boards__link flex gap-3 items-center px-6 rounded-tr-full rounded-br-full text-grey-100 capitalize font-bold"
					active-class="bg-purple text-white"
					inactive-class="hover:bg-purple/10 dark:hover:bg-white hover:text-purple"
					:to="{
						name: 'board_dynamic',
						params: { boardId: board.id},
						query: {
							boardName: board.name 
						}
					}"
				>
					<app-icon
						icon="board"
						width="16"
						height="16"
					/>
					{{ board.name }}
				</app-link>
			</li>
			<li>
				<!-- add new board form logic, take note of the mode -->
				<app-board-form mode="add">
					<template #default="{ onView }">
						<button
							class="boards__link flex gap-3 items-center px-6 rounded-tr-full rounded-br-full text-purple capitalize font-bold w-full"
							@click="onView"
						>
							<app-icon
								icon="board"
								width="16"
								height="16"
							/>
							+ Create New Board
						</button>
					</template>
				</app-board-form>
			</li>
		</ul>

		<div class="controls py-4">
			<div
				class="controls__box bg-grey-300 dark:bg-black-200 flex justify-center gap-6 rounded-md text-grey-100"
			>
				<app-icon-button
					icon="sun"
					width="19"
					height="19"
					:disabled="theme === 'light'"
					@click="onToggle"
				/>
				<app-switch
					name="theme"
					:model-value="theme === 'dark'"
					@update:model-value="onToggle"
				/>
				<app-icon-button
					icon="moon"
					width="16"
					height="16"
					:disabled="theme === 'dark'"
					@click="onToggle"
				/>
			</div>
		</div>
	</div>
</template>
<style lang="css" scoped>
.boardList {
	box-shadow: 0 10px 20px 0
		rgba(54, 78, 126, 0.25);
}
.boardList__header {
	padding-bottom: 19px;
}
.boardList__title {
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 2.4px;
}

.boards__link {
	padding-top: 14px;
	padding-bottom: 15px;
	font-size: 15px;
	line-height: 19px;
}
.controls {
	padding-left: 16px;
	padding-right: 13px;
}

.controls__box {
	padding-top: 14px;
	padding-bottom: 14px;
}

@media (min-width: 768px) {
	.boardList {
		box-shadow: none;
	}
	.controls {
		padding-left: 13px;
		padding-right: 12px;
	}
}

@media (min-width: 1280px) {
	.controls {
		padding-left: 24px;
		padding-right: 24px;
	}
}
</style>
