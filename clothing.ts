fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
.then(resp => {
    if(!resp){
        throw new Error()
    }
   return resp.json()
})
.then(clothingArr => {
    console.log(clothingArr);

    clothingArr.forEach(indument => {
        class GetPrice {
            prezzoIvaInclusa:number
            saldo:number
            constructor(_prezzoIvaInclusa:number,_saldo:number) {
                this.prezzoIvaInclusa = _prezzoIvaInclusa
                this.saldo = _saldo
            }
            // capo:string = indument.capo
            // codProd:number = indument.codprod
            // collezione:string = indument.collezione
            // colore:string = indument.colore
            // disponibile:string = indument.disponibile
            // id:number = indument.id
            // modello:number = indument.modello
            // prezzoIvaEsclusa:number = indument.prezzoivaesclusa
            // prezzoIvaInclusa:number = indument.prezzoivainclusa
            // quantita:number = indument.quantita
        //     // saldo:number = indument.saldo
        //     constructor(_capo:string,_codProd:number,_collezione:string,_colore:string,_disponibile:string,_id:number,_modello:number,_prezzoIvaEsclusa:number,_prezzoIvaInclusa:number,_quantità:number,_saldo:number){
        //         this.capo = indument.capo
        //         this.codProd=_codProd
        //         this.collezione=_collezione
        //         this.colore=_colore
        //         this.disponibile=_disponibile
        //         this.id=_id
        //         this.modello=_modello
        //         this.prezzoIvaEsclusa=_prezzoIvaEsclusa
        //         this.prezzoIvaInclusa=_prezzoIvaInclusa
        //         this.quantita=_quantità
        //         this.saldo=_saldo
        //     }
            getPrezzoConSaldo(){
                return this.prezzoIvaInclusa - ((this.prezzoIvaInclusa*this.saldo)/100)
            }
        }
        let newPrice = new GetPrice(indument.prezzoivainclusa, indument.saldo)
        console.log(indument, newPrice.getPrezzoConSaldo());
    })
})
.catch(error => Error(error))