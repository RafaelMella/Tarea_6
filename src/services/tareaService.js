import tareasMock from '../mock/tareas';

const TareaService = () => {
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