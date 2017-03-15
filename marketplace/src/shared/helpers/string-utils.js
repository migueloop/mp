/**
 * Created by cjgm on 5/27/16.
 */
export const clean = str => {
  const irregular = ['À', 'Â', 'Ã', 'Ä', 'Å', 'È', 'Ê', 'Ë', 'Ì', 'Î', 'Ï', 'Ò',
    'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Û', 'Ü', 'Á', 'É', 'Í', 'Ó', 'Ú', 'á', 'é', 'í',
    'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù', 'â', 'ê', 'î', 'ô', 'û', 'ä', 'ë', 'ï',
    'ö', 'ü', 'ã', 'å', 'õ', 'ø', 'ç', 'ÿ', '/', '-', ' '];
  const regular = ['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'I', 'I', 'I', 'O',
    'O', 'O', 'O', 'O', 'U', 'U', 'U', 'A', 'E', 'I', 'O', 'U', 'a', 'e', 'i',
    'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i',
    'o', 'u', 'a', 'a', 'o', 'o', 'c', 'y', '', '', '-'];

  let i;
  let j;
  for (i = 0, j = irregular.length; i < j; i++) {
    str = str.replace(new RegExp(irregular[i], 'g'), regular[i]);
  }
  return str;
};
