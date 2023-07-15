<script setup lang="ts">
import { computed, toRefs, ButtonHTMLAttributes, useAttrs } from "vue";

interface Props
	extends /* @vue-ignore */ ButtonHTMLAttributes {
	variant?: "primary" | "secondary" | "danger";
	size?: "large" | "small";
}

const props = withDefaults(defineProps<Props>(), {
	variant: "primary",
	size: "small",
});

const { size, variant } = toRefs(props);
const attrs = useAttrs();
const computedStyles = computed(() => {
	if (size.value === "large") {
		return {
			fontSize: "15px",
			lineHeight: "19px",
			paddingTop: "15px",
			paddingBottom: "14px",
		};
	}
	return {
		fontSize: "13px",
		lineHeight: "23px",
		paddingTop: "8px",
		paddingBottom: "9px",
	};
});

const computedClass = computed(() => ({
	// "rounded-3xl": size.value === "large",
	// "rounded-20px": size.value === "small",
	"bg-purple hover:bg-light-purple text-white":
		variant.value === "primary",
	"bg-purple/10 hover:bg-light-purple/25 text-purple dark:bg-white dark:hover:bg-white":
		variant.value === "secondary",
	"bg-red-100 hover:bg-red-200 text-white":
		variant.value === "danger",
	"opacity-25": attrs.disabled
}));
</script>
<template>
	<button
		class="button text-center outline-none border-0 font-bold cursor-pointer px-4 rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full"
		:class="computedClass"
		:style="computedStyles"
	>
		<slot />
	</button>
</template>
<style scoped lang="css"></style>
