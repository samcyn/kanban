<script setup lang="ts">
import ColumnsHeader from '@/components/columns/AppColumnsHeader.vue';
</script>
<template>
	<div
		role="listitem"
		class="columns w-70 basis-70 shrink-0 grow-0 relative"
	>
		<columns-header
			title=""
			color="transparent"
		/>
		<div
			class="columns__list flex flex-col gap-5 h-full"
		>
			<button
				class="button flex items-center justify-center h-full text-grey-100 hover:text-purple
				bg-gradient-to-r from-[#e9effa] to-[#e9effa]/50
				dark:bg-gradient-to-b dark:from-black-300/25 dark:to-black-300/10
				"
			>
				+ New Column
			</button>
		</div>
	</div>
</template>
<style lang="css" scoped>
/* .columns__list {
	padding-top: 39px;
} */
.button {
	border-radius: 6px;
	/* background: linear-gradient(
		180deg,
		#e9effa 0%,
		rgba(233, 239, 250, 0.5) 100%
	); */
	/* bg-gradient-to-r from-blue-200 to-blue-100/50 */
	border-radius: 6px;
	/* background: linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.13) 100%); */
	/* bg-gradient-to-b from-black-300/25 to-black-300/15 */
	font-size: 24px;
	font-weight: 700;
	line-height: 30px;
}
</style>
<!-- bg-gradient-to-r from-black-300/25 to-[rgba(43, 44, 55, 0.13)] -->
