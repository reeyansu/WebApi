const endpoint =  require ('./endpoints/endpoint');
const DataClass = require('./endpoints/dataclass');

class Server
{
    constructor()
    {
        this.endpoint = new endpoint();
        this.dataclass= new DataClass();
    
    }
    main()
    {
        console.log("Hello World");
        console.log(this.endpoint.getMessage());
        this.dataclass.test();
    }
}
const server = new Server();
server.main();