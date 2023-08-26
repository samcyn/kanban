import {
  reactive,
  ref,
  Ref,
  toRefs,
  UnwrapRef,
} from 'vue';

const useControlled = <T>(props: {
  controlled: Ref<T>
  default?: T
}): [Ref<T> | Ref<UnwrapRef<T>>, (newValue: UnwrapRef<T>) => void] => {
  const reactiveProps = reactive(props);
  const {
    controlled,
    default: defaultProp
  } = toRefs(reactiveProps);

  const isControlled = ref(controlled?.value !== undefined);
  
  if(import.meta.env.MODE === 'development') {
    console.info(`component is ${isControlled.value ? 'controlled' : 'uncontrolled'} component`, controlled.value, import.meta.env.MODE)
  }
  const localState = ref<T>(defaultProp?.value);
  const value = isControlled.value ? controlled : localState;

  const setValueIfUncontrolled = (newValue: UnwrapRef<T>) => {
    if (!isControlled.value) {
      localState.value = newValue;
    }
  }

  return [value, setValueIfUncontrolled];
}


export default useControlled;