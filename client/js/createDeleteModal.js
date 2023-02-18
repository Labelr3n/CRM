export const deleteClientModal = () => {
  const deleteModalContent = document.createElement('div'),
        modalClose = document.createElement('button'),
        deleteModalTitle = document.createElement('h2'),
        deleteModalText = document.createElement('p'),
        deleteModal = document.createElement('div'),
        deleteModalDelete = document.createElement('button'),
        deleteModalBack = document.createElement('button');

        // class
        deleteModal.classList.add('delete-modal', 'site-modal', 'modal-active');
        deleteModalContent.classList.add('delete-modal__content', 'site-modal__content', 'modal-active');
        deleteModalText.classList.add('delete-modal__text');
        deleteModalTitle.classList.add('delete-modal__title', 'modal__title');
        deleteModalDelete.classList.add('delete-modal__delete', 'btn-reset', 'site-btn');
        deleteModalBack.classList.add('delete-modal__back', 'btn-reset');
        modalClose.classList.add('modal__close', 'btn-reset');

  modalClose.addEventListener('click', () => deleteModal.remove());
  deleteModalBack.addEventListener('click', () => deleteModal.remove());

    deleteModalTitle.textContent = 'Удалить клиента';
    deleteModalText.textContent = 'Вы действительно хотите удалить данного клиента?';
    deleteModalDelete.textContent = 'Удалить';
    deleteModalBack.textContent = 'Отмена';

    window.addEventListener('click', (e) => {
      if (e.target === deleteModal) {
        deleteModal.remove();
      }
    })
    deleteModalContent.append(
      modalClose,
      deleteModalTitle,
      deleteModalText,
      deleteModalDelete,
      deleteModalBack
    )
    deleteModal.append(deleteModalContent);


    return {
      deleteModal,
      deleteModalContent,
      deleteModalDelete
    }

}
