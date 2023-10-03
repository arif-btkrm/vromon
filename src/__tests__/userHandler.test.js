const {signInHandler,signUpHandler} = require('../routeHandler/userHandler');
const {generateHash,hashMatched} = require ('./../utils/hashing')


const mockSignupRequest = () => {
    return {
        body :{
            Name : "Test Name",
            phone : "01211100145",
            email : "test@test.com",
            password : "12345",
        }
    }
}

const mockSignupResponse = () => {
    return {
        status : jest.fn().mockReturnThis(),
        json : jest.fn().mockReturnThis()
    }
}

describe("SignUp User", () => {
    it("Should SignUp user", async () => {
        
       // jest.spyOn(bcrypt, "hash").mockResolvedValueOnce("hashedPassword");
        
        const mockReq = mockSignupRequest();
        const mockRes = mockSignupResponse()

        await signUpHandler(mockReq,mockRes)
        
        expect (mockRes.status).toHaveBeenCalledWith(201)
        expect (generateHash).toHaveBeenCalledWith('12345',10)
    })
})