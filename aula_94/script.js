/* 1- Exemplo:
import getTodosCursos from './cursos3.js';
import { cursos as c } from './cursos3.js';

console.log(getTodosCursos());
console.log(c);
*/

/* 2- Exemplo: 
import { cursos as c} from "./cursos3.js";
import getTodosCursos from "./cursos3.js";
import { getCurso as gc} from "./cursos3.js";

console.log(c);
console.log(getTodosCursos());
console.log(gc(0));
*/

/* 3- Exemplo: */
import getTodosCursos from "./cursos3.js";
import * as modulo_cursos from "./cursos3.js"

console.log(modulo_cursos.cursos);
console.log(modulo_cursos.getCurso(0));
console.log(modulo_cursos.default());



