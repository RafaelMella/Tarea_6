import todosMock from '../mock/tarea';

const TareaService = () => {
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