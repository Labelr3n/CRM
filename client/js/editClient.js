import { sendClientData } from "./clientsApi.js";
import { createContactItem } from "./createContact.js";
import { deleteClientModal } from "./createDeleteModal.js";
import { createClientsForm } from "./createModalForm.js";
import { validateClientContact } from "./validateContact.js";
import { validateClientForm } from "./validateForm.js";

export const editClientModal = (data) => {
  const editModal = document.createElement('div'),
        editModalContent = document.createElement('div'),
        titleId = document.createElement('span'),
        createForm = createClientsForm();

        // class
        editModal.classList.add('modal-edit', 'site-modal', 'modal-active');
        editModalContent.classList.add('edit-modal__content', 'site-modal__content', 'modal-active');
        titleId.classList.add('modal__id')

  createForm.modalTitle.textContent = 'Изменить данные';
  createForm.cancelBtn.textContent = 'Удалить клиента';
  titleId.textContent = `ID: ${data.id.substr(7,6)}`;

  createForm.cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const deleteModal = deleteClientModal();
    document.body.append(deleteModal.deleteModal);

    import ('./clientsApi.js').then(({ deleteClientItem }) => {
      deleteModal.deleteModalDelete.addEventListener('click', () => {
        deleteClientItem(data.id);
        document.getElementById(data.id).remove();
      });
    });
  });

  createForm.modalClose.addEventListener('click', () => {
    editModal.remove();
  })

  window.document.addEventListener('click', (e) => {
    if (e.target === editModal) {
      editModal.remove();
    }
  })

  createForm.inputName.value = data.name;
  createForm.inputSurname.value = data.surname;
  createForm.inputLastname.value = data.lastName;

  for (const contact of data.contacts) {
    const createContact = createContactItem();

    createContact.contactName.textContent = contact.type;
    createContact.contactInput.value = contact.value;

    createForm.contactsBlock.prepend(createContact.contact);
    createForm.contactsBlock.style.backgroundColor = 'var(--color-athens-grayF4F3)';
  }

  if (data.contacts.length == 10) {
    createForm.addContactBtn.classList.remove('modal__btn-contact--active');
  }

  createForm.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateClientForm()) {
      return
    }

    const contactsTypes = document.querySelectorAll('.contact__name');
    const contactsValues = document.querySelectorAll('.contact__input');

    let contacts = [];
    let client = {};

    for (let i = 0; i < contactsTypes.length; i++) {
      if (!validateClientContact(contactsTypes[i], contactsValues[i])) {
        return;
      }
      contacts.push({
        type: contactsTypes[i].innerHTML,
        value: contactsValues[i].value
      });
    }

    client.name = createForm.inputName.value;
    client.surname = createForm.inputSurname.value;
    client.lastName = createForm.inputLastname.value;
    client.contacts = contacts;

    await sendClientData(client, 'PATCH', data.id);
  })

  createForm.modalTitle.append(titleId);
  editModalContent.append(
    createForm.modalClose,
    createForm.modalTitle,
    createForm.form
);

  editModal.append(editModalContent);

  return {
    editModal,
    editModalContent
  }
}
