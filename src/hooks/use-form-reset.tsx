import { useRef, useEffect } from 'react';
import { FormState } from '@/utils/to-form-state';

const useFormReset = (formState: FormState) => {
  const formRef = useRef<HTMLFormElement>(null);
  const prevTimestamp = useRef(formState.timestamp);

  useEffect(() => {
    if (!formRef.current) return;
    if (
      formState.status === 'SUCCESS' &&
      formState.timestamp !== prevTimestamp.current
    ) {
      formRef.current.reset();

      prevTimestamp.current = formState.timestamp;
    }
  }, [formState.status, formState.timestamp]);

  return formRef;
};

export { useFormReset };
