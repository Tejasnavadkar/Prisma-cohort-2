import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient()  // you generate prismaClient now you can perform oprations on models

async function insertuser(email: string, password: string, firstname: string, lastname: string):Promise<void>{

  await Prisma.$connect()
 try {
    const cretedUser = await Prisma.user.create({
        data:{
            email,
            firstname,
            lastname,
            password
        },
        select:{  //select mense return only id and firstname after creted
            id:true,
            firstname:true

        }
    })

    console.log("createdUser",cretedUser)
    
 } catch (error) {
    console.log("Error while insert user",error)
 }
}

// insertuser("tejas@gmail.com","123456","tejas","navadkar")

////////////////////////////////////////updateuser

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(email: string, {
    firstName,
    lastName
}: UpdateParams) {

   const res = await Prisma.user.update({
        where:{
            email
        },
        data:{
            firstname:firstName,
            lastname:lastName
        }
    })
  
}

// updateUser("tejas@gmail.com",{firstName:"Aditya",lastName:"pawar"})

///////////////////////////////////getuser

async function getUser(email:string) {

   const user = await Prisma.user.findUnique({
        where:{
            email
        }
    })
    console.log("user",user)
    
}

getUser("tejas@gmail.com")
