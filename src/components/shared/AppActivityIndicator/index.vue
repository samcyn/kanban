<script setup lang="ts">
import AppLoader from '@/components/shared/AppLoader/index.vue';
withDefaults(
	defineProps<{
		loading: boolean;
    message?: string
	}>(),
	{
		loading: false,
    message: 'Loading'
	}
);
</script>
<template>
	<div class="relative">
		<slot />
		<div
      v-if="loading"
			class="absolute inset-0 flex items-center justify-center z-1000 bg-[inherit]"
		>
			<div
				class="flex flex-col items-center gap-4 justify-center text-purple dark:text-white"
			>
				<app-loader />
				{{ message }}
			</div>
		</div>
	</div>
</template>
