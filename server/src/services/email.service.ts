import nodemailer from 'nodemailer';

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendVerificationEmail = async (email: string, otp: string) => {
  // Simulate email sending with console logs
  console.log('\n=== VERIFICATION EMAIL ===');
  console.log('To:', email);
  console.log('Subject: Verify your Fixeroni account');
  console.log('OTP:', otp);
  console.log('This code will expire in 5 minutes');
  console.log('=========================\n');

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return true;
}; 