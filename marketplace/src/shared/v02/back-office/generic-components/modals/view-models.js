import { MODELS } from 'helpers/constants';

export class FormViewModel {

  constructor(sViewComponent) {
    this._viewModel = sViewComponent || 'default';
  }

  getModels() {
    switch (this._viewModel) {
      case 'FOProductContactUs':
        const oModel = {};
        oModel[MODELS.MESSAGE.PRODUCT.SEX] = '';
        oModel[MODELS.MESSAGE.PRODUCT.NAME] = '';
        oModel[MODELS.MESSAGE.PRODUCT.LASTNAME] = '';
        oModel[MODELS.MESSAGE.PRODUCT.EMAIL] = '';
        oModel[MODELS.MESSAGE.PRODUCT.PHONE] = '';
        oModel[MODELS.MESSAGE.PRODUCT.COMPANY] = '';
        oModel[MODELS.MESSAGE.PRODUCT.SUBJECT] = '';
        oModel[MODELS.MESSAGE.PRODUCT.MESSAGE] = '';
        return oModel;
      case 'default':
        return '';
      default:
        return '';
    }
  }

}
