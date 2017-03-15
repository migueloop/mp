
export default ({ trigger, request, workflow }) => {
  return (
    `${workflow._id}` === `${request.workflow}` &&
    trigger.conditions.action === request.type
  );
}