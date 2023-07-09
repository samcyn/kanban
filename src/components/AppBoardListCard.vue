<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue';
import AppIconButton from '@/components/AppIconButton.vue';
import AppSwitch from '@/components/AppSwitch.vue';

defineProps<{
	theme: 'dark' | 'light';
}>();
</script>

<template>
	<div
		class="
			bg-white dark:bg-black-300
			md:bg-transparent md:dark:bg-transparent 
			rounded-lg md:rounded-none 
			shadow-[0_10px_20px_0_rgba(54,78,126,0.25)] 
			md:shadow-none md:flex-1 md:flex md:flex-col
		"
	>
		<div class="pt-4 px-6 pb-[19px]">
			<p
				class="text-grey-100 text-xs leading-[15px] font-bold tracking-[2.4px] uppercase m-0"
			>
				All boards
			</p>
		</div>

		<ul class="pr-6 md:flex-1">
			<li>
				<a
					href="#"
					class="flex gap-3 items-center pt-[14px] pb-[15px] px-6 rounded-tr-full rounded-br-full text-grey-100 capitalize font-bold text-[15px] leading-[19px]"
					:class="{
						'bg-purple text-white': true
					}"
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
					class="flex gap-3 items-center pt-[14px] pb-[15px] px-6 rounded-tr-full rounded-br-full text-grey-100 capitalize font-bold text-[15px] leading-[19px]"
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
					class="flex gap-3 items-center pt-[14px] pb-[15px] px-6 rounded-tr-full rounded-br-full text-grey-100 capitalize font-bold text-[15px] leading-[19px]"
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
					class="flex gap-3 items-center pt-[14px] pb-[15px] px-6 rounded-tr-full rounded-br-full text-purple capitalize font-bold text-[15px] leading-[19px]"
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

		<div class="py-4 pl-4 pr-[13px]">
			<div
				class="bg-grey-300 dark:bg-black-200 flex justify-center gap-6 rounded-md py-[14px] text-grey-100"
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
