// import jwt from 'jsonwebtoken'
// import users from '../models/auth.js'
// export const login = async(req,res)=>{
//     const {email}=req.body;
//     console.log(email);
//     try{
//         const existingUser = await users.findOne({email});
//         if(!existingUser){
//         try {
//             const newUser = await users.create({email});

//             const token = jwt.sign({
//                 email:newUser.email, id: newUser._id
//             },process.env.JWT_SECRET,{
//                 expiresIn:"1h"
//             })
//             res.status(200).json({result:newUser, token})
    
//         } catch (error) {
//             res.status(500).json({mess:"Something went wrong...."});
//         }
//         }
//         else{
//             const token = jwt.sign({
//                 email:existingUser.email, id: existingUser._id
//             },process.env.JWT_SECRET,{
//                 expiresIn:"1h"
//             })
//             res.status(200).json({result:existingUser, token})
//         }
//     } catch(error) {
//         res.status(500).json({mess:"Something went wrong..."})
//     }
// }


import jwt from "jsonwebtoken";
import users from '../models/auth.js';

export const login = async (req, res) => {
    const { email } = req.body;
    console.log(email);

    try {
        const existingUser = await users.findOne({ email });

        if (!existingUser) {
            try {
                const newUser = await users.create({ email });

                const secretKey = process.env.JWT_SECRET || 'default_secret_key';
                const token = jwt.sign({
                    email: newUser.email, id: newUser._id
                }, secretKey, {
                    expiresIn: "1h"
                });

                res.status(200).json({ result: newUser, token });
            } catch (error) {
                console.error("Error creating new user:", error);
                res.status(500).json({ mess: "Something went wrong creating a new user." });
            }
        } else {
            const secretKey = process.env.JWT_SECRET || 'default_secret_key';
            const token = jwt.sign({
                email: existingUser.email, id: existingUser._id
            }, secretKey, {
                expiresIn: "1h"
            });

            res.status(200).json({ result: existingUser, token });
        }
    } catch (error) {
        console.error("Error finding user:", error);
        res.status(500).json({ mess: "Something went wrong finding the user." });
    }
};
