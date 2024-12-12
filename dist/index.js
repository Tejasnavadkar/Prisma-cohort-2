"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const Prisma = new client_1.PrismaClient(); // you generate prismaClient now you can perform oprations on models
function insertuser(email, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Prisma.$connect();
        try {
            const cretedUser = yield Prisma.user.create({
                data: {
                    email,
                    firstname,
                    lastname,
                    password
                },
                select: {
                    id: true,
                    firstname: true
                }
            });
            console.log("createdUser", cretedUser);
        }
        catch (error) {
            console.log("Error while insert user", error);
        }
    });
}
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstName, lastName }) {
        const res = yield Prisma.user.update({
            where: {
                email
            },
            data: {
                firstname: firstName,
                lastname: lastName
            }
        });
    });
}
updateUser("tejas@gmail.com", { firstName: "Aditya", lastName: "pawar" });
