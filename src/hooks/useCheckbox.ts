import {
  Events,
  computed,
  InputHTMLAttributes
} from 'vue';

export interface Props
  extends /* @vue-ignore */ InputHTMLAttributes {
  value?: string;
  name: string;
  modelValue?: boolean | string[];
}

const useCheckbox = <T extends Props>(props: T, emit: (event: 'update:modelValue', val: boolean | string[]) => void) => {
  const checked = computed(() => {
    if (Array.isArray(props.modelValue) && props.value) {
      return props.modelValue.includes(props.value);
    }
    return props?.modelValue;
  });

  const onChange = (e: Events['onChange']) => {
    if (Array.isArray(props.modelValue) && props.value) {
      const indexOfValue = props.modelValue.indexOf(
        props.value
      );
      if (indexOfValue !== -1) {
        // remove value
        emit('update:modelValue', [
          ...props.modelValue.filter(
            (x) => x !== props.value
          ),
        ]);
      } else {
        // add value
        emit('update:modelValue', [
          ...props.modelValue,
          props.value,
        ]);
      }
    } else {
      emit(
        'update:modelValue',
        (e.target as HTMLInputElement).checked
      );
    }
  };

  return {
    ...props,
    checked,
    onChange,
  };
}

export default useCheckbox;