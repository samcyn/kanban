<template>
	<a
		v-if="isExternalLink"
		v-bind="$attrs"
		:href="(to as string)"
		target="_blank"
	>
		<slot />
	</a>
	<a
		v-else
		v-bind="$attrs"
		:href="href"
		@click="navigate"
		:class="isActive ? activeClass : inactiveClass"
	>
		<slot />
	</a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
	RouterLinkProps,
	useLink,
} from 'vue-router';

defineOptions({
	inheritAttrs: false,
});


type Props = RouterLinkProps & {
	inactiveClass?: string;
};

const props = defineProps<Props>();

const isExternalLink = computed(
	() =>
		typeof props.to === 'string' &&
		props.to.startsWith('http')
);

const {
	navigate,
	href,
	isActive,
} = useLink(props);
</script>
