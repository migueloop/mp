import { ACTION } from 'flux/actions';
import { fromJS, List } from 'immutable';

export default function EditorReducer(state = List(), action = {}) {
  switch (action.type) {
    case ACTION.USER.EDITOR.SET_ALL:
      return fromJS(action.editors);
    case ACTION.USER.EDITOR.ACTIVATE:
      return state.map(editor => {
        if (parseInt(editor.get('id_user'), 10) !== parseInt(action.editor.id_user, 10)) {
          return editor;
        }
        return editor.set('activated', true)
        .set('validated_by', action.editor.validated_by)
        .set('last_update', new Date().getTime());
      });
    case ACTION.USER.EDITOR.DELETE:
      let toDelete = -1;
      return state.map((editor, index) => {
        if (editor.get('id_user').toString() === action.editor.id_user) {
          toDelete = index;
        }
        return editor;
      }).delete(toDelete);
    default:
      return state;
  }
}
