import trigger from '../firebase/file';

const submit = (
  e: React.FormEvent<HTMLFormElement>,
  formId: string,
  nameInputId: string,
  emailInputId: string
) => {
  return new Promise(resolve => {
    e.preventDefault();
    const form = document.getElementById(formId) as HTMLFormElement;
    if (form) {
      const data = Object.fromEntries(new FormData(form).entries());
      if (data.email && data.name) {
        return trigger(data.name.toString(), data.email.toString()).then(() => {
          const nameNode = document.getElementById(nameInputId) as HTMLInputElement;
          const emailNode = document.getElementById(emailInputId) as HTMLInputElement;
          if (nameNode) nameNode.value = '';
          if (emailNode) emailNode.value = '';
          resolve(0);
        });
      } else resolve(1);
    } else resolve(-1);
  });
};

export default submit;
