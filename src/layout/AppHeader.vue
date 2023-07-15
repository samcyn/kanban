<script setup lang="ts">
import AppBrandLogo from '@/components/shared/AppBrandLogo.vue';
import AppIconButton from '@/components/shared/AppIconButton.vue';
import AppIcon from '@/components/shared/AppIcon.vue';
import AppButton from '@/components/shared/AppButton.vue';

defineProps<{ collapsedSidebar: boolean }>();
</script>
<template>
	<header class="bg-white dark:bg-black-300">
		<nav
			class="header__nav flex flex-nowrap items-center h-16 md:h-20 xl:h-24"
			aria-label="Main navigation"
		>
			<!-- logo/brand starts -->
			<div
				class="nav__brand md:shadow-[1px_0_0_0_rgba(228,235,250,1)] md:dark:shadow-[1px_0_0_0_rgba(62,63,78,1)]"
				:class="{
					'md:hidden': !collapsedSidebar,
				}"
			>
				<app-brand-logo
					class="logo"
					aria-label="audioPhile"
				/>
			</div>
			<!-- logo/brand ends -->
			<div
				class="header__titleWrap flex items-center"
			>
				<p
					class="header__title m-0 text-black-100 dark:text-white capitalize"
				>
					Launch Time
				</p>
				<app-icon-button
					class-name="md:hidden text-purple h-[23px] w-[23px] rounded-full inline-flex items-center justify-center"
					icon="cheveron-down"
					width="9"
					height="7"
					viewBox="0 0 9 7"
				/>
			</div>

			<div
				class="flex ml-auto text-grey-100 gap-4 md:gap-6 pt-4 xl:pt-5 pr-6 md:pr-30px xl:pr-8 pb-4 xl:pb-7"
			>
				<app-button
					class="inline-flex gap-1 items-center px-[18px] md:!text-[15px] md:!leading-[19px] md:pl-6 md:pr-[25px] !py-10px md:!pt-[15px] md:!pb-[14px]"
					:disabled="true"
				>
					<app-icon
						icon="plus"
						width="12"
						height="12"
					/>
					<span class="hidden md:inline"
						>Add New Task</span
					>
				</app-button>
				<app-icon-button
					icon="more"
					width="4"
					height="16"
					viewBox="0 0 4 16"
				/>
			</div>
		</nav>
	</header>
</template>
<style lang="css" scoped>
.nav__brand {
	padding: 20px 16px 19px 16px;
}

.header__titleWrap {
	padding: 20px 0 21px;
}

.header__title {
	font-size: 18px;
	font-weight: 700;
	line-height: 23px;
}

@media (min-width: 768px) {
	.nav__brand {
		padding: 28px 24px 26px 24px;
	}
	.header__titleWrap {
		padding: 28px 0 27px 24px;
	}
	.header__title {
		font-size: 20px;
		line-height: 25px;
	}
}

@media (min-width: 1280px) {
	.nav__brand {
		padding: 35px 33px 35px 24px;
	}
	.header__titleWrap {
		padding: 29px 0 37px 24px;
	}
	.header__title {
		font-size: 24px;
		line-height: 30px;
	}
}
</style>
