import { sendClientData } from "./clientsApi.js";
import { createClientsForm } from "./createModalForm.js"
import { validateClientContact } from "./validateContact.js";
import { validateClientForm } from "./validateForm.js";

export const addClientModal = () => {
  const createForm = createClientsForm(),
        modal = document.createElement('div'),
        modalContent = document.createElement('div');

        // class
        modal.classList.add('modal', 'site-modal', 'modal-active');
        modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active');
        createForm.form.classList.add('add-client');
        modal.append(modalContent);
        modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);

  createForm.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateClientForm()) {
      return
    }
    const contactsTypes = document.querySelectorAll('.contact__name');
    const contactsValues = document.querySelectorAll('.contact__input');

    let contacts = [];
    let clientObj = {};

    for(let i = 0; i < contactsTypes.length; i++) {
      if (!validateClientContact(contactsTypes[i], contactsValues[i])) {
        return;
      }
      contacts.push({
        type: contactsTypes[i].innerHTML,
        value: contactsValues[i].value,
      })
    }

    clientObj.surname  = createForm.inputSurname.value;
    clientObj.name  = createForm.inputName.value;
    clientObj.lastName  = createForm.inputLastname.value;
    clientObj.contacts = contacts;

    await sendClientData(clientObj, 'POST');

  });

  document.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  })

  createForm.modalClose.addEventListener('click', () => {
    modal.remove();
  })

  return modal;
}
