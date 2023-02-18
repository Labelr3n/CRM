import { deleteClientModal } from "./createDeleteModal.js";
import { editClientModal } from "./editClient.js";
import { createContactItemByType, formatDate, formatTime } from "./utils.js";

export const createClientItem = (data) => {
  const clientTr = document.createElement('tr'),
        clientIdTd = document.createElement('td'),
        clientId = document.createElement('span'),
        clientFullName = document.createElement('td'),
        clientName = document.createElement('span'),
        clientSurname = document.createElement('span'),
        clientLastname = document.createElement('span'),
        clientCreated = document.createElement('td'),
        createdDate = document.createElement('span'),
        createdTime = document.createElement('span'),
        clientChanged = document.createElement('td'),
        changedDate = document.createElement('span'),
        changedTime = document.createElement('span'),
        clientContacts = document.createElement('td'),
        clientActions = document.createElement('td'),
        clientEdit = document.createElement('button'),
        clientDelete = document.createElement('button'),
        deleteClient = deleteClientModal(),
        editClient = editClientModal(data);


        // class
        clientTr.classList.add('clients__item');
        clientTr.id = data.id;
        clientIdTd.classList.add('clients__id');
        clientFullName.classList.add('clients__full-name');
        clientName.classList.add('clients__name');
        clientSurname.classList.add('clients__surname');
        clientLastname.classList.add('clients__lastname');
        clientCreated.classList.add('clients__created');
        createdDate.classList.add('clients__date');
        createdTime.classList.add('clients__time');
        clientChanged.classList.add('clients__changed');
        changedDate.classList.add('clients__date');
        changedTime.classList.add('clients__time');
        clientContacts.classList.add('clients__contacts');
        clientActions.classList.add('clients__actions');
        clientDelete.classList.add('clients__delete', 'btn-reset');
        clientEdit.classList.add('clients__edit', 'btn-reset');

  for (const contact of data.contacts) {
    createContactItemByType(contact.type, contact.value, clientContacts )
  }

  const deleteById = () => {
    import ('./clientsApi.js').then(({ deleteClientItem }) => {
      deleteClient.deleteModalDelete.addEventListener('click', () => {
        deleteClientItem(data.id);
        document.getElementById(data.id).remove();
      })
    })
  }

  clientDelete.addEventListener('click', () => {
    deleteById();
    document.body.append(deleteClient.deleteModal)
  })

  clientEdit.addEventListener('click', () => {
    document.body.append(editClient.editModal)
  })

  clientId.textContent = data.id.substr(7, 6);
  clientName.textContent = data.name;
  clientSurname.textContent = data.surname;
  clientLastname.textContent = data.lastName;
  clientEdit.textContent = 'Изменить';
  clientDelete.textContent = 'Удалить';
  createdDate.textContent = formatDate(data.createdAt);
  createdTime.textContent = formatTime(data.createdAt);
  changedDate.textContent = formatDate(data.updatedAt);
  changedTime.textContent = formatTime(data.updatedAt);

  clientIdTd.append(clientId)
  clientFullName.append(clientSurname, clientName, clientLastname);
  clientCreated.append(createdDate, createdTime);
  clientChanged.append(changedDate, changedTime);
  clientActions.append(clientEdit, clientDelete);
  clientTr.append(
    clientIdTd,
    clientFullName,
    clientCreated,
    clientChanged,
    clientContacts,
    clientActions
    );

  return clientTr;
}
