<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue';
import AppButton from '@/components/AppButton.vue';
</script>
<template>
	<div class="contentArea pt-6 pb-6 md:pb-50px">
		<div class="px-4 md:px-6 overflow-auto h-full">
			<!-- if no columns, display this -->
			<div
				class="empty text-center flex flex-col justify-center items-center relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				v-if="true"
			>
				<p
					class="empty__title mb-6 text-grey-100"
				>
					This board is empty. Create a new column
					to get started.
				</p>
				<app-button
					class="flex items-center justify-center gap-1"
					size="large"
				>
					<app-icon
						icon="plus"
						width="12"
						height="12"
					/>
					Add New Column
				</app-button>
			</div>
			<!-- display columns -->
			<div v-else class="h-screen">
				<!-- board rows -->
				<div class="flex gap-6 h-[600px]">
					<div
						class="boards w-70 basis-70 shrink-0 grow-0 h-full bg-red-100 relative"
					>
						<div
							class="h-40 bg-white sticky top-0"
						>
							hello
						</div>
					</div>
					<div
						class="boards w-70 basis-70 shrink-0 grow-0 h-full bg-red-100"
					></div>
					<div
						class="boards w-70 basis-70 shrink-0 grow-0 h-full bg-red-100"
					></div>
					<div
						class="boards w-70 basis-70 shrink-0 grow-0 h-full bg-red-100"
					></div>
					<div
						class="boards w-70 basis-70 shrink-0 grow-0 h-full bg-red-100"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="css" scoped>
.contentArea {
	height: calc(100% - 64px);
}
.empty__title {
	font-size: 18px;
	font-weight: 700;
	line-height: 23px;
}

@media (min-width: 768px) {
	.contentArea {
		height: calc(100% - 80px);
	}
}

@media (min-width: 1280px) {
	.contentArea {
		height: calc(100% - 96px);
	}
}
</style>
