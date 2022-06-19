import tareasMock from '../mock/tareas';

const TareasService = () => {
    const getTareas = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(tareasMock);
            }, 1500);
        });
    };
    return {getTareas};
};

const tareaService = TareaService();

export default tareaService;