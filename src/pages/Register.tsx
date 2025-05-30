
import Navigation from '@/components/Navigation';
import AuthForms from '@/components/AuthForms';

const Register = () => {
  return (
    <div>
      <Navigation />
      <AuthForms defaultTab="register" />
    </div>
  );
};

export default Register;
