<script
	setup
	lang="ts"
	generic="T extends GenericObject"
>
import {
	GenericObject,
	useForm,
} from 'vee-validate';

import { UseFormProps } from '@/models/form';
import { toRefs } from 'vue';

/* @vue-ignore */
const props =
	defineProps<
		/* @vue-ignore */ UseFormProps<T>
	>();

const {
	initialErrors,
	validationSchema,
	initialValues,
	initialTouched,
	validateOnMount,
	keepValuesOnUnmount,
} = toRefs(props);

const {
	errors,
	errorBag,
	values,
	meta,
	isSubmitting,
	isValidating,
	submitCount,
	controlledValues,
	validate,
	validateField,
	handleReset,
	resetForm,
	handleSubmit,
	setErrors,
} = useForm({
	validationSchema: validationSchema?.value,
	initialValues: initialValues?.value,
	initialErrors: initialErrors?.value,
	initialTouched: initialTouched?.value,
	validateOnMount: validateOnMount?.value,
	keepValuesOnUnmount: keepValuesOnUnmount?.value,
});

const onSubmit = handleSubmit(
	props.onSubmit,
	props.onInvalidSubmit
);
</script>
<template>
	<form @submit="onSubmit">
		<slot
			:errors="errors"
			:errorBag="errorBag"
			:values="values"
			:meta="meta"
			:isSubmitting="isSubmitting"
			:isValidating="isValidating"
			:submitCount="submitCount"
			:controlledValues="controlledValues"
			:validate="validate"
			:validateField="validateField"
			:handleReset="handleReset"
			:resetForm="resetForm"
			:handleSubmit="handleSubmit"
			:setErrors="setErrors"
		/>
	</form>
</template>
