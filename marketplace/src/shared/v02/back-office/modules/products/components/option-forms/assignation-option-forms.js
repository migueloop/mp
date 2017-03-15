import AssignmentOrderOptionsForm1Cmpt from './line-form-1';
import AssignmentOrderOptionsForm2Cmpt from './line-form-2';
import DefaultCmpt from './default';

export default class TenantProxy {
  static get(id, tenant) {
    const [AssignmentOrderOptionsForm1, AssignmentOrderOptionsForm2, Default] =
      [AssignmentOrderOptionsForm1Cmpt, AssignmentOrderOptionsForm2Cmpt, DefaultCmpt]
        .map(cmpt => cmpt.get(tenant));
    switch (id) {
      case 1:
        return AssignmentOrderOptionsForm1;
      case 2:
        return AssignmentOrderOptionsForm2;
      default:
        return Default;
    }
  }
}
