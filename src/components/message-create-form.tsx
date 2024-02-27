'use client';

import { useFormState } from 'react-dom';
import { createMessage } from '@/app/actions';
import { EMPTY_FORM_STATE } from '@/utils/to-form-state';
import { useToastMessage } from '@/hooks/use-toast-message';
import { useFormReset } from '@/hooks/use-form-reset';
import { SubmitButton } from './submit-button';
import { FieldError } from './field-error';
import { useState } from 'react';

const MessageCreateForm = () => {
  const [date, setDate] = useState(new Date());

  const [formState, action] = useFormState(
    createMessage.bind(null, date),
    EMPTY_FORM_STATE
  );

  const noScriptFallback = useToastMessage(formState);
  const formRef = useFormReset(formState);

  return (
    <form
      action={action}
      ref={formRef}
      className="flex flex-col gap-y-2"
    >
      <label>Date</label>
      <DatePicker value={date} onChange={setDate} />
      <input type="hidden" name="date" value={date.toISOString()} />

      <label htmlFor="title">Title</label>
      <input id="title" name="title" className="border-2" />
      <FieldError formState={formState} name="title" />

      <label htmlFor="text">Text</label>
      <textarea id="text" name="text" className="border-2" />
      <FieldError formState={formState} name="text" />

      <SubmitButton label="Create" loading="Creating ..." />

      {noScriptFallback}
    </form>
  );
};

export { MessageCreateForm };
