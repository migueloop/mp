import { MODAL, PRODUCT } from 'helpers/constants';


export const getResourceType = sResourceType => {
  if (sResourceType) {
    if (sResourceType.includes(PRODUCT.RESOURCE.APPLICATION)) {
      return MODAL.CONTENT.APPLICATION;
    } else if (sResourceType.includes(PRODUCT.RESOURCE.FORM)) {
      return MODAL.CONTENT.FORM;
    } else if (sResourceType.includes(PRODUCT.RESOURCE.IMAGE)) {
      return MODAL.CONTENT.IMAGE;
    } else if (sResourceType.includes(PRODUCT.RESOURCE.VIDEO)) {
      return MODAL.CONTENT.VIDEO;
    }
  }
};

export const setModalOptions = (oModalOptions, sFormToShow, sModalType, bShow, fHide, oContentResource, nItemId) => {
  oModalOptions.resourceSpecification = Object.assign({}, oContentResource);
  oModalOptions.resourceSpecification.id_item = nItemId;
  oModalOptions.formToShow = sFormToShow;
  oModalOptions.modalType = sModalType;
  oModalOptions.show = bShow;
  oModalOptions.onHide = fHide;
};
