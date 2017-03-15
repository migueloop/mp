import AssignmentOrderOptionsDefaultCmpt from 'v02/back-office/modules/assignments/components/assignment-option-forms/default';
import AssignmentOrderOptionsForm1Cmpt from 'v02/back-office/modules/assignments/components/assignment-option-forms/line-form-1';
import AssignmentOrderOptionsForm2Cmpt from 'v02/back-office/modules/assignments/components/assignment-option-forms/line-form-2';

export default function (tenant, id) {
  const [AssignmentOrderOptionsDefault, AssignmentOrderOptionsForm1, AssignmentOrderOptionsForm2] =
  [AssignmentOrderOptionsDefaultCmpt, AssignmentOrderOptionsForm1Cmpt, AssignmentOrderOptionsForm2Cmpt]
  .map(cmpt => cmpt.get(tenant));
  switch (id) {
    case 1:
      return AssignmentOrderOptionsForm1;
    case 2:
      return AssignmentOrderOptionsForm2;
    default:
      return AssignmentOrderOptionsDefault;
  }
}
