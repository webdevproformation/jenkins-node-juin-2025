const request = require("supertest");

let server ;

describe("test intégration", ()=> {
    beforeEach(()=> {
        server = require("../app");
    });
    afterEach(()=> {
        server.close();
    });

    describe("GET etudiant" , () => {
        it("should work", async ()=> {
            const rep = await request(server).get("/etudiant/1");
            expect(rep.status).toBe(200);
            
            expect(rep.body).toHaveProperty("id")
            expect(rep.body).toHaveProperty("name")
            expect(rep.body).toHaveProperty("age")
        })
    })
})

