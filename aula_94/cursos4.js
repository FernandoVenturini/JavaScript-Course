class Cursos {
    static cursos = ['JavaScript', 'HTML', 'CSS'];

    static getTodosCursos = () => {
        return this.cursos;
    }

    static getCurso = (i_curso) => {
        return this.cursos[i_curso];
    }

    static addCurso = (novoCurso) => {
        this.cursos.push(novoCurso);
    }

    static apagarCursos = () => {
        this.cursos = [];
    }
}

export default Cursos;