<script setup lang="ts">
import AppIcon from '@/components/shared/AppIcon.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppSwitch from '@/components/shared/AppSwitch.vue';

defineProps<{
	theme: 'dark' | 'light';
}>();
</script>

<template>
	<div
		class="boardList bg-white dark:bg-black-300 md:bg-transparent md:dark:bg-transparent rounded-lg md:rounded-none md:flex-1 md:flex md:flex-col"
	>
		<div class="boardList__header pt-4 px-6">
			<p
				class="boardList__title text-grey-100 font-bold uppercase m-0"
			>
				All boards
			</p>
		</div>

		<ul class="boards pr-6 md:flex-1">
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

		<div class="controls py-4">
			<div
				class="controls__box bg-grey-300 dark:bg-black-200 flex justify-center gap-6 rounded-md text-grey-100"
			>
				<app-icon-button
					icon="sun"
					width="19"
					height="19"
					:disabled="theme === 'light'"
					@click="$emit('switch-mode')"
				/>
				<app-switch
					name="theme"
					:model-value="theme === 'dark'"
					@update:model-value="
						$emit('switch-mode')
					"
				/>
				<app-icon-button
					icon="moon"
					width="16"
					height="16"
					:disabled="theme === 'dark'"
					@click="$emit('switch-mode')"
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
