<script setup lang="ts"></script>
<template>
	<aside
		class="fixed top-0 left-0 bottom-0 h-full bg-white dark:bg-black-300 z-[1] w-75"
	>
		<button @click="$emit('switch-mode')">dark mode</button>
	</aside>
</template>
