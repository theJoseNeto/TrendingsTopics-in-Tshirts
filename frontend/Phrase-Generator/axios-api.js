class API {

   constructor() {
      this.api = null;
      this.result = null;
   }

   getData() {
      this.api = axios.get('http://127.0.0.1:3333/toptrending');
      console.log(this.api);

      this.api.then((response, data, err) => {

         this.result = data;

         return this.result;

      })
         .catch(err => {
            console.log(`Erro ao receber os dados `);
         });
   }

}


