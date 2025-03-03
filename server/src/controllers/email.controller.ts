import { Request, Response } from "express";
import { sendVerificationEmail,isValidOTP } from "../services/email.service";

export class EmailController {
    static async sendOTP (req:Request,res:Response): Promise<Response>{
        const{email}=req.body;
        if(!email){
            return res.status(400).json({success:false,message:"email is requied"})

        }
        try{
            const otp= await sendVerificationEmail(email);
            return res.json({success:true,message:"OTP sent successfully", otp})
        } catch (error) {
            return res.status(500).json({ success: false, message: "Failed to send OTP" });
          }
        }
      
        static async verifyOTP(req: Request, res: Response): Promise<Response> {
          const { email, otp } = req.body;
      
          if (!email || !otp) {
            return res.status(400).json({ success: false, message: "Email and OTP are required" });
          }
      
          try {
            if (!isValidOTP(otp)) {
              return res.status(400).json({ success: false, message: "Invalid OTP format" });
            }
      
            return res.json({ success: true, message: "OTP verified successfully" });
          } catch (error) {
            return res.status(500).json({ success: false, message: "Failed to verify OTP" });
          }
        }
      }
    
    

