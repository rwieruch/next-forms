'use client';

import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="border-2">
      {pending ? loading : label}
    </button>
  );
};

export { SubmitButton };
