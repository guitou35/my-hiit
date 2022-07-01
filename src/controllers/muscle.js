const Muscle =  require("../models/Muscle");


/*
Code de retour	Description et utilisation
200 OK	Le serveur à traiter la requête avec succès.
201 CREATED	Une nouvelle ressource a été créée.
204 No Content	Peut être utilisée en réponse à une requête DELETE effectuée avec succès.
206 Partial Content	En réponse à une requête demandant une réponse trop lourde pour être envoyée en une seule fois. De la pagination va être nécessaire pour récupérer l’ensemble des informations
304 Not Modified	Le client peut utiliser les données en cache car elles n’ont pas été modifiées depuis la date spécifiée.
400 Bad Request	La requête est invalide et ne peut pas être traitée par le serveur.
401 Unauthorized	La requête nécessite que le client soit identifié.
403 Forbidden	Le serveur a compris la requête mais l’utilisateur n’est pas autorisé à accéder à cette API.
404 Not Found	La ressource demandée n’existe pas.
500 Internal Server Error
 */
const getMuscles = async (req, res, next) => {

    const muscles = await Muscle.findAll();
    if(!muscles){
        res.status(404).json("not found");
    }

    res.json(muscles);
};

const getMuscle = async (req, res, next) => {
    const id = req.params.id;

    const muscleToUpdate = await Muscle.findOne({where: {id : id}});
    if(!muscleToUpdate){
        res.status(404).json("not found");
    }

    res.json(muscleToUpdate);

};

const createMuscles = async (req, res, next) => {
    try{
        const muscles = await Muscle.create({
            name: req.body.name
        });

        res.status(201).json(muscles);
    }catch (error){
        res.status(500).json(error.message)
    }
};

const updateMuscles = async (req, res, next) => {
    try {
        const id = req.params.id;
        const muscleToUpdate = await Muscle.findOne({where: {id : id}});
        if(!muscleToUpdate){
            res.status(404).json("not found");
        }
        const updateMuscle = await Muscle.update(req.body, { where : {id : id }})
        if(updateMuscle == 0){
            res.status(500).json("error lors de la mise à jour");
        }
        res.status(200).json('mise à jour avec succès');
    }catch (error) {
        res.status(500).json('une erreur s\'est produite');
    }
};

const deleteMuscles = async (req, res, next) => {
    const id = req.params.id;
    try {
        const muscleToDelete = await Muscle.findOne({where: {id : id}});
        if(!muscleToDelete){
            res.status(404).json("not found");
        }
        const name = muscleToDelete.name
        await Muscle.destroy({where: {id : id}});
        res.status(204).json(`muscle ${name} delete`)
    }catch (error){
        console.log(error.message);
        res.status(500).json("une erreur c'est produite")
    }
};

module.exports = { getMuscles, createMuscles, updateMuscles, deleteMuscles, getMuscle };