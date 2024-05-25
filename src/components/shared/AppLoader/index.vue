<script setup lang="ts"></script>
<template>
	<span
		class="
			loader w-12 h-12 rounded-full 
			inline-block relative border-solid border-[3px]
			border-t-black-100 border-r-black-100 
		 dark:border-t-white dark:border-r-white 
			border-b-transparent border-l-transparent
			after:absolute before:absolute 
			after:inset-0 before:inset-0
			after:m-auto before:m-auto 
			after:border-solid after:border-[3px]
			before:border-solid before:border-[3px] 
			after:border-t-transparent after:border-r-transparent
			after:border-b-purple after:border-l-purple
			dark:after:border-b-light-purple dark:after:border-l-light-purple
			after:w-10 after:h-10 after:rounded-full before:rounded-full
			before:w-8 before:h-8 before:border-t-black-100
			 before:border-r-black-100
			dark:before:border-t-white dark:before:border-r-white
			before:border-b-transparent before:border-l-transparent
			animate-spin
		"
	>
	</span>
</template>
<style lang="css" scoped>
.loader::after,
.loader::before {
	content: '';
	animation: rotationBack 0.5s linear infinite;
	transform-origin: center center;
}
.loader::before {
	animation: rotation 1.5s linear infinite;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes rotationBack {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(-360deg);
	}
}
</style>
