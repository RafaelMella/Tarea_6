import tareaMock from '../mock/tareas';

const TareasService = () => {
    const getTarea = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(tareaMock);
            }, 1500);
        });
    };
    return {getTarea};
};

const todoService = TareaService();

export default tareaService;