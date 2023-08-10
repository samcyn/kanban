import {
  ref,
  Ref,
  toRefs,
  UnwrapRef,
} from 'vue';

const useControlled = <T>(props: {
  modelValue: T
  default: T
} & any): [ Ref<T | undefined>, (newValue: UnwrapRef<T>) => void] => {
  const {
    modelValue,
    default: defaultProp
  } = toRefs(props);
  
  const isControlled = ref(modelValue?.value !== undefined);
  const localState = ref<T>(defaultProp?.value);
  const value: Ref<T|undefined> = isControlled.value ? modelValue : localState;

  const setValueIfUncontrolled = (newValue: UnwrapRef<T>) => {
    if (!isControlled.value) {
      localState.value = newValue;
    }
  }

  return [value, setValueIfUncontrolled];
}


export default useControlled;