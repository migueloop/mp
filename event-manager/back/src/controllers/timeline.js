/**
 * Created by coud on 7/14/16.
 */
export const parse = (timeline) => (
  timeline.steps.reduce((prev, step, index) => {
    const current = {
      status: timeline.active > index ? 'done' : (timeline.active < index ? 'todo' : 'inprogress'),
      name: step.name,
      label: step.label,
      requires: step.triggers.reduce((requires, trigger) => {
        switch (trigger.type){
          case 'internal':
            requires.push(trigger.conditions.action);
            return requires;
          case 'step':
            return requires.concat(trigger.steps.reduce((steps, tr) => {
              if (tr.type === 'internal') {
                steps.push(tr.conditions.action);
              }
              return steps;
            }, []));
          default:
            return requires;
        }
      }, []),
    }
    prev.steps.push(current);
    return prev;
  }, {
    id: timeline.label,
    name: timeline.name,
    icon: 'glyphicon-phone',
    steps: [],
  })
)
