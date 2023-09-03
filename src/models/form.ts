import {
	FlattenAndSetPathsType,
	FormOptions,
	GenericObject,
	GenericValidateFunction,
	InvalidSubmissionHandler,
	SubmissionHandler,
	TypedSchema,
} from 'vee-validate';

/* @vue-ignore */
type FormSchema<
	TValues extends Record<string, unknown>
> =
	| FlattenAndSetPathsType<
			TValues,
			| GenericValidateFunction
			| string
			| GenericObject
	  >
	| undefined;

export type UseFormProps<T extends GenericObject> = FormOptions<
	T,
	unknown,
	FormSchema<T> | TypedSchema<T, unknown>
> & {
	onSubmit: SubmissionHandler<T, T, void>;
	onInvalidSubmit?: InvalidSubmissionHandler<T>;
};