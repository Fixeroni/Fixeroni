//import nodemailer from 'nodemailer';

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const isValidOTP = (otp: string): boolean => {
  // Check if OTP is exactly 6 digits
  return /^\d{6}$/.test(otp);
};

// export const sendVerificationEmail = async (email: string, otp: string) => {
//   // Validate OTP format before sending
//   if (!isValidOTP(otp)) {
//     throw new Error('Invalid OTP format');
//   }
export const sendVerificationEmail = async (email: string, ): Promise<string> => {
  if (!email) {
    throw new Error("Email is required");
  }
 


  const otp = generateOTP(); // OTP is generated inside the function





  // Simulate email sending with console logs
  console.log('\n=== VERIFICATION EMAIL ===');
  console.log('To:', email);
  console.log('Subject: Verify your Fixeroni account');
  console.log('OTP:', otp);
  console.log('This code will expire in 5 minutes');
  console.log('=========================\n');

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return otp;
};

// Add helper function to check if a date is expired
export const isExpired = (expiryDate: Date): boolean => {
  return new Date() > expiryDate;
}; 