class Proizvod {
    constructor(id, naziv, cijena, velicine, opis, dostupne_boje, karakteristike, slike) {
        this.id = id;
        this.naziv = naziv;
        this.cijena = cijena;
        this.velicine = velicine;
        this.opis = opis;
        this.dostupne_boje = dostupne_boje;
        this.karakteristike = karakteristike;
        this.slike = slike;
    }
}


const proizvodi = [
    new Proizvod(1, 'Bežične slušalice', 220, ['onesize'], 'Kvalitetan zvuk i dugotrajna baterija', ['bijela', 'crna'], 'noise-cancelling, brzo punjenje', ['https://euro-markt.hr/cdn/shop/products/asdsft321b536uv66666666c_1.jpg?v=1634040224']),
    new Proizvod(2, 'Putni kofer', 400, ['M', 'L', 'XL'], 'Izdržljiv i lagan kofer za sve tvoje avanture', ['crna', 'plava', 'siva'], 'teleskopska ručka, otporan na udarce', ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgr2N8C9pg1uA7j--tV565Z7xjoiYgdz35iA&s']),
    new Proizvod(3, 'Gaming miš', 80, ['onesize'], 'Precizan i brz miš za profesionalno igranje', ['crna', 'crvena'], 'RGB osvjetljenje, prilagodljive tipke', ['https://vacom.hr/wp-content/uploads/2022/01/Mis_Logitech_G502_Lightspeed_bezicni_0.jpg']),
    new Proizvod(4, 'Zimska jakna', 350, ['S', 'M', 'L', 'XL'], 'Topla i otporna na vjetar, idealna za hladne dane', ['crna', 'siva', 'tamno plava'], 'vodootporna, s podstavom od perja', ['https://sport.ghia.hr/wp-content/uploads/2024/03/duga-jakna-do-zgloba-2.jpg']),
    
];

export { proizvodi, Proizvod };