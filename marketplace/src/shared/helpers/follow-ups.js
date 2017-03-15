
const canUserCompleteStep = (data, user) => {
  if (!data) { return false; }
  if (!data.product) { return false; }
  // TODO
  // HARDCODED!!!! THIS IS FOR A DEMO ON 11/11/2016
  // THIS FUNCTIONALITY NEEDS TO BE INCORPORTATED INTO THE APPLICATION AS A REAL FEATURE.
  // ASK RUPERT.
  if (data.id_timeline === 'sav_casse_2') {
    return true;
  }
  const productFollowUps = data.product.followUps;
  const timelineId = data.id_timeline;
  const currentStepId = data.id_current_step;
  const followUpTaskId = data.id_follow_up_task;
  const userRoleId = user.id_role;
  const userId = user.id;
  const productOwnerId = data.product.created_by;
  const isProductOwner = userId === productOwnerId;
  const matchingFollowUpTask = productFollowUps.find(followUp => {
    return followUp.id_timeline === timelineId &&
    followUp.id_step === currentStepId &&
    followUp.id_follow_up_task === followUpTaskId;
  });
  if (!matchingFollowUpTask) {
    return false;
  }
  if (matchingFollowUpTask.include_product_owner === 1 && isProductOwner) {
    return true;
  }
  if (matchingFollowUpTask.role_ids.indexOf(userRoleId) !== -1) {
    return true;
  }
  if (matchingFollowUpTask.user_ids.indexOf(userId) !== -1) {
    return true;
  }
  return false;
};

export const parseFollowUps = (followUps, assignmentOrders, user) => {
  return followUps.map(fu => {
    const newFollowUp = Object.assign({}, fu);
    const assignmentOrderMatch = assignmentOrders.find(order => order.id === newFollowUp.id_assignment_order);
    if (!assignmentOrderMatch) {
      return null;
    }
    newFollowUp.assignmentOrder = assignmentOrderMatch;
    newFollowUp.id_po_system_follow_up = newFollowUp.id_po_system;
    newFollowUp.assigned_at = newFollowUp.assignmentOrder.assigned_at;
    newFollowUp.id_po_system_assignment = newFollowUp.assignmentOrder.id_po_system_assignment;
    newFollowUp.id_po_system = newFollowUp.assignmentOrder.id_po_system;
    newFollowUp.product = newFollowUp.assignmentOrder.product;
    newFollowUp.userCanCompleteStep = canUserCompleteStep(newFollowUp, user);
    return newFollowUp;
  })
  .filter(row => row !== null);
};
