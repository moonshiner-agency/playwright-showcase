import * as Ariakit from '@ariakit/react';
import styles from './AddParticipantForm.module.scss';

const AddParticipantForm = () => {
  const form = Ariakit.useFormStore({ defaultValues: { name: '', email: '' } });

  form.useSubmit(async (state) => {
    const values = state.values;
    const { email, name } = values;

    localStorage.setItem('participants', JSON.stringify({ email, name }));
  });

  return (
    <Ariakit.Form
      store={form}
      aria-labelledby="add-new-participant"
      className="wrapper"
    >
      <h2 id="add-new-participant" className="heading">
        Add new participant
      </h2>
      <div className="field">
        <Ariakit.FormLabel name={form.names.name}>Name</Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.name}
          placeholder="John Doe"
          className="input"
          required
        />
        <Ariakit.FormError name={form.names.name} className="error" />
      </div>
      <div className="field">
        <Ariakit.FormLabel name={form.names.email}>Email</Ariakit.FormLabel>
        <Ariakit.FormInput
          type="text"
          name={form.names.email}
          placeholder="johndoe@example.com"
          className="input"
          required
        />
        <Ariakit.FormError name={form.names.email} className="error" />
      </div>
      <div className="buttons">
        <Ariakit.FormReset className="button secondary reset">
          Reset
        </Ariakit.FormReset>
        <Ariakit.FormSubmit className="button">Add</Ariakit.FormSubmit>
      </div>
    </Ariakit.Form>
  );
}

export default AddParticipantForm;
