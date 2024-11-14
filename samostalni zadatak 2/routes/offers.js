const express = require('express');
const db = require('../../samostalni zadatak 2/data/bazapodataka');

const router = express.Router();

router.post('/', (req, res) => {
    const { id, idnekretnine, imekupca, prezimekupca, ponudenacijena, brojtelefonakupca } = req.body;

    if (!id || !idnekretnine || !imekupca || !prezimekupca || ponudenacijena === undefined || !brojtelefonakupca) {
        return res.status(400).send("Nedostaju podaci o ponudi.");
    }
    if (ponudenacijena < 0) return res.status(400).send("Ponuđena cijena ne može biti negativna.");

    const property = db.properties.find(p => p.id === idnekretnine);
    if (!property) return res.status(404).send("Nekretnina nije pronađena.");

    db.offers.push({ id, idnekretnine, imekupca, prezimekupca, ponudenacijena, brojtelefonakupca });
    res.status(201).send("Ponuda dodana.");
});


router.get('/', (req, res) => {
    res.status(200).json(db.offers);
});

module.exports = router;
