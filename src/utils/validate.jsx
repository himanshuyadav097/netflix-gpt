export const checkvalidate = (email, password) => {
  const isEmailVerify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordVerify =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isEmailVerify) return "Email ID is not valid";
  if (!isPasswordVerify) return "Password is not valid";
  return null;
};
